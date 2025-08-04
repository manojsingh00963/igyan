import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, User, LogOut, BookOpen } from 'lucide-react';
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
  const { isLoggedIn, setShowLogin, user, logout } = useAuth();

  const navLinkClass = "block px-3 py-2 text-lg font-medium transition-colors hover:text-indigo-600";
  const activeClass = "text-indigo-600 border-b-2 border-indigo-600";
  const inactiveClass = "text-gray-700";

  const closeMenu = () => setIsOpen(false);

  const handleAuth = () => {
    closeMenu();
    isLoggedIn ? logout() : setShowLogin(true);
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeMenu}
        />
      )}

      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white w-4 h-4" />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-black">I-GYAN</span>
                <span className="text-indigo-600">.AI</span>
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
              {/* Desktop Auth */}
              {isLoggedIn ? (
                <div className="hidden sm:flex items-center gap-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="text-white w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium text-gray-800 max-w-20 truncate">
                      {user?.name || 'User'}
                    </span>
                  </div>
                  <button
                    onClick={handleAuth}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 transition-colors"
                  >
                    <LogOut className="w-3 h-3" />
                    <span className="hidden md:inline">Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAuth}
                  className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <User className="w-3 h-3" />
                  <span>Login</span>
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Side Menu */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-white transform transition-transform duration-300 ease-in-out z-50 lg:hidden shadow-xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white w-4 h-4" />
              </div>
              <span className="text-lg font-bold">
                <span className="text-black">I-GYAN</span>
                <span className="text-indigo-600">.AI</span>
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Items */}
          <div className="py-4">
            <div className="space-y-1 px-4">
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `block px-4 py-1 text-lg font-medium transition-colors rounded-lg ${
                      isActive 
                        ? 'text-indigo-600 bg-indigo-50' 
                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                    }`
                  }
                >
                  {name}
                </NavLink>
              ))}
            </div>

            {/* Mobile Auth Section */}
            <div className="px-4 pt-6 mt-6 border-t border-gray-200">
              {isLoggedIn ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="text-white w-4 h-4" />
                    </div>
                    <span className="font-medium text-gray-800">
                      {user?.name || 'User'}
                    </span>
                  </div>
                  <button
                    onClick={handleAuth}
                    className="w-full flex items-center justify-center gap-2 p-3 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAuth}
                  className="w-full flex items-center justify-center gap-2 p-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all duration-200"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;