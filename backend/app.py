from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)   #creating Flask application
CORS(app)  # allow React frontend to connect

@app.route("/") #creating API route/endpoints
def home():
    return jsonify({"message": "Good_Grub backend running 🚀"})

@app.route("/api/test")
def test():
    return jsonify({"status": "success"})

if __name__ == "__main__":
    app.run(debug=True)