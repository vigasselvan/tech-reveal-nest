import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsRadar = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95, years: 4 },
        { name: "TypeScript", level: 90, years: 3 },
        { name: "Vue.js", level: 85, years: 2 },
        { name: "Tailwind CSS", level: 92, years: 3 },
        { name: "JavaScript", level: 98, years: 5 }
      ]
    },
    {
      category: "Backend Development", 
      skills: [
        { name: "Node.js", level: 88, years: 4 },
        { name: "Python", level: 85, years: 3 },
        { name: "PostgreSQL", level: 80, years: 2 },
        { name: "MongoDB", level: 82, years: 3 },
        { name: "Express.js", level: 90, years: 4 }
      ]
    },
    {
      category: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 78, years: 2 },
        { name: "Docker", level: 85, years: 3 },
        { name: "CI/CD", level: 75, years: 2 },
        { name: "Kubernetes", level: 65, years: 1 },
        { name: "Terraform", level: 70, years: 1 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95, years: 5 },
        { name: "VS Code", level: 98, years: 5 },
        { name: "Figma", level: 75, years: 2 },
        { name: "Jest", level: 85, years: 3 },
        { name: "GraphQL", level: 80, years: 2 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "bg-success";
    if (level >= 75) return "bg-primary";
    if (level >= 60) return "bg-cyan-bright";
    return "bg-muted";
  };

  return (
    <section className="py-20 px-6 bg-navy-deep/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-purple-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuously evolving skill set with hands-on experience across the full development stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.category} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  {category.category}
                  <Badge variant="outline" className="text-xs">
                    {category.skills.length} skills
                  </Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="animate-slide-in"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {skill.years} yr{skill.years !== 1 ? 's' : ''}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux", "Zustand", "Prisma", "tRPC", "Socket.io", "Stripe", 
              "Auth0", "Firebase", "Supabase", "Vercel", "Netlify", "GitHub Actions"
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="text-sm py-2 px-4 hover:bg-primary/20 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsRadar;