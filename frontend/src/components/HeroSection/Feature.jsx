import React, { useState, useEffect } from "react";
import { Bot, Lightbulb, TrendingUp, Handshake, Cpu, Network, Sparkles } from "lucide-react";

const features = [
  {
    title: "AI-Powered Learning Paths",
    description: "Get a personalized curriculum that adapts to your pace and goals.",
    icon: Bot,
    color: "#2563EB",
    bgColor: "bg-blue-50",
  },
  {
    title: "Project-Based Learning", 
    description: "Submit real-world projects and get instant, AI-driven feedback.",
    icon: Lightbulb,
    color: "#EAB308",
    bgColor: "bg-yellow-50",
  },
  {
    title: "Skill Certification",
    description: "Earn recognized badges and certifications to showcase your expertise.",
    icon: TrendingUp,
    color: "#059669",
    bgColor: "bg-green-50",
  },
  {
    title: "Direct Employer Connections",
    description: "Connect with companies and land your dream job directly through our platform.",
    icon: Handshake,
    color: "#7C3AED",
    bgColor: "bg-purple-50",
  },
];

export default function FeatureCards() {
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = entry.target.getAttribute('data-card-index');
            if (cardIndex) {
              setTimeout(() => {
                setVisibleCards(prev => new Set([...prev, parseInt(cardIndex)]));
              }, parseInt(cardIndex) * 150);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.feature-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className=" bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white border border-slate-200 px-6 py-3 rounded-2xl text-sm font-semibold mb-8 shadow-sm">
            <Cpu className="w-5 h-5 text-blue-600" />
            <span className="text-slate-700">Intelligent Features</span>
            <Network className="w-5 h-5 text-slate-400" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Powerful <span className="text-blue-600">AI Features</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Everything you need for career success, powered by intelligent technology.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              feature={feature}
              index={index}
              isVisible={visibleCards.has(index)}
            />
          ))}
        </div>

        {/* Bottom Decorative Elements */}
        <div className="flex justify-center mt-16 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ 
                backgroundColor: feature.color,
                animationDelay: `${index * 300}ms`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, isVisible }) {
  return (
    <div
      data-card-index={index}
      className={`feature-card group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-105 overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      
      {/* Hover Background Effect */}
      <div 
        className={`absolute inset-0 ${feature.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
      />
      
      {/* Icon Container */}
      <div className="mb-6 relative z-10">
        <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all duration-500 relative">
          <feature.icon 
            className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
            style={{ color: feature.color }}
          />
          <div 
            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"
            style={{ borderColor: feature.color + '40' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors duration-300">
          {feature.title}
        </h3>
        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {feature.description}
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl z-20"
        style={{ backgroundColor: feature.color }}
      />

      {/* Floating Element */}
      <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
        <div 
          className="w-6 h-6 rounded-full flex items-center justify-center text-white animate-bounce"
          style={{ backgroundColor: feature.color }}
        >
          <Sparkles size={12} />
        </div>
      </div>
    </div>
  );
}