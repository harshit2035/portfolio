
import { useEffect, useState } from "react";

export function BlinkingName({ name }: { name: string }) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 3000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <h1 
      className={`text-4xl md:text-6xl font-bold transition-all duration-300 ease-in-out
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-90 scale-95'}
        bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary
        animate-pulse-slow drop-shadow-md`}
    >
      {name}
    </h1>
  );
}
