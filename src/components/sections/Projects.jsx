
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Algorithm Visualizer",
    description: "Interactive tool for visualizing various algorithms in action, helping students understand complex algorithms through animation.",
    image: "https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "JavaScript", "CSS", "Algorithms"],
    category: "web",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 2,
    title: "Smart Learning Platform",
    description: "An AI-powered platform that adapts to student learning patterns and provides personalized study materials.",
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Django", "Machine Learning", "PostgreSQL"],
    category: "ai",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 3,
    title: "Campus Connect",
    description: "A social networking app designed specifically for college students to connect, collaborate, and share resources.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Firebase", "Node.js", "MongoDB"],
    category: "mobile",
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 4,
    title: "Data Structure Explorer",
    description: "Educational tool that helps visualize and understand different data structures with interactive examples.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "HTML5", "CSS3", "Data Structures"],
    category: "web",
    github: "https://github.com",
    demo: "https://example.com"
  },
];

export function Projects() {
  const [filter, setFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(projects);
  
  useEffect(() => {
    if (filter === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));
    
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded animate-on-scroll"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-on-scroll">
            Here are some of my recent projects showcasing my skills and interests
          </p>
        </div>
        
        <div className="flex justify-center mb-12 animate-on-scroll">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All
            </Button>
            <Button 
              variant={filter === "web" ? "default" : "outline"} 
              onClick={() => setFilter("web")}
              className="rounded-full"
            >
              Web
            </Button>
            <Button 
              variant={filter === "mobile" ? "default" : "outline"} 
              onClick={() => setFilter("mobile")}
              className="rounded-full"
            >
              Mobile
            </Button>
            <Button 
              variant={filter === "ai" ? "default" : "outline"} 
              onClick={() => setFilter("ai")}
              className="rounded-full"
            >
              AI/ML
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card overflow-hidden animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-primary/20 rounded-full text-primary">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-primary/20 rounded-full text-primary">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="mb-4 text-muted-foreground">{project.description}</p>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <Button asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
