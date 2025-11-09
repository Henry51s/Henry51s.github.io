export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  screenshots: string[];
  challenge: string;
  solution: string;
  outcome: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'flight-data-recorder',
    title: 'Flight Data Recorder for Rocket Propulsion',
    description: 'Custom avionics board for high-G force data recording in rocket propulsion testing environments.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBlbmdpbmUlMjB0ZXN0aW5nfGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Avionics', 'PCB Design', 'Embedded Systems', 'Data Acquisition'],
    github: '#',
    demo: '#',
    fullDescription: 'A sophisticated flight data recorder designed specifically for rocket propulsion testing at Embry-Riddle Aeronautical University. This avionics board is engineered to withstand extreme acceleration forces (100-300Gs) while accurately recording critical sensor data for propulsion system analysis.',
    features: [
      'High-G accelerometer data recording (100-300Gs)',
      'Thermocouple temperature monitoring',
      'Pressure transducer integration',
      'Load cell data acquisition',
      'SD card data storage system',
      'CSV file export functionality',
      'Robust design for extreme environments',
      'Real-time data logging capabilities',
    ],
    technologies: ['KiCad', 'Altium Designer', 'C/C++', 'Embedded Systems', 'PCB Design', 'Data Acquisition', 'SD Card Interface'],
    screenshots: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBlbmdpbmUlMjB0ZXN0aW5nfGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljcyUyMGJvYXJkfGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    challenge: 'Designing an avionics system capable of reliably recording data in extreme acceleration environments (100-300Gs) while maintaining accuracy across multiple sensor types including thermocouples, pressure transducers, and load cells.',
    solution: 'Utilized professional PCB design tools (KiCad and Altium Designer) to create a robust board layout with proper shielding and component selection. Implemented embedded software for precise timing and data synchronization across all sensors, with reliable SD card storage for field deployment.',
    outcome: 'Successfully deployed for rocket propulsion testing at Eagle Aeronautics lab, providing reliable data collection for propulsion system analysis. The system has proven capable of surviving extreme test conditions while maintaining data integrity.',
  },
  {
    id: 2,
    slug: 'autonomous-robotics-system',
    title: 'Autonomous Robotics Navigation System',
    description: 'Advanced autonomous system using IMU, AprilTags, and distance sensors with PID control for FTC competition.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9ufGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Robotics', 'Autonomous Systems', 'Java', 'Sensors'],
    github: '#',
    demo: '#',
    fullDescription: 'A sophisticated autonomous navigation system developed for FIRST Tech Challenge competition robotics. This project integrated multiple sensor technologies and advanced control algorithms to achieve precise autonomous operation in competitive scenarios.',
    features: [
      'IMU-based orientation tracking and stabilization',
      'AprilTag visual recognition for positioning',
      'Distance sensor integration for obstacle detection',
      'PID control loops for precise movement',
      'Motion profiling for smooth acceleration',
      'Autonomous path planning and execution',
      'Real-time sensor fusion algorithms',
      'Competition-ready autonomous routines',
    ],
    technologies: ['Java', 'IMU Sensors', 'AprilTags', 'PID Control', 'Motion Profiling', 'Computer Vision', 'Android', 'FTC SDK'],
    screenshots: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9ufGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1563968743333-044cef800494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMHNlbnNvcnN8ZW58MHx8fHwxNzM2NDYyNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    challenge: 'Creating a reliable autonomous system that could navigate complex competition fields with high precision while integrating multiple sensor inputs and maintaining consistent performance under time pressure.',
    solution: 'Developed a multi-layered control system using IMU for orientation, AprilTags for absolute positioning, and distance sensors for obstacle avoidance. Implemented PID controllers and motion profiling to ensure smooth, accurate movements. Created robust sensor fusion algorithms to handle sensor noise and maintain reliability.',
    outcome: 'Led team to state championship competition with a highly competitive autonomous system. The robot consistently achieved top scores in autonomous periods, demonstrating reliable navigation and task completion throughout the season.',
  },
  {
    id: 3,
    slug: 'propulsion-test-systems',
    title: 'Propulsion Systems Laboratory Work',
    description: 'Hands-on experience with rocket propulsion testing, data analysis, and test operations at ERAU.',
    image: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBwcm9wdWxzaW9ufGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Rocket Propulsion', 'Test Operations', 'Data Analysis', 'Engineering'],
    github: '#',
    demo: '#',
    fullDescription: 'Comprehensive work in rocket propulsion testing and analysis at Embry-Riddle Aeronautical University. This experience includes hands-on test operations, data collection and analysis, and integration of various measurement systems for propulsion research.',
    features: [
      'Rocket engine test operations and safety procedures',
      'High-speed data acquisition during test firings',
      'Thrust measurement and analysis',
      'Temperature and pressure monitoring',
      'Test stand instrumentation and calibration',
      'Data post-processing and visualization',
      'Performance analysis and reporting',
      'Test procedure development and documentation',
    ],
    technologies: ['MATLAB', 'Data Acquisition Systems', 'Instrumentation', 'Excel', 'Test Equipment', 'Safety Protocols'],
    screenshots: [
      'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBwcm9wdWxzaW9ufGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBlbmdpbmUlMjB0ZXN0aW5nfGVufDB8fHx8MTczNjQ2MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    challenge: 'Managing complex test operations with multiple safety-critical systems while ensuring accurate data collection across numerous sensors in a high-energy, time-sensitive environment.',
    solution: 'Developed systematic test procedures and checklists to ensure safety and data quality. Implemented automated data collection systems and post-processing workflows to efficiently analyze large datasets from multiple test runs.',
    outcome: 'Gained extensive hands-on experience with rocket propulsion systems and test operations. Contributed to successful test campaigns and developed practical skills in instrumentation, data analysis, and aerospace engineering practices.',
  },
];
