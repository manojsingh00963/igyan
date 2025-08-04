import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// Define animation variants for staggered children
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the children by 0.1 seconds
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const textReveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Arjun Sharma',
      role: 'Founder & CEO',
      bio: 'Former Google AI researcher with 10+ years in EdTech. Passionate about democratizing quality education through AI.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20CEO%20portrait%2C%20confident%20expression%2C%20modern%20office%20background%2C%20business%20suit%2C%20tech%20entrepreneur&width=300&height=300&seq=team-1&orientation=squarish',
      linkedin: '#',
      twitter: '#',
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'CTO & Co-founder',
      bio: 'Ex-Microsoft engineer specializing in machine learning and scalable systems. Leading our AI-powered learning platform.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20CTO%20portrait%2C%20tech%20leader%2C%20modern%20workspace%20background%2C%20confident%20smile%2C%20engineering%20expert&width=300&height=300&seq=team-2&orientation=squarish',
      linkedin: '#',
      twitter: '#',
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      role: 'Head of Product',
      bio: 'Product strategist with experience at Flipkart and Amazon. Expert in building user-centric educational products.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20male%20product%20manager%20portrait%2C%20modern%20office%20setting%2C%20business%20casual%2C%20strategic%20thinker%20expression&width=300&height=300&seq=team-3&orientation=squarish',
      linkedin: '#',
      twitter: '#',
    },
    {
      id: 4,
      name: 'Sneha Gupta',
      role: 'Head of Learning',
      bio: 'Educational psychology expert with PhD from IIT. Designing curriculum that adapts to individual learning styles.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20female%20educational%20expert%2C%20warm%20smile%2C%20academic%20background%2C%20learning%20specialist%2C%20modern%20setting&width=300&height=300&seq=team-4&orientation=squarish',
      linkedin: '#',
      twitter: '#',
    },
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Founded I-GYAN',
      description: 'Started with a vision to revolutionize tech education in India',
    },
    {
      year: '2022',
      title: 'AI Platform Launch',
      description: 'Launched our AI-powered personalized learning platform',
    },
    {
      year: '2023',
      title: '10K+ Students',
      description: 'Reached milestone of 10,000 active learners',
    },
    {
      year: '2024',
      title: 'Industry Partnerships',
      description: 'Partnered with 500+ companies for direct hiring',
    },
  ];

  const values = [
    {
      title: 'Innovation First',
      description:
        'We constantly push the boundaries of educational technology to create better learning experiences.',
      icon: 'ri-lightbulb-line',
    },
    {
      title: 'Student Success',
      description:
        'Every decision we make is centered around helping our students achieve their career goals.',
      icon: 'ri-trophy-line',
    },
    {
      title: 'Quality Education',
      description:
        'We believe quality education should be accessible to everyone, regardless of background.',
      icon: 'ri-book-line',
    },
    {
      title: 'Community Driven',
      description:
        'We foster a supportive community where learners and mentors grow together.',
      icon: 'ri-team-line',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              I-GYAN
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize quality tech education by
            connecting learners with industry experts and providing personalized
            AI-powered learning experiences that adapt to individual needs and
            goals.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div
            variants={item}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
          >
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-target-line text-white text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To empower every aspiring technologist with personalized learning
              experiences, expert mentorship, and direct pathways to meaningful
              careers in technology. We believe that with the right guidance and
              resources, anyone can master complex skills and achieve their
              dreams.
            </p>
          </motion.div>
          <motion.div
            variants={item}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8"
          >
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <i className="ri-eye-line text-white text-2xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create a world where quality tech education is accessible to
              everyone, regardless of their background or location. We envision
              a future where AI-powered personalized learning makes skill
              acquisition faster, more effective, and more enjoyable than ever
              before.
            </p>
          </motion.div>
        </motion.div>

        {/* Our Story */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From a simple idea to revolutionizing tech education
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20Indian%20tech%20startup%20office%20with%20diverse%20team%20collaborating%2C%20brainstorming%20session%2C%20whiteboards%20with%20ideas%2C%20laptop%20computers%2C%20creative%20workspace%20environment%2C%20educational%20technology%20development&width=600&height=400&seq=story-image&orientation=landscape"
                  alt="I-GYAN founding story"
                  className="w-full h-auto rounded-xl shadow-lg object-cover object-top"
                />
              </div>
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <motion.p variants={item} className="text-lg text-gray-700 leading-relaxed mb-6">
                  I-GYAN was born from a simple observation: traditional
                  education wasn't keeping pace with the rapidly evolving tech
                  industry. Our founders, having experienced the challenges of
                  self-learning and career transitions firsthand, recognized the
                  need for a more personalized, mentor-driven approach to skill
                  development.
                </motion.p>
                <motion.p variants={item} className="text-lg text-gray-700 leading-relaxed mb-6">
                  Starting in a small co-working space in Bangalore, we began
                  by connecting a handful of learners with industry experts. What
                  started as manual matchmaking has evolved into a sophisticated
                  AI-powered platform that serves thousands of students across
                  India.
                </motion.p>
                <motion.p variants={item} className="text-lg text-gray-700 leading-relaxed">
                  Today, I-GYAN stands as a testament to the power of combining
                  human expertise with cutting-edge technology to create
                  transformative educational experiences.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  variants={item}
                  key={milestone.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                      <div className="text-sm font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div variants={item} key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate educators, technologists, and innovators working
              together to transform education
            </p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                variants={item}
                key={member.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href={member.NavLinkedin}
                      className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <i className="ri-NavLinkedin-line text-blue-600 text-sm"></i>
                    </a>
                    <a
                      href={member.twitter}
                      className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                    >
                      <i className="ri-twitter-line text-blue-600 text-sm"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-4xl font-bold mb-8">I-GYAN by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div variants={item}>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Active Students</div>
            </motion.div>
            <motion.div variants={item}>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Expert Mentors</div>
            </motion.div>
            <motion.div variants={item}>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Projects Completed</div>
            </motion.div>
            <motion.div variants={item}>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Job Placement Rate</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of students who have transformed their careers with
            personalized learning and expert mentorship
          </p>
          <div className="flex justify-center space-x-4">
            <NavLink
              href="/auth/signup"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all whitespace-nowrap"
            >
              Start Learning Free
            </NavLink>
            <NavLink
              href="/ai-guide"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all whitespace-nowrap"
            >
              Try AI Guide
            </NavLink>
          </div>
        </motion.div>
      </div>
    </div>
  );
}