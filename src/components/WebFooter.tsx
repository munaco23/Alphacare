import React from 'react';

const WebFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="heartGradFooter1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ff6b9d" />
                      <stop offset="100%" stopColor="#c94b7d" />
                    </linearGradient>
                    <linearGradient id="heartGradFooter2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffa8c5" />
                      <stop offset="100%" stopColor="#ff6b9d" />
                    </linearGradient>
                    <filter id="shadowFooter">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                    </filter>
                  </defs>
                  <path d="M32 54L12 34C8 30 8 24 12 20C16 16 22 16 26 20L32 26L38 20C42 16 48 16 52 20C56 24 56 30 52 34L32 54Z" fill="#000" opacity="0.2" transform="translate(2, 2)"/>
                  <path d="M32 54L12 34C8 30 8 24 12 20C16 16 22 16 26 20L32 26L38 20C42 16 48 16 52 20C56 24 56 30 52 34L32 54Z" fill="url(#heartGradFooter1)" filter="url(#shadowFooter)"/>
                  <path d="M32 26L26 20C24 18 21 18 19 20C17 22 17 25 19 27L32 40L45 27C47 25 47 22 45 20C43 18 40 18 38 20L32 26Z" fill="url(#heartGradFooter2)"/>
                  <ellipse cx="24" cy="22" rx="6" ry="8" fill="white" opacity="0.4"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">H4Health</span>
            </div>
            <p className="text-sm text-gray-400">
              Transforming healthcare management with intelligent solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-cyan-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  HIPAA Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 HealthSpire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default WebFooter;
