import React from "react";
import {GraduationCap, Users, Building2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

export default JourneySection;
