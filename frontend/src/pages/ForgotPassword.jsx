import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    navigate("/verify-reset-otp", {
        state: { email }
    });

    // later you can navigate to verify otp page
    // navigate("/verify-reset-otp");
  };

  return (

    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-4">
          Forgot Password
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Enter your email to reset your password
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700"
          >
            Send Reset Link
          </button>

        </form>

        <div className="text-center mt-5">

          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:text-blue-700"
          >
            Back to Login
          </button>

        </div>

      </div>

    </div>
  );
}