# 🛍️ Autonomous E-commerce AI Agent

An intelligent **Autonomous E-commerce AI Agent** that enhances online shopping experiences by providing personalized product recommendations, real-time interactions, and automated assistance.

---

## ✨ Features

- **Autonomous AI Assistant**: Handles customer queries, product recommendations, and shopping guidance automatically.  
- **Vector Search & MongoDB**: Efficient storage and retrieval of product data and embeddings for semantic search.  
- **Powered by Gemini LLM**: High-performance language model for natural and human-like conversations.  
- **React Frontend**: Clean, responsive, and interactive user interface for smooth shopping experience.  
- **Product Insights**: Real-time product suggestions and recommendations using AI.  
- **Secure Data Handling**: Customer and product data stored safely in MongoDB.  

---

## 🛠️ Technology Stack

| Layer             | Technology                          |
|------------------|------------------------------------|
| Frontend          | React.js, TailwindCSS               |
| Backend / API     | Node.js / Express                   |
| AI / NLP          | Gemini LLM                          |
| Database          | MongoDB + Vector Search             |
| 3D/Interactive UI | React Three Fiber (optional)        |

---

## 🚀 Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/autonomous-ecom-ai.git
cd autonomous-ecom-ai
```
### 2. Install dependencies

Frontend:
```bash
cd client
npm install
```

Backend:
```bash
cd server
npm install
```
### 3. Configure environment variables
```bash
MONGO_URI=<your-mongodb-connection-string>
GEMINI_API_KEY=<your-gemini-llm-key>
```
### 4. Run the project

Backend:
```bash
cd server
npm start
```

Frontend:
```bash
cd client
npm start
```
# 🔍 How it Works

~ User Interaction: Customers interact with the AI agent via chat or product search.

~ Vector Search: Queries are transformed into embeddings and searched efficiently in MongoDB.

~ LLM Processing: Gemini LLM processes the query, generates recommendations, and formulates responses.

~ Real-Time Response: The AI provides product suggestions, answers queries, and can guide the customer through the store.
