// components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa'; // Example icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        {/* Top section with brand info, social links, and a call-to-action */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-gray-700">
          
          {/* Brand and Description */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-4xl font-extrabold text-blue-500">I-GYAN.AI</span>
            </div>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Pioneering the future of education with intelligent, personalized learning experiences powered by AI.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 lg:col-span-3 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wide">Platform</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-500 transition-colors">AI Learning Paths</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">For Educators</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Enterprise Solutions</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wide">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Careers<span className="ml-2 text-xs text-yellow-400 font-bold"> (Hiring)</span></a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wide">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Knowledge Base</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Community Forum</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Support Center</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">AI Ethics & Safety</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with legal info and social icons */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} I-GYAN.AI. All rights reserved.
            <br className="sm:hidden" /> A new era of knowledge, powered by AI.
          </p>

          <div className="flex gap-6 text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-500 transition-colors"><FaTwitter /></a>
            <a href="#" aria-label="GitHub" className="hover:text-blue-500 transition-colors"><FaGithub /></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-500 transition-colors"><FaFacebook /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;