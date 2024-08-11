/* 
 * This JavaScript file facilitates a text-based streaming chat with the Gemini-1.5-Flash 
 * model from Google Generative AI. It loads environment variables from a .env file, 
 * initializes the AI client with an API key, and sets up an interactive chat using the 
 * readline module. The chat allows users to send input to the AI model, which responds 
 * in real-time by streaming its replies. The script manages the chat session by ensuring 
 * the user waits for the AI's response before entering a new message. The conversation 
 * continues until the user types 'exit'.
*/

const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const readline = require('readline');

// Load environment variables from a .env file
dotenv.config();

// Create a GoogleGenerativeAI client instance using the API key from the environment
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Create a readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Flag to indicate if we're waiting for a response
let isAwaitingResponse = false;

// Starts and manages a text-based chat with the Gemini model
async function run() {

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const chat = model.startChat({
        history: [],
        generationConfig: {
            maxOutputTokens: 300,
        },
    });

    /**
     * Prompts the user for input, sends it to the chat model as a stream,
     * and prints the model's response chunks as they become available.
     */
    async function askAndRespond() {

        // Check if not currently waiting for a response
        if (!isAwaitingResponse) {

            rl.question('User: ', async (message) => {

                if (message.toLowerCase() === 'exit') {
                    // Exit the chat if the user enters 'exit'
                    rl.close();
                } else {

                    // Set flag to true as we start receiving the stream
                    isAwaitingResponse = true;

                    try {

                        const result = await chat.sendMessageStream(message);
                        let text = '';

                        console.log("Gemini: ");
                        for await (const chunk of result.stream) {

                            // Assuming chunk.text() returns a Promise
                            const chunkText = await chunk.text();
                            console.log(chunkText);
                            text += chunkText;
                        }

                        // Reset flag after stream is complete
                        isAwaitingResponse = false;
                        // Recursive call after full response received, ready for the next input
                        askAndRespond();

                    } catch (error) {

                        console.error("Error: " + error);
                        // Ensure flag is reset on error too
                        isAwaitingResponse = false;
                    }
                }
            });
        } else {
            console.log("Please wait for current response to complete.");
        }
    }

    // Start the conversation
    askAndRespond();
}

// Execute the run function
run();
