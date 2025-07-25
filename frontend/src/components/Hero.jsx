import React, { useState } from 'react'
import { FaSearch, FaRobot } from "react-icons/fa";
import CTASection from './CTAsection';
import TestimonialSection from './Testinomials';
import JourneySection from './JourneySection';
import bgimg from "../assets/hero-ai-learning-ByJUC3BB.jpg"
import HowItWorks from './how-it-works';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineFileText, AiOutlineUpload, AiOutlineUsergroupAdd } from "react-icons/ai";

const features = [
    {
        icon: <AiOutlineCalendar className="w-6 h-6 text-primary" />,
        title: "🧠 AI Study Planner",
        description: "Personalized learning schedules that adapt to your pace and goals",
        bgFrom: "from-primary/5",
        bgTo: "to-primary/10",
        hoverBg: "group-hover:bg-blue-400",
        iconBg: "bg-blue-200",
    },
    {
        icon: <AiOutlineFileText className="w-6 h-6 text-accent" />,
        title: "🤖 Resume + Interview Bot",
        description: "AI-powered resume optimization and mock interview practice",
        bgFrom: "from-accent/5",
        bgTo: "to-accent/10",
        hoverBg: "group-hover:bg-accent/20",
        iconBg: "bg-accent/10",
    },
    {
        icon: <AiOutlineUpload className="w-6 h-6 text-primary" />,
        title: "📁 Upload Your Projects",
        description: "Showcase your work with automatic skill analysis and feedback",
        bgFrom: "from-primary/5",
        bgTo: "to-primary/10",
        hoverBg: "group-hover:bg-blue-400",
        iconBg: "bg-blue-200",
    },
    {
        icon: <AiOutlineUsergroupAdd className="w-6 h-6 text-accent" />,
        title: "👥 Join Mentor Sessions",
        description: "Connect with industry experts for personalized guidance",
        bgFrom: "from-accent/5",
        bgTo: "to-accent/10",
        hoverBg: "group-hover:bg-accent/20",
        iconBg: "bg-accent/10",
    },
];

const Hero = ({ isLoggedIn }) => {
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
                className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
                        <FaRobot className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-blue-500 sm:mr-2" />
                        <span className="text-sm sm:text-base lg:text-lg text-blue-600 font-medium text-center">
                            Next-Gen Education Platform
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
                        <span className="block mb-2 sm:mb-0 sm:inline">Learn. Build. Get Hired.</span>
                        <span className="text-blue-600 dark:text-blue-400 block mt-2 sm:mt-4">
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
                        <div className=" w-full my-4 mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-500">
                            {isTyping ? (
                                <div className="flex items-center space-x-2">
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
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
                                    className="w-full mx-2 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 text-sm sm:text-base lg:text-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors shadow-lg pr-12 sm:pr-14"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 sm:p-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md sm:rounded-lg transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
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
                            onClick={handleCoursesClick} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[48px] sm:min-h-[56px]">
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
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
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
                <section id="features" className="py-20 bg-gradient-to-b from-muted/20 to-background">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4">Powerful AI Features</h2>
                            <p className="text-xl text-muted-foreground">Everything you need for career success</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`group p-6 border-2 rounded-xl bg-gradient-to-br ${feature.bgFrom} ${feature.bgTo} hover:shadow-xl transition-all duration-300 cursor-pointer`}
                                >
                                    <div className={`w-12 h-12 rounded-lg ${feature.iconBg} flex items-center justify-center mb-4 ${feature.hoverBg} transition-colors`}>
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <JourneySection />
                <CTASection />
                <TestimonialSection />
            </div>
        </section>
    );
};

export default Hero