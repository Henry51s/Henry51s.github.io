import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-12 px-4 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/henry-vu51s"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:quochenry06@gmail.com"
              className="hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-center text-gray-400">
            © 2025 Henry Vu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
