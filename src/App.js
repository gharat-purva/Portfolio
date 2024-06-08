// App.js
import React, { useState } from 'react';
import { FaUser, FaFileAlt, FaProjectDiagram, FaCode } from 'react-icons/fa';
import Profile from './components/Profile';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Header from './components/Header';

function App() {
  const [selectedSection, setSelectedSection] = useState('profile');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <nav className="w-1/5 p-5 flex flex-col items-center bg-white">
          <ul className="space-y-8 m-10">
            <li
              className={`flex items-center space-x-3 cursor-pointer ${selectedSection === 'profile' ? 'text-pastel-blue' : 'hover:text-pastel-blue text-gray-800'} mb-4`}
              onClick={() => setSelectedSection('profile')}
            >
              <div className="w-10 h-10 mb-10 text-3xl md:text-4xl lg:text-6xl"><FaUser /></div>
            </li>
            <li
              className={`flex items-center space-x-6 cursor-pointer ${selectedSection === 'resume' ? 'text-pastel-blue' : 'hover:text-pastel-blue text-gray-800'} mb-4`}
              onClick={() => setSelectedSection('resume')}
            >
              <div className="w-10 h-10 mb-10 text-3xl md:text-4xl lg:text-6xl"><FaFileAlt /></div>
            </li>
            <li
              className={`flex items-center space-x-8 cursor-pointer ${selectedSection === 'projects' ? 'text-pastel-blue' : 'hover:text-pastel-blue text-gray-800'} mb-4`}
              onClick={() => setSelectedSection('projects')}
            >
              <div className="w-10 h-10 mb-10 text-3xl md:text-4xl lg:text-6xl"><FaProjectDiagram /></div>
            </li>
            <li
              className={`flex items-center space-x-10 cursor-pointer ${selectedSection === 'skills' ? 'text-pastel-blue' : 'hover:text-pastel-blue text-gray-800'} mb-4`}
              onClick={() => setSelectedSection('skills')}
            >
              <div className="w-10 h-10 mb-10 text-3xl md:text-4xl lg:text-6xl"><FaCode /></div>
            </li>
          </ul>
        </nav>
        <main className="bg-gradient-to-b from-white to-pastel-light w-4/5 p-10 transition-opacity duration-500 ease-in-out" style={{ opacity: selectedSection ? 1 : 0 }}>
          {selectedSection === 'profile' && <Profile />}
          {selectedSection === 'resume' && <Resume />}
          {selectedSection === 'projects' && <Projects />}
          {selectedSection === 'skills' && <Skills />}
        </main>
      </div>
    </div>
  );
}

export default App;
