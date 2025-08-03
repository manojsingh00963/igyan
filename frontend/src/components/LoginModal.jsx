import React, { useState } from 'react';
import { X, User, Mail, Lock, Eye, EyeOff, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// Validation rules configuration
const VALIDATION_RULES = {
  name: { required: true, message: 'Name is required' },
  email: { 
    required: true, 
    pattern: /\S+@\S+\.\S+/, 
    messages: { required: 'Email is required', pattern: 'Email is invalid' }
  },
  password: { 
    required: true, 
    minLength: 6, 
    messages: { required: 'Password is required', minLength: 'Password must be at least 6 characters' }
  }
};

// Custom hooks for better separation of concerns
const useFormValidation = () => {
  const validateField = (name, value, isSignUp) => {
    const rules = VALIDATION_RULES[name];
    if (!rules) return '';
    
    // Skip name validation if not in signup mode
    if (name === 'name' && !isSignUp) return '';
    
    if (rules.required && !value.trim()) {
      return rules.messages?.required || rules.message;
    }
    
    if (rules.pattern && value && !rules.pattern.test(value)) {
      return rules.messages?.pattern;
    }
    
    if (rules.minLength && value && value.length < rules.minLength) {
      return rules.messages?.minLength;
    }
    
    return '';
  };

  const validateForm = (formData, isSignUp) => {
    const errors = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field], isSignUp);
      if (error) errors[field] = error;
    });
    return errors;
  };
  
  return { validateForm, validateField };
};

const useFormState = (validateField) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('learner');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    if (errors[name]) {
      const error = validateField(name, value, isSignUp);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const toggleMode = () => {
    setIsSignUp(prev => !prev);
    setErrors({});
    // Keep form data when switching modes
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', password: '' });
    setErrors({});
    setIsSignUp(false);
    setShowPassword(false);
    setUserType('learner');
    setIsLoading(false);
  };

  return {
    isSignUp, setIsSignUp, showPassword, setShowPassword, userType, setUserType,
    formData, errors, setErrors, isLoading, setIsLoading,
    handleInputChange, toggleMode, resetForm
  };
};

// Enhanced InputField with better accessibility and UX
const InputField = ({ 
  icon: Icon, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  error, 
  showPasswordToggle, 
  onTogglePassword, 
  showPassword,
  disabled = false 
}) => {
  const fieldLabels = {
    name: 'Full Name',
    email: 'Email Address', 
    password: 'Password'
  };

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {fieldLabels[name]}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          id={name}
          type={showPasswordToggle ? (showPassword ? 'text' : 'password') : type}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={`w-full pl-11 ${showPasswordToggle ? 'pr-11' : 'pr-4'} py-3 rounded-xl border transition-colors ${
            error ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-600 focus:border-blue-500'
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed`}
          placeholder={placeholder}
          autoComplete={name === 'password' ? 'current-password' : name}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={onTogglePassword}
            disabled={disabled}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 disabled:opacity-50"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm flex items-center space-x-1">
          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
};

const UserTypeSelector = ({ userType, setUserType, disabled = false }) => {
  const types = [
    { value: 'learner', label: 'Learner', icon: BookOpen, description: 'Learn new skills' },
    { value: 'mentor', label: 'Mentor', icon: User, description: 'Share knowledge' }
  ];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">I am a:</label>
      <div className="grid grid-cols-2 gap-3">
        {types.map(({ value, label, icon: Icon, description }) => (
          <button
            key={value}
            type="button"
            onClick={() => setUserType(value)}
            disabled={disabled}
            className={`p-3 rounded-xl border transition-all text-left disabled:opacity-50 disabled:cursor-not-allowed ${
              userType === value
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <div className="flex items-center space-x-2 mb-1">
              <Icon size={16} />
              <span className="font-medium">{label}</span>
            </div>
            <p className="text-xs opacity-70">{description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

const SubmitButton = ({ isLoading, isSignUp }) => (
  <button
    type="submit"
    disabled={isLoading}
    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
  >
    {isLoading ? (
      <div className="flex items-center justify-center space-x-2">
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        <span>{isSignUp ? 'Creating Account...' : 'Signing In...'}</span>
      </div>
    ) : (
      <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
    )}
  </button>
);

const LoginModal = () => {
  const { showLogin, setShowLogin, login } = useAuth();
  const { validateForm, validateField } = useFormValidation();
  const {
    isSignUp, showPassword, setShowPassword, userType, setUserType,
    formData, errors, setErrors, isLoading, setIsLoading,
    handleInputChange, toggleMode, resetForm
  } = useFormState(validateField);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData, isSignUp);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Simulate potential API errors (uncomment to test)
      // if (Math.random() < 0.1) throw new Error('Server error');
      
      const userData = {
        id: Date.now(), // In real app, this would come from API
        name: formData.name || formData.email.split('@')[0],
        email: formData.email,
        type: userType,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(formData.name || formData.email)}&background=3b82f6&color=fff`
      };
      
      login(userData);
      // No need to call handleClose() - the modal will close when showLogin becomes false
    } catch (error) {
      setErrors({ submit: 'Authentication failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setShowLogin(false);
    // Reset form after a short delay to prevent visual glitch
    setTimeout(resetForm, 300);
  };

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showLogin && !isLoading) {
        handleClose();
      }
    };
    
    if (showLogin) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showLogin, isLoading]);

  if (!showLogin) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-0" onClick={handleClose} />
      
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <BookOpen size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold">I-GYAN.AI</h2>
              <p className="text-blue-100 text-sm">Premium Learning Platform</p>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h3>
          <p className="text-blue-100 text-sm">
            {isSignUp ? 'Join thousands of learners today' : 'Sign in to continue your learning journey'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <UserTypeSelector 
            userType={userType} 
            setUserType={setUserType} 
            disabled={isLoading}
          />

          {isSignUp && (
            <InputField
              icon={User}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              error={errors.name}
              disabled={isLoading}
            />
          )}

          <InputField
            icon={Mail}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            error={errors.email}
            disabled={isLoading}
          />

          <InputField
            icon={Lock}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            error={errors.password}
            showPasswordToggle
            onTogglePassword={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
            disabled={isLoading}
          />

          {errors.submit && (
            <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
              <p className="text-red-600 dark:text-red-400 text-sm flex items-center space-x-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span>{errors.submit}</span>
              </p>
            </div>
          )}

          <SubmitButton isLoading={isLoading} isSignUp={isSignUp} />

          <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button
                type="button"
                onClick={toggleMode}
                disabled={isLoading}
                className="ml-1 text-blue-600 dark:text-blue-400 font-semibold hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;  