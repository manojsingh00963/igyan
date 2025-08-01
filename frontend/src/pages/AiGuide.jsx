import React, { useState, useRef, useEffect } from 'react';
import {
  Bot, User, Send, Code,
  ArrowLeft, Mic, Rocket,
  Moon, Sun, Menu, X, Gamepad2, Video, Brain, Monitor,
  Smartphone, Cloud,
  UserCog
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIGuide = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi there! 👋 I'm GYAN-AI, your personal learning companion powered by cutting-edge AI. I specialize in modern tech skills, career transitions, and personalized learning paths. Ready to unlock your potential?",
      timestamp: new Date(),
      suggestions: [
        "Show me AI/ML career paths 🤖",
        "Create my coding bootcamp plan 💻",
        "Trending skills in 2025 🔥",
        "Remote work opportunities 🌐"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const quickActions = [
    { icon: Brain, text: "AI/ML Learning", description: "Master artificial intelligence", color: "bg-purple-600" },
    { icon: Code, text: "Full-Stack Dev", description: "Frontend to backend mastery", color: "bg-blue-600" },
    { icon: Monitor, text: "Data Science", description: "Analytics and visualization", color: "bg-green-600" },
    { icon: Smartphone, text: "Mobile Dev", description: "iOS/Android applications", color: "bg-orange-600" },
    { icon: Cloud, text: "Cloud Computing", description: "AWS, Azure, GCP expertise", color: "bg-indigo-600" },
    { icon: Gamepad2, text: "Game Development", description: "Unity, Unreal Engine", color: "bg-pink-600" },
    { icon: Video, text: "Content Creation", description: "YouTube, TikTok, Podcasts", color: "bg-yellow-600" },
    { icon: UserCog, text: "Tech Leadership", description: "Management and strategy", color: "bg-gray-600" }
  ];

  const modernSkills = [
    "ChatGPT & AI Tools", "React/Next.js", "Python Data Science", "Cloud Architecture",
    "DevOps & CI/CD", "Blockchain", "Cybersecurity", "UI/UX Design"
  ];

  const aiResponses = [
    "Excellent question! Based on 2025 market trends, I'd recommend focusing on AI integration skills. Here's your personalized roadmap...",
    "Great choice! The demand for these skills has grown 300% this year. Let me create a step-by-step learning plan...",
    "I love your enthusiasm! This field offers amazing remote opportunities. Here's what successful professionals are doing...",
    "Perfect timing! Many companies are hiring for these roles. Let me show you the exact skills they're looking for...",
    "That's a smart career move! I've helped 500+ students transition successfully. Here's your custom action plan..."
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  setTimeout(() => {
    const aiMessage = {
      id: Date.now() + 1,
      type: 'ai',
      content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
      timestamp: new Date(),
      suggestions: [
        "Show me learning resources 📚",
        "What's the salary range? 💰",
        "Find me practice projects 🛠️",
        "Create study schedule ⏰"
      ]
    };
    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  }, 1500);

const handleBackToHome = () => {
  navigate('/');
};

const handleSuggestionClick = (suggestion) => {
  handleSendMessage(suggestion);
};

const handleQuickAction = (action) => {
  handleSendMessage(`I want to learn ${action.text}: ${action.description}`);
};

const startVoiceInput = () => {
  setIsListening(true);
  setTimeout(() => {
    setIsListening(false);
    setInputMessage("I want to transition into AI and machine learning. What's the best path for 2025?");
  }, 2000);
};

return (
  <div className={`h-screen overflow-hidden transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
    {/* Header */}
    <header className={`h-16 backdrop-blur-lg border-b transition-colors ${darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
      }`}>
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div
            onClick={handleBackToHome}
            className="flex items-center hover:cursor-pointer space-x-2 text-blue-600 dark:text-blue-400"
          >
            <ArrowLeft size={20} />
            <span className="hidden sm:block">Back to Home</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            I-GYAN
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg transition-all duration-300 ${darkMode
                ? 'bg-yellow-500 text-yellow-100 hover:bg-yellow-400'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>

    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <div className={`fixed lg:relative inset-y-0 left-0 z-40 w-80 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r h-full`}>
        <div className="p-6 h-full overflow-y-auto">
          <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            🚀 Learning Paths
          </h2>

          {/* Quick Actions */}
          <div className="space-y-3 mb-8">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action)}
                className={`w-full p-4 rounded-xl transition-all duration-300 text-left group hover:scale-[1.02] ${darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600'
                    : 'bg-gray-100 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${action.color}`}>
                    <action.icon className="text-white" size={18} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                      {action.text}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {action.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Trending Skills */}
          <div className={`p-4 rounded-xl bg-blue-600 text-white mb-6`}>
            <h3 className="font-bold mb-3 flex items-center">
              <Rocket className="mr-2" size={16} />
              Trending 2025
            </h3>
            <div className="flex flex-wrap gap-2">
              {modernSkills.slice(0, 4).map((skill, index) => (
                <span key={index} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <h3 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              AI Guide Impact
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Learners Guided</span>
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>25,000+</span>
              </div>
              <div className="flex justify-between">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Success Rate</span>
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>96%</span>
              </div>
              <div className="flex justify-between">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Avg. Response</span>
                <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>&lt; 1 sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat */}
      <div className="flex-1 flex flex-col h-full">
        {/* Chat Header */}
        <div className={`p-4 md:p-6 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <Bot className="text-white" size={24} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
            <div className="flex-1">
              <h1 className={`text-xl md:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                I-GYAN AI Assistant
              </h1>
              <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'}, font-semibold`}>
                Specialized in 2025 tech skills & career guidance
              </p>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-500 font-medium">Active</span>
            </div>
          </div>
        </div>

        {/* Messages - Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] md:max-w-3xl ${message.type === 'user' ? 'order-2' : ''}`}>
                <div className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${message.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-purple-600 text-white'
                    }`}>
                    {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>

                  <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-3 md:p-4 rounded-2xl max-w-full ${message.type === 'user'
                        ? 'bg-blue-500 text-white'
                        : darkMode
                          ? 'bg-gray-700 text-white border border-gray-600'
                          : 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                      }`}>
                      <p className="text-sm leading-relaxed break-words">{message.content}</p>
                    </div>

                    {/* Suggestions */}
                    {message.suggestions && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className={`px-3 py-1 rounded-full text-xs transition-all duration-300 ${darkMode
                                ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300'
                                : 'bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700'
                              }`}
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}

                    <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-right' : ''
                      } ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-600 text-white flex items-center justify-center animate-pulse">
                  <Bot size={16} />
                </div>
                <div className={`p-3 md:p-4 rounded-2xl ${darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
                  }`}>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area - Fixed at Bottom */}
        <div className={`p-4 md:p-6 border-t ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex space-x-2 md:space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about AI, coding, career paths, or any learning topic... 🚀"
                  className={`w-full px-4 md:px-6 py-3 md:py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition-all ${darkMode
                      ? 'bg-gray-700 border border-gray-600 text-white placeholder-gray-400'
                      : 'bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-500'
                    }`}
                  disabled={isTyping}
                />

                <button
                  type="button"
                  onClick={startVoiceInput}
                  className={`absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all ${isListening
                      ? 'bg-red-500 text-white animate-pulse'
                      : darkMode
                        ? 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
                    }`}
                >
                  <Mic size={16} />
                </button>
              </div>

              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="px-4 md:px-6 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send size={16} />
                <span className="hidden sm:block">Send</span>
              </button>
            </div>

            {/* Quick Suggestions */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {[
                "🔥 AI Tools for Learning",
                "💻 Remote Job Skills",
                "🎯 Career Transition",
                "📱 Build Portfolio"
              ].map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(suggestion)}
                  className={`px-3 py-1 rounded-full text-xs transition-all hover:scale-105 ${darkMode
                      ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700'
                    }`}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Overlay for mobile sidebar */}
    {sidebarOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        onClick={() => setSidebarOpen(false)}
      />
    )}
  </div>
);
};

export default AIGuide;