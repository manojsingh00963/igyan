import React, { useState } from "react";
import { Book, Code, Trophy, Briefcase, X, BookOpen, Users, Building2 } from "lucide-react";

const HowItWorks = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [loginType, setLoginType] = useState('learner');
  const [isSignUp, setIsSignUp] = useState(false);
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

  return (
    <section id="work-flow-id">
      <div className="container w-full pt-8 md:pt-12 pb-8 md:pb-12 bg-gray-50 dark:bg-gray-800">
        <div className="working-heading p-2 md:p-4">
          <div className="heading-work text-center dark:text-white text-gray-800 font-bold text-3xl md:text-5xl mb-2">
            How I-GYAN Works
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
                ${selectedIndex === index ? "bg-blue-600 text-white shadow-lg scale-105" : "bg-white text-gray-700 hover:bg-blue-50"} 
                hover:scale-105 py-3 md:py-4 px-6 sm:px-8 md:px-12 lg:px-20 
                border border-gray-200 mb-2 sm:mb-0 sm:mx-1 rounded-lg font-medium shadow-sm`}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-center px-2">
          {content[selectedIndex]}
        </div>
        <div className="get-a-quote justify-center mt-8 md:mt-12 flex flex-wrap px-4">
          <div className="text-center bg-blue-600 text-white p-6 md:p-8 rounded-3xl shadow-lg max-w-lg"> 
            <span className="text-lg md:text-xl font-semibold block mb-4">
              Ready to Transform Your Career?
            </span>
            <button 
              onClick={() => setShowLogin(true)}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200 shadow-md">
              START YOUR JOURNEY TODAY
            </button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {isSignUp ? 'Join I-GYAN' : 'Welcome to I-GYAN'}
              </h2>
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Login Selection */}
            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">I am a:</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setLoginType('learner')}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    loginType === 'learner'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <BookOpen className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-sm font-medium">Learner</div>
                </button>
                <button
                  onClick={() => setLoginType('mentor')}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    loginType === 'mentor'
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <Users className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-sm font-medium">Mentor</div>
                </button>
                <button
                  onClick={() => setLoginType('company')}
                  className={`p-3 rounded-lg border-2 transition-colors ${
                    loginType === 'company'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                      : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                  }`}
                >
                  <Building2 className="h-6 w-6 mx-auto mb-1" />
                  <div className="text-sm font-medium">Company</div>
                </button>
              </div>
            </div>

            {/* Auth Form */}
            <div className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email or Phone
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors"
                  placeholder="Enter your email or phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors"
                  placeholder="Enter your password"
                />
              </div>
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 bg-white dark:bg-gray-700 transition-colors"
                    placeholder="Confirm your password"
                  />
                </div>
              )}
              <button
                onClick={() => {
                  setShowLogin(false);
                  console.log("User logged in successfully as:", loginType);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {isSignUp ? 'Create Account & Continue' : 'Login & Continue'}
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button 
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {isSignUp ? 'Sign in' : 'Sign up now'}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;