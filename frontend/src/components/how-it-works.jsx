import React, { useState, useEffect } from "react";
import { Book, Code, Trophy, Briefcase, BookOpen, Brain, Zap, Target, Rocket, ChevronRight, Sparkles } from "lucide-react";
import LoginModal from "./LoginModal";
import { useAuth } from '../context/AuthContext';

const HowItWorks = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const { isLoggedIn, setShowLogin } = useAuth();
  
  const buttons = ["Learn", "Build", "Show", "Get Hired"];

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % buttons.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            const cardIndex = entry.target.getAttribute('data-card-index');
            if (cardIndex) {
              setAnimatedCards(prev => new Set([...prev, parseInt(cardIndex)]));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Book,
      title: "AI-Powered Learning",
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      description: "Personalized learning paths powered by advanced AI algorithms",
      features: [
        "Smart content recommendations based on your learning style",
        "Real-time progress tracking with predictive analytics",
        "Adaptive difficulty adjustment for optimal learning curve"
      ]
    },
    {
      icon: Code,
      title: "Smart Project Building",
      color: "purple",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      description: "Build real-world projects with AI-assisted guidance",
      features: [
        "AI code review and optimization suggestions",
        "Intelligent project matching based on skill level",
        "Automated testing and deployment assistance"
      ]
    },
    {
      icon: Trophy,
      title: "AI Portfolio Showcase",
      color: "orange",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      description: "Showcase your work with AI-enhanced presentation",
      features: [
        "Automated portfolio optimization for maximum impact",
        "AI-generated project descriptions and highlights",
        "Smart matching with relevant job opportunities"
      ]
    },
    {
      icon: Briefcase,
      title: "Intelligent Job Matching",
      color: "green",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      description: "Get hired faster with AI-powered job matching",
      features: [
        "AI resume optimization for ATS systems",
        "Intelligent interview preparation with mock sessions",
        "Predictive job matching based on skills and preferences"
      ]
    }
  ];

  const currentStep = steps[selectedIndex];

  const handleStartJourney = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      console.log('User is logged in, redirecting to dashboard...');
    }
  };

  return (
    <section id="work-flow-id" className="relative overflow-hidden bg-white">
      {/* AI-themed background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='7' cy='53' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 animate-on-scroll transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            How <span className="text-blue-600">I-GYAN.AI</span> Works
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of learning with our AI-driven approach to career development
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {buttons.map((label, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                selectedIndex === index
                  ? `${steps[index].iconColor} bg-white shadow-lg border-2 ${steps[index].borderColor}`
                  : "text-gray-600 bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
              }`}
            >
              <div className="flex items-center gap-2">
                {React.createElement(steps[index].icon, { size: 20 })}
                <span>{label}</span>
              </div>
              
              {selectedIndex === index && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className={`w-2 h-2 ${steps[index].bgColor} rounded-full animate-pulse`} />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="max-w-6xl mx-auto">
          <div className={`${currentStep.bgColor} rounded-3xl p-8 md:p-12 border-2 ${currentStep.borderColor} transition-all duration-500 transform`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Content Side */}
              <div className={`${selectedIndex % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-white rounded-xl shadow-md ${currentStep.iconColor}`}>
                    {React.createElement(currentStep.icon, { size: 32 })}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {currentStep.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{currentStep.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentStep.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm transition-all duration-300 delay-${idx * 100} ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      <div className={`p-1 ${currentStep.iconColor} bg-opacity-20 rounded-full mt-1`}>
                        <ChevronRight size={16} className={currentStep.iconColor} />
                      </div>
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className={`${selectedIndex % 2 === 1 ? 'md:order-1' : ''} flex justify-center`}>
                <div className="relative">
                  {/* Main Icon Container */}
                  <div className={`w-64 h-64 bg-white rounded-3xl shadow-xl flex items-center justify-center relative overflow-hidden`}>
                    {/* Animated background circles */}
                    <div className={`absolute inset-0 ${currentStep.bgColor} opacity-20`} />
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded-full animate-pulse delay-300" />
                    
                    {/* Main Icon */}
                    <div className={`relative z-10 ${currentStep.iconColor} transform transition-all duration-500 hover:scale-110`}>
                      {React.createElement(currentStep.icon, { size: 120, strokeWidth: 1.5 })}
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-2 rounded-full animate-bounce">
                    <Zap size={16} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-2 rounded-full animate-bounce delay-500">
                    <Target size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            {buttons.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-900 text-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Rocket className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  Ready to Transform Your Career?
                </h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
                {isLoggedIn 
                  ? "Continue your AI-powered learning journey and unlock new opportunities!"
                  : "Join thousands of learners and experience the future of education today!"
                }
              </p>
              
              <button 
                onClick={handleStartJourney}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto gap-3 group"
              >
                {isLoggedIn ? (
                  <>
                    <BookOpen size={20} />
                    <span>CONTINUE LEARNING</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                ) : (
                  <>
                    <Brain size={20} />
                    <span>START YOUR AI JOURNEY</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <LoginModal />
    </section>
  );
};

export default HowItWorks;