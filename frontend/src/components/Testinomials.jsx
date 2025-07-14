// components/TestimonialSection.jsx
import React from 'react';

const testimonials = [
  {
    name: 'Riya Sharma',
    role: 'Student from Delhi',
    message: 'I-GYAN helped me get my first freelance job at 17. The roadmap was super clear and projects felt real!'
  },
  {
    name: 'Amit Desai',
    role: 'Mentor',
    message: 'I’ve mentored over 50 learners and love how this platform blends AI learning with real feedback.'
  },
  {
    name: 'Priya Tech Pvt Ltd',
    role: 'Company HR',
    message: 'We hired two interns directly through project submissions. It’s like LinkedIn + GitHub for students!'
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6" id="testimonials">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">💬 What People Are Saying</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
              <p className="text-sm text-gray-700 dark:text-gray-200 italic">“{t.message}”</p>
              <div className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">{t.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;