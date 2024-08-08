# MY-AI-APP

**MY-AI-APP** is a Node.js application that leverages Google Generative AI's Gemini model to perform various tasks such as text generation, streaming responses, multi-model interactions, and more. The project includes multiple scripts that demonstrate different ways to interact with the Gemini model, allowing users to create, manage, and customize AI-driven tasks.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/my-ai-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd my-ai-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Configure environment variables**:

   - Create a `.env` file in the root directory.
   - Add your Google Generative AI API key:
   
     ```bash
     API_KEY=your-google-generative-ai-api-key
     ```

## Scripts

### 1. `gemini-chat.js`

   Facilitates an interactive chat with the Gemini-1.5-Flash model. It loads API configurations, handles user input, and displays AI responses in the console. The chat session continues until 'exit' is entered.

   **Usage**:
   ```bash
   node gemini-chat.js
   ```

### 2. `gemini-multi-model.js`

   Utilizes the Google Generative AI API to generate text from provided images. It initializes the API client with your key, converts images for the Gemini-1.5-Flash model, and logs the generated text to the console.

   **Usage**:
   ```bash
   node gemini-multi-model.js
   ```

### 3. `gemini-start.js`

   The main entry point for initializing and starting AI operations. It provides a basic framework to kickstart AI-driven processes.

   **Usage**:
   ```bash
   node gemini-start.js
   ```

### 4. `gemini-streaming.js`

   Enables real-time text-based chat with the Gemini-1.5-Flash model. It initializes the AI client, uses readline for user input, and streams AI responses live. The chat continues until 'exit' is typed.

   **Usage**:
   ```bash
   node gemini-streaming.js
   ```

### 5. `gemini-text-to-text.js`

   Uses the Google Generative AI API to create a rhyming sonnet about a programmer's life. It initializes the client with your API key, uses the "gemini-1.5-flash" model, and logs the generated sonnet to the console.

   **Usage**:
   ```bash
   node gemini-text-to-text.js
   ```

## Usage

- Run any of the provided scripts using Node.js, ensuring that your API key is correctly set up in the `.env` file.
- Customize the scripts according to your specific use case by modifying the prompts, models, or additional configurations.

---

Feel free to explore the repository and dive into the various AI interactions and use cases provided. If you have any questions or suggestions, don't hesitate to reach out. Happy coding! 🚀
