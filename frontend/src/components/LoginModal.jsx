import React, { useState } from 'react';
import { X, BookOpen, Users, Building2 } from 'lucide-react';

const LoginModal = ({ showLogin, setShowLogin, onLogin }) => {
  const [loginType, setLoginType] = useState('learner');
  const [isSignUp, setIsSignUp] = useState(false);

  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {isSignUp ? 'Join I-GYAN' : 'Welcome to I-GYAN'}
          </h2>
          <button
            onClick={() => setShowLogin(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Login Selection */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">I am a:</p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setLoginType('learner')}
              className={`p-3 rounded-lg border-2 transition-colors ${
                loginType === 'learner'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              <BookOpen className="h-6 w-6 mx-auto mb-1" />
              <div className="text-sm font-medium">Learner</div>
            </button>
            <button
              onClick={() => setLoginType('mentor')}
              className={`p-3 rounded-lg border-2 transition-colors ${
                loginType === 'mentor'
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              <Users className="h-6 w-6 mx-auto mb-1" />
              <div className="text-sm font-medium">Mentor</div>
            </button>
            <button
              onClick={() => setLoginType('company')}
              className={`p-3 rounded-lg border-2 transition-colors ${
                loginType === 'company'
                  ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
            >
              <Building2 className="h-6 w-6 mx-auto mb-1" />
              <div className="text-sm font-medium">Company</div>
            </button>
          </div>
        </div>

        {/* Auth Form */}
        <div className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors"
                placeholder="Enter your full name"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email or Phone
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors"
              placeholder="Enter your email or phone"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors"
              placeholder="Enter your password"
            />
          </div>
          {isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors"
                placeholder="Confirm your password"
              />
            </div>
          )}
          <button
            onClick={onLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            {isSignUp ? 'Create Account & Continue' : 'Login & Continue'}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button 
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              {isSignUp ? 'Sign in' : 'Sign up now'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};


export default LoginModal