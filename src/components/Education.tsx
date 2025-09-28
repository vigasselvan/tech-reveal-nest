import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, BookOpen, Star } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      period: "2014 - 2018",
      gpa: "3.8/4.0",
      description: "Focused on software engineering, algorithms, and system design. Active member of the Computer Science club and hackathon participant.",
      achievements: [
        "Magna Cum Laude graduate",
        "Dean's List for 6 semesters",
        "Winner of UC Berkeley Hackathon 2017",
        "Research assistant in Machine Learning lab"
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Operating Systems",
        "Computer Networks",
        "Machine Learning",
        "Software Engineering"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Scalability"]
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-DEV-2022-445",
      skills: ["GCP Services", "Container Orchestration", "CI/CD", "Monitoring"]
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-REACT-2021-789",
      skills: ["React", "JavaScript", "Frontend Development", "Testing"]
    },
    {
      name: "MongoDB Developer Associate",
      issuer: "MongoDB University",
      date: "2021",
      credentialId: "MDB-DEV-2021-123",
      skills: ["NoSQL", "Database Design", "Aggregation", "Indexing"]
    }
  ];

  const continuousLearning = [
    {
      course: "Advanced TypeScript Patterns",
      platform: "Frontend Masters",
      date: "2024",
      hours: 40
    },
    {
      course: "Microservices with Node.js",
      platform: "Udemy",
      date: "2023",
      hours: 32
    },
    {
      course: "Machine Learning with Python",
      platform: "Coursera",
      date: "2023",
      hours: 60
    },
    {
      course: "DevOps with Kubernetes",
      platform: "Linux Academy",
      date: "2023",
      hours: 45
    }
  ];

  return (
    <section className="py-20 px-6 bg-navy-deep/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-purple-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solid academic foundation combined with continuous professional development and industry certifications.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            Formal Education
          </h3>
          
          {education.map((edu, index) => (
            <Card 
              key={edu.institution}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-foreground">
                      {edu.institution}
                    </CardDescription>
                  </div>
                  
                  <div className="flex flex-col gap-2 lg:items-end">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <Badge variant="outline" className="bg-success/20 text-success border-success/30">
                      GPA: {edu.gpa}
                    </Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    Achievements & Honors:
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <Badge key={course} variant="outline" className="text-xs">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.credentialId}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {cert.name}
                  </CardTitle>
                  <CardDescription className="flex flex-col gap-2">
                    <span className="font-medium text-foreground">{cert.issuer}</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Continuous Learning */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Continuous Learning
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {continuousLearning.map((course, index) => (
              <Card 
                key={`${course.course}-${course.date}`}
                className="bg-card/30 backdrop-blur-sm border-border/30 hover:border-primary/30 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    {course.course}
                  </h4>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div>{course.platform}</div>
                    <div>{course.date}</div>
                    <Badge variant="outline" className="text-xs">
                      {course.hours}h
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;