import { ArrowLeft, Calendar, MapPin, Award, Code } from 'lucide-react';
import { TimelineItem } from '../data/timeline';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TimelineDetailProps {
  item: TimelineItem;
  onBack: () => void;
}

export function TimelineDetail({ item, onBack }: TimelineDetailProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-8 inline-flex items-center gap-2"
        >
          <ArrowLeft size={20} />
          Back to Timeline
        </Button>

        <div className="bg-white shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="relative h-80">
            <ImageWithFallback
              src={item.image}
              alt={item.organization}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-blue-600">
                  {item.year}
                </span>
              </div>
              <h1 className="text-white mb-2">{item.title}</h1>
              <p className="text-xl text-white/90">{item.organization}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Duration and Role */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-start gap-3">
                <Calendar className="text-blue-600 mt-1" size={20} />
                <div>
                  <p className="text-gray-500 text-sm">Duration</p>
                  <p className="text-gray-900">{item.details.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 mt-1" size={20} />
                <div>
                  <p className="text-gray-500 text-sm">Position</p>
                  <p className="text-gray-900">{item.details.role}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-gray-900 mb-3">Overview</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                <Code size={20} className="text-blue-600" />
                Key Responsibilities
              </h3>
              <ul className="space-y-2">
                {item.details.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="mb-8">
              <h3 className="text-gray-900 mb-4 flex items-center gap-2">
                <Award size={20} className="text-blue-600" />
                Key Achievements
              </h3>
              <ul className="space-y-2">
                {item.details.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">✓</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            {item.details.technologies && item.details.technologies.length > 0 && (
              <div>
                <h3 className="text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {item.details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
