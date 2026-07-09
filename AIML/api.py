from fastapi import FastAPI

app = FastAPI(title="MarketMind AI")

@app.get("/")
def read_root():
    return {"message": "MarketMind AI service is running"}
