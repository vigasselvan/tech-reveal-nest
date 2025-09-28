import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Leading development of enterprise-scale applications serving 100K+ users. Architected microservices infrastructure that improved system performance by 40%. Mentoring junior developers and establishing development best practices.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Led team of 5 developers on critical product features",
        "Implemented CI/CD pipeline reducing deployment time by 75%",
        "Increased test coverage from 40% to 95%"
      ],
      technologies: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL", "Docker"]
    },
    {
      company: "StartupFlow Inc",
      position: "Full Stack Developer",
      location: "Austin, TX",
      duration: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained multiple customer-facing applications in a fast-paced startup environment. Built responsive web applications and RESTful APIs from concept to deployment.",
      achievements: [
        "Built 3 major product features that increased user engagement by 35%",
        "Optimized database queries improving response time by 50%",
        "Integrated payment systems processing $2M+ transactions",
        "Collaborated with design team to improve UX metrics"
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Redis", "Stripe", "GCP"]
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "Remote",
      duration: "2019 - 2020",
      type: "Contract",
      description: "Delivered high-quality responsive websites and web applications for diverse clients. Worked closely with designers and project managers to meet tight deadlines and exceed client expectations.",
      achievements: [
        "Completed 15+ client projects with 100% satisfaction rate",
        "Improved average page load speed by 45% across projects",
        "Implemented accessibility standards achieving WCAG 2.1 compliance",
        "Trained 3 junior developers on modern frontend practices"
      ],
      technologies: ["React", "JavaScript", "Sass", "WordPress", "PHP", "MySQL"]
    },
    {
      company: "FreelanceHub",
      position: "Web Developer",
      location: "Remote",
      duration: "2018 - 2019",
      type: "Freelance",
      description: "Provided web development services to small businesses and startups. Specialized in creating modern, responsive websites with focus on performance and user experience.",
      achievements: [
        "Built 20+ websites for various industries",
        "Achieved average client satisfaction score of 4.9/5",
        "Increased client website traffic by average of 60%",
        "Established long-term partnerships with 5 recurring clients"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "PHP"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time": return "bg-success/20 text-success";
      case "Contract": return "bg-primary/20 text-primary";
      case "Freelance": return "bg-purple-accent/20 text-purple-accent";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-cyan-bright bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Over 5 years of professional development experience, from freelance projects to enterprise applications.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={`${exp.company}-${exp.position}`}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {exp.position}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-lg">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium text-foreground">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-col gap-2 lg:items-end">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <Badge className={getTypeColor(exp.type)}>
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;