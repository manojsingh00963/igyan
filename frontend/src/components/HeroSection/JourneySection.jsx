import React from "react";
import { Bot, Lightbulb, TrendingUp, Handshake, GraduationCap, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Component for the feature cards section
const FeatureCards = () => {
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
    <section id="features" className="py-20 bg-white">
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
};

// Component for the journey section
const JourneySection = () => {
  const roles = [
    {
      title: "🎓 Student",
      description: "Discover • Learn • Submit Projects",
      icon: GraduationCap,
      buttonText: "Join as Student",
      features: [
        "AI-powered learning paths",
        "Project submission & feedback",
        "Skill badges & certifications",
        "Career guidance",
      ],
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "👨‍🏫 Teacher",
      description: "Guide Students • Give Feedback",
      icon: Users,
      buttonText: "Join as Teacher",
      features: [
        "Create learning content",
        "Review student projects",
        "Conduct mentor sessions",
        "Earn from teaching",
      ],
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "🏢 Company HR",
      description: "Post Tasks • View Talent Dashboard",
      icon: Building2,
      buttonText: "Join as Company",
      features: [
        "Access talent pool",
        "Post hiring challenges",
        "Review portfolios",
        "AI-matched candidates",
      ],
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-20 bg-gray-300 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Choose Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect path for you, whether you want to learn, teach, or
            hire.
          </p>
        </div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={index}
                className="relative flex flex-col items-center p-8 bg-white shadow-lg border border-gray-200
                          transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
                variants={cardVariants}
              >
                {/* Background Blob/Circle */}
                <div
                  className={`absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-20 filter blur-lg transition-all duration-500
                              ${role.bgColor} group-hover:scale-125`}
                ></div>

                {/* Icon Container with Animated Glow */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full mb-6
                              ${role.bgColor} transition-all duration-300 group-hover:bg-opacity-80 relative z-10`}
                >
                  <Icon
                    className={`w-8 h-8 ${role.iconColor} transition-all duration-300`}
                  />
                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300
                                 ${role.bgColor} group-hover:opacity-100 group-hover:animate-pulse`}
                  ></div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-gray-500 mb-6">
                    {role.description}
                  </p>
                </div>

                <ul className="text-sm space-y-3 text-left w-full pl-6">
                  {role.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={` w-full rounded mt-8 py-3 px-6 font-semibold text-white
                              ${
                                index === 0
                                  ? "bg-blue-600 hover:bg-blue-700"
                                  : index === 1
                                  ? "bg-green-600 hover:bg-green-700"
                                  : "bg-purple-600 hover:bg-purple-700"
                              }
                              transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
                >
                  {role.buttonText}
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <>
      <FeatureCards />
      <JourneySection />
    </>
  );
};

export default App;
