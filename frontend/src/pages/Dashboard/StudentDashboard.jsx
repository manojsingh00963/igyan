import React, { useState } from 'react';
import { 
  Book, Trophy, GitBranch, Award, Calendar, Bell, User, 
  TrendingUp, Play, Pause, CheckCircle, Clock, AlertCircle 
} from 'lucide-react';

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
    { label: 'Courses Completed', value: '12', icon: Book, color: 'text-blue-500' },
    { label: 'Projects Done', value: '8', icon: GitBranch, color: 'text-green-500' },
    { label: 'Certificates', value: '5', icon: Award, color: 'text-purple-500' },
    { label: 'Study Hours', value: '156', icon: TrendingUp, color: 'text-orange-500' }
  ];

  // Custom Button Component
  const Button = ({ children, variant = 'default', size = 'default', className = '', onClick, disabled = false, ...props }) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500'
    };
    
    const sizes = {
      sm: 'h-8 px-3 text-sm',
      default: 'h-10 px-4 py-2',
      lg: 'h-12 px-6 text-lg'
    };
    
    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  };

  // Custom Progress Component
  const Progress = ({ value, className = '' }) => {
    return (
      <div className={`w-full bg-gray-200 rounded-full h-2 ${className}`}>
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    );
  };

  // Custom Card Components
  const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
      {children}
    </div>
  );

  const CardHeader = ({ children }) => (
    <div className="p-6 pb-4">
      {children}
    </div>
  );

  const CardTitle = ({ children, className = '' }) => (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`}>
      {children}
    </h3>
  );

  const CardDescription = ({ children }) => (
    <p className="text-sm text-gray-600 mt-1">
      {children}
    </p>
  );

  const CardContent = ({ children }) => (
    <div className="p-6 pt-0">
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex! 👋</h1>
            <p className="text-gray-600">Ready to continue your learning journey?</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent>
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <IconComponent className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Continue Learning */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Play className="h-5 w-5 mr-2 text-blue-600" />
                  Continue Learning
                </CardTitle>
                <CardDescription>Pick up where you left off</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCourses.map((course) => (
                    <div key={course.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900">{course.title}</h3>
                        <span className="text-sm text-gray-600">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-600">Next: {course.nextLesson}</span>
                        <span className="text-sm font-medium text-gray-900">{course.progress}%</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Progress value={course.progress} className="flex-1" />
                        <Button size="sm">Continue</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
                  Recent Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center space-x-3 p-3 rounded-lg border bg-gray-50">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                        <p className="text-sm text-gray-600">Earned on {achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingTasks.map((task) => (
                    <div key={task.id} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm text-gray-900">{task.title}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          task.priority === 'high' ? 'bg-red-100 text-red-800' :
                          task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {task.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Due: {task.due}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full justify-start">
                    <Book className="h-4 w-4 mr-2" />
                    Browse Courses
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <GitBranch className="h-4 w-4 mr-2" />
                    Submit Project
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Award className="h-4 w-4 mr-2" />
                    View Certificates
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Study Assistant */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-700">🤖 AI Study Buddy</CardTitle>
                <CardDescription>Get personalized learning recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Ask AI for Help
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;