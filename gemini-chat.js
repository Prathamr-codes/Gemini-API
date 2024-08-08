/* 
 * This JavaScript file facilitates an interactive chat session with the Gemini-1.5-Flash model 
 * from Google Generative AI. It loads environment variables from a .env file, 
 * initializes the AI client with an API key, and uses the readline module to 
 * capture user input. The script allows for a back-and-forth conversation, 
 * where the user's input is sent to the AI model, and the generated response 
 * is printed to the console. The chat continues until the user types 'exit'.
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

async function run() {
    // Get the Gemini-1.5-Flash model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Start a new chat with the model
    const chat = model.startChat({
        history: [],
        generationConfig: {
            maxOutputTokens: 300,
        },
    });


    //Recursively prompts the user for input, sends it to the chat model, and prints the response.
    async function askAndRespond() {
        rl.question('User: ', async (message) => {
            if (message.toLowerCase() === 'exit') {
                // Exit the chat if the user enters 'exit'
                rl.close();
            } else {
                // Send the user's message to the chat model
                const result = await chat.sendMessage(message);
                const response = await result.response;
                const text = await response.text();

                // Print the model's response
                console.log('Gemini:', text);

                // Recursively call askAndRespond to continue the conversation
                askAndRespond();
            }
        });
    }

    // Start the conversation
    askAndRespond();
}

// Execute the run function
run();
