# AI Chat PDF
AI ChatPDF is a comprehensive chat application with PDF integration. This project provides a seamless chat experience where users can upload PDFs and create conversations by interacting with an AI assistant. The AI assistant uses the OpenAI API to generate context-aware responses.

# Features
- PDF Integration: Upload and view PDFs within the chat interface.
- AI-Powered Conversations: Interact with an AI assistant that can answer questions and provide information based on the uploaded PDF files.

# Technologies and Frameworks
- Frontend: 
  - Next.js: Handles server-side rendering and routing.
  - React: Used for building interactive UI components.
  - Typescript: Provides static typing to JavaScript and enhances code quality.
  - Tailwind CSS: CSS framework for responsive design.
- Backend:
  - DrizzleORM: A TypeScript ORM for database interactions.
  - Drizzle-kit: Database migration tool.
  - OpenAI API: Powers the AI assistant by providing language model capabilities for contextual responses.
  - Pinecone: Enables vector similarity search for efficient retrieval of information.
- Infrastructure: 
  - PostgreSQL: A powerful relational database used for storing chat history and metadata.
  - Neon Database: A serverless PostgreSQL-compatible database service.
  - Vercel: A cloud platform for deploying and optimizing the application.

# Requirements
This project requires Node.js version 13.4.19 or later.

# Getting Started
1. Clone the repository
Open your terminal and run:
```
git clone https://github.com/junbuggyTT/chatPDF
```

2. Navigate to the project directory
```
cd chatpdf
```

3. Install Required Dependencies
```
npm install
```

4. Set Up Environment Variables
Create a .env file in the root directory of your project and add the required environment variables.

5. Run the project
```
npm run dev
```
Open http://localhost:3000 in your browser to see the application.