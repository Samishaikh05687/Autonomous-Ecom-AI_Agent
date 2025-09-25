🛍️ Autonomous E-commerce AI Agent

An intelligent Autonomous E-commerce AI Agent that enhances online shopping experiences by providing personalized product recommendations, real-time interactions, and automated assistance. Built with modern technologies for scalable performance and advanced AI capabilities.

✨ Features

~Autonomous AI Assistant: Handles customer queries, product recommendations, and shopping guidance automatically.

~Vector Search & MongoDB: Efficient storage and retrieval of product data and embeddings for semantic search.

~Powered by Gemini LLM: High-performance language model for natural and human-like conversations.

~React Frontend: Clean, responsive, and interactive user interface for smooth shopping experience.

~Product Insights: Real-time product suggestions and recommendations using AI.

~Secure Data Handling: Customer and product data stored safely in MongoDB.

🛠️ Technology Stack
Layer	Technology
Frontend	React.js, TailwindCSS
Backend / API	Node.js / Express
AI / NLP	Gemini LLM
Database	MongoDB + Vector Search
3D/Interactive UI	React Three Fiber (optional)
🚀 Installation

Clone the repository

git clone https://github.com/yourusername/autonomous-ecom-ai.git
cd autonomous-ecom-ai


Install dependencies for frontend

cd client
npm install


Install dependencies for backend

cd server
npm install


Configure environment variables

Create .env files in the backend with:

MONGO_URI=<your-mongodb-connection-string>
GEMINI_API_KEY=<your-gemini-llm-key>


Run the project

Backend:

cd server
npm start


Frontend:

cd client
npm start


The app should now be running at http://localhost:3000.

🗂️ Project Structure
autonomous-ecom-ai/
├── client/           # React frontend
├── server/           # Node.js backend
├── components/       # Reusable frontend components
└── README.md

🔍 How it Works

1. User Interaction: Customers interact with the AI agent via chat or product search.

2. Vector Search: Queries are transformed into embeddings and searched efficiently in MongoDB.

3. LLM Processing: Gemini LLM processes the query, generates recommendations, and formulates responses.

4. Real-Time Response: The AI provides product suggestions, answers queries, and can guide the customer through the store.
