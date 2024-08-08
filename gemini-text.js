/* 
 * This JavaScript file uses the Google Generative AI API to generate a sonnet about a programmer's 
 * life with a rhyming scheme. It loads environment variables from a .env file, initializes the 
 * Google Generative AI client with an API key, and specifies the "Gemini Pro" model for content 
 * generation. The code prompts the model to create a sonnet and then logs the generated text to 
 * the console. 
*/

const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

// Load environment variables from a .env file
dotenv.config();

// Create a new instance of the GoogleGenerativeAI client using the API key from the environment
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run() {
  // Specify the Gemini Pro model
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Define the prompt for generating content
  const prompt = "Write a sonnet about a programmer's life, but also make it rhyme.";

  // Generate content using the specified model and prompt
  const result = await model.generateContent(prompt);

  // Extract the response text from the result
  const response = await result.response;
  const text = response.text();

  // Print the generated text to the console
  console.log(text);
}

// Execute the async function
run();
