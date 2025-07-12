import React from 'react'
import { Search, Sparkles } from 'lucide-react';
const Hero = ({ chatInput, setChatInput, onChatSubmit, isLoggedIn }) => {
    return (
        <section className="relative bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center mb-4">
                    <Sparkles className="w-8 h-8 text-blue-500 mr-2" />
                    <span className="text-blue-600 font-medium">Next-Gen Education Platform</span>
                </div>

                <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Learn. Build. Get Hired.
                    <span className="text-blue-600  dark:text-blue-400 block">Real Skills. Real Projects. Real Mentors.</span>
                </h2>

                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
                    Gain real-world skills, solve industry projects, and prove your talent through our AI-powered mentor-led platform — no degree needed
                </p>

                <div className="max-w-2xl mx-auto mb-12">
                    <div className="relative">
                        <div className="relative">
                            <input
                                type="text"
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                placeholder="Hi there! What do you want to learn today?"
                                className="w-full px-6 py-4 text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors shadow-lg"
                            />
                            <button
                                onClick={onChatSubmit}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                            >
                                <Search className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Try: "I want to learn finance" or "Help me become a freelancer"
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                        Courses Panel
                    </button>
                    <button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                        Explore Projects
                    </button>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
                        Mentor Feed
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">25Cr+</div>
                        <div className="text-gray-600 dark:text-gray-400">Learners in India</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">Real</div>
                        <div className="text-gray-600 dark:text-gray-400">Industry Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">No Degree</div>
                        <div className="text-gray-600 dark:text-gray-400">Required</div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Hero