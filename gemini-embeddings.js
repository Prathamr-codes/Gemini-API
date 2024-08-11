const { GoogleGenerativeAI } = require('@google/generative-ai');
const dotenv = require('dotenv');
const readline = require('readline');

// Load environment variables from a .env file
dotenv.config();

// Load API key from environment variable
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

/**
 * Generates an embedding for the given text using the 'text-embedding-004' model.
 */
async function run() {
    // Get the embedding model
    const model = genAI.getGenerativeModel({ model: 'text-embedding-004' });

    // Text to be embedded
    const text = 'The quick brown fox jumps over the lazy dog.';

    // Generate embedding for the text
    const result = await model.embedContent(text);

    // Extract the embedding values
    const embedding = result.embedding;
    console.log(embedding.values);
}

run();
