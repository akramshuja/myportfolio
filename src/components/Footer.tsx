
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Satya Kodamanchili
          </h3>
          <p className="text-gray-400 mb-4">
            Senior Software Engineer | Java | AI Solutions | DevOps
          </p>
          {/* Removed LinkedIn link from footer */}
          <div className="border-t border-gray-700 pt-4">
            <p className="text-gray-500 text-sm">
              © 2025 Satya Kodamanchili. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
