import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LoginModal from '../components/LoginModal';

const Homepage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      // Handle chat submission for logged-in users
      console.log('Chat submitted:', chatInput);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
    // Process the chat input after login
    console.log('Processing chat:', chatInput);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode ? 'dark' : '';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${themeClasses}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar 
          isLoggedIn={isLoggedIn}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          onLoginClick={() => setShowLogin(true)}
        />
        
        <Hero 
          chatInput={chatInput}
          setChatInput={setChatInput}
          onChatSubmit={handleChatSubmit}
          isLoggedIn={isLoggedIn}
        />

        <LoginModal
          showLogin={showLogin}
          setShowLogin={setShowLogin}
          onLogin={handleLogin}
        />
      </div>
    </div>
  );
};

export default Homepage;