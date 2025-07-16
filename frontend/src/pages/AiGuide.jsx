import React, { useState, useRef, useEffect } from 'react';
import {
  FaRobot,
  FaUser,
  FaPaperPlane,
  FaLightbulb,
  FaGraduationCap,
  FaCode,
  FaChartLine,
  FaArrowLeft,
  FaMicrophone,
  FaPlay,
  FaBookOpen,
  FaRocket,
  FaHeart,
  FaStar,
  FaDesktop,
  FaUserTie
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AIGuide = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi there! 👋 I'm GYAN-AI, your personal learning and career guide. I'm here to help you discover your potential, plan your learning journey, and achieve your career goals. What would you like to explore today?",
      timestamp: new Date(),
      suggestions: [
        "Help me choose a career path 🎯",
        "Create a learning roadmap 📚",
        "Review my skills and suggest improvements 🚀",
        "Find the right courses for me 📖"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);

  const quickActions = [
    { icon: FaGraduationCap, text: "Career Assessment", description: "Discover your ideal career path" },
    { icon: FaBookOpen, text: "Learning Plan", description: "Get a personalized study roadmap" },
    { icon: FaCode, text: "Skill Gap Analysis", description: "Identify areas for improvement" },
    { icon: FaRocket, text: "Project Ideas", description: "Get project suggestions for your level" },
    { icon: FaChartLine, text: "Market Insights", description: "Learn about industry trends" },
    { icon: FaUserTie, text: "Interview Prep", description: "Practice for your dream job" }
  ];

  const aiResponses = [
    "That's a great question! Let me help you with that. Based on your interests, I'd recommend starting with...",
    "I understand you're looking for guidance. Here's what I suggest based on current market trends...",
    "Excellent choice! This field has tremendous opportunities. Let me create a personalized roadmap for you...",
    "I can see you're passionate about this area. Here are some specific steps you can take...",
    "That's an exciting career path! Let me break down the skills you'll need and how to acquire them..."
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (message = null) => {
    const messageText = message || inputMessage.trim();
    if (!messageText) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: messageText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        timestamp: new Date(),
        suggestions: [
          "Tell me more about this 🤔",
          "What are the prerequisites? 📋",
          "Show me similar options 🔍",
          "Create a timeline for me ⏰"
        ]
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  const handleQuickAction = (action) => {
    handleSendMessage(`I need help with ${action.text.toLowerCase()}: ${action.description}`);
  };

  const startVoiceInput = () => {
    setIsListening(true);
    // Simulate voice input
    setTimeout(() => {
      setIsListening(false);
      setInputMessage("I want to learn web development and become a full-stack developer");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors">
              <FaArrowLeft />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-gradient">I-GYAN</div>
            <div className="text-sm text-muted-foreground">🤖 AI Guide</div>
          </div>
        </div>
      </header>

      {/* Main Chat Interface */}
      <div className="flex-1 flex">
        {/* Sidebar - Quick Actions */}
        <div className="hidden lg:block w-80 bg-muted/30 border-r border-border p-6">
          <h2 className="text-xl font-bold mb-6 text-gradient">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action)}
                className="w-full p-4 bg-card hover:bg-primary/5 border border-border hover:border-primary/30 rounded-xl transition-all duration-300 text-left group"
              >
                <div className="flex items-start space-x-3">
                  <action.icon className="text-primary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {action.text}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {action.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* AI Stats */}
          <div className="mt-8 p-4 bg-gradient-primary rounded-xl text-white">
            <h3 className="font-bold mb-3">AI Guide Stats</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Students Guided</span>
                <span>12,000+</span>
              </div>
              <div className="flex justify-between">
                <span>Career Paths</span>
                <span>500+</span>
              </div>
              <div className="flex justify-between">
                <span>Success Rate</span>
                <span>94%</span>
              </div>
              <div className="flex justify-between">
                <span>Response Time</span>
                <span>&lt; 2 sec</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse-glow">
                <FaRobot className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">GYAN-AI Assistant</h1>
                <p className="text-muted-foreground">Your personal learning and career guide</p>
              </div>
              <div className="ml-auto flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm text-success font-semibold">Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-3xl ${message.type === 'user' ? 'order-2' : ''}`}>
                  <div className={`flex items-start space-x-3 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-gradient-secondary text-white'
                    }`}>
                      {message.type === 'user' ? <FaUser /> : <FaRobot />}
                    </div>
                    
                    <div className={`flex-1 ${message.type === 'user' ? 'text-right' : ''}`}>
                      <div className={`inline-block p-4 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card border border-border'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                      
                      {/* Suggestions */}
                      {message.suggestions && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="px-3 py-1 bg-muted hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full text-xs transition-all duration-300"
                            >
                              {suggestion}
                            </button>
                          ))}
                        </div>
                      )}
                      
                      <div className={`text-xs text-muted-foreground mt-2 ${message.type === 'user' ? 'text-right' : ''}`}>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-secondary text-white flex items-center justify-center animate-pulse">
                    <FaRobot />
                  </div>
                  <div className="bg-card border border-border p-4 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-border bg-muted/30">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything about careers, learning, or skills... 💭"
                    className="w-full px-6 py-4 bg-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    disabled={isTyping}
                  />
                  
                  {/* Voice Input Button */}
                  <button
                    type="button"
                    onClick={startVoiceInput}
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all ${
                      isListening 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary'
                    }`}
                  >
                    <FaMicrophone />
                  </button>
                </div>
                
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isTyping}
                  className="px-6 py-4 bg-primary text-primary-foreground rounded-2xl hover:bg-primary-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <FaPaperPlane />
                  <span className="hidden sm:block">Send</span>
                </button>
              </form>
              
              {/* Quick Suggestions */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <button 
                  onClick={() => handleSendMessage("What skills are in demand in 2024?")}
                  className="px-3 py-1 bg-card hover:bg-primary/5 border border-border hover:border-primary/30 rounded-full text-xs transition-all"
                >
                  🔥 Trending Skills
                </button>
                <button 
                  onClick={() => handleSendMessage("How do I switch careers?")}
                  className="px-3 py-1 bg-card hover:bg-primary/5 border border-border hover:border-primary/30 rounded-full text-xs transition-all"
                >
                  🔄 Career Switch
                </button>
                <button 
                  onClick={() => handleSendMessage("Create a 6-month learning plan")}
                  className="px-3 py-1 bg-card hover:bg-primary/5 border border-border hover:border-primary/30 rounded-full text-xs transition-all"
                >
                  📅 Learning Plan
                </button>
                <button 
                  onClick={() => handleSendMessage("How to build a portfolio?")}
                  className="px-3 py-1 bg-card hover:bg-primary/5 border border-border hover:border-primary/30 rounded-full text-xs transition-all"
                >
                  💼 Portfolio Tips
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="bg-gradient-hero p-6 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <FaLightbulb className="text-yellow-300" />
              <span className="text-sm">Personalized Guidance</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaRocket className="text-blue-300" />
              <span className="text-sm">Real-time Responses</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaStar className="text-yellow-300" />
              <span className="text-sm">Expert Knowledge</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaHeart className="text-pink-300" />
              <span className="text-sm">Always Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIGuide;