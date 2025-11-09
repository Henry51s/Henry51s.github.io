import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen overflow-hidden"
    >
      {/* Fixed Background Image */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1615285307672-09b361d7c61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBzZXR1cHxlbnwxfHx8fDE3NjE5NjczMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white mb-6">Henry Vu</h1>

          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Aerospace Engineering Student
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded border border-white/20 hover:bg-white/20 transition-all text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded border border-white/20 hover:bg-white/20 transition-all text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:john@example.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded border border-white/20 hover:bg-white/20 transition-all text-white"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100"
            >
              Learn More
              <ArrowDown size={20} />
            </Button>

            <Button
              variant="outline"
              asChild
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
            >
              <a href="/resume.pdf" download>
                <Download size={20} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={32} className="text-white/70" />
        </button>
      </div>
    </section>
  );
}