
import { useEffect } from "react";

const skills = [
  { 
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++"]
  },
  {
    category: "Frontend Development",
    items: ["React", "HTML5", "CSS3", "TailwindCSS", "Next.js"]
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "Django", "Spring Boot"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "AWS", "Firebase", "MongoDB", "PostgreSQL"]
  },
];

export function Skills() {
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
    <section id="skills" className="py-20 bg-primary/5">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded animate-on-scroll"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground animate-on-scroll">
            Here are some of the technologies and tools I've been working with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={skillGroup.category}
              className="glass-card p-6 rounded-xl animate-on-scroll"
              style={{ transitionDelay: `${groupIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 animate-on-scroll">
          <div className="glass-card p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Bachelor's in Computer Science</h4>
                  <p className="text-muted-foreground">University of Technology</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-sm font-medium bg-primary/10 py-1 px-3 rounded-full text-primary">
                    2021 - Present
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Advanced Algorithms & Data Structures</h4>
                  <p className="text-muted-foreground">Online Certification</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-sm font-medium bg-primary/10 py-1 px-3 rounded-full text-primary">
                    2022
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold">Full Stack Web Development</h4>
                  <p className="text-muted-foreground">Tech Academy</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="text-sm font-medium bg-primary/10 py-1 px-3 rounded-full text-primary">
                    2020
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
