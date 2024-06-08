import React from 'react';

const Skills = () => (
  <section id="skills" className="mb-10 relative">
    <h2 className="text-2xl font-bold text-pastel-purple mb-4">Skills</h2>
    <div className="bg-white p-5 rounded-lg shadow-md">
      <ul className="list-disc pl-5 font-mono">
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>HTML & CSS</li>
        <li>Python</li>
      </ul>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pastel-blue to-pastel-teal rounded-b"></div>
  </section>
);

export default Skills;
