import React from 'react';

const Projects = () => (
  <section id="projects" className="mb-10 relative">
    <h2 className="text-2xl font-bold text-pastel-purple mb-4">Projects</h2>
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-pastel-blue">Project One</h3>
      <p className="text-gray-700 leading-relaxed">Coming SOoon <a href="https://github.com/yourusername/project-one" className="text-pastel-teal underline">GitHub</a></p>
      <h3 className="text-xl font-bold text-pastel-blue mt-4">Project Two</h3>
      <p className="text-gray-700 leading-relaxed">Coming SOon <a href="https://github.com/yourusername/project-two" className="text-pastel-teal underline">GitHub</a></p>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pastel-blue to-pastel-teal rounded-b"></div>
  </section>
);

export default Projects;
