import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, Code, Handshake, Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Stats data array
const statsData = [
  {
    icon: Users,
    value: 250000000,
    label: "Learners in India",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Code,
    value: 300,
    label: "Real Industry Projects",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Handshake,
    value: 100,
    isPercentage: true,
    label: "Skill-Based Hiring",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Briefcase,
    value: 200,
    label: "Hiring Partners",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const StatsGrid = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="text-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2, // stagger animation
              },
            },
          }}
        >
          {statsData.map((stat, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.5,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                className="text-center p-8 text-black rounded-xl  
                           transition-transform duration-300 hover:scale-105 group"
                variants={cardVariants}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                               ${stat.bgColor} ${stat.color} transition-colors duration-300 group-hover:bg-opacity-80`}
                >
                  <stat.icon size={32} />
                </div>
                <div className="text-2xl font-extrabold mb-1">
                  <CountUp
                    start={0}
                    end={inView ? stat.value : 0}
                    duration={8}
                    separator=","
                    suffix={stat.isPercentage ? "%" : "+"}
                  />
                </div>
                <div className="text-sm md:text-base text-gray-900">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsGrid;
