/* Initialization of gemini-api */

import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables from a .env file
dotenv.config();

// Create a new instance of the GoogleGenerativeAI client using the API key from the environment
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
