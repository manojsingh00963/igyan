import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, User, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { name: 'Explore Skills', path: '/courses' },
  { name: 'Projects', path: '/projects' },
  { name: 'Mentors', path: '/mentors' },
  { name: 'AIGuide', path: '/aiguide' },
  { name: 'Companies', path: '/companies' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { isLoggedIn, setShowLogin } = useAuth();

  const navLinkClass =
    'px-3 py-2 rounded-md text-lg font-medium transition-colors text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';

  const getActiveClass = ({ isActive }) =>
    isActive ? `${navLinkClass} underline underline-offset-4 text-blue-600 dark:text-blue-400` : navLinkClass;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">I-GYAN</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 ml-10">
            {navItems.map(({ name, path }) => (
              <NavLink key={name} to={path} className={getActiveClass}>
                {name}
              </NavLink>
            ))}
          </div>

          {/* Theme Toggle + Auth + Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {!isLoggedIn ? (
              <button
                onClick={() => setShowLogin(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Login
              </button>
            ) : (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="text-sm font-medium hidden sm:block">Welcome!</span>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          {navItems.map(({ name, path }) => (
            <NavLink key={name} to={path} className={getActiveClass} onClick={() => setIsMenuOpen(false)}>
              {name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
