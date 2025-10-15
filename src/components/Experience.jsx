import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Leading development of enterprise-scale applications serving 100K+ users. Architected microservices infrastructure that improved system performance by 40%.",
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
      description: "Developed and maintained multiple customer-facing applications in a fast-paced startup environment.",
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
      description: "Delivered high-quality responsive websites and web applications for diverse clients.",
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
      description: "Provided web development services to small businesses and startups.",
      achievements: [
        "Built 20+ websites for various industries",
        "Achieved average client satisfaction score of 4.9/5",
        "Increased client website traffic by average of 60%",
        "Established long-term partnerships with 5 recurring clients"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "PHP"]
    }
  ];

  const getTypeStyle = (type) => {
    switch (type) {
      case "Full-time": 
        return { background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e', borderColor: 'rgba(34, 197, 94, 0.3)' };
      case "Contract": 
        return { background: 'rgba(14, 165, 233, 0.2)', color: '#0ea5e9', borderColor: 'rgba(14, 165, 233, 0.3)' };
      case "Freelance": 
        return { background: 'rgba(139, 92, 246, 0.2)', color: '#8b5cf6', borderColor: 'rgba(139, 92, 246, 0.3)' };
      default: 
        return { background: 'rgba(71, 85, 105, 0.2)', color: '#94a3b8', borderColor: 'rgba(71, 85, 105, 0.3)' };
    }
  };

  return (
    <section id="experience" className="py-16 px-6" style={{ background: 'transparent' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="gradient-text mb-4">
            Professional Experience
          </h2>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '42rem', margin: '0 auto' }}>
            Over 5 years of professional development experience
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {experiences.map((exp, index) => (
            <AccordionItem 
              key={`${exp.company}-${exp.position}`}
              value={`item-${index}`}
              className="card border-border"
            >
              <AccordionTrigger className="hover:no-underline px-6 py-4">
                <div className="flex justify-between items-center w-full text-left">
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'hsl(var(--foreground))', marginBottom: '0.25rem' }}>
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-4 flex-wrap">
                      <span style={{ fontWeight: '500', color: 'hsl(var(--foreground))' }}>{exp.company}</span>
                      <span style={{ color: 'hsl(var(--muted-foreground))' }}>{exp.duration}</span>
                      <span 
                        className="badge text-xs"
                        style={getTypeStyle(exp.type)}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', paddingTop: '1rem' }}>
                  <p style={{ color: 'hsl(var(--muted-foreground))', lineHeight: '1.7' }}>
                    {exp.description}
                  </p>

                  <div>
                    <h4 style={{ fontWeight: '600', color: 'hsl(var(--foreground))', marginBottom: '0.75rem' }}>
                      Key Achievements:
                    </h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {exp.achievements.map((achievement, achieveIndex) => (
                        <li key={achieveIndex} className="flex items-start gap-3">
                          <div style={{ 
                            width: '0.375rem', 
                            height: '0.375rem', 
                            background: 'hsl(var(--primary))', 
                            borderRadius: '50%', 
                            marginTop: '0.5rem',
                            flexShrink: '0'
                          }} />
                          <span style={{ color: 'hsl(var(--muted-foreground))', fontSize: '0.9rem' }}>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{ fontWeight: '600', color: 'hsl(var(--foreground))', marginBottom: '0.75rem' }}>
                      Technologies:
                    </h4>
                    <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Experience;
