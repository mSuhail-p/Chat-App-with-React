import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { loginValErr } from "../interfaces/home";

export default function ChatLogin() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<loginValErr>({});
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  //   validation
  const validate = () => {
    const newErrors: loginValErr = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must contain exactly 10 digits";
    }

    setErrors(newErrors);

    return newErrors;
  };
  // handle submit
  const handleSubmit = (e) => {
    console.log(Object.keys(errors).length, "it is length");
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length === 0) setSuccess(true);
  };

  if (success) {
    localStorage.setItem("user", JSON.stringify({ name, phone }));
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-gray-900 rounded-2xl p-8 border border-gray-800">
        {/* Header */}
        <div className="mb-8">
          <div className="text-2xl mb-1">💬</div>
          <h1 className="text-white text-2xl font-semibold">Join the chat</h1>
          <p className="text-gray-400 text-sm mt-1">
            Enter your details to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-gray-300 text-sm block mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Suhail Khan"
              className={`w-full bg-gray-800 text-white rounded-lg px-4 py-3 text-sm outline-none border transition
                ${errors.name ? "border-red-500" : "border-gray-700 focus:border-cyan-500"}`}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1.5">⚠ {errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-300 text-sm block mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. +91 98765 43210"
              className={`w-full bg-gray-800 text-white rounded-lg px-4 py-3 text-sm outline-none border transition
                ${errors.phone ? "border-red-500" : "border-gray-700 focus:border-cyan-500"}`}
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1.5">⚠ {errors.phone}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold py-3 rounded-lg text-sm transition mt-2"
          >
            Enter Chat →
          </button>
        </form>
      </div>
    </div>
  );
}
