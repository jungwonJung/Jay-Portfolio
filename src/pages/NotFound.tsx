import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-brand mb-4">
        404
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4 text-center">
        Page Not Found
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-brand text-white rounded-full font-medium hover:bg-brand/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
