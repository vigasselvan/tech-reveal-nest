import React from 'react';

const ProfileHeader = () => {
  const skills = ["React", "TypeScript", "Node.js", "Python", "AWS"];

  return (
    <section id="home" className="py-16 px-6 text-center">
      <div className="container">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
          alt="John Doe"
          className="profile-image animate-fade-in"
        />
        
        <div className="mb-8 animate-fade-in">
          <h1 className="gradient-text mb-4">
            John Doe
          </h1>
          
          <p style={{ fontSize: '1.5rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
            Full Stack Developer
          </p>
          
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '32rem', margin: '0 auto', lineHeight: '1.7' }}>
            Crafting modern web experiences with cutting-edge technologies. 
            Specialized in React, Node.js, and cloud architecture.
          </p>
        </div>
        
        <div className="flex justify-center gap-4 mb-8" style={{ flexWrap: 'wrap' }}>
          {skills.map((skill) => (
            <span key={skill} className="badge">
              {skill}
            </span>
          ))}
        </div>
        
        <div className="flex justify-center gap-4" style={{ flexWrap: 'wrap' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          
          <a href="mailto:contact@example.com" className="btn btn-outline">
            <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
            </svg>
            Email
          </a>
          
          <a href="/resume.pdf" download className="btn btn-primary">
            <svg className="icon-sm" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
            </svg>
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;