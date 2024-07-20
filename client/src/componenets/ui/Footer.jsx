import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 h-screen pt-12 pb-6">
      <div className="container mx-auto p-4">
        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
        <ul className="flex flex-wrap justify-center mb-4">
          <li className="mr-4 mb-2">
            <a
              href="mailto:info@example.com"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              <i className="fas fa-envelope mr-2" /> info@example.com
            </a>
          </li>
          <li className="mr-4 mb-2">
            <a
              href="https://www.facebook.com/example"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              <i className="fab fa-facebook-f mr-2" /> Facebook
            </a>
          </li>
          <li className="mr-4 mb-2">
            <a
              href="https://twitter.com/example"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              <i className="fab fa-twitter mr-2" /> Twitter
            </a>
          </li>
          <li className="mr-4 mb-2">
            <a
              href="https://www.instagram.com/example"
              className="text-gray-600 hover:text-gray-900 transition duration-300"
            >
              <i className="fab fa-instagram mr-2" /> Instagram
            </a>
          </li>
        </ul>
        <p className="text-sm text-gray-600 mb-2">
          &copy; 2023 Example Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;