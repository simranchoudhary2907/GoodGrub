import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../api";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const [msg, setMsg] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/verify-otp/", {
        email,
        otp,
      });

      if (res.data.success) {
        alert("OTP verified successfully!");
        navigate("/login");
      }
    } catch (err) {
      setMsg("Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Verify OTP
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Enter the OTP sent to your email
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            required
          />

          {msg && (
            <p className="text-red-600 text-sm text-center">
              {msg}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}