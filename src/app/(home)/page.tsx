"use client";

import React from "react";
import useSWR from "swr";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";

/* ---------------- TYPES ---------------- */
type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
};

/* ---------------- FETCHER ---------------- */
const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.message || "Failed to fetch users");
  }

  return data.data;
};

const Page = () => {
  const { data, error, isLoading } = useSWR<User[]>("/api/users", fetcher);


  /* ---------------- LOADING ---------------- */
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading users...
      </div>
    );
  }

  /* ---------------- ERROR ---------------- */
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load users
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold">Users Dashboard</h1>
          <p className="text-gray-300 text-sm mt-1">
            Manage all registered users in your system
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h2 className="text-xl font-bold">{data?.length || 0}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">Active</p>
          <h2 className="text-xl font-bold text-green-600">
            {data?.length || 0}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500 text-sm">System Status</p>
          <h2 className="text-xl font-bold text-blue-600">Online</h2>
        </div>

      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {data?.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 p-5"
          >

            {/* USER HEADER */}
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-4xl text-gray-400" />

              <div>
                <h2 className="font-semibold text-gray-800">
                  {user.name}
                </h2>
                <p className="text-xs text-gray-400">
                  ID: {user._id.slice(0, 6)}...
                </p>
              </div>
            </div>

            {/* INFO */}
            <div className="mt-4 space-y-3">

              {/* EMAIL */}
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <FaEnvelope className="text-gray-400" />
                <span>{user.email}</span>
              </div>

              {/* PASSWORD (masked UI only) */}
              <div className="flex items-center gap-2 text-gray-600 text-sm">
                <FaLock className="text-gray-400" />
                <span>••••••••</span>
              </div>

            </div>

            {/* FOOTER */}
            <div className="mt-5 flex justify-between items-center">

              <span className="text-xs px-3 py-1 bg-green-100 text-green-600 rounded-full">
                Active
              </span>

              <button className="text-xs text-gray-500 hover:text-black">
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Page;