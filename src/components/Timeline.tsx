import { timelineData, TimelineItem } from '../data/timeline';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineProps {
  onItemClick: (item: TimelineItem) => void;
}

export function Timeline({ onItemClick }: TimelineProps) {
  return (
    <section id="timeline" className="relative py-20 px-4 bg-white z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-gray-900 mb-16">My Journey</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 hidden md:block"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content box */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-gray-50 p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 mb-3 justify-start md:justify-start">
                      {item.title.includes('Degree') ? (
                        <GraduationCap className="text-blue-600" size={20} />
                      ) : (
                        <Briefcase className="text-blue-600" size={20} />
                      )}
                      <span className="text-blue-600 inline-block px-3 py-1 bg-blue-100">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.organization}</p>
                    
                    <div className="mb-4 overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.organization}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    
                    <Button
                      onClick={() => onItemClick(item)}
                      variant="outline"
                      className="w-full md:w-auto"
                    >
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
