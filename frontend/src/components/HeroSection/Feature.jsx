import React from "react";
import { Bot, Lightbulb, TrendingUp, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "AI-Powered Learning Paths",
    description: "Get a personalized curriculum that adapts to your pace and goals.",
    icon: <Bot className="w-6 h-6 text-blue-500 group-hover:animate-bounce" />,
    bgFrom: "from-blue-50",
    bgTo: "to-blue-100",
    iconBg: "bg-blue-200",
  },
  {
    title: "Project-Based Learning",
    description: "Submit real-world projects and get instant, AI-driven feedback.",
    icon: <Lightbulb className="w-6 h-6 text-yellow-500 group-hover:animate-pulse" />,
    bgFrom: "from-yellow-50",
    bgTo: "to-yellow-100",
    iconBg: "bg-yellow-200",
  },
  {
    title: "Skill Certification",
    description: "Earn recognized badges and certifications to showcase your expertise.",
    icon: <TrendingUp className="w-6 h-6 text-green-500 group-hover:animate-ping" />,
    bgFrom: "from-green-50",
    bgTo: "to-green-100",
    iconBg: "bg-green-200",
  },
  {
    title: "Direct Employer Connections",
    description: "Connect with companies and land your dream job directly through our platform.",
    icon: <Handshake className="w-6 h-6 text-purple-500 group-hover:animate-wiggle" />,
    bgFrom: "from-purple-50",
    bgTo: "to-purple-100",
    iconBg: "bg-purple-200",
  },
];

export default function FeatureCards() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="features" className="py-20 bg-gray-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for career success, powered by intelligent technology.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`group p-8 border border-gray-200 rounded-xl
                         bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer
                         transform hover:-translate-y-2 relative overflow-hidden`}
              variants={itemVariants}
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgFrom} ${feature.bgTo} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              ></div>

              {/* Icon Container */}
              <div
                className={`relative z-10 w-16 h-16 rounded-full ${feature.iconBg} flex items-center justify-center mb-6
                           transition-colors duration-300 group-hover:bg-white/80`}
              >
                {feature.icon}
              </div>

              {/* Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
