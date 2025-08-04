import React, { useState } from 'react';
import {
  FaBuilding,
  FaUsers,
  FaProjectDiagram,
  FaCode,
  FaDesktop,
  FaChartLine,
  FaHandshake,
  FaAward,
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaArrowLeft,
  FaSearch,
  FaFilter,
  FaEye,
  FaHeart,
  FaStar,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaCalendarAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Companies = () => {
  const [selectedTab, setSelectedTab] = useState('projects'); // 'projects' or 'partnership'
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', count: 89, emoji: '🎯' },
    { name: 'Web Development', count: 32, emoji: '🌐' },
    { name: 'Mobile Apps', count: 24, emoji: '📱' },
    { name: 'Data Science', count: 18, emoji: '📊' },
    { name: 'AI/ML', count: 15, emoji: '🤖' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Recommendation Engine',
      company: 'TechCorp Solutions',
      companyLogo: '🏢',
      description: 'Build an AI-powered recommendation system for our e-commerce platform to improve user engagement and sales.',
      category: 'AI/ML',
      difficulty: 'Advanced',
      duration: '8-12 weeks',
      budget: '₹50,000 - ₹80,000',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'API Integration'],
      applicants: 45,
      deadline: '2024-02-15',
      location: 'Remote',
      featured: true,
      verified: true,
      requirements: 'Previous ML experience required, portfolio must include recommendation systems'
    },
    {
      id: 2,
      title: 'Mobile App for Healthcare',
      company: 'MediTech Innovations',
      companyLogo: '🏥',
      description: 'Develop a React Native app for patient management and telemedicine consultations.',
      category: 'Mobile Apps',
      difficulty: 'Intermediate',
      duration: '6-8 weeks',
      budget: '₹40,000 - ₹60,000',
      skills: ['React Native', 'Node.js', 'MongoDB', 'Video APIs'],
      applicants: 32,
      deadline: '2024-02-20',
      location: 'Hybrid (Bangalore)',
      featured: true,
      verified: true,
      requirements: 'Healthcare domain knowledge preferred, HIPAA compliance understanding'
    },
    {
      id: 3,
      title: 'Real-time Analytics Dashboard',
      company: 'DataFlow Systems',
      companyLogo: '📊',
      description: 'Create a real-time dashboard for monitoring business metrics and KPIs.',
      category: 'Web Development',
      difficulty: 'Intermediate',
      duration: '4-6 weeks',
      budget: '₹30,000 - ₹45,000',
      skills: ['React', 'D3.js', 'WebSockets', 'PostgreSQL'],
      applicants: 28,
      deadline: '2024-02-25',
      location: 'Remote',
      featured: false,
      verified: true,
      requirements: 'Experience with data visualization and real-time systems'
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain Solution',
      company: 'ChainTech Corp',
      companyLogo: '⛓️',
      description: 'Develop a blockchain-based solution for supply chain transparency and traceability.',
      category: 'Web Development',
      difficulty: 'Advanced',
      duration: '10-14 weeks',
      budget: '₹70,000 - ₹1,00,000',
      skills: ['Solidity', 'Web3', 'React', 'Smart Contracts'],
      applicants: 18,
      deadline: '2024-03-01',
      location: 'Remote',
      featured: false,
      verified: true,
      requirements: 'Blockchain development experience, understanding of supply chain processes'
    }
  ];

  const companies = [
    {
      name: 'TechCorp Solutions',
      logo: '🏢',
      industry: 'Technology',
      size: '500-1000 employees',
      location: 'Bangalore, India',
      description: 'Leading software development company specializing in enterprise solutions.',
      projects: 12,
      rating: 4.8,
      verified: true
    },
    {
      name: 'MediTech Innovations',
      logo: '🏥',
      industry: 'Healthcare',
      size: '200-500 employees',
      location: 'Mumbai, India',
      description: 'Healthcare technology company focused on digital health solutions.',
      projects: 8,
      rating: 4.9,
      verified: true
    },
    {
      name: 'DataFlow Systems',
      logo: '📊',
      industry: 'Analytics',
      size: '100-200 employees',
      location: 'Hyderabad, India',
      description: 'Data analytics and business intelligence solutions provider.',
      projects: 15,
      rating: 4.7,
      verified: true
    }
  ];

  const partnershipBenefits = [
    {
      title: 'Access to Top Talent',
      description: 'Connect with skilled students and fresh graduates',
      icon: '🎓',
      details: ['Pre-screened candidates', 'AI-verified skills', 'Portfolio reviews', 'Real project experience']
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Get quality work done at competitive rates',
      icon: '💰',
      details: ['Flexible pricing models', 'No recruitment costs', 'Performance-based payments', 'Escrow protection']
    },
    {
      title: 'Innovation & Fresh Ideas',
      description: 'Bring new perspectives to your projects',
      icon: '💡',
      details: ['Latest technology trends', 'Creative problem solving', 'Agile methodologies', 'Continuous learning']
    },
    {
      title: 'Mentorship Opportunities',
      description: 'Build your employer brand and give back',
      icon: '🤝',
      details: ['Brand visibility', 'Talent pipeline', 'CSR initiatives', 'Industry leadership']
    }
  ];

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-16 bg-gradient-warm relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-800"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
              Corporate Hub 🏢
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Connect with talent, post projects, and build the future together
            </p>
            
            {/* Toggle Buttons */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 flex">
                <button
                  onClick={() => setSelectedTab('projects')}
                  className={`px-6 py-3 rounded-xl transition-all ${
                    selectedTab === 'projects' ? 'bg-white text-blue-800 font-semibold' : 'text-white'
                  }`}
                >
                  Browse Projects
                </button>
                <button
                  onClick={() => setSelectedTab('partnership')}
                  className={`px-6 py-3 rounded-xl transition-all ${
                    selectedTab === 'partnership' ? 'bg-white text-blue-800 font-semibold' : 'text-white'
                  }`}
                >
                  Partner with Us
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-glass">
                Post a Project
              </button>
              <button className="btn-glass">
                View Talent Pool
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedTab === 'projects' ? (
        <>
          {/* Search & Filter */}
          <section className="py-8 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search projects, companies, technologies..."
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <button className="px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-700-glow transition-colors">
                    <FaFilter className="mr-2" />
                    Filter
                  </button>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedCategory(category.name)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        selectedCategory === category.name
                          ? 'bg-blue-700 text-white shadow-soft'
                          : 'bg-card border border-border hover:border-primary/50'
                      }`}
                    >
                      <span className="mr-2">{category.emoji}</span>
                      {category.name}
                      <span className="ml-2 text-xs opacity-70">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
                Featured Projects ⭐
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {filteredProjects.filter(p => p.featured).map((project) => (
                  <div key={project.id} className="card-glow group">
                    <div className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl group-hover:scale-110 transition-transform">
                            {project.companyLogo}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold group-hover:text-blue-800 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">{project.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {project.verified && (
                            <div className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                              <FaCheckCircle className="mr-1" />
                              Verified
                            </div>
                          )}
                          {project.featured && (
                            <div className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                              <FaAward className="mr-1" />
                              Featured
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{project.description}</p>

                      {/* Details Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Budget</div>
                          <div className="font-semibold text-blue-800">{project.budget}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Duration</div>
                          <div className="font-semibold">{project.duration}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Difficulty</div>
                          <div className="font-semibold">{project.difficulty}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Location</div>
                          <div className="font-semibold">{project.location}</div>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2 text-sm">Required Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-700/10 text-blue-800 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <FaUsers />
                            <span>{project.applicants} applicants</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaCalendarAlt />
                            <span>Deadline: {project.deadline}</span>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-3">
                        <button className="flex-1 bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-700-glow transition-colors">
                          Apply Now
                        </button>
                        <button className="px-4 py-3 border border-border rounded-xl hover:border-primary transition-colors">
                          <FaHeart />
                        </button>
                        <button className="px-4 py-3 border border-border rounded-xl hover:border-primary transition-colors">
                          <FaExternalLinkAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* All Projects */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center text-gradient">
                  All Projects ({filteredProjects.length})
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.filter(p => !p.featured).map((project) => (
                    <div key={project.id} className="card-glow group">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="text-2xl group-hover:scale-110 transition-transform">
                            {project.companyLogo}
                          </div>
                          <div>
                            <h3 className="font-bold group-hover:text-blue-800 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm">{project.company}</p>
                          </div>
                        </div>

                        {/* Quick Info */}
                        <div className="space-y-2 mb-4 text-sm">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Budget:</span>
                            <span className="font-semibold text-blue-800">{project.budget}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Duration:</span>
                            <span className="font-semibold">{project.duration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-muted-foreground">Applicants:</span>
                            <span className="font-semibold">{project.applicants}</span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {project.skills.slice(0, 3).map((skill, index) => (
                              <span key={index} className="px-2 py-1 bg-muted text-xs rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* CTA */}
                        <button className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-700-glow transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Partner Companies */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gradient">
                  Our Partner Companies 🤝
                </h2>
                <p className="text-xl text-muted-foreground">
                  Trusted by leading companies across industries
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {companies.map((company, index) => (
                  <div key={index} className="card-glow text-center">
                    <div className="p-6">
                      <div className="text-4xl mb-4">{company.logo}</div>
                      <h3 className="text-xl font-bold mb-2">{company.name}</h3>
                      <p className="text-muted-foreground mb-4">{company.description}</p>
                      
                      <div className="space-y-2 mb-4 text-sm">
                        <div><strong>Industry:</strong> {company.industry}</div>
                        <div><strong>Size:</strong> {company.size}</div>
                        <div><strong>Location:</strong> {company.location}</div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <FaProjectDiagram />
                          <span>{company.projects} projects</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaStar className="text-yellow-500" />
                          <span>{company.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Partnership Section */
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-8 text-gradient">
                  Partner with I-GYAN 🤝
                </h2>
                <p className="text-xl text-muted-foreground">
                  Unlock the potential of India's brightest minds for your business
                </p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {partnershipBenefits.map((benefit, index) => (
                  <div key={index} className="card-glow text-center">
                    <div className="p-6">
                      <div className="text-4xl mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground mb-4">{benefit.description}</p>
                      <ul className="space-y-1 text-sm">
                        {benefit.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-success mr-2">✓</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Partnership Form */}
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">How It Works</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold">Submit Partnership Request</h4>
                        <p className="text-muted-foreground text-sm">Fill out our partnership form with your requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold">Consultation Call</h4>
                        <p className="text-muted-foreground text-sm">Discuss your needs with our partnership team</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold">Get Matched</h4>
                        <p className="text-muted-foreground text-sm">Receive curated talent recommendations</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 className="font-semibold">Start Collaborating</h4>
                        <p className="text-muted-foreground text-sm">Begin working with selected candidates</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-glow">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Partnership Request Form</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">Company Name</label>
                        <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Contact Email</label>
                        <input type="email" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Company Size</label>
                        <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>Select Company Size</option>
                          <option>Startup (1-50 employees)</option>
                          <option>SME (51-500 employees)</option>
                          <option>Large (500+ employees)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Industry</label>
                        <input type="text" className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Partnership Type</label>
                        <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                          <option>Select Partnership Type</option>
                          <option>Project-based Hiring</option>
                          <option>Internship Program</option>
                          <option>Talent Pipeline</option>
                          <option>Mentorship Program</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2">Project Requirements</label>
                        <textarea className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" rows="4" placeholder="Describe your project needs, skills required, timeline, etc."></textarea>
                      </div>
                      <button type="submit" className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-700-glow transition-colors">
                        Submit Partnership Request
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-800">100+</div>
                  <div className="text-muted-foreground">Partner Companies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-800">500+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-800">95%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-800">₹2Cr+</div>
                  <div className="text-muted-foreground">Total Earnings</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Companies;