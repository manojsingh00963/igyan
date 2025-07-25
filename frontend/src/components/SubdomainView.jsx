import React from 'react';
import {
  ArrowLeft, Clock, Users, Star, TrendingUp, DollarSign,
  BookOpen, Map, ChevronRight, Award, Target, BarChart3
} from 'lucide-react';

const SubdomainView = ({ 
  domain, 
  subdomains, 
  onBack, 
  onSubdomainSelect, 
  darkMode 
}) => {
  return (
    <div className="space-y-8">
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
          <span>Back to Domains</span>
        </button>
        
        <div className={`w-16 h-16 bg-gradient-to-br ${domain.color} rounded-2xl flex items-center justify-center shadow-xl`}>
          <domain.icon className="text-white" size={28} />
        </div>
        
        <div>
          <h2 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            {domain.title}
          </h2>
          <p className={`text-lg mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {domain.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {subdomains.map(subdomain => (
          <div
            key={subdomain.id}
            className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
              darkMode 
                ? 'bg-gray-800 border border-gray-700/50 backdrop-blur-sm' 
                : 'bg-white border border-gray-200/50 backdrop-blur-sm'
            } shadow-xl hover:shadow-2xl`}
          >
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${domain.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <div className="relative p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {subdomain.title}
                </h3>
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold text-sm shadow-lg">
                  <Star size={16} className="fill-current" />
                  <span>{subdomain.rating}</span>
                </div>
              </div>
              
              <p className={`text-lg mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {subdomain.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock size={18} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Duration
                    </span>
                  </div>
                  <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {subdomain.duration}
                  </p>
                </div>
                
                <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <Users size={18} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Students
                    </span>
                  </div>
                  <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {subdomain.students}
                  </p>
                </div>
                
                <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <TrendingUp size={18} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Demand
                    </span>
                  </div>
                  <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {subdomain.marketDemand}
                  </p>
                </div>
                
                <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-3 mb-2">
                    <DollarSign size={18} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      Avg Salary
                    </span>
                  </div>
                  <p className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                    {subdomain.avgSalary}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => onSubdomainSelect(subdomain, 'course')}
                  className={`group/btn flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-r ${domain.color} text-white shadow-lg hover:shadow-xl transform hover:scale-105`}
                >
                  <BookOpen size={20} />
                  <span>Start Course</span>
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button
                  onClick={() => onSubdomainSelect(subdomain, 'roadmap')}
                  className={`group/btn flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  } shadow-lg hover:shadow-xl transform hover:scale-105`}
                >
                  <Map size={20} />
                  <span>View Roadmap</span>
                  <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Level Badge */}
              <div className="mt-6 flex justify-center">
                <span className={`px-6 py-2 rounded-full font-semibold text-sm ${
                  darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                } shadow-lg`}>
                  {subdomain.level}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubdomainView;