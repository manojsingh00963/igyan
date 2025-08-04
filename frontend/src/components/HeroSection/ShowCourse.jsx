import React from "react";
import { BookOpen, Code, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from '../../context/AuthContext';

const buttonsData = [
  {
    label: "Courses Panel",
    icon: BookOpen,
    onClick: () => { console.log("Courses Panel Clicked"); },
    colors: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700",
  },
  {
    label: "Explore Projects",
    icon: Code,
    onClick: () => { console.log("Explore Projects Clicked"); },
    colors: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700",
  },
  {
    label: "Mentor Feed",
    icon: Users,
    onClick: () => { console.log("Mentor Feed Clicked"); },
    colors: "bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700",
  },
];

const ActionButtons = ({ handleCoursesClick }) => {
  const { isLoggedIn } = useAuth(); // Assuming useAuth provides isLoggedIn state

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15, // Staggers the animation of each button
        duration: 0.5
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {buttonsData.map((button, index) => {
        const Icon = button.icon;
        const buttonAction = button.label === "Courses Panel" ? handleCoursesClick : button.onClick;
        
        return (
          <motion.button
            key={index}
            onClick={buttonAction}
            className={`
              w-full sm:w-auto px-8 py-4 rounded-full font-bold text-base lg:text-lg
              transition-all duration-300 ease-in-out
              shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[56px]
              flex items-center justify-center gap-2
              ${button.colors}
            `}
            variants={buttonVariants}
          >
            <Icon size={20} />
            <span>{button.label}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ActionButtons;
