/* 
 * This JavaScript file uses the Google Generative AI API to generate text based on 
 * provided images. It loads environment variables from a .env file, initializes the 
 * Google Generative AI client with an API key, and defines a function to convert 
 * image files into a format compatible with the Gemini API. The script focuses on 
 * generating text using the "Gemini-1.5-Flash" model by supplying images as input. 
 * The generated text is then logged to the console.
*/

const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const fs = require('fs');

// Load environment variables
dotenv.config();

// Create a GoogleGenerativeAI client instance
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

/**
 * Converts an image file to a format suitable for the Gemini API.
 *
 * @param {string} path - The path to the image file.
 * @param {string} mimeType - The MIME type of the image file.
 * @returns {object} An object representing the image data in the required format.
 */
function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

//Generates text based on provided images using the Gemini-1.5-Flash model.
async function run() {

    // Get the Gemini-1.5-Flash model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Create an empty prompt (image-based generation is the primary focus)
    const prompt = "";

    // Convert images to generative parts
    const imageParts = [
        fileToGenerativePart("images/pythagoras.png", "image/png"),
        // fileToGenerativePart("images/img1.png", "image/png"),
        // fileToGenerativePart("images/img2.jpg", "image/jpg"),
    ];

    // Generate content using the model, prompt, and image parts
    const result = await model.generateContent([prompt, ...imageParts]);

    // Extract and log the generated text
    const response = await result.response;
    const text = response.text();
    console.log(text);
}

// Execute the run function
run();
