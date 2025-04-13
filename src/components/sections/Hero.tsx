
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-primary animate-fade-in">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold animate-fade-in" style={{ animationDelay: '200ms' }}>
                John Doe
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground animate-fade-in" style={{ animationDelay: '400ms' }}>
                Computer Science Student
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '600ms' }}>
              Passionate about software development, algorithms, and creating meaningful applications. 
              Currently pursuing my degree in Computer Science.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
              <Button asChild size="lg">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4 animate-fade-in" style={{ animationDelay: '1000ms' }}>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-foreground/80 hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="relative">
              <div className="w-full aspect-square rounded-full bg-gradient-to-br from-primary/20 to-accent/20 absolute -z-10 top-0 right-0 blur-xl animate-pulse-slow"></div>
              <img 
                src="https://images.unsplash.com/photo-1544652478-6653e09f18a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Computer Science Student"
                className="w-full max-w-md rounded-xl object-cover shadow-xl mx-auto glass-card p-2"
              />
            </div>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/60 hover:text-primary transition-colors animate-fade-in"
          style={{ animationDelay: '1200ms' }}
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
