from fastapi import FastAPI, UploadFile, File, Form
from pydantic import BaseModel
from transformers import pipeline, BartTokenizer, BartForConditionalGeneration
import uvicorn

model_path = "D:/Model"  # Use your actual path
tokenizer = BartTokenizer.from_pretrained(model_path)
model = BartForConditionalGeneration.from_pretrained(model_path)
summarizer = pipeline("summarization", model=model, tokenizer=tokenizer)

app = FastAPI()

class TextRequest(BaseModel):
    text: str

@app.post("/summarize")
def summarize_text(request: TextRequest):
    summary = summarizer(request.text, max_length=130, min_length=30, do_sample=False)
    return {"summary": summary[0]['summary_text']}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

