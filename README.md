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

   This script enables an interactive text-based chat session with the Gemini model. Users can type messages and receive responses from the model. The conversation continues until the user types 'exit'.

   **Usage**:
   ```bash
   node gemini-chat.js
   ```

### 2. `gemini-multi-model.js`

   Demonstrates interactions with multiple AI models, showing how to utilize different models in parallel or sequentially within the same script.

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

   Allows streaming responses from the Gemini model. The model's output is streamed back to the user in real-time, providing a more dynamic interaction.

   **Usage**:
   ```bash
   node gemini-streaming.js
   ```

### 5. `gemini-text-to-text.js`

   Converts text input into generated text output using the Gemini model. It can be used for tasks such as content creation, summarization, or any other text-to-text generation.

   **Usage**:
   ```bash
   node gemini-text-to-text.js
   ```

## Usage

- Run any of the provided scripts using Node.js, ensuring that your API key is correctly set up in the `.env` file.
- Customize the scripts according to your specific use case by modifying the prompts, models, or additional configurations.

---

Feel free to explore the repository and dive into the various AI interactions and use cases provided. If you have any questions or suggestions, don't hesitate to reach out. Happy coding! 🚀
