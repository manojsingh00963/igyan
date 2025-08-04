import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Testimonial data
const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Student from Delhi',
    message: 'I-GYAN helped me get my first freelance job at 17. The roadmap was super clear and projects felt real!',
    image: 'https://placehold.co/100x100/A3E635/1C3C0A?text=RS'
  },
  {
    name: 'Amit Desai',
    role: 'Mentor',
    message: 'I’ve mentored over 50 learners and love how this platform blends AI learning with real feedback.',
    image: 'https://placehold.co/100x100/34D399/0C4A28?text=AD'
  },
  {
    name: 'Priya Tech Pvt Ltd',
    role: 'Company HR',
    message: 'We hired two interns directly through project submissions. It’s like LinkedIn + GitHub for students!',
    image: 'https://placehold.co/100x100/60A5FA/1E40AF?text=PT'
  },
  {
    name: 'Sneha Patel',
    role: 'Successful Graduate',
    message: 'The career support and interview prep were a game-changer. I landed a job at my dream company!',
    image: 'https://placehold.co/100x100/FACC15/78350F?text=SP'
  },
];

// Animation variants for the testimonial slider
const testimonialVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

// Testimonial carousel component
const DynamicTestimonialSection = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentTestimonial = testimonials[page];

  return (
    <section className="bg-black/30 py-16 md:py-24" id="testimonials">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-10">
          What People Are Saying
        </h2>

        <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[250px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute w-full px-4"
            >
              <div className="relative bg-gray-50 p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 border border-gray-100">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md flex-shrink-0"
                />
                <div>
                  <p className="text-base md:text-lg text-gray-700 italic mb-4">
                    “{currentTestimonial.message}”
                  </p>
                  <div className="font-semibold text-lg text-blue-600">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentTestimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <button
            className="p-3 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
            onClick={() => paginate(-1)}
            disabled={page === 0}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="p-3 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition-colors"
            onClick={() => paginate(1)}
            disabled={page === testimonials.length - 1}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DynamicTestimonialSection;