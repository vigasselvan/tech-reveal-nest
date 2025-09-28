import ProjectCard from "./ProjectCard";

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-cyan-bright bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, featuring full-stack applications with modern technologies and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;