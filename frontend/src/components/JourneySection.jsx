import { GraduationCap, Users, Building2 } from "lucide-react";

const roles = [
  {
    title: "🎓 Student",
    description: "Discover • Learn • Submit Projects",
    icon: GraduationCap,
    buttonText: "Join as Student",
    features: [
      "AI-powered learning paths",
      "Project submission & feedback",
      "Skill badges & certifications",
      "Career guidance",
    ],
  },
  {
    title: "👨‍🏫 Teacher",
    description: "Guide Students • Give Feedback",
    icon: Users,
    buttonText: "Join as Teacher",
    features: [
      "Create learning content",
      "Review student projects",
      "Conduct mentor sessions",
      "Earn from teaching",
    ],
  },
  {
    title: "🏢 Company HR",
    description: "Post Tasks • View Talent Dashboard",
    icon: Building2,
    buttonText: "Join as Company",
    features: [
      "Access talent pool",
      "Post hiring challenges",
      "Review portfolios",
      "AI-matched candidates",
    ],
  },
  {
    title: "🤖 IGYAN AI Assistant",
    description: "Smart tools for personalized learning & task management",
    icon: Building2,
    buttonText: "Join IGYAN AI Assistant",
    features: [
      "AI-generated task suggestions",
      "Support students & teachers",
      "Automated tracking & feedback",
      "Improve engagement using AI",
    ],
  },
];

export default function JourneySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Choose Your Journey</h2>
          <p className="text-xl text-muted-foreground">Different paths for different goals</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div
                key={index}
                className="rounded-lg border border-border bg-white hover:shadow-md p-6 transition duration-300 group"
              >
                <div className="text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-muted/60 transition">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                </div>

                <div className="text-center space-y-4 mt-4">
                  <p className="text-muted-foreground ">{role.description}</p>
                  <ul className="text-sm space-y-1 text-left">
                    {role.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <button className="w-full mt-4 py-2 px-4 border bg-blue-600 text-white rounded-md hover:bg-blue-800 transition">
                    {role.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
