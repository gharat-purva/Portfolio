import React from 'react';

const Resume = () => (
  <section id="resume" className="mb-10 relative">
    <h2 className="text-2xl font-bold text-pastel-purple mb-4">Resume</h2>
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-pastel-blue">Education</h3>
      <ul className="list-disc pl-5 mb-4">
        <li>Bachelor of Engineering in Computer Science, Thakur College of Engineering and Technology, 2021-2025</li>
      </ul>
      <h3 className="text-xl font-bold text-pastel-blue">Experience</h3>
      <ul className="list-disc pl-5">
        <li>Intern at E-Samyak Solutions, 2023</li>
        <li>Digital Ipsum, 2024</li>
      </ul>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pastel-blue to-pastel-teal rounded-b"></div>
  </section>
);

export default Resume;
