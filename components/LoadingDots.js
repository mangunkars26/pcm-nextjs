// components/LoadingDots.js

import React from "react";

const LoadingDots = () => {
    return (
        <div className="flex items-center justify-center space-x-2 h-full">
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse delay-200"></div>
            <div className="h-2 w-2 bg-blue-600 rounded-full animate-pulse delay-400"></div>
        </div>
    );
};

export default LoadingDots;
