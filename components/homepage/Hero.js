// components/Hero.js

import React from "react";
import Image from "next/image";
import heroImage from "@/public/kwekscool-md.png"; // Ganti dengan path gambar yang sesuai

const Hero = () => {
    return (
      <section className="relative w-full h-[350px] bg-blue-900">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            quality={80}
            className="opacity-60" // Atur kejelasan gambar
          />
        </div>
  
        {/* Hero content */}
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center h-full text-center px-6 sm:px-12 lg:flex-row lg:text-left">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h1 className="text-4xl sm:text-4xl font-bold text-white mb-4">
              Selamat Datang di Website Pimpinan Cabang Muhammadiyah Dekso Kap. Kalibawang
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Jelajahi dunia kami dengan solusi terbaik untuk kebutuhan Anda.
            </p>
            <button className="px-6 py-3 rounded-lg bg-white text-blue-900 font-semibold hover:bg-green-700 hover:text-white transition-colors">
              Mulai Sekarang
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
