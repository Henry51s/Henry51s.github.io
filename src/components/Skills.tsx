import { Code2, Wrench, FileText, Cog, Globe } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    icon: Wrench,
    title: 'Engineering Software',
    skills: ['Altium Designer', 'KiCad', 'Autodesk Inventor', 'Catia V5', 'RapidHarness'],
  },
  {
    id: 2,
    icon: Code2,
    title: 'Programming Languages',
    skills: ['C', 'C++', 'MATLAB', 'Python'],
  },
  {
    id: 3,
    icon: FileText,
    title: 'Office Software',
    skills: ['Microsoft Word', 'Excel', 'PowerPoint'],
  },
  {
    id: 4,
    icon: Cog,
    title: 'Technical',
    skills: ['Additive Manufacturing', 'Embedded Software', 'Electronics Design', 'SMD Soldering'],
  },
  {
    id: 5,
    icon: Globe,
    title: 'Languages',
    skills: ['English', 'Vietnamese'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 bg-white z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-gray-900 mb-12">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-600 text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-gray-900">{category.title}</h3>
                </div>

                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
