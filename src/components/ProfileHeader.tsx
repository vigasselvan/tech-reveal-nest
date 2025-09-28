import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const ProfileHeader = () => {
  const skills = ["React", "TypeScript", "Node.js", "Python", "AWS"];

  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Profile Photo */}
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
            alt="John Doe"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-xl"
          />
        </div>
        
        {/* Name and Title */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-cyan-bright bg-clip-text text-transparent">
            John Doe
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Full Stack Developer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting modern web experiences with cutting-edge technologies. 
            Specialized in React, Node.js, and cloud architecture.
          </p>
        </div>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
              {skill}
            </Badge>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:contact@example.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          
          <Button variant="default" asChild>
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4 mr-2" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;