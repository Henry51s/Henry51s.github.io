import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </Button>

        {/* Hero Image */}
        <div className="rounded-md overflow-hidden shadow-2xl mb-8">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Title and Description */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-700 mb-6">{project.fullDescription}</p>

          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-4 py-2">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                View Code
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Features */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-gray-900 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-sm bg-blue-600 mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Technologies */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <h2 className="text-gray-900 mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <Badge key={tech} className="px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Screenshots */}
        {project.screenshots.length > 0 && (
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-gray-900 mb-6">Screenshots</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-md overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Challenge, Solution, Outcome */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-gray-900 mb-3">Challenge</h3>
              <p className="text-gray-700">{project.challenge}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-gray-900 mb-3">Solution</h3>
              <p className="text-gray-700">{project.solution}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-gray-900 mb-3">Outcome</h3>
              <p className="text-gray-700">{project.outcome}</p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-gray-900 mb-4">Interested in this project?</h3>
            <p className="text-gray-700 mb-6">
              Check out the live demo or view the source code on GitHub.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github size={20} />
                  View on GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
