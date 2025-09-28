import React from 'react';

const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl, demoUrl }) => {
  return (
    <div className="card project-card animate-fade-in">
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={title}
          className="project-image"
        />
        <div className="project-overlay">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
            </svg>
            Live
          </a>
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"/>
              </svg>
              Demo
            </a>
          )}
        </div>
      </div>
      
      <div style={{ padding: '1.5rem' }}>
        <div className="flex justify-between items-start mb-4">
          <div style={{ flex: '1' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem', color: '#e2e8f0' }}>
              {title}
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
              {description}
            </p>
          </div>
          
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '0.5rem' }}>
            <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        
        <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
          {technologies.map((tech) => (
            <span key={tech} className="badge" style={{ fontSize: '0.75rem' }}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      githubUrl: "https://github.com/example/ecommerce",
      liveUrl: "https://ecommerce-demo.com",
      demoUrl: "https://demo.ecommerce.com"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team communication, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/example/taskmanager",
      liveUrl: "https://taskmanager-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "D3.js", "Weather API", "Chart.js"],
      githubUrl: "https://github.com/example/weather",
      liveUrl: "https://weather-dashboard-demo.com"
    },
    {
      title: "AI Content Generator",
      description: "Machine learning powered content creation tool with natural language processing and automated optimization.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "OpenAI"],
      githubUrl: "https://github.com/example/ai-content",
      liveUrl: "https://ai-content-demo.com"
    },
    {
      title: "Social Media Analytics",
      description: "Comprehensive social media monitoring platform with sentiment analysis, engagement tracking, and reporting.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
      technologies: ["React", "Python", "PostgreSQL", "Docker", "AWS"],
      githubUrl: "https://github.com/example/social-analytics",
      liveUrl: "https://social-analytics-demo.com"
    },
    {
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with multi-chain support, transaction history, and portfolio management.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      technologies: ["React Native", "Web3.js", "Solidity", "Node.js"],
      githubUrl: "https://github.com/example/crypto-wallet",
      liveUrl: "https://wallet-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="gradient-text mb-6">
            Featured Projects
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '48rem', margin: '0 auto' }}>
            A showcase of my latest work, featuring full-stack applications with modern technologies and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={project.title} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;