import React from 'react';

const Projects = () => (
  <section id="projects" className="mb-10 relative">
    <h2 className="text-2xl font-bold text-pastel-purple mb-4">Projects</h2>
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-pastel-blue">Foodie</h3>
      <p className="text-gray-700 leading-relaxed">Designed an ecient Food Delivery Management System with HTML, CSS, JavaScript, PHP, and MySQL,
      enhancing the dining experience with seamless online ordering <a href="https://github.com/gharat-purva/food-delivery" className="text-pastel-teal underline">GitHub</a></p>
      <h3 className="text-xl font-bold text-pastel-blue mt-4">Quizic</h3>
      <p className="text-gray-700 leading-relaxed">Developed an aptitude quiz app using ReactJS and TailwindCSS<a href="https://github.com/gharat-purva/quizic" className="text-pastel-teal underline">GitHub</a></p>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pastel-blue to-pastel-teal rounded-b"></div>
  </section>
);

export default Projects;
