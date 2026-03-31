import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white">

      {/* NAVBAR */}
      <nav className="px-6 py-4 border-b-2">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          
          {/* Logo */}
          <a href="/">
            <Image
              src="/deal-drop-logo.png"
              alt="Deal Drop Logo"
              width={140}
              height={40}
            />
          </a>

          {/* CTA */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
            Sign in
          </button>
        </div>
      </nav>

      {/* GRADIENT + HERO */}
      <section className="bg-gradient-to-b from-orange-100 to-white">

        <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-4 pt-20 pb-16">

          {/* Badge */}
          <div className="flex items-center gap-2 text-sm text-orange-700 bg-orange-100/60 border border-orange-200 rounded-full px-4 py-1">
            <span>Responded to 99% applicants</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold mt-6 text-gray-900 leading-tight">
            Never miss a <span className="text-orange-600">price drop</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 mt-4 max-w-2xl">
            Track prices from e-commerce sites and get instant alerts when prices drop.
          </p>

          <p className="text-gray-600 mt-2 max-w-md">
            Save money effortlessly.
          </p>

        </div>
      </section>
    </div>
  );
};

export default Hero;