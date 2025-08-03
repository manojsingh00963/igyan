// components/Footer.jsx
import React from 'react';
  
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-blue-600 ">I-GYAN</span>
              </div>
              <p className="text-background/80">Empowering careers through AI-powered education</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">For Students</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">For Teachers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">For Companies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Learning Paths</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 I-GYAN. All rights reserved. Building the future of education.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;