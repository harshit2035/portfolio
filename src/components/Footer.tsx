
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors mb-6"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-primary" />
          </button>
          
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p className="text-sm text-center text-muted-foreground mt-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
