import React from 'react';
import LogoMuh from "@/public/logo-muhammadiyah.png";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src={LogoMuh}
        alt="KalibawangMu Logo"
        className="h-10 w-10 rounded-full" // Atur tinggi dan lebar sesuai kebutuhan
      />
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        KalibawangMu
      </h1>
    </div>
  );
};

export default Logo;
