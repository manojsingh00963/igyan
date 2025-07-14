const CTASection = () => {
    return (
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 px-6" id="cta">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build the Future — Together</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">Whether you’re here to learn, guide, hire, or build — I-GYAN is your launchpad.</p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CTAButton icon="📘" title="Start Learning" description="Get AI-powered roadmaps, tasks, and certifications." />
            <CTAButton icon="🚀" title="Share Your Project" description="Upload your work, get feedback, build your profile." />
            <CTAButton icon="👨‍🏫" title="Become a Mentor" description="Help students grow and make an impact." />
            <CTAButton icon="🏢" title="Partner with Us" description="Post real tasks, find skilled talent easily." />
            <CTAButton icon="💡" title="Talk to Our AI" description="Ask anything — courses, careers, interviews." />
            <CTAButton icon="📞" title="Contact Us" description="Need help or want to collaborate?" />
          </div>
  
          <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            🎓 12,000+ Students • 🧑‍🏫 900+ Mentors • 🏢 100+ Companies • 🛠️ 4,500+ Projects submitted
          </div>
        </div>
      </section>
    );
  };
  
  const CTAButton = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">Explore</button>
    </div>
  );
  
  export default CTASection;