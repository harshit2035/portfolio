
import { useEffect, useRef } from "react";
import { Book, Code, Coffee, Server } from "lucide-react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    <section ref={sectionRef} id="about" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded animate-on-scroll"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll">
            <p className="text-lg">
              I'm a passionate <strong className="text-primary">Computer Science student</strong> with a strong interest in software development, algorithms and data structures. Currently pursuing my degree at University of Technology.
            </p>
            <p className="text-lg">
              My journey in technology began when I was 14 years old, tinkering with HTML and CSS to build simple websites. This early exposure ignited my passion for creating digital solutions that solve real-world problems.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enhancing my problem-solving skills through competitive programming.
            </p>
            <p className="text-lg">
              I believe in continuous learning and challenging myself with new projects that push my technical boundaries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl animate-on-scroll" style={{ transitionDelay: "100ms" }}>
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-muted-foreground">Creating responsive web apps with modern frameworks and best practices.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl animate-on-scroll" style={{ transitionDelay: "200ms" }}>
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Learning</h3>
              <p className="text-muted-foreground">Constantly expanding my knowledge with new technologies and skills.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl animate-on-scroll" style={{ transitionDelay: "300ms" }}>
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Backend</h3>
              <p className="text-muted-foreground">Building scalable APIs and efficient database systems.</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl animate-on-scroll" style={{ transitionDelay: "400ms" }}>
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                <Coffee className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
              <p className="text-muted-foreground">Finding elegant solutions to complex computational problems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
