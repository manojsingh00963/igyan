import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, User, LogOut, BookOpen } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { name: 'Home', path:'/'},
  { name: 'Explore Skills', path: '/courses' },
  { name: 'Projects', path: '/projects' },
  { name: 'Mentors', path: '/mentors' },
  { name: 'AIGuide', path: '/aiguide' },
  { name: 'Companies', path: '/companies' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { isLoggedIn, setShowLogin, user, logout } = useAuth();

  const navLinkClass = "block px-3 py-2 text-lg font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400";
  const activeClass = "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400";
  const inactiveClass = "text-gray-700 dark:text-gray-300";

  const closeMenu = () => setIsOpen(false);

  const handleAuth = () => {
    closeMenu();
    isLoggedIn ? logout() : setShowLogin(true);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <BookOpen className="text-white w-4 h-4" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              I-GYAN.AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) => 
                  `${navLinkClass} ${isActive ? activeClass : inactiveClass}`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
              style={{
                background: isDarkMode 
                  ? 'linear-gradient(135deg, #fbbf24, #f97316)' 
                  : 'linear-gradient(135deg, #374151, #1f2937)'
              }}
            >
              <span className="text-white text-sm">{isDarkMode ? '☀️' : '🌙'}</span>
            </button>

            {/* Desktop Auth */}
            {isLoggedIn ? (
              <div className="hidden sm:flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <User className="text-white w-3 h-3" />
                  </div>
                  <span className="text-sm font-medium text-gray-800 dark:text-white max-w-20 truncate">
                    {user?.name || 'User'}
                  </span>
                </div>
                <button
                  onClick={handleAuth}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-800/50 transition-colors"
                >
                  <LogOut className="w-3 h-3" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleAuth}
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <User className="w-3 h-3" />
                <span>Login</span>
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-800 py-3">
            <div className="space-y-1">
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `${navLinkClass} ${isActive ? activeClass : inactiveClass} border-b-0`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Auth */}
            <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <User className="text-white w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {user?.name || 'User'}
                    </span>
                  </div>
                  <button
                    onClick={handleAuth}
                    className="w-full flex items-center justify-center gap-2 p-3 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-800/50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAuth}
                  className="w-full flex items-center justify-center gap-2 p-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;