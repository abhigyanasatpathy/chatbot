from flask import Flask, request, jsonify
from flask_cors import CORS
import difflib

app = Flask(__name__)
CORS(app)

# Predefined questions and answers
predefined_qa = {
    "hi": "How are you , any help required?",
    "hello": "Hi there! How can I assist you today?",
    "good morning": "Good morning! How can I help you?",
    "good afternoon": "Good afternoon! How can I help you?",
    "good evening": "Good evening! How can I assist you?",
    "good night": "Good night! Have a great rest!",
    "what is your name?": "I am a simple AI chatbot, created by Abhigyana.",
    "how are you?": "I am just a program, so I don't have feelings, but thanks for asking!",
    "what can you do?": "I can respond to predefined questions.",
    "who created you?": "I was created by Abhigyana.",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "tell me a fun fact": "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "what's the weather like?": "I'm not connected to real-time data, but you can check the latest weather updates online!",
    "what is ai?": "AI stands for Artificial Intelligence. It's the simulation of human intelligence in machines that are programmed to think and learn like humans.",
    "what's your favorite color?": "As an AI, I don't have preferences or feelings, but I can tell you that many people like blue!",
    "can you help me with my homework?": "I can try! What subject are you working on?",
    "do you like music?": "I don't have feelings or preferences, but I can help you find information about music!",
    "what's your favorite movie?": "I don't watch movies, but I've heard that many people like 'The Shawshank Redemption'!",
    "how old are you?": "I don't have an age. I'm a program that runs whenever you need me.",
    "can you tell me a story?": "Once upon a time in a land of code and data, there was a chatbot eager to help people with their questions...",
    "what's the meaning of life?": "That's a deep question! Some say it's 42, but it really depends on what you make of it.",
    "can you speak other languages?": "I can understand and respond in several languages, but my primary language is English.",
    "what time is it?": "I'm not connected to a clock, but you can check the current time on your device!",
    "do you have any hobbies?": "As an AI, I don't have hobbies, but I enjoy helping you with your queries!",
    "where are you from?": "I exist in the digital realm, created by Abhigyana.",
    "can you make me laugh?": "Sure! Why don't skeletons fight each other? They don't have the guts.",
    "what's your purpose?": "My purpose is to assist you with predefined questions and provide useful information.",
    "how do you work?": "I work by processing your questions and matching them to predefined answers programmed by my creator.",
    "what's your favorite book?": "I don't read books, but many people love 'To Kill a Mockingbird' by Harper Lee.",
    "can you solve math problems?": "Sure! Ask me a math problem and I'll do my best to help.",
    "what's your favorite food?": "I don't eat, but I know that pizza is a popular choice among humans!"
    
}

def get_best_match(question):
    question = question.lower()
    best_match = difflib.get_close_matches(question, predefined_qa.keys(), n=1, cutoff=0.6)
    if best_match:
        return best_match[0]
    else:
        return None

@app.route('/')
def home():
    return "Welcome to the AI Chatbot API. Use the /ask endpoint to interact with the bot."

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data.get('question')
    best_match = get_best_match(question)
    if best_match:
        answer = predefined_qa.get(best_match)
    else:
        answer = "I don't understand that question."
    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(debug=True)
