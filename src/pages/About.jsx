import React from 'react';
import VideoReelSection from '../components/VideoReelSection';

const About = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-b from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="section-title text-center">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500">
                <img
                  src="/your-profile-image.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300">
                Hello! I'm a passionate Full Stack Developer with a keen eye for design and a love for creating
                beautiful, functional web applications. With expertise in both frontend and backend development,
                I strive to build seamless user experiences that make a difference.
              </p>
              <p className="text-lg text-slate-300">
                My journey in web development started [Your Story]. I specialize in modern web technologies
                and best practices, always staying up-to-date with the latest trends and tools in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-slate-300">
                <li>React.js</li>
                <li>JavaScript/TypeScript</li>
                <li>HTML5/CSS3</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>SQL/NoSQL Databases</li>
                <li>RESTful APIs</li>
              </ul>
            </div>

            {/* Tools & Others */}
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Tools & Others</h3>
              <ul className="space-y-2 text-slate-300">
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>AWS/Azure</li>
                <li>CI/CD</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Reel Section */}
      <VideoReelSection />
    </div>
  );
};

export default About; 