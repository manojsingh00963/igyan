import React, { useState } from "react";
import { Book, Code, Trophy, Briefcase, BookOpen } from "lucide-react";
import LoginModal from "./LoginModal";
import { useAuth } from '../context/AuthContext';

const HowItWorks = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { isLoggedIn, setShowLogin } = useAuth();
  
  const buttons = ["Learn", "Build", "Show", "Get Hired"];

  const content = {
    0: <div className="flex flex-col md:flex-row justify-center working-explain0 p-4">
      <div className="details flex flex-col mb-6 md:mb-0 md:ml-2">
        <span className="text-blue-600 text-xl md:text-2xl font-bold flex items-center">
          <Book className="mr-2" size={28} /> Learn
        </span>
        <span className="text-base md:text-lg ml-6 md:ml-10 mt-2">
          AI-personalized learning paths with interactive content tailored to your skill level and career goals.
        </span>
        <span className="text-base md:text-lg ml-6 md:ml-10 mt-1">
          Access comprehensive courses, tutorials, and resources designed by industry experts.
        </span>
        <span className="text-base md:text-lg ml-6 md:ml-10 mt-1">
          Track your progress and adapt your learning journey in real-time.
        </span>
      </div>
      <div className="working-media mx-auto md:ml-8">
        <div className="rounded-3xl w-full max-w-xs md:max-w-md bg-gradient-to-br from-blue-100 to-blue-200 p-8 flex items-center justify-center">
          <Book size={120} className="text-blue-600 opacity-70" />
        </div>
      </div>
    </div>,

    1: <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 max-w-6xl working-explain1 p-4">
      <div className="working-media mx-auto mb-6 md:mb-0 md:ml-8 md:flex-1 order-1 md:order-none">
        <div className="rounded-3xl w-full max-w-xs md:max-w-md bg-gradient-to-br from-purple-100 to-purple-200 p-8 flex items-center justify-center">
          <Code size={120} className="text-purple-600 opacity-70" />
        </div>
      </div>
      <div className="details md:flex-1 flex flex-col">
        <span className="text-purple-600 text-xl md:text-2xl font-bold flex items-center">
          <Code className="mr-2" size={28} /> Build
        </span>
        <br />
        <div className="text-base md:text-lg ml-4 md:ml-8">
          Create real projects with mentor guidance to build your portfolio and gain hands-on experience.
          Work on industry-relevant projects that showcase your skills to potential employers.
          <br />
          <br />
          Get personalized feedback from experienced mentors who guide you through complex challenges.
          Collaborate with peers on team projects that simulate real workplace environments.
          <br />
          <br />
          Build a diverse portfolio that demonstrates your technical abilities and problem-solving skills
          across various domains and technologies.
        </div>
      </div>
    </div>,

    2: <div className="flex flex-col md:flex-row justify-center gap-4 max-w-6xl working-explain2 p-4">
      <div className="details md:flex-1 flex flex-col mb-6 md:mb-0">
        <span className="text-yellow-600 text-xl md:text-2xl font-bold flex items-center">
          <Trophy className="mr-2" size={28} /> Show
        </span>
        <br />
        <div className="text-base md:text-lg ml-4 md:ml-8">
          Showcase your work in our talent marketplace where employers actively search for skilled professionals.
          Create a compelling profile that highlights your projects, skills, and achievements.
          <br />
          <br />
          Participate in coding challenges, hackathons, and competitions to demonstrate your expertise.
          Get recognized by industry leaders and build your professional network.
          <br />
          <br />
          Receive detailed analytics on profile views, project engagement, and employer interest
          to optimize your visibility and marketability.
        </div>
      </div>
      <div className="working-media mx-auto md:ml-8 md:flex-1">
        <div className="rounded-3xl w-full max-w-xs md:max-w-md bg-gradient-to-br from-yellow-100 to-yellow-200 p-8 flex items-center justify-center">
          <Trophy size={120} className="text-yellow-600 opacity-70" />
        </div>
      </div>
    </div>,

    3: <div className="flex flex-col md:flex-row justify-center gap-4 max-w-6xl working-explain3 p-4">
      <div className="working-media mx-auto mb-6 md:mb-0 md:ml-8 md:flex-1 order-1 md:order-none">
        <div className="rounded-3xl w-full max-w-xs md:max-w-md bg-gradient-to-br from-green-100 to-green-200 p-8 flex items-center justify-center">
          <Briefcase size={120} className="text-green-600 opacity-70" />
        </div>
      </div>
      <div className="details md:flex-1 flex flex-col">
        <span className="text-green-600 text-xl md:text-2xl font-bold flex items-center">
          <Briefcase className="mr-2" size={28} /> Get Hired
        </span>
        <br />
        <div className="text-base md:text-lg ml-4 md:ml-8">
          Connect with companies actively hiring through our extensive network of industry partners.
          Get matched with opportunities that align with your skills, interests, and career goals.
          <br/>
          <br/>
          Receive interview preparation support, resume optimization, and career guidance from our placement team.
          Access exclusive job openings and fast-track recruitment processes.
          <br/>
          <br/>
          Join a community of successful graduates who have landed positions at top companies.
          Get ongoing career support and alumni networking opportunities to accelerate your professional growth.
        </div>
      </div>
    </div>
  }

  const handleStartJourney = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      // User is already logged in, redirect to dashboard or courses
      // You can navigate to a specific route here
      console.log('User is logged in, redirecting to dashboard...');
      // Example: navigate('/dashboard') or navigate('/courses')
    }
  };

  return (
    <section id="work-flow-id">
      <div className="container w-full pt-8 md:pt-12 pb-8 md:pb-12 bg-gray-50 dark:bg-gray-800">
        <div className="working-heading p-2 md:p-4">
          <div className="heading-work text-center dark:text-white text-gray-800 font-bold text-3xl md:text-5xl mb-2">
            How I-GYAN.AI Works
          </div>
          <div className="text-center text-gray-600 dark:text-white text-lg md:text-xl mb-8">
            Your journey from learning to career success
          </div>
          <div className="work-flow flex flex-wrap justify-center mt-4 md:mt-8 mb-4 md:mb-8">
            {buttons.map((label, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`text-sm sm:text-base md:text-xl transition-all duration-300 w-full sm:w-auto 
                ${selectedIndex === index ? "bg-blue-600 text-white shadow-lg scale-105" : "bg-white text-gray-700 hover:bg-blue-50 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"} 
                hover:scale-105 py-3 md:py-4 px-6 sm:px-8 md:px-12 lg:px-20 
                border border-gray-200 dark:border-gray-600 mb-2 sm:mb-0 sm:mx-1 rounded-lg font-medium shadow-sm`}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center px-2">
          {content[selectedIndex]}
        </div>
        <div className="get-a-quote justify-center mt-8 md:mt-12 flex flex-wrap px-4">
          <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 md:p-8 rounded-3xl shadow-lg max-w-lg border border-blue-500/20"> 
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="mr-2" size={24} />
              <span className="text-lg md:text-xl font-semibold">
                Ready to Transform Your Career?
              </span>
            </div>
            <p className="text-blue-100 text-sm md:text-base mb-6">
              {isLoggedIn 
                ? "Continue your learning journey and unlock new opportunities!"
                : "Join thousands of learners and start your journey to success today!"
              }
            </p>
            <button 
              onClick={handleStartJourney}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center mx-auto gap-2">
              {isLoggedIn ? (
                <>
                  <BookOpen size={16} />
                  <span>CONTINUE LEARNING</span>
                </>
              ) : (
                <>
                  <span>START YOUR JOURNEY TODAY</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* LoginModal will be rendered by AuthContext when showLogin is true */}
      <LoginModal />
    </section>
  );
};

export default HowItWorks;