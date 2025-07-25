import React, { useState } from 'react';
import { FaUsers, FaBook, FaChartLine, FaClock, FaCalendar, FaStar, FaMessage, FaPlus, FaEye } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const MentorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Active Students', value: '28', icon: FaUsers, color: 'text-blue-500' },
    { label: 'Courses Created', value: '6', icon: FaBook, color: 'text-green-500' },
    { label: 'Mentoring Hours', value: '142', icon: FaClock, color: 'text-purple-500' },
    { label: 'Avg Rating', value: '4.8', icon: FaStar, color: 'text-yellow-500' }
  ];

  const myStudents = [
    {
      id: 1,
      name: 'Arjun Patel',
      course: 'Full Stack Development',
      progress: 78,
      lastActive: '2 hours ago',
      nextSession: 'Tomorrow 2:00 PM',
      performance: 'Excellent'
    },
    {
      id: 2,
      name: 'Sneha Reddy',
      course: 'Data Science Basics',
      progress: 45,
      lastActive: '1 day ago',
      nextSession: 'Friday 10:00 AM',
      performance: 'Good'
    },
    {
      id: 3,
      name: 'Vikash Singh',
      course: 'UI/UX Design',
      progress: 92,
      lastActive: '3 hours ago',
      nextSession: 'Next week',
      performance: 'Outstanding'
    }
  ];

  const myCourses = [
    {
      id: 1,
      title: 'Complete React Development',
      students: 45,
      rating: 4.9,
      revenue: '₹1,25,000',
      completion: 89,
      published: true
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      students: 67,
      rating: 4.7,
      revenue: '₹98,000',
      completion: 76,
      published: true
    },
    {
      id: 3,
      title: 'Advanced Python Programming',
      students: 23,
      rating: 4.8,
      revenue: '₹67,000',
      completion: 94,
      published: true
    }
  ];

  const upcomingSessions = [
    { id: 1, student: 'Arjun Patel', time: '2:00 PM Today', topic: 'React Hooks Deep Dive', type: '1-on-1' },
    { id: 2, student: 'Group Session', time: '4:00 PM Today', topic: 'JavaScript Best Practices', type: 'Group' },
    { id: 3, student: 'Sneha Reddy', time: '10:00 AM Tomorrow', topic: 'Data Visualization', type: '1-on-1' }
  ];

  const recentMessages = [
    { id: 1, from: 'Arjun Patel', message: 'Can you help me with the API integration?', time: '10 min ago', unread: true },
    { id: 2, from: 'Sneha Reddy', message: 'Thank you for the feedback on my project!', time: '2 hours ago', unread: false },
    { id: 3, from: 'Vikash Singh', message: 'When is our next design review session?', time: '1 day ago', unread: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
      {/* Header */}
      <div className="bg-card border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Mentor Dashboard 👨‍🏫</h1>
            <p className="text-muted-foreground">Guide students and share your expertise</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button>
              <FaPlus className="h-4 w-4 mr-2" />
              Create Course
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
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold">{stat.value}</p>
                    </div>
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Students */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaUsers className="h-5 w-5 mr-2 text-primary" />
                  My Students
                </CardTitle>
                <CardDescription>Track your students' progress and engagement</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {myStudents.map((student) => (
                  <div key={student.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="font-semibold">{student.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            student.performance === 'Outstanding' ? 'bg-green-100 text-green-800' :
                            student.performance === 'Excellent' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {student.performance}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{student.course}</p>
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                          <span>Last active: {student.lastActive}</span>
                          <span>Next: {student.nextSession}</span>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        <FaMessage className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium">Progress: {student.progress}%</span>
                      <Progress value={student.progress} className="flex-1" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* My Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaBook className="h-5 w-5 mr-2 text-green-500" />
                  My Courses
                </CardTitle>
                <CardDescription>Manage and track your course performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {myCourses.map((course) => (
                  <div key={course.id} className="p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{course.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                          <span className="flex items-center">
                            <FaUsers className="h-4 w-4 mr-1" />
                            {course.students} students
                          </span>
                          <span className="flex items-center">
                            <FaStar className="h-4 w-4 mr-1 text-yellow-500" />
                            {course.rating}
                          </span>
                          <span className="font-semibold text-green-600">{course.revenue}</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Button size="sm">
                          <FaEye className="h-4 w-4 mr-1" />
                          View Analytics
                        </Button>
                        <span className="text-xs text-center text-muted-foreground">
                          {course.completion}% complete
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaCalendar className="h-5 w-5 mr-2 text-blue-500" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingSessions.map((session) => (
                  <div key={session.id} className="p-3 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{session.student}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        session.type === '1-on-1' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {session.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{session.topic}</p>
                    <p className="text-xs font-medium">{session.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Messages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FaMessage className="h-5 w-5 mr-2 text-green-500" />
                  Recent Messages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentMessages.map((message) => (
                  <div key={message.id} className={`p-3 border rounded-lg ${message.unread ? 'bg-primary/5 border-primary/20' : ''}`}>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-sm">{message.from}</h4>
                      {message.unread && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">{message.message}</p>
                    <p className="text-xs text-muted-foreground">{message.time}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View All Messages
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <FaPlus className="h-4 w-4 mr-2" />
                  Create New Course
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FaCalendar className="h-4 w-4 mr-2" />
                  Schedule Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FaChartLine className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* AI Teaching Assistant */}
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">🤖 AI Teaching Assistant</CardTitle>
                <CardDescription>Get AI-powered insights for better teaching</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  Get Teaching Tips
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;