import React, { useState } from 'react';
import {
  Code, TrendingUp, Briefcase, Palette,
  ChevronRight, ChevronDown, Play, FileText, 
  CheckCircle, Clock, Users, Star, ArrowLeft, BookOpen
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import RoadmapView from '../components/RoadmapView';
import SubdomainView from '../components/SubdomainView';
import { domains, getDomainById, getSubdomainById, getCourseById } from '../data/domains';

const CourseModulePage = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selectedSubdomain, setSelectedSubdomain] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [viewMode, setViewMode] = useState('course'); // 'course' or 'roadmap'
  const [expandedModules, setExpandedModules] = useState({});
  const [progress, setProgress] = useState({});

  // Use context providers
  const { isDarkMode } = useTheme();
  const { isLoggedIn, user, setShowLogin } = useAuth();

  // Icon mapping for dynamic rendering
  const iconMap = {
    Code,
    TrendingUp,
    Briefcase,
    Palette
  };

  // Progress tracking functions
  const markLessonComplete = (courseId, moduleId, lessonId) => {
    const progressKey = `${courseId}-${moduleId}-${lessonId}`;
    setProgress(prev => ({
      ...prev,
      [progressKey]: !prev[progressKey]
    }));
  };

  const getModuleProgress = (courseId, moduleId) => {
    const domain = getDomainById(selectedDomain);
    const subdomain = getSubdomainById(selectedDomain, selectedSubdomain);
    const course = subdomain?.courses.find(c => c.id === courseId);
    const module = course?.modules.find(m => m.id === moduleId);

    if (!module) return 0;

    const completedLessons = module.lessons.filter(lesson =>
      progress[`${courseId}-${moduleId}-${lesson.id}`]
    ).length;

    return Math.round((completedLessons / module.lessons.length) * 100);
  };

  const getCourseProgress = (courseId) => {
    const domain = getDomainById(selectedDomain);
    const subdomain = getSubdomainById(selectedDomain, selectedSubdomain);
    const course = subdomain?.courses.find(c => c.id === courseId);
    if (!course) return 0;

    const totalLessons = course.modules.reduce((acc, module) => acc + module.lessons.length, 0);
    const completedLessons = course.modules.reduce((acc, module) => {
      return acc + module.lessons.filter(lesson =>
        progress[`${courseId}-${module.id}-${lesson.id}`]
      ).length;
    }, 0);

    return Math.round((completedLessons / totalLessons) * 100);
  };

  const toggleModuleExpansion = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const requireLogin = (action) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return false;
    }
    return true;
  };

  const handleDomainClick = (domain) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    
    if (user?.type !== 'learner') {
      alert('Only learners can access courses. Please login as a learner.');
      return;
    }
    
    setSelectedDomain(domain.id);
  };

  const handleSubdomainSelect = (subdomain, mode) => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    
    if (user?.type !== 'learner') {
      alert('Only learners can access courses. Please login as a learner.');
      return;
    }
    
    setSelectedSubdomain(subdomain.id);
    setViewMode(mode);
    if (mode === 'course' && subdomain.courses.length > 0) {
      setSelectedCourse(subdomain.courses[0].id);
    }
  };

  const renderDomainGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {domains.map(domain => {
        const IconComponent = iconMap[domain.icon] || Code;
        return (
          <div
            key={domain.id}
            onClick={() => handleDomainClick(domain)}
            className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${isDarkMode
                ? `${domain.darkBgColor} border border-gray-700/50 backdrop-blur-sm`
                : `${domain.bgColor} border border-white/20 backdrop-blur-sm`
              } shadow-xl`}
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${domain.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="text-white" size={window.innerWidth < 640 ? 24 : window.innerWidth < 1024 ? 28 : 36} />
              </div>

              <h3 className={`text-lg sm:text-xl lg:text-xl font-bold mb-2 sm:mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${domain.color} group-hover:bg-clip-text transition-all duration-300`}>
                {domain.title}
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} line-clamp-3`}>
                {domain.description}
              </p>

              <div className="flex items-center justify-between">
                <div className={`flex items-center text-xs sm:text-sm font-semibold bg-gradient-to-r ${domain.color} bg-clip-text text-transparent`}>
                  <span>Start Learning</span>
                </div>

                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br ${domain.color} flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity duration-300`}>
                  <ChevronRight size={window.innerWidth < 640 ? 16 : 20} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderCourseModules = () => {
    const domain = getDomainById(selectedDomain);
    const subdomain = getSubdomainById(selectedDomain, selectedSubdomain);
    const course = subdomain?.courses.find(c => c.id === selectedCourse);
    if (!course) return null;

    return (
      <div className="space-y-6 sm:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8 sm:mb-12">
          <button
            onClick={() => {
              setSelectedCourse(null);
              setSelectedSubdomain(null);
            }}
            className={`flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 ${isDarkMode
                ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              } shadow-lg hover:shadow-xl`}
          >
            <ArrowLeft size={18} />
            <span className="text-sm sm:text-base">Back to Subdomains</span>
          </button>

          <div className="text-center sm:text-left">
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {course.title}
            </h2>
            <p className={`text-base sm:text-lg mt-1 sm:mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {course.description}
            </p>
          </div>
        </div>

        <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl mb-6 sm:mb-8 ${isDarkMode
            ? `${domain.darkBgColor} border border-gray-700/50 backdrop-blur-sm`
            : `${domain.bgColor} border border-gray-200/50 backdrop-blur-sm`
          } shadow-xl`}>
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5`} />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-4 sm:space-y-0">
              <h3 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} text-center sm:text-left`}>
                Course Overview
              </h3>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700 shadow-lg'
                  }`}>
                  {course.level}
                </div>
                <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold shadow-lg text-sm sm:text-base">
                  <Star size={14} className="fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </div>

            <div className="mb-4 sm:mb-6">
              <div className="flex justify-between items-center mb-2 sm:mb-3">
                <span className={`text-xs sm:text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Overall Progress
                </span>
                <span className={`text-lg sm:text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {getCourseProgress(course.id)}%
                </span>
              </div>
              <div className={`w-full bg-gray-200 rounded-full h-3 sm:h-4 ${isDarkMode ? 'bg-gray-700' : ''} overflow-hidden`}>
                <div
                  className={`h-3 sm:h-4 rounded-full transition-all duration-700 bg-gradient-to-r ${domain.color} shadow-lg`}
                  style={{ width: `${getCourseProgress(course.id)}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center shadow-lg`}>
                  <Clock size={18} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
                <div>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
                  <p className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center shadow-lg`}>
                  <Users size={18} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
                <div>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Students</p>
                  <p className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{course.students}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 sm:col-span-2 lg:col-span-1">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-white'} flex items-center justify-center shadow-lg`}>
                  <BookOpen size={18} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
                <div>
                  <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Modules</p>
                  <p className={`font-semibold text-sm sm:text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{course.modules.length} Modules</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {course.modules.map((module, index) => (
            <div
              key={module.id}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-500 ${isDarkMode
                  ? 'bg-gray-800 border border-gray-700/50 backdrop-blur-sm'
                  : 'bg-white border border-gray-200/50 backdrop-blur-sm'
                } shadow-xl hover:shadow-2xl`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

              <div
                className="relative p-4 sm:p-6 lg:p-8 cursor-pointer"
                onClick={() => toggleModuleExpansion(module.id)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg ${getModuleProgress(course.id, module.id) === 100
                        ? 'bg-gradient-to-br from-green-500 to-emerald-600'
                        : `bg-gradient-to-br ${domain.color}`
                      }`}>
                      {getModuleProgress(course.id, module.id) === 100 ? (
                        <CheckCircle className="text-white" size={window.innerWidth < 640 ? 20 : window.innerWidth < 1024 ? 24 : 28} />
                      ) : (
                        <span className="text-white font-bold text-sm sm:text-base lg:text-lg">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {module.title}
                      </h3>
                      <p className={`text-sm sm:text-base lg:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {module.duration} • {module.lessons.length} lessons
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end space-x-4 sm:space-x-6">
                    <div className="text-center sm:text-right">
                      <div className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                        {getModuleProgress(course.id, module.id)}%
                      </div>
                      <div className={`w-20 sm:w-24 bg-gray-200 rounded-full h-2 sm:h-3 ${isDarkMode ? 'bg-gray-700' : ''} overflow-hidden`}>
                        <div
                          className={`h-2 sm:h-3 rounded-full transition-all duration-700 ${getModuleProgress(course.id, module.id) === 100
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                              : `bg-gradient-to-r ${domain.color}`
                            }`}
                          style={{ width: `${getModuleProgress(course.id, module.id)}%` }}
                        />
                      </div>
                    </div>
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center transition-all duration-300`}>
                      {expandedModules[module.id] ? (
                        <ChevronDown size={20} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      ) : (
                        <ChevronRight size={20} className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {expandedModules[module.id] && (
                <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} bg-gradient-to-r ${domain.color} bg-opacity-5`}>
                  {module.lessons.map((lesson, lessonIndex) => {
                    const isCompleted = progress[`${course.id}-${module.id}-${lesson.id}`];
                    return (
                      <div
                        key={lesson.id}
                        className={`p-4 sm:p-6 border-b last:border-b-0 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 hover:bg-gradient-to-r hover:${domain.color} hover:bg-opacity-10 transition-all duration-300 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'
                          }`}
                      >
                        <div className="flex items-center space-x-4 sm:space-x-6">
                          <div className="flex items-center space-x-3 sm:space-x-4">
                            <button
                              onClick={() => markLessonComplete(course.id, module.id, lesson.id)}
                              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted
                                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg'
                                  : isDarkMode
                                    ? 'border-2 border-gray-500 hover:border-green-500 hover:bg-green-500 hover:text-white'
                                    : 'border-2 border-gray-300 hover:border-green-500 hover:bg-green-500 hover:text-white'
                                }`}
                            >
                              {isCompleted && <CheckCircle size={16} />}
                            </button>
                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg ${lesson.type === 'video'
                                ? 'bg-gradient-to-br from-red-500 to-pink-600 text-white'
                                : 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white'
                              }`}>
                              {lesson.type === 'video' ? <Play size={18} /> : <FileText size={18} />}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className={`text-base sm:text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                              {lesson.title}
                            </h4>
                            <p className={`text-xs sm:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {lesson.type === 'video' ? 'Video Lesson' : 'Reading Material'} • {lesson.duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center sm:justify-end">
                          <button
                            onClick={() => {
                              if (requireLogin()) {
                                setSelectedModule(lesson.id);
                              }
                            }}
                            className={`w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 text-sm sm:text-base ${lesson.type === 'video'
                                ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white shadow-lg hover:shadow-xl'
                                : 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl'
                              }`}
                          >
                            {lesson.type === 'video' ? 'Watch Now' : 'Read Now'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      }`}>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {!selectedDomain && (
          <div className="text-center mb-12 sm:mb-16">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
              Choose Your
              <span className="block pb-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Learning Path
              </span>
            </h1>
            <p className={`text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
              Explore our comprehensive course modules designed by industry experts
              and start your transformation journey today
            </p>
          </div>
        )}

        {!selectedDomain && renderDomainGrid()}
        {selectedDomain && !selectedSubdomain && (
          <SubdomainView
            domain={getDomainById(selectedDomain)}
            subdomains={getDomainById(selectedDomain)?.subdomains || []}
            onBack={() => setSelectedDomain(null)}
            onSubdomainSelect={handleSubdomainSelect}
            darkMode={isDarkMode}
          />
        )}
        {selectedDomain && selectedSubdomain && viewMode === 'roadmap' && (
          <RoadmapView
            domain={getDomainById(selectedDomain)}
            subdomain={getSubdomainById(selectedDomain, selectedSubdomain)}
            onBack={() => {
              setSelectedSubdomain(null);
              setViewMode('course');
            }}
            darkMode={isDarkMode}
          />
        )}
        {selectedDomain && selectedCourse && renderCourseModules()}
      </main>
    </div>
  );
};

export default CourseModulePage;