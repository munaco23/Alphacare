import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  setIsDarkMode,
  activeSection,
}) => {
  const menuItems = ['Home', 'Overview', 'Features', 'Pricing', 'FAQs', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 md:gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="heartGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b9d" />
                    <stop offset="100%" stopColor="#c94b7d" />
                  </linearGradient>
                  <linearGradient id="heartGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffa8c5" />
                    <stop offset="100%" stopColor="#ff6b9d" />
                  </linearGradient>
                  <filter id="shadow">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
                  </filter>
                </defs>
                {/* Shadow layer */}
                <path d="M32 54L12 34C8 30 8 24 12 20C16 16 22 16 26 20L32 26L38 20C42 16 48 16 52 20C56 24 56 30 52 34L32 54Z" fill="#000" opacity="0.2" transform="translate(2, 2)"/>
                {/* Back layer */}
                <path d="M32 54L12 34C8 30 8 24 12 20C16 16 22 16 26 20L32 26L38 20C42 16 48 16 52 20C56 24 56 30 52 34L32 54Z" fill="url(#heartGrad1)" filter="url(#shadow)"/>
                {/* Front highlight */}
                <path d="M32 26L26 20C24 18 21 18 19 20C17 22 17 25 19 27L32 40L45 27C47 25 47 22 45 20C43 18 40 18 38 20L32 26Z" fill="url(#heartGrad2)"/>
                {/* Shine effect */}
                <ellipse cx="24" cy="22" rx="6" ry="8" fill="white" opacity="0.4"/>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              H4Health
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-cyan-600 dark:text-cyan-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
            >
              Request Demo
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
      >
        <div className="px-4 py-4 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="block py-2 text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="w-full px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium">
            Request Demo
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default WebNavigation;
