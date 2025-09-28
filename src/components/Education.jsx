import React from 'react';

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

  return (
    <section id="education" className="py-20 px-6" style={{ background: 'rgba(15, 23, 42, 0.2)' }}>
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="gradient-text mb-6">
            Education & Certifications
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '48rem', margin: '0 auto' }}>
            Solid academic foundation combined with continuous professional development and industry certifications.
          </p>
        </div>

        {/* Formal Education */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 className="flex items-center gap-4 mb-8" style={{ fontSize: '1.875rem', fontWeight: '700', color: '#e2e8f0' }}>
            <svg className="icon-lg" style={{ color: '#0ea5e9' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z"/>
            </svg>
            Formal Education
          </h3>
          
          {education.map((edu, index) => (
            <div 
              key={edu.institution}
              className="card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-between items-start mb-6" style={{ flexDirection: 'column', gap: '1rem' }}>
                <div style={{ flex: '1' }}>
                  <h4 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                    {edu.degree}
                  </h4>
                  <p style={{ fontSize: '1.125rem', fontWeight: '500', color: '#e2e8f0' }}>
                    {edu.institution}
                  </p>
                </div>
                
                <div className="flex items-center gap-4" style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                  <div className="flex items-center gap-4">
                    <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"/>
                    </svg>
                    <span style={{ fontWeight: '500' }}>{edu.period}</span>
                  </div>
                  <span 
                    className="badge"
                    style={{ 
                      background: 'rgba(34, 197, 94, 0.2)', 
                      color: '#22c55e', 
                      borderColor: 'rgba(34, 197, 94, 0.3)' 
                    }}
                  >
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
                  {edu.description}
                </p>

                <div>
                  <h5 className="flex items-center gap-4 mb-4" style={{ fontWeight: '600', color: '#e2e8f0' }}>
                    <svg className="icon" style={{ color: '#0ea5e9' }} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                    </svg>
                    Achievements & Honors:
                  </h5>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {edu.achievements.map((achievement, achieveIndex) => (
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
                  <h5 style={{ fontWeight: '600', color: '#e2e8f0', marginBottom: '0.75rem' }}>
                    Relevant Coursework:
                  </h5>
                  <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                    {edu.coursework.map((course) => (
                      <span key={course} className="badge" style={{ fontSize: '0.75rem' }}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="flex items-center gap-4 mb-8" style={{ fontSize: '1.875rem', fontWeight: '700', color: '#e2e8f0' }}>
            <svg className="icon-lg" style={{ color: '#0ea5e9' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"/>
            </svg>
            Professional Certifications
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.credentialId}
                className="card animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#e2e8f0', marginBottom: '0.5rem' }}>
                    {cert.name}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <span style={{ fontWeight: '500', color: '#e2e8f0' }}>{cert.issuer}</span>
                    <div className="flex items-center gap-4">
                      <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 012.25 2.25v7.5"/>
                      </svg>
                      <span style={{ color: '#94a3b8' }}>{cert.date}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                  {cert.skills.map((skill) => (
                    <span key={skill} className="badge" style={{ fontSize: '0.75rem' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;