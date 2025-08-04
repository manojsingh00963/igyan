import React, { useState } from 'react'
import { FaSearch, FaRobot } from "react-icons/fa";
import CTASection from './CTAsection';
import TestimonialSection from './Testinomials';
import JourneySection from './JourneySection';
import bgimg from "../assets/hero-ai-learning-ByJUC3BB.jpg"
import HowItWorks from './how-it-works';
import { useNavigate } from 'react-router-dom';
import { Calendar, FileText, Upload, Users, Cpu, Brain, Sun, Moon } from "lucide-react";

const features = [
    {
        icon: <Calendar className="w-6 h-6 text-pink-400" />,
        title: "AI Study Planner",
        description: "Personalized learning schedules that adapt to your pace and goals",
        bgFrom: "from-pink-500/10",
        bgTo: "to-rose-600/10",
        iconBg: "bg-pink-500/20",
        hoverBg: "group-hover:bg-pink-400/30",
        glowColor: "shadow-pink-500/25"
    },
    {
        icon: <FileText className="w-6 h-6 text-indigo-400" />,
        title: "Resume + Interview Bot",
        description: "AI-powered resume optimization and mock interview practice",
        bgFrom: "from-indigo-500/10",
        bgTo: "to-red-600/10",
        iconBg: "bg-indigo-500/20",
        hoverBg: "group-hover:bg-indigo-400/30",
        glowColor: "shadow-indigo-500/25"
    },
    {
        icon: <Upload className="w-6 h-6 text-blue-400" />,
        title: "Upload Your Projects",
        description: "Showcase your work with automatic skill analysis and feedback",
        bgFrom: "from-indigo-600/10",
        bgTo: "to-cyan-600/10",
        iconBg: "bg-indigo-600/20",
        hoverBg: "group-hover:bg-blue-400/30",
        glowColor: "shadow-indigo-600/25"
    },
    {
        icon: <Users className="w-6 h-6 text-purple-400" />,
        title: "Join Mentor Sessions",
        description: "Connect with industry experts for personalized guidance",
        bgFrom: "from-purple-500/10",
        bgTo: "to-indigo-600/10",
        iconBg: "bg-purple-500/20",
        hoverBg: "group-hover:bg-purple-400/30",
        glowColor: "shadow-purple-500/25"
    }
];

const Hero = ({ isLoggedIn, isDarkMode=false }) => {
    const [isDark, setIsDark] = useState(isDarkMode);

const toggleTheme = () => {
  setIsDark((prev) => !prev);
};
    const navigate = useNavigate();
    const handleCoursesClick = () => {
        navigate('/courses');
    }

    const [chatInput, setChatInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [aiResponse, setAiResponse] = useState('');

    const onChatSubmit = (e) => {
        e.preventDefault();
        if (!chatInput.trim()) return;

        setIsTyping(true);
        setAiResponse('');

        setTimeout(() => {
            const responses = [
                "🎯 Perfect! I'll create a personalized learning roadmap for you. Based on your interests, I recommend starting with Python fundamentals, then moving to data analysis and machine learning. Expected timeline: 3-4 months with daily practice!",
                "🚀 Exciting choice! Here's your web development journey: HTML/CSS → JavaScript → React → Node.js → Full-stack projects. I'll connect you with mentor projects and real companies looking for these skills!",
                "💡 Great question! For digital marketing, you'll master: SEO, social media strategy, content creation, and analytics. I've found 3 live projects from startups where you can apply these skills immediately!"
            ];

            setAiResponse(responses[Math.floor(Math.random() * responses.length)]);
            setIsTyping(false);
        }, 2000);
    };

    return (
        <section className="relative bg-blue-50 overflow-hidden">
            {/* Hero Section */}
            <section
                className="relative py-6 sm:py-8 md:py-12 lg:py-14 xl:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
                }}
            >
                {/* Overlay for low opacity background */}
                <div className="absolute inset-0 bg-white/70 dark:bg-black/60" style={{ zIndex: 1 }}></div>

                <div className="relative max-w-7xl mx-auto text-center" style={{ zIndex: 2 }}>
                    {/* Badge */}
                    <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                        <FaRobot className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-indigo-600 sm:mr-2" />
                        <span className="text-sm sm:text-base lg:text-lg text-indigo-600 font-medium text-center">
                            Next-Gen Education Platform
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 leading-tight px-2 sm:px-0">
                        <span className="block mb-2 sm:mb-0 sm:inline">Learn. Build. Get Hired.</span>
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">

                        <span className="text-indigo-700 dark:text-blue-400 block  typing-text"
                        >
                            Real Skills. Real Projects. Real Mentors.
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                        Gain real-world skills, solve industry projects, and prove your talent through our AI-powered mentor-led platform — no degree needed
                    </p>

                    {/* Search Input */}
                    {/* AI Response */}
                    {(isTyping || aiResponse) && (
                        <div className=" w-full my-4 mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-indigo-600">
                            {isTyping ? (
                                <div className="flex items-center space-x-2">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"></div>
                                    <span className="text-gray-600">AI is thinking...</span>
                                </div>
                            ) : (
                                <p className="text-gray-700 leading-relaxed">{aiResponse}</p>
                            )}
                        </div>
                    )}
                    <div className="bg-white/50 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12 p-10 sm:px-0 rounded-xl shadow-md">
                        <form onSubmit={onChatSubmit} className="flex w-full items-center space-x-4">
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    value={chatInput}
                                    onChange={(e) => setChatInput(e.target.value)}
                                    placeholder="Hi there! What do you want to learn today?"
                                    className="w-full mx-2 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:border-indigo-600 dark:focus:border-blue-400 transition-colors shadow-lg pr-12 sm:pr-14"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 sm:p-2.5 bg-indigo-600 hover:bg-blue-700 text-white rounded-md sm:rounded-lg transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                                >
                                    <FaSearch className="h-4 w-4 sm:h-5 sm:w-5" />
                                </button>
                            </div>
                        </form>

                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 px-2 sm:px-0">
                            Try: "I want to learn finance" or "Help me become a freelancer"
                        </p>
                    </div>


                    {/* Action Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-14 lg:mb-16 px-2 sm:px-0">
                        <button
                            onClick={handleCoursesClick} className="w-full sm:w-auto bg-indigo-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] sm:min-h-[56px]">
                            Courses Panel
                        </button>
                        <button className="w-full sm:w-auto bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 px-6 sm:px-8 py-3 sm:py-4 rounded-3xl sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] sm:min-h-[56px]">
                            Explore Projects
                        </button>
                        <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] sm:min-h-[56px]">
                            Mentor Feed
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
                        <div className="text-center p-4 sm:p-0">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-indigo-600 dark:text-blue-400 mb-1 sm:mb-2">
                                25Cr+
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-tight">
                                Learners in India
                            </div>
                        </div>
                        <div className="text-center p-4 sm:p-0">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-1 sm:mb-2">
                                Real
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-tight">
                                Industry Projects
                            </div>
                        </div>
                        <div className="text-center p-4 sm:p-0 sm:col-span-1 col-span-1">
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1 sm:mb-2">
                                No Degree
                            </div>
                            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-tight">
                                Required
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Additional Sections */}
            <div className="relative z-10">
                <HowItWorks />

                {/* Feature Cards */}
                <div className={isDarkMode ? 'dark' : ''}>
                    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="fixed top-6 right-6 z-50 p-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200 dark:border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
                            ) : (
                                <Moon className="w-5 h-5 text-slate-600 group-hover:-rotate-12 transition-transform duration-300" />
                            )}
                        </button>

                        {/* Animated Grid Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 dark:opacity-20"></div>

                        {/* Glowing Orbs */}
                        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-200/20 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                        <section id="features" className="relative py-20 px-4">
                            <div className="container mx-auto max-w-7xl">
                                {/* Header */}
                                <div className="text-center mb-16">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100/80 dark:bg-cyan-500/10 border border-cyan-200/60 dark:border-cyan-500/20 rounded-full mb-6 backdrop-blur-sm">
                                        <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                                        <span className="text-sm font-medium text-cyan-700 dark:text-cyan-400 tracking-wide">AI-POWERED PLATFORM</span>
                                    </div>

                                    <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-cyan-600 to-purple-600 dark:from-white dark:via-cyan-200 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
                                        Next-Generation
                                        <br />
                                        <span className="text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text">
                                            Career Intelligence
                                        </span>
                                    </h2>

                                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                        Harness the power of artificial intelligence to accelerate your career with precision-engineered tools
                                    </p>
                                </div>

                                {/* Features Grid */}
                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className={`group relative p-6 border border-gray-200 dark:border-slate-800 rounded-2xl bg-gradient-to-br ${feature.bgFrom} ${feature.bgTo} ${feature.darkBgFrom} ${feature.darkBgTo} backdrop-blur-sm hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-xl ${feature.glowColor} ${feature.darkGlowColor} transition-all duration-500 cursor-pointer transform hover:-translate-y-1`}
                                        >
                                            {/* Corner Accent */}
                                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 dark:from-white/5 to-transparent rounded-tr-2xl rounded-bl-full"></div>

                                            {/* Icon Container */}
                                            <div className={`relative w-12 h-12 rounded-xl ${feature.iconBg} ${feature.darkIconBg} ${feature.hoverBg} ${feature.darkHoverBg} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                                                <div className="absolute inset-0 bg-gradient-to-r from-white/30 dark:from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                {feature.icon}
                                            </div>

                                            {/* Content */}
                                            <h3 className="text-lg font-bold mb-3 text-slate-800 dark:text-white group-hover:text-slate-900 dark:group-hover:text-cyan-100 transition-colors duration-300">
                                                {feature.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                                                {feature.description}
                                            </p>

                                            {/* Hover Effect Line */}
                                            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 w-0 group-hover:w-full transition-all duration-500 rounded-full"></div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom CTA */}
                                <div className="text-center mt-16">
                                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 dark:hover:shadow-cyan-500/25 cursor-pointer shadow-lg">
                                        <Brain className="w-5 h-5" />
                                        <span>Experience AI-Powered Career Growth</span>
                                        <div className="w-2 h-2 bg-white rounded-full animate-pulse ml-1"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <JourneySection />
                <CTASection />
                <TestimonialSection />
            </div>
        </section>
    );
};

export default Hero