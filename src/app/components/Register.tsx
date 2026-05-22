"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setloading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
 

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true);
    let response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    let data = await response.json();

    if (data.success) {
      alert(data.message);
      setloading(false);
    } else {
      alert(data.message);
      setloading(false);
    }

    setForm({
      name: "",
      email: "",
      password: "",
    });
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
      
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 text-center mt-2">
          Join us and get started
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute top-3.5 left-3 text-gray-400" />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <div
              className="absolute top-3.5 right-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Button */}
          <button
            disabled={loading}
            type="submit" 
            className={`w-full cursor-pointer bg-black text-white py-2.5 rounded-lg hover:bg-gray-900 transition font-medium ${loading ? "opacity-50" : ""}`}
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-black font-semibold cursor-pointer hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;