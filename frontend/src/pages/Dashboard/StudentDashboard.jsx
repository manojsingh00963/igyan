import React, { useState } from 'react';
import { FaBook, FaTrophy, FaProjectDiagram, FaCertificate, FaCalendar, FaBell, FaUser, FaChartLine, FaPlay, FaPause } from 'react-icons/fa';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const recentCourses = [
    { id: 1, title: 'React Fundamentals', progress: 75, nextLesson: 'State Management', duration: '45 min' },
    { id: 2, title: 'JavaScript ES6+', progress: 45, nextLesson: 'Async/Await', duration: '30 min' },
    { id: 3, title: 'UI/UX Design', progress: 90, nextLesson: 'Design Systems', duration: '60 min' }
  ];

  const achievements = [
    { id: 1, title: 'First Course Completed', icon: '🎓', date: '2024-01-15' },
    { id: 2, title: 'Project Master', icon: '🏆', date: '2024-01-20' },
    { id: 3, title: 'Code Warrior', icon: '⚔️', date: '2024-01-25' }
  ];

  const upcomingTasks = [
    { id: 1, title: 'Submit Portfolio Project', due: 'Tomorrow', priority: 'high' },
    { id: 2, title: 'Complete React Quiz', due: '3 days', priority: 'medium' },
    { id: 3, title: 'Watch Design Fundamentals', due: '1 week', priority: 'low' }
  ];

  const stats = [
    { label: 'Courses Completed', value: '12', icon: FaBook, color: 'text-blue-500' },
    { label: 'Projects Done', value: '8', icon: FaProjectDiagram, color: 'text-green-500' },
    { label: 'Certificates', value: '5', icon: FaCertificate, color: 'text-purple-500' },
    { label: 'Study Hours', value: '156', icon: FaChartLine, color: 'text-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      {/* Header */}
      <div className="bg-div border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Alex! 👋</h1>
            <p className="text-muted-foreground">Ready to continue your learning journey?</p>
          </div>
          <div className="flex items-center space-x-4">
            <button variant="outline" size="sm">
              <FaBell className="h-4 w-4 mr-2" />
              Notifications
            </button>
            <button variant="outline" size="sm">
              <FaUser className="h-4 w-4 mr-2" />
              Profile
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning */}
            <div>
              <divHeader>
                <divTitle className="flex items-center">
                  <FaPlay className="h-5 w-5 mr-2 text-primary" />
                  Continue Learning
                </divTitle>
                <divDescription>Pick up where you left off</divDescription>
              </divHeader>
              <divContent className="space-y-4">
                {recentCourses.map((course) => (
                  <div key={course.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{course.title}</h3>
                      <span className="text-sm text-muted-foreground">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">Next: {course.nextLesson}</span>
                      <span className="text-sm font-medium">{course.progress}%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div value={course.progress} className="flex-1" />
                      <button size="sm">Continue</button>
                    </div>
                  </div>
                ))}
              </divContent>
            </div>

            {/* Recent Achievements */}
            <div>
              <divHeader>
                <divTitle className="flex items-center">
                  <FaTrophy className="h-5 w-5 mr-2 text-yellow-500" />
                  Recent Achievements
                </divTitle>
              </divHeader>
              <divContent>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3 p-3 rounded-lg border">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">Earned on {achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </divContent>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <div>
              <divHeader>
                <divTitle className="flex items-center">
                  <FaCalendar className="h-5 w-5 mr-2 text-blue-500" />
                  Upcoming Tasks
                </divTitle>
              </divHeader>
              <divContent className="space-y-3">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="p-3 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm">{task.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        task.priority === 'high' ? 'bg-red-100 text-red-800' :
                        task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Due: {task.due}</p>
                  </div>
                ))}
              </divContent>
            </div>

            {/* Quick Actions */}
            <div>
              <divHeader>
                <divTitle>Quick Actions</divTitle>
              </divHeader>
              <divContent className="space-y-3">
                <button className="w-full justify-start">
                  <FaBook className="h-4 w-4 mr-2" />
                  Browse Courses
                </button>
                <button variant="outline" className="w-full justify-start">
                  <FaProjectDiagram className="h-4 w-4 mr-2" />
                  Submit Project
                </button>
                <button variant="outline" className="w-full justify-start">
                  <FaCertificate className="h-4 w-4 mr-2" />
                  View Certificates
                </button>
              </divContent>
            </div>

            {/* AI Study Assistant */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <divHeader>
                <divTitle className="text-primary">🤖 AI Study Buddy</divTitle>
                <divDescription>Get personalized learning recommendations</divDescription>
              </divHeader>
              <divContent>
                <button className="w-full">
                  Ask AI for Help
                </button>
              </divContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;