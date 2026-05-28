from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)   #creating Flask application
CORS(app)  # allow React frontend to connect

@app.route("/") #creating API route/endpoints
def home():
    return jsonify({"message": "Good_Grub backend running 🚀"})

@app.route("/api/test")   #frontend connection test
def test():
    return jsonify({"status": "success"})

@app.route("/api/register", methods=["POST"])   #REAL user registration
def register():
    data = request.json

    print("Received from frontend:", data)

    return jsonify({
        "message": "User registered successfully",
        "user": data
    })


@app.route("/api/login", methods=["POST"])
def login():
    data = request.json

    print("Login data received:", data)

    return jsonify({
        "message": "Login successful",
        "user": data
    })

if __name__ == "__main__":
    app.run(debug=True)