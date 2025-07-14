from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS
import os

os.environ['HF_HOME'] = 'D:/huggingface'


app = Flask(__name__)
CORS(app)  # Allow frontend to call backend

summarizer = pipeline("summarization")

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    summary = summarizer(text, max_length=100, min_length=30, do_sample=False)
    return jsonify({"summary": summary[0]["summary_text"]})

if __name__ == "__main__":
    app.run(debug=True)
