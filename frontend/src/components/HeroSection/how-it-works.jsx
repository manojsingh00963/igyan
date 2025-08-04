import React, { useState, useEffect } from "react";
import { Book, Code, Trophy, Briefcase, BookOpen, Brain, Zap, Target, Rocket, ChevronRight, Sparkles, Circle, Cpu, Network } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const HowItWorks = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedCards, setAnimatedCards] = useState(new Set());
  const [neurons, setNeurons] = useState([]);
  const { isLoggedIn, setShowLogin } = useAuth();
  
  const buttons = ["Learn", "Build", "Show", "Get Hired"];

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % buttons.length);
    }, 6000);
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
      icon: Brain,
      title: "AI-Powered Learning",
      color: "blue",
      accentColor: "#2563EB",
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
      accentColor: "#7C3AED",
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
      accentColor: "#EA580C",
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
      accentColor: "#059669",
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
      // User is already logged in, redirect to dashboard or courses
      // You can navigate to a specific route here
      console.log('User is logged in, redirecting to dashboard...');
      // Example: navigate('/dashboard') or navigate('/courses')
    }
  };

  return (
    <section id="work-flow-id" className="relative overflow-hidden bg-slate-50 min-h-screen">
      

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 animate-on-scroll transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            How <span className="text-blue-600 relative">
              I-GYAN.AI
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-100 rounded-full" />
            </span> Works
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of learning with our AI-driven approach to career development
          </p>
        </div>

        {/* Step Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {buttons.map((label, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 group ${
                selectedIndex === index
                  ? "text-white shadow-xl scale-105"
                  : "text-slate-600 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md"
              }`}
              style={{
                backgroundColor: selectedIndex === index ? currentStep.accentColor : undefined,
              }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-1 rounded-lg transition-all duration-300 ${
                  selectedIndex === index ? 'bg-white bg-opacity-20' : 'bg-slate-100 group-hover:bg-slate-200'
                }`}>
                  {React.createElement(steps[index].icon, { 
                    size: 20, 
                    className: selectedIndex === index ? 'text-white' : `text-${steps[index].color}-600`
                  })}
                </div>
                <span>{label}</span>
              </div>
              
              {selectedIndex === index && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-3 h-3 bg-white rounded-full shadow-lg animate-bounce" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-slate-200 transition-all duration-700 transform relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Content Side */}
              <div className={`${selectedIndex % 2 === 1 ? 'lg:order-2' : ''} space-y-8`}>
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-slate-100 rounded-2xl shadow-sm">
                    {React.createElement(currentStep.icon, { 
                      size: 40, 
                      style: { color: currentStep.accentColor },
                      strokeWidth: 1.5
                    })}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                      {currentStep.title}
                    </h3>
                    <p className="text-lg text-slate-600 leading-relaxed">{currentStep.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentStep.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className={`flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-all duration-500 hover:shadow-md hover:bg-white delay-${idx * 100} ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentStep.accentColor }} />
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Side */}
              <div className={`${selectedIndex % 2 === 1 ? 'lg:order-1' : ''} flex justify-center`}>
                <div className="relative">
                  {/* Main Visual Container */}
                  <div className="w-80 h-80 bg-slate-100 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden border border-slate-200">
                    
                    {/* Animated Circuit Lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
                      <defs>
                        <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M0 20h40M20 0v40" stroke={currentStep.accentColor} strokeWidth="1"/>
                          <circle cx="20" cy="20" r="2" fill={currentStep.accentColor}/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#circuit)"/>
                    </svg>

                    {/* Corner Tech Elements */}
                    <div className="absolute top-6 right-6 w-4 h-4 border-2 border-slate-300 rounded-sm animate-pulse" />
                    <div className="absolute top-6 left-6 w-3 h-3 bg-slate-300 rounded-full animate-pulse delay-300" />
                    <div className="absolute bottom-6 right-6 w-3 h-3 bg-slate-300 rounded-full animate-pulse delay-700" />
                    <div className="absolute bottom-6 left-6 w-4 h-4 border-2 border-slate-300 rounded-sm animate-pulse delay-1000" />
                    
                    {/* Main Icon */}
                    <div className="relative z-10 transform transition-all duration-700 hover:scale-110">
                      {React.createElement(currentStep.icon, { 
                        size: 140, 
                        strokeWidth: 1,
                        style: { color: currentStep.accentColor }
                      })}
                    </div>

                    {/* Orbiting Elements */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full" style={{ backgroundColor: currentStep.accentColor }} />
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-400 rounded-full" />
                    </div>
                  </div>

                  {/* Floating Tech Badges */}
                  <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-3 rounded-2xl shadow-lg animate-float">
                    <Zap size={20} />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-slate-800 text-white p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                    <Circle size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-3 bg-white p-3 rounded-2xl shadow-lg border border-slate-200">
            {buttons.map((_, index) => (
              <div
                key={index}
                className={`h-3 rounded-full transition-all duration-500 ${
                  index === selectedIndex 
                    ? 'w-12 shadow-sm' 
                    : 'w-3 bg-slate-300 hover:bg-slate-400'
                }`}
                style={{
                  backgroundColor: index === selectedIndex ? currentStep.accentColor : undefined,
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-slate-900 text-white p-12 md:p-16 rounded-3xl shadow-2xl max-w-3xl mx-auto relative overflow-hidden border border-slate-800">
            
            {/* Background Tech Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M30 0v60M0 30h60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-2 bg-blue-600 rounded-xl">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black">
                  Ready to Transform Your Career?
                </h3>
              </div>
              
              <p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Join thousands of learners and experience the future of education with our AI-powered platform
              </p>
              
              <button 
                onClick={handleStartJourney}
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center mx-auto gap-4 group border border-blue-500"
              >
                <Brain size={24} />
                <span>START YOUR AI JOURNEY</span>
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Decorative Elements */}
              <div className="flex justify-center mt-8 gap-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300" />
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;