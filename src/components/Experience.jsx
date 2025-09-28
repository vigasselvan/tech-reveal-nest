import React from 'react';

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
    <section id="experience" className="py-20 px-6">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="gradient-text mb-6">
            Professional Experience
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '48rem', margin: '0 auto' }}>
            Over 5 years of professional development experience, from freelance projects to enterprise applications.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${exp.position}`}
              className="card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-between items-start mb-6" style={{ flexDirection: 'column', gap: '1rem' }}>
                <div style={{ flex: '1', width: '100%' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                    {exp.position}
                  </h3>
                  <div className="flex items-center gap-6" style={{ fontSize: '1.125rem', flexWrap: 'wrap' }}>
                    <div className="flex items-center gap-4">
                      <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.25 21h19.5l-2-18h-15.5l-2 18zM12.75 9a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0V9z"/>
                      </svg>
                      <span style={{ fontWeight: '500', color: '#e2e8f0' }}>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                      </svg>
                      <span style={{ color: '#94a3b8' }}>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4" style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                  <div className="flex items-center gap-4">
                    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"/>
                    </svg>
                    <span style={{ fontWeight: '500' }}>{exp.duration}</span>
                  </div>
                  <span 
                    className="badge" 
                    style={getTypeStyle(exp.type)}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                  {exp.description}
                </p>

                <div>
                  <h4 style={{ fontWeight: '600', color: '#e2e8f0', marginBottom: '0.75rem' }}>
                    Key Achievements:
                  </h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {exp.achievements.map((achievement, achieveIndex) => (
                      <li key={achieveIndex} className="flex items-start gap-4">
                        <div style={{ 
                          width: '0.5rem', 
                          height: '0.5rem', 
                          background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)', 
                          borderRadius: '50%', 
                          marginTop: '0.5rem',
                          flexShrink: '0'
                        }} />
                        <span style={{ color: '#94a3b8' }}>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontWeight: '600', color: '#e2e8f0', marginBottom: '0.75rem' }}>
                    Technologies Used:
                  </h4>
                  <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="badge" style={{ fontSize: '0.75rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;