import React from 'react';
import {
  ArrowLeft, TrendingUp, DollarSign, Users, Building2,
  Clock, Target, Award, CheckCircle, ArrowRight,
  Briefcase, Star, BarChart3, Globe
} from 'lucide-react';

const RoadmapView = ({ 
  domain, 
  subdomain, 
  onBack, 
  darkMode 
}) => {
  const { roadmap } = subdomain;

  const PhaseCard = ({ phase, index, isLast }) => (
    <div className="relative">
      <div className={`relative overflow-hidden rounded-3xl transition-all duration-500 ${
        darkMode 
          ? 'bg-gray-800 border border-gray-700/50 backdrop-blur-sm' 
          : 'bg-white border border-gray-200/50 backdrop-blur-sm'
      } shadow-xl hover:shadow-2xl group`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
        
        <div className="relative p-8">
          <div className="flex items-center space-x-6 mb-6">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${domain.color}`}>
              <span className="text-white font-bold text-xl">{phase.phase}</span>
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {phase.title}
              </h3>
              <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {phase.duration}
              </p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Topics Covered:
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {phase.topics.map((topic, idx) => (
                <div key={idx} className={`flex items-center space-x-3 p-3 rounded ${
                  darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                }`}>
                  <CheckCircle size={16} className={`text-green-500 flex-shrink-0`} />
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`p-4 rounded-2xl ${
            darkMode ? 'bg-gray-700/30' : 'bg-gray-50'
          }`}>
            <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Learning Outcome:
            </h4>
            <p className={`text-lg font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {phase.outcome}
            </p>
          </div>
        </div>
      </div>
      
      {!isLast && (
        <div className="flex justify-center mt-6 mb-6">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg bg-gradient-to-br ${domain.color}`}>
            <ArrowRight size={24} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );

  const CareerPathCard = ({ path }) => (
    <div className={`relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
      darkMode 
        ? 'bg-gray-800 border border-gray-700/50 backdrop-blur-sm' 
        : 'bg-white border border-gray-200/50 backdrop-blur-sm'
    } shadow-xl hover:shadow-2xl group`}>
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
      
      <div className="relative p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${domain.color}`}>
            <Briefcase className="text-white" size={24} />
          </div>
          <div>
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {path.title}
            </h3>
            <p className={`text-lg font-semibold bg-gradient-to-r ${domain.color} bg-clip-text text-transparent`}>
              {path.salaryRange}
            </p>
          </div>
        </div>
        
        <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {path.description}
        </p>
        
        <div className="mb-6">
          <h4 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Key Skills:
          </h4>
          <div className="flex flex-wrap gap-2">
            {path.skills.map((skill, idx) => (
              <span key={idx} className={`px-3 py-2 rounded-full text-sm font-medium ${
                darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Job Roles:
          </h4>
          <div className="space-y-2">
            {path.roles.map((role, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <CheckCircle size={16} className="text-green-500" />
                <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center space-x-6 mb-12">
        <button
          onClick={onBack}
          className={`flex items-center space-x-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
            darkMode 
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700' 
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          } shadow-lg hover:shadow-xl`}
        >
          <ArrowLeft size={20} />
          <span>Back to Subdomain</span>
        </button>
        
        <div>
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {roadmap.overview.title}
          </h2>
          <p className={`text-lg mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {roadmap.overview.description}
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className={`relative overflow-hidden rounded-3xl mb-8 ${
        darkMode 
          ? `${domain.darkBgColor} border border-gray-700/50 backdrop-blur-sm` 
          : `${domain.bgColor} border border-gray-200/50 backdrop-blur-sm`
      } shadow-xl`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5`} />
        
        <div className="relative p-8">
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Career Overview
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}>
                <Clock size={24} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Duration</p>
              <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {roadmap.overview.totalDuration}
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}>
                <Target size={24} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Difficulty</p>
              <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {roadmap.overview.difficulty}
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}>
                <TrendingUp size={24} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Job Growth</p>
              <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {roadmap.marketInsights.jobGrowth}
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              }`}>
                <Globe size={24} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Remote Work</p>
              <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {roadmap.marketInsights.remoteOpportunities}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Insights */}
      <div className={`relative overflow-hidden rounded-3xl mb-8 ${
        darkMode 
          ? 'bg-gray-800 border border-gray-700/50 backdrop-blur-sm' 
          : 'bg-white border border-gray-200/50 backdrop-blur-sm'
      } shadow-xl`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5`} />
        
        <div className="relative p-8">
          <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Market Insights & Salary Expectations
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Salary Ranges
              </h4>
              <div className="space-y-4">
                <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-center">
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Junior Level
                    </span>
                    <span className={`font-bold text-lg bg-gradient-to-r ${domain.color} bg-clip-text text-transparent`}>
                      {roadmap.marketInsights.averageSalary.junior}
                    </span>
                  </div>
                </div>
                <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-center">
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Mid Level
                    </span>
                    <span className={`font-bold text-lg bg-gradient-to-r ${domain.color} bg-clip-text text-transparent`}>
                      {roadmap.marketInsights.averageSalary.mid}
                    </span>
                  </div>
                </div>
                <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-center">
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Senior Level
                    </span>
                    <span className={`font-bold text-lg bg-gradient-to-r ${domain.color} bg-clip-text text-transparent`}>
                      {roadmap.marketInsights.averageSalary.senior}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Top Hiring Companies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {roadmap.marketInsights.topCompanies.map((company, idx) => (
                  <div key={idx} className={`p-3 rounded text-center ${
                    darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                  }`}>
                    <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div>
        <h3 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Complete Learning Path
        </h3>
        <div className="space-y-8">
          {roadmap.learningPath.map((phase, index) => (
            <PhaseCard 
              key={phase.phase} 
              phase={phase} 
              index={index}
              isLast={index === roadmap.learningPath.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Career Paths */}
      <div>
        <h3 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Career Specializations
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {roadmap.careerPaths.map((path) => (
            <CareerPathCard key={path.id} path={path} />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className={`relative overflow-hidden rounded-3xl ${
        darkMode 
          ? 'bg-gray-800 border border-gray-700/50 backdrop-blur-sm' 
          : 'bg-white border border-gray-200/50 backdrop-blur-sm'
      } shadow-xl`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5`} />
        
        <div className="relative p-8">
          <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Skills You'll Master
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {roadmap.skills.technical.map((skill, idx) => (
                  <span key={idx} className={`px-4 py-2 rounded-full font-medium bg-gradient-to-r ${domain.color} text-white shadow-lg`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {roadmap.skills.soft.map((skill, idx) => (
                  <span key={idx} className={`px-4 py-2 rounded-full font-medium ${
                    darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapView;