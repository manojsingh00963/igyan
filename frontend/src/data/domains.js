// Centralized data structure for all domains, subdomains, courses, and roadmaps
export const domains = [
  {
    id: 'coding',
    title: 'Programming & Development',
    icon: 'Code',
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
    darkBgColor: 'bg-gradient-to-br from-blue-900/20 to-indigo-900/20',
    description: 'Master modern programming languages and frameworks',
    subdomains: [
      {
        id: 'web-dev',
        title: 'Full Stack Web Development',
        description: 'Complete web development from frontend to backend',
        duration: '12 weeks',
        level: 'Beginner to Advanced',
        students: '25,000+',
        rating: 4.8,
        marketDemand: 'Very High',
        avgSalary: '$75,000 - $120,000',
        jobGrowth: '+22% (2020-2030)',
        courses: [
          {
            id: 'fullstack-bootcamp',
            title: 'Complete Full Stack Bootcamp',
            duration: '12 weeks',
            level: 'Beginner to Advanced',
            students: '25,000+',
            rating: 4.8,
            description: 'Complete web development bootcamp covering frontend, backend, and deployment',
            modules: [
              {
                id: 'html-css',
                title: 'HTML & CSS Fundamentals',
                duration: '2 weeks',
                lessons: [
                  { id: 'html-intro', title: 'Introduction to HTML', type: 'video', duration: '45 min' },
                  { id: 'html-structure', title: 'HTML Document Structure', type: 'article', duration: '30 min' },
                  { id: 'css-basics', title: 'CSS Basics and Selectors', type: 'video', duration: '60 min' },
                  { id: 'css-layout', title: 'CSS Layout Techniques', type: 'article', duration: '45 min' },
                  { id: 'responsive-design', title: 'Responsive Web Design', type: 'video', duration: '90 min' }
                ]
              },
              {
                id: 'javascript',
                title: 'JavaScript Programming',
                duration: '3 weeks',
                lessons: [
                  { id: 'js-intro', title: 'JavaScript Fundamentals', type: 'video', duration: '75 min' },
                  { id: 'js-dom', title: 'DOM Manipulation', type: 'article', duration: '60 min' },
                  { id: 'js-events', title: 'Event Handling', type: 'video', duration: '45 min' },
                  { id: 'js-async', title: 'Asynchronous JavaScript', type: 'article', duration: '90 min' }
                ]
              },
              {
                id: 'react',
                title: 'React Development',
                duration: '4 weeks',
                lessons: [
                  { id: 'react-intro', title: 'Introduction to React', type: 'video', duration: '60 min' },
                  { id: 'react-components', title: 'Components and Props', type: 'article', duration: '45 min' },
                  { id: 'react-state', title: 'State Management', type: 'video', duration: '75 min' },
                  { id: 'react-hooks', title: 'React Hooks', type: 'article', duration: '90 min' }
                ]
              }
            ]
          }
        ],
        roadmap: {
          overview: {
            title: 'Full Stack Web Development Career Path',
            description: 'A comprehensive journey from beginner to professional full stack developer',
            totalDuration: '6-12 months',
            difficulty: 'Beginner to Advanced'
          },
          marketInsights: {
            demand: 'Very High',
            averageSalary: {
              junior: '$50,000 - $70,000',
              mid: '$70,000 - $100,000',
              senior: '$100,000 - $150,000+'
            },
            jobGrowth: '+22% (2020-2030)',
            topCompanies: ['Google', 'Meta', 'Amazon', 'Netflix', 'Spotify', 'Airbnb'],
            remoteOpportunities: '85% of positions offer remote work'
          },
          careerPaths: [
            {
              id: 'frontend-specialist',
              title: 'Frontend Specialist',
              description: 'Focus on user interfaces and user experience',
              skills: ['React', 'Vue.js', 'Angular', 'TypeScript', 'CSS/SASS', 'Webpack'],
              roles: ['Frontend Developer', 'UI Developer', 'React Developer'],
              salaryRange: '$60,000 - $120,000'
            },
            {
              id: 'backend-specialist',
              title: 'Backend Specialist',
              description: 'Focus on server-side logic and database management',
              skills: ['Node.js', 'Python', 'Java', 'Databases', 'APIs', 'Cloud Services'],
              roles: ['Backend Developer', 'API Developer', 'DevOps Engineer'],
              salaryRange: '$70,000 - $130,000'
            },
            {
              id: 'fullstack-developer',
              title: 'Full Stack Developer',
              description: 'Work on both frontend and backend systems',
              skills: ['React', 'Node.js', 'Databases', 'DevOps', 'System Design'],
              roles: ['Full Stack Developer', 'Software Engineer', 'Tech Lead'],
              salaryRange: '$75,000 - $150,000'
            }
          ],
          learningPath: [
            {
              phase: 1,
              title: 'Foundation',
              duration: '4-6 weeks',
              topics: ['HTML', 'CSS', 'JavaScript Basics', 'Git/GitHub'],
              outcome: 'Build static websites'
            },
            {
              phase: 2,
              title: 'Frontend Development',
              duration: '6-8 weeks',
              topics: ['React', 'State Management', 'API Integration', 'Responsive Design'],
              outcome: 'Build interactive web applications'
            },
            {
              phase: 3,
              title: 'Backend Development',
              duration: '6-8 weeks',
              topics: ['Node.js', 'Express', 'Databases', 'Authentication', 'APIs'],
              outcome: 'Build server-side applications'
            },
            {
              phase: 4,
              title: 'Full Stack Integration',
              duration: '4-6 weeks',
              topics: ['Full Stack Projects', 'Deployment', 'Testing', 'Performance'],
              outcome: 'Deploy complete applications'
            },
            {
              phase: 5,
              title: 'Advanced Topics',
              duration: '4-8 weeks',
              topics: ['System Design', 'Microservices', 'DevOps', 'Advanced Patterns'],
              outcome: 'Senior-level expertise'
            }
          ],
          skills: {
            technical: [
              'HTML/CSS/JavaScript',
              'React/Vue/Angular',
              'Node.js/Express',
              'Databases (SQL/NoSQL)',
              'RESTful APIs',
              'Git Version Control',
              'Cloud Platforms (AWS/Azure)',
              'Testing Frameworks'
            ],
            soft: [
              'Problem Solving',
              'Communication',
              'Team Collaboration',
              'Project Management',
              'Continuous Learning',
              'Attention to Detail'
            ]
          }
        }
      },
      {
        id: 'mobile-dev',
        title: 'Mobile App Development',
        description: 'Build native and cross-platform mobile applications',
        duration: '10 weeks',
        level: 'Intermediate',
        students: '18,000+',
        rating: 4.7,
        marketDemand: 'High',
        avgSalary: '$70,000 - $110,000',
        jobGrowth: '+19% (2020-2030)',
        courses: [
          {
            id: 'react-native-course',
            title: 'React Native Development',
            duration: '10 weeks',
            level: 'Intermediate',
            students: '18,000+',
            rating: 4.7,
            description: 'Build cross-platform mobile apps with React Native',
            modules: [
              {
                id: 'rn-basics',
                title: 'React Native Fundamentals',
                duration: '2 weeks',
                lessons: [
                  { id: 'rn-intro', title: 'Introduction to React Native', type: 'video', duration: '60 min' },
                  { id: 'rn-setup', title: 'Development Environment Setup', type: 'article', duration: '45 min' }
                ]
              }
            ]
          }
        ],
        roadmap: {
          overview: {
            title: 'Mobile App Development Career Path',
            description: 'Journey to becoming a professional mobile app developer',
            totalDuration: '8-12 months',
            difficulty: 'Intermediate to Advanced'
          },
          marketInsights: {
            demand: 'High',
            averageSalary: {
              junior: '$55,000 - $75,000',
              mid: '$75,000 - $110,000',
              senior: '$110,000 - $160,000+'
            },
            jobGrowth: '+19% (2020-2030)',
            topCompanies: ['Apple', 'Google', 'Uber', 'Instagram', 'WhatsApp', 'TikTok'],
            remoteOpportunities: '70% of positions offer remote work'
          },
          careerPaths: [
            {
              id: 'ios-developer',
              title: 'iOS Developer',
              description: 'Specialize in Apple ecosystem development',
              skills: ['Swift', 'Objective-C', 'Xcode', 'iOS SDK', 'App Store'],
              roles: ['iOS Developer', 'Swift Developer', 'Mobile Engineer'],
              salaryRange: '$70,000 - $140,000'
            },
            {
              id: 'android-developer',
              title: 'Android Developer',
              description: 'Focus on Android platform development',
              skills: ['Kotlin', 'Java', 'Android Studio', 'Android SDK', 'Google Play'],
              roles: ['Android Developer', 'Kotlin Developer', 'Mobile Engineer'],
              salaryRange: '$65,000 - $130,000'
            }
          ],
          learningPath: [
            {
              phase: 1,
              title: 'Mobile Fundamentals',
              duration: '3-4 weeks',
              topics: ['Mobile UI/UX', 'Platform Guidelines', 'Development Tools'],
              outcome: 'Understand mobile development basics'
            },
            {
              phase: 2,
              title: 'Platform Development',
              duration: '8-10 weeks',
              topics: ['Native Development', 'Cross-platform Tools', 'APIs', 'Storage'],
              outcome: 'Build functional mobile apps'
            }
          ],
          skills: {
            technical: [
              'Swift/Kotlin/React Native',
              'Mobile UI/UX Design',
              'RESTful APIs',
              'Local Storage',
              'Push Notifications',
              'App Store Optimization'
            ],
            soft: [
              'User-Centric Thinking',
              'Performance Optimization',
              'Cross-Platform Understanding'
            ]
          }
        }
      }
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: 'TrendingUp',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    darkBgColor: 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20',
    description: 'Learn modern marketing strategies and tools',
    subdomains: [
      {
        id: 'digital-marketing',
        title: 'Complete Digital Marketing',
        description: 'Master all aspects of digital marketing',
        duration: '10 weeks',
        level: 'Beginner',
        students: '15,000+',
        rating: 4.7,
        marketDemand: 'Very High',
        avgSalary: '$45,000 - $85,000',
        jobGrowth: '+10% (2020-2030)',
        courses: [
          {
            id: 'digital-marketing-mastery',
            title: 'Digital Marketing Mastery',
            duration: '10 weeks',
            level: 'Beginner',
            students: '15,000+',
            rating: 4.7,
            description: 'Master digital marketing from SEO to social media advertising',
            modules: [
              {
                id: 'marketing-fundamentals',
                title: 'Marketing Fundamentals',
                duration: '2 weeks',
                lessons: [
                  { id: 'marketing-intro', title: 'Introduction to Digital Marketing', type: 'video', duration: '60 min' },
                  { id: 'target-audience', title: 'Understanding Your Target Audience', type: 'article', duration: '45 min' }
                ]
              }
            ]
          }
        ],
        roadmap: {
          overview: {
            title: 'Digital Marketing Career Path',
            description: 'Comprehensive journey in digital marketing',
            totalDuration: '6-9 months',
            difficulty: 'Beginner to Advanced'
          },
          marketInsights: {
            demand: 'Very High',
            averageSalary: {
              junior: '$35,000 - $50,000',
              mid: '$50,000 - $75,000',
              senior: '$75,000 - $120,000+'
            },
            jobGrowth: '+10% (2020-2030)',
            topCompanies: ['Google', 'Facebook', 'HubSpot', 'Salesforce', 'Adobe'],
            remoteOpportunities: '90% of positions offer remote work'
          },
          careerPaths: [
            {
              id: 'seo-specialist',
              title: 'SEO Specialist',
              description: 'Focus on search engine optimization',
              skills: ['SEO', 'Google Analytics', 'Keyword Research', 'Content Strategy'],
              roles: ['SEO Specialist', 'SEO Manager', 'Content Strategist'],
              salaryRange: '$40,000 - $80,000'
            }
          ],
          learningPath: [
            {
              phase: 1,
              title: 'Marketing Basics',
              duration: '2-3 weeks',
              topics: ['Marketing Fundamentals', 'Consumer Psychology', 'Market Research'],
              outcome: 'Understand marketing principles'
            }
          ],
          skills: {
            technical: ['Google Analytics', 'SEO Tools', 'Social Media Platforms', 'Email Marketing'],
            soft: ['Creativity', 'Analytical Thinking', 'Communication', 'Adaptability']
          }
        }
      }
    ]
  },
  {
    id: 'business',
    title: 'Business & Entrepreneurship',
    icon: 'Briefcase',
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-violet-50',
    darkBgColor: 'bg-gradient-to-br from-purple-900/20 to-violet-900/20',
    description: 'Build and scale successful businesses',
    subdomains: [
      {
        id: 'startup-basics',
        title: 'Startup Fundamentals',
        description: 'Learn how to build and launch a successful startup',
        duration: '8 weeks',
        level: 'Beginner',
        students: '12,000+',
        rating: 4.6,
        marketDemand: 'High',
        avgSalary: '$60,000 - $120,000',
        jobGrowth: '+8% (2020-2030)',
        courses: [
          {
            id: 'startup-course',
            title: 'Startup Fundamentals',
            duration: '8 weeks',
            level: 'Beginner',
            students: '12,000+',
            rating: 4.6,
            description: 'Learn how to build and launch a successful startup',
            modules: [
              {
                id: 'business-planning',
                title: 'Business Planning & Strategy',
                duration: '2 weeks',
                lessons: [
                  { id: 'business-model', title: 'Business Model Canvas', type: 'article', duration: '45 min' },
                  { id: 'market-research', title: 'Market Research Techniques', type: 'video', duration: '60 min' }
                ]
              }
            ]
          }
        ],
        roadmap: {
          overview: {
            title: 'Entrepreneurship Career Path',
            description: 'Journey to becoming a successful entrepreneur',
            totalDuration: '12-18 months',
            difficulty: 'Intermediate to Advanced'
          },
          marketInsights: {
            demand: 'High',
            averageSalary: {
              junior: '$45,000 - $65,000',
              mid: '$65,000 - $100,000',
              senior: '$100,000 - $200,000+'
            },
            jobGrowth: '+8% (2020-2030)',
            topCompanies: ['Y Combinator', 'Techstars', 'AngelList', 'Sequoia Capital'],
            remoteOpportunities: '95% of positions offer remote work'
          },
          careerPaths: [
            {
              id: 'startup-founder',
              title: 'Startup Founder',
              description: 'Build and scale your own company',
              skills: ['Business Strategy', 'Leadership', 'Fundraising', 'Product Development'],
              roles: ['CEO', 'Founder', 'Co-founder'],
              salaryRange: '$50,000 - $500,000+'
            }
          ],
          learningPath: [
            {
              phase: 1,
              title: 'Business Fundamentals',
              duration: '4-6 weeks',
              topics: ['Business Planning', 'Market Research', 'Financial Planning'],
              outcome: 'Understand business basics'
            }
          ],
          skills: {
            technical: ['Business Planning', 'Financial Modeling', 'Market Analysis', 'Product Management'],
            soft: ['Leadership', 'Communication', 'Risk Management', 'Strategic Thinking']
          }
        }
      }
    ]
  },
  {
    id: 'design',
    title: 'Design & Creative',
    icon: 'Palette',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-gradient-to-br from-pink-50 to-rose-50',
    darkBgColor: 'bg-gradient-to-br from-pink-900/20 to-rose-900/20',
    description: 'Master visual design and creative skills',
    subdomains: [
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design Mastery',
        description: 'Complete UI/UX design course with hands-on projects',
        duration: '14 weeks',
        level: 'Beginner to Advanced',
        students: '18,000+',
        rating: 4.9,
        marketDemand: 'Very High',
        avgSalary: '$55,000 - $95,000',
        jobGrowth: '+13% (2020-2030)',
        courses: [
          {
            id: 'ui-ux-course',
            title: 'UI/UX Design Mastery',
            duration: '14 weeks',
            level: 'Beginner to Advanced',
            students: '18,000+',
            rating: 4.9,
            description: 'Complete UI/UX design course with hands-on projects',
            modules: [
              {
                id: 'design-principles',
                title: 'Design Principles & Theory',
                duration: '3 weeks',
                lessons: [
                  { id: 'design-thinking', title: 'Design Thinking Process', type: 'video', duration: '75 min' },
                  { id: 'color-theory', title: 'Color Theory & Psychology', type: 'article', duration: '60 min' }
                ]
              }
            ]
          }
        ],
        roadmap: {
          overview: {
            title: 'UI/UX Design Career Path',
            description: 'Journey to becoming a professional designer',
            totalDuration: '8-12 months',
            difficulty: 'Beginner to Advanced'
          },
          marketInsights: {
            demand: 'Very High',
            averageSalary: {
              junior: '$45,000 - $65,000',
              mid: '$65,000 - $95,000',
              senior: '$95,000 - $150,000+'
            },
            jobGrowth: '+13% (2020-2030)',
            topCompanies: ['Apple', 'Google', 'Adobe', 'Figma', 'Airbnb', 'Uber'],
            remoteOpportunities: '80% of positions offer remote work'
          },
          careerPaths: [
            {
              id: 'ui-designer',
              title: 'UI Designer',
              description: 'Focus on user interface design',
              skills: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'Visual Design'],
              roles: ['UI Designer', 'Visual Designer', 'Product Designer'],
              salaryRange: '$50,000 - $120,000'
            }
          ],
          learningPath: [
            {
              phase: 1,
              title: 'Design Fundamentals',
              duration: '4-6 weeks',
              topics: ['Design Principles', 'Color Theory', 'Typography', 'Layout'],
              outcome: 'Understand design basics'
            }
          ],
          skills: {
            technical: ['Figma', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
            soft: ['Creativity', 'Empathy', 'Communication', 'Problem Solving']
          }
        }
      }
    ]
  }
];

// Helper functions for data access
export const getDomainById = (domainId) => {
  return domains.find(domain => domain.id === domainId);
};

export const getSubdomainById = (domainId, subdomainId) => {
  const domain = getDomainById(domainId);
  return domain?.subdomains.find(subdomain => subdomain.id === subdomainId);
};

export const getCourseById = (domainId, subdomainId, courseId) => {
  const subdomain = getSubdomainById(domainId, subdomainId);
  return subdomain?.courses.find(course => course.id === courseId);
};