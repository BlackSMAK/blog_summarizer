from transformers import BartTokenizer, BartForConditionalGeneration, pipeline

# Point to your downloaded model folder
model_path = "D:/Model"  # This should contain config.json, pytorch_model.bin, etc.

# Load tokenizer and model from local folder
tokenizer = BartTokenizer.from_pretrained(model_path)
model = BartForConditionalGeneration.from_pretrained(model_path)

# Create summarizer pipeline with explicit framework
summarizer = pipeline("summarization", model=model, tokenizer=tokenizer, framework="pt")

# Sample blog
blog_text = """
In today's fast-paced world, staying productive is more challenging than ever. With distractions constantly vying for our attention, it's easy to lose focus and fall behind on important tasks. Whether it's the lure of social media, endless notifications, or simply feeling overwhelmed, many people struggle to maintain consistent productivity throughout the day.

One of the most effective ways to combat this is by implementing a structured morning routine. Starting your day with intention can set the tone for productivity and mental clarity. This might include waking up early, journaling, exercising, or planning your priorities before checking your phone or email.

Another critical strategy is time-blocking. By dividing your day into dedicated chunks of time for specific tasks, you reduce decision fatigue and create momentum. Apps like Google Calendar or Notion can help automate and visualize this process.

Lastly, remember that productivity isn't about doing more—it's about doing what matters most. Taking breaks, getting enough sleep, and setting realistic goals are all vital parts of a sustainable work rhythm. By focusing on quality over quantity and prioritizing your well-being, you’ll find that you're not only getting more done but also feeling better while doing it.
"""

# Generate summary
summary = summarizer(blog_text, max_length=130, min_length=30, do_sample=False)
print("Summary:\n", summary[0]['summary_text'])
