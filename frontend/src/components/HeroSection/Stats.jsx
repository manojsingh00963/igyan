import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Users, Code, Handshake, Briefcase } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Define the stats data in a clean, centralized array
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
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.5,    // Trigger when 50% of the component is visible
  });

  // Animation variants for the cards
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
    <section className="  text-black">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Impact, by the Numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            See the scale of our community and the opportunities we create.
          </p>
        </div> */}

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8  text-black rounded-xl  
                         transition-transform duration-300 hover:scale-105 group"
              variants={cardVariants}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center
                             ${stat.bgColor} ${stat.color} transition-colors duration-300 group-hover:bg-opacity-80`}
              >
                <stat.icon size={32} />
              </div>
              <div className={` text-black text-2xl font-extrabold mb-1
                               bg-clip-text text-transparent bg-gradient-to-r ${stat.color} to-current`}>
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  separator=","
                  suffix={stat.isPercentage ? "%" : "+"}
                  enableScrollSpy={true} // Triggers the animation on scroll
                  scrollSpyOnce={true}
                />
              </div>
              <div className="text-sm md:text-base text-gray-900">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsGrid;
