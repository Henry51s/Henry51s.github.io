import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="relative py-20 px-4 bg-white z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">Hi, I'm Henry Vu</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Second-year, junior in standing, student at Embry-Riddle Aeronautical University studying Aerospace Engineering focusing on rocket propulsion, avionics design, and test operations seeking a technical internship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrZXQlMjBlbmdpbmVlcmluZ3xlbnwwfHx8fDE3MzY0NjI0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Aerospace Engineering"
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-gray-900">About Me</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-gray-900">Education</p>
                <p className="text-gray-700">
                  Embry-Riddle Aeronautical University (ERAU)
                </p>
                <p className="text-gray-700">
                  Bachelor of Science, Aerospace Engineering
                </p>
                <p className="text-gray-700">
                  Area of Concentration: Rocket Propulsion
                </p>
                <p className="text-gray-700">
                  GPA: 3.9/4.0 | Expected Graduation: Dec. 2027
                </p>
                <p className="text-gray-700">
                  Location: Daytona Beach, FL
                </p>
              </div>
              
              <p className="text-gray-700">
                I'm passionate about aerospace engineering with a focus on rocket propulsion systems, avionics design, and test operations. My hands-on experience includes working with electronics, embedded systems, and flight data recording for rocket propulsion applications.
              </p>
              
              <p className="text-gray-700">
                Beyond engineering, I have experience in robotics through FIRST Tech Challenge, where I served as Team Captain and Vice-President, leading competitive robotics teams to state championships and developing autonomous systems with advanced sensors and control algorithms.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-700">Rocket Propulsion</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700">Avionics Design</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700">Electronics</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700">Embedded Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
