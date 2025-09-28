import React, { useEffect, useState } from 'react';

const ProgressBar = ({ level, delay = 0 }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, delay);
    return () => clearTimeout(timer);
  }, [level, delay]);

  return (
    <div className="progress">
      <div 
        className="progress-bar" 
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

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

  return (
    <section id="skills" className="py-20 px-6" style={{ background: 'rgba(15, 23, 42, 0.3)' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '48rem', margin: '0 auto' }}>
            Continuously evolving skill set with hands-on experience across the full development stack.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.category} className="card animate-slide-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                  {category.category}
                </h3>
                <span className="badge">
                  {category.skills.length} skills
                </span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="animate-slide-in"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex justify-between items-center mb-4" style={{ marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '500', color: '#e2e8f0' }}>{skill.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="badge" style={{ fontSize: '0.75rem' }}>
                          {skill.years} yr{skill.years !== 1 ? 's' : ''}
                        </span>
                        <span style={{ fontSize: '0.875rem', color: '#94a3b8' }}>{skill.level}%</span>
                      </div>
                    </div>
                    
                    <ProgressBar 
                      level={skill.level} 
                      delay={(categoryIndex * 200) + (skillIndex * 100) + 500}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#e2e8f0' }}>
            Additional Technologies
          </h3>
          <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
            {[
              "Redux", "Zustand", "Prisma", "tRPC", "Socket.io", "Stripe", 
              "Auth0", "Firebase", "Supabase", "Vercel", "Netlify", "GitHub Actions"
            ].map((tech) => (
              <span key={tech} className="badge" style={{ 
                fontSize: '0.875rem', 
                padding: '0.5rem 1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(14, 165, 233, 0.2)';
                e.target.style.borderColor = '#0ea5e9';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#1e293b';
                e.target.style.borderColor = '#334155';
              }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsRadar;