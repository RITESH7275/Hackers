# 🩺 Doctor Recommendation System

A FastAPI + Langchain + MERN Stack based application that recommends doctors based on user symptoms.  
This project combines a **FastAPI backend** for processing and recomendation with a ** frontend** for user interaction.

#**Team Members Name**   
Ayush Kumar Kushwaha (Team Leader)    
Ashutosh Pandey      
Arvind Yadav    
Ritesh   

## 📁 Project Structure

hackers/ ├── chatbot/                # FastAPI backend │   ├── main.py             # Entry point for FastAPI │   ├── routers/            # API route definitions │   │   └── chat.py │   └── backend/            # Core backend logic │       └── core/ │           └── llm.py ├──         # frontend │   ├── requirements.txt        # Python dependencies └── README.md               # Project documentation


## Installation

Clone the repository and set up your environment:

```bash
git clone https://github.com/your-username/doctor-recommendation.git
cd doctor-recommendation
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt


## Usage

uvicorn chatbot.main:app --reload

## Contributing

fastapi
uvicorn
requests
pydantic
python-multipart

## License

[MIT](https://choosealicense.com/licenses/mit/)
