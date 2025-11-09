export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  image: string;
  details: {
    duration: string;
    role: string;
    responsibilities: string[];
    achievements: string[];
    technologies?: string[];
  };
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2024',
    title: 'Flight Data Recorder for Rocket Propulsion Applications',
    organization: 'Eagle Aeronautics, Embry-Riddle Aeronautical University',
    description: 'Designing and manufacturing an avionics board for high-G force data recording in rocket propulsion testing.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBlbmdpbmUlMjB0ZXN0aW5nfGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      duration: 'Aug. 2024 - Present',
      role: 'Avionics Engineer',
      responsibilities: [
        'Designed and manufactured avionics board to record data from high-G accelerometers (100-300Gs)',
        'Collected data from thermocouples, pressure transducers, and load cells during rocket propulsion testing',
        'Developed data logging system to export CSV files from SD card storage',
        'Utilized KiCad and Altium Designer for PCB design and manufacturing',
        'Programmed embedded software for data acquisition systems'
      ],
      achievements: [
        'Successfully created robust data recording system for extreme acceleration environments',
        'Integrated multiple sensor types for comprehensive test data collection',
        'Implemented reliable data storage and export capabilities'
      ],
      technologies: ['KiCad', 'Altium Designer', 'Embedded C/C++', 'PCB Design', 'Data Acquisition Systems']
    }
  },
  {
    id: 2,
    year: '2022',
    title: 'FIRST Tech Challenge Team Captain & Vice-President',
    organization: 'FIRST Tech Challenge, St. Petersburg, FL',
    description: 'Led competitive robotics team to state championship, developing autonomous systems and advanced control algorithms.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9ufGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      duration: 'Aug. 2022 - May 2024',
      role: 'Team Captain & Vice-President',
      responsibilities: [
        'Led team to state championship competition',
        'Developed autonomous systems using advanced sensors (IMU, AprilTags, distance sensors)',
        'Implemented PID and motion profiling for precise robot control',
        'Programmed in Java for robot control systems',
        'Coordinated team strategy and competition preparation'
      ],
      achievements: [
        'Advanced team to state championship level',
        'Designed and implemented sophisticated autonomous navigation system',
        'Successfully integrated multiple sensor technologies for enhanced robot capabilities',
        'Led team through competitive season with strong technical performance'
      ],
      technologies: ['Java', 'IMU Sensors', 'AprilTags', 'PID Control', 'Motion Profiling', 'Robotics']
    }
  },
  {
    id: 3,
    year: '2023',
    title: 'Bachelor of Science, Aerospace Engineering',
    organization: 'Embry-Riddle Aeronautical University',
    description: 'Pursuing degree in Aerospace Engineering with concentration in Rocket Propulsion.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvc3BhY2UlMjBlbmdpbmVlcmluZ3xlbnwwfHx8fDE3MzY0NjI0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: {
      duration: 'Aug. 2023 - Dec. 2027 (Expected)',
      role: 'Aerospace Engineering Student',
      responsibilities: [
        'Maintaining 3.9/4.0 GPA in rigorous engineering curriculum',
        'Focused coursework in rocket propulsion systems',
        'Hands-on experience with engineering design software',
        'Active participation in Eagle Aeronautics research projects',
        'Developing expertise in avionics and propulsion systems'
      ],
      achievements: [
        '3.9/4.0 GPA - Dean\'s List',
        'Second-year student, junior in standing',
        'Specialization in Rocket Propulsion',
        'Active involvement in aerospace research projects'
      ],
      technologies: ['Altium Designer', 'KiCad', 'Autodesk Inventor', 'Catia V5', 'MATLAB', 'C/C++', 'Python']
    }
  }
];
