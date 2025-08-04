import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBookOpen, FaCode, FaUsers, FaBuilding, FaRobot, FaPhone } from 'react-icons/fa';

// Define the CTA buttons data in a clean, maintainable array
const ctaButtons = [
  {
    icon: <FaBookOpen size={28} />,
    title: "Start Learning",
    description: "Get AI-powered roadmaps, tasks, and certifications.",
    colors: "bg-blue-500",
  },
  {
    icon: <FaCode size={28} />,
    title: "Share Your Project",
    description: "Upload your work, get feedback, and build your profile.",
    colors: "bg-purple-500",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Become a Mentor",
    description: "Help students grow and make an impact on their careers.",
    colors: "bg-green-500",
  },
  {
    icon: <FaBuilding size={28} />,
    title: "Partner with Us",
    description: "Post real-world tasks and find skilled talent easily.",
    colors: "bg-yellow-500",
  },
  {
    icon: <FaRobot size={28} />,
    title: "Talk to Our AI",
    description: "Ask anything about courses, careers, or interviews.",
    colors: "bg-teal-500",
  },
  {
    icon: <FaPhone size={28} />,
    title: "Contact Us",
    description: "Need help or want to discuss a potential collaboration?",
    colors: "bg-pink-500",
  },
];

const CTAButton = ({ icon, title, description, colors }) => (
  <motion.div
    className="relative group p-6 md:p-8 bg-white rounded-2xl shadow-lg border border-gray-100
               transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
    whileHover={{ y: -5 }} // subtle lift on hover
  >
    {/* Animated color overlay */}
    <div className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
                     ${colors} group-hover:opacity-10`} />

    <div className="relative z-10 flex flex-col items-center text-center">
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white
                       ${colors} shadow-md`}>
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const CTASection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2,    // Trigger when 20% of the component is visible
  });

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
      <section className="bg-white/50 py-16 md:py-24" id="cta">
      <div className="container mx-auto px-4">
        {/* Main Heading and Subtitle */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Let’s Build the Future — Together
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you’re here to learn, guide, hire, or build — I-GYAN is your launchpad for career success.
          </p>
        </div>

        {/* Animated CTA Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {ctaButtons.map((button, index) => (
            <motion.div key={index} variants={itemVariants}>
              <CTAButton
                icon={button.icon}
                title={button.title}
                description={button.description}
                colors={button.colors}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;