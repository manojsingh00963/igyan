import { GraduationCap, Users, Building2 } from "lucide-react";

export default function JourneySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Journey</h2>
          <p className="text-xl text-muted-foreground">Different paths for different goals</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Student */}
          <div className="rounded-lg border-2 hover:border-primary/30 p-6 shadow-sm transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">🎓 Student</h3>
            </div>
            <div className="text-center space-y-4 mt-4">
              <p className="text-muted-foreground">Discover • Learn • Submit Projects</p>
              <ul className="text-sm space-y-2 text-left">
                <li>• AI-powered learning paths</li>
                <li>• Project submission & feedback</li>
                <li>• Skill badges & certifications</li>
                <li>• Career guidance</li>
              </ul>
              <button className="w-full mt-4 py-2 px-4 bg-primary text-black rounded hover:bg-primary/80 transition">Join as Student</button>
            </div>
          </div>

          {/* Teacher */}
          <div className="rounded-lg border-2 hover:border-accent/30 p-6 shadow-sm transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">👨‍🏫 Teacher</h3>
            </div>
            <div className="text-center space-y-4 mt-4">
              <p className="text-muted-foreground">Guide Students • Give Feedback</p>
              <ul className="text-sm space-y-2 text-left">
                <li>• Create learning content</li>
                <li>• Review student projects</li>
                <li>• Conduct mentor sessions</li>
                <li>• Earn from teaching</li>
              </ul>
              <button className="w-full mt-4 py-2 px-4 bg-accent text-black rounded hover:bg-accent/80 transition">Join as Teacher</button>
            </div>
          </div>

          {/* Company */}
          <div className="rounded-lg border-2 hover:border-primary/30 p-6 shadow-sm transition-all duration-300 cursor-pointer group">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">🏢 Company HR</h3>
            </div>
            <div className="text-center space-y-4 mt-4">
              <p className="text-muted-foreground">Post Tasks • View Talent Dashboard</p>
              <ul className="text-sm space-y-2 text-left">
                <li>• Access talent pool</li>
                <li>• Post hiring challenges</li>
                <li>• Review portfolios</li>
                <li>• AI-matched candidates</li>
              </ul>
              <button className="w-full mt-4 py-2 px-4 bg-primary text-black rounded hover:bg-primary/80 transition">Join as Company</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
