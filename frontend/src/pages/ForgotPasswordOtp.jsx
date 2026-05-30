import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ForgotPasswordOtp() {

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleResetPassword = (e) => {

    e.preventDefault();

    // temporary OTP
    if (otp !== "1234") {

      setMsg("Invalid OTP");
      return;
    }

    // password match check
    if (newPassword !== confirmPassword) {

      setMsg("Passwords do not match");
      return;
    }

    // temporary success
    setMsg("Password reset successful");

    // redirect to login
    setTimeout(() => {

      navigate("/login");

    }, 1500);
  };

  return (

    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-4">
          Verify OTP
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Reset password for:
          <span className="font-medium"> {email}</span>
        </p>

        <form
          onSubmit={handleResetPassword}
          className="space-y-5"
        >

          {/* OTP */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter OTP
            </label>

            <input
              type="text"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="1234"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />

          </div>

          {/* New Password */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>

            <input
              type="password"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />

          </div>

          {/* Confirm Password */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />

          </div>

          {/* Message */}

          {msg && (
            <p className="text-center text-sm text-red-600">
              {msg}
            </p>
          )}

          {/* Button */}

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700"
          >
            Reset Password
          </button>

        </form>

      </div>

    </div>
  );
}