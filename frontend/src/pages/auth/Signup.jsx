import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub, FaUser, FaGraduationCap, FaBuilding } from 'react-icons/fa';

import { Card, CardContent, CardDescription, CardHeader, CardTitle , Input, Button,  } from '../../components/ui/progress'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    userType: 'student'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setFormData({
      ...formData,
      userType: type
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle signup logic here
    console.log('Signup attempt:', formData);
  };

  const userTypes = [
    { id: 'student', label: 'Student', icon: FaGraduationCap, desc: 'Learn new skills' },
    { id: 'mentor', label: 'Mentor', icon: FaUser, desc: 'Teach & guide' },
    { id: 'company', label: 'Company', icon: FaBuilding, desc: 'Hire talent' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            I-GYAN
          </h1>
          <p className="text-muted-foreground">Start your learning journey today</p>
        </div>

        <Card className="shadow-xl border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create Account</CardTitle>
            <CardDescription className="text-center">
              Join thousands of learners and educators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* User Type Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium">I am a</label>
              <div className="grid grid-cols-3 gap-2">
                {userTypes.map((type) => {
                  const IconComponent = type.icon;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleUserTypeChange(type.id)}
                      className={`p-3 rounded-lg border-2 transition-all text-center hover:scale-105 ${
                        userType === type.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <IconComponent className="h-5 w-5 mx-auto mb-1" />
                      <div className="text-xs font-medium">{type.label}</div>
                      <div className="text-xs text-muted-foreground">{type.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Confirm Password</label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <input type="checkbox" required className="rounded" />
                <span>I agree to the <Link to="/terms" className="text-primary hover:underline">Terms</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link></span>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Create Account
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <FaGoogle className="mr-2 h-4 w-4" />
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <FaGithub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>

            <div className="text-center text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;