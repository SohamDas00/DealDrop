"use client";

import { SignInButton } from "@clerk/nextjs";
import { useState } from "react";

const Form = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tracking URL:", url);
  };

  return (
    <section className="flex justify-center mt-10">

      <form
        onSubmit={handleSubmit}
        className="w-[600px] flex items-center gap-3"
      >
        <div className="flex items-center w-full h-12 bg-white border border-orange-200 rounded-full px-3 shadow-sm focus-within:ring-2 focus-within:ring-orange-300 transition">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter product URL..."
            className="w-full h-full bg-transparent outline-none px-3 text-sm text-gray-700 placeholder-gray-400"
            required
          />
        </div>

        {/* Button */}
        <SignInButton mode="modal">
          <button
            type="submit"
            className="h-12 px-6 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition"
          >
            Track
          </button>
        </SignInButton>

      </form>

    </section>
  );
};

export default Form;