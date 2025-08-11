# 🛒 Amazon Orders Scraper & LLM-based Product Recommender

This project automatically scrapes your Amazon order history, analyzes your shopping patterns, and recommends relevant products from a local dataset using **Large Language Models (LLMs)** and **vector search**.

## 🚀 Features
- **Amazon Orders Scraper** — logs in and saves your past purchases to `orders.json`.
- **Shopping Preference Analysis** — summarizes your buying habits (brands, categories, price range, features) using an LLM.
- **Vector Search with FAISS** — embeds available product data for semantic search.
- **LLM-based Recommendations** — retrieves and ranks up to 5 products that match your preferences.
- **Interactive Chat** — refine recommendations in conversation.

## 📂 Project Structure
```
scraper_and_best_price_finder.py  # Amazon scraper logic
main.py                           # Main recommender workflow (this script)
orders.json                       # User’s scraped order history (generated)
electronics_gaming_products.json  # Product dataset for recommendations
.env                              # API keys & environment settings
```

## 🛠 Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/yourusername/amazon-llm-recommender.git
cd amazon-llm-recommender
pip install -r requirements.txt
```

**Required Python packages**:
- langchain
- langchain_openai
- sentence-transformers
- faiss-cpu
- python-dotenv
- serpapi
- pandas
- numpy

## 🔑 Environment Variables
Create a `.env` file in the project root:
```env
OPENAI_API_BASE=your_openai_or_llama_api_base
OPENAI_API_KEY=your_api_key
SERPAPI_API_KEY=your_serpapi_key
```

## 📊 Workflow
1. **Scrape Orders**
   ```python
   from scraper_and_best_price_finder import login_and_scrape_amazon_orders
   login_and_scrape_amazon_orders()
   ```
   This saves your orders to `orders.json`.

2. **Analyze Preferences**
   - Uses `describe_preferences()` to summarize categories, brands, and features you prefer.

3. **Load Product Dataset**
   - Reads `electronics_gaming_products.json` and converts it into `langchain` `Document` objects.

4. **Semantic Search + LLM**
   - Embeds product data with `HuggingFaceEmbeddings`.
   - Retrieves matches using `FAISS` vector store.
   - Generates human-friendly recommendations with a chat model.

## 💬 Example Usage
```bash
python main.py
```
Example output:
```
Bot:-
1. Logitech G Pro Wireless Mouse Available:-In Stock Rating:-4.5 Brand:-Logitech Price:-₹7,999
   High-end wireless gaming mouse with ergonomic design.

2. Razer BlackWidow V3 Available:-In Stock Rating:-4.4 Brand:-Razer Price:-₹9,499
   Mechanical gaming keyboard matching your preferred specs.
```

## ⚠️ Notes
- The scraper is built for **personal use** — respect Amazon’s terms of service.
- You’ll need your own product dataset (`electronics_gaming_products.json`) for recommendations.
- Works with any OpenAI-compatible endpoint (e.g., Llama 3 API).

## 📜 License
MIT License. Free to use and modify.
