// Profile.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import TypingAnimation from './TypingAnimation';
import PurvaImage from '../assets/Purva Gharat.png'; 
import '../App.css';

const Profile = () => (
  <section id="profile" className="mb-16 relative">
    <h2 className="text-2xl pb-20 font-bold text-pastel-purple mb-4 font-sans sm:text-xl md:text-2xl lg:text-3xl">Profile</h2>
    <div className="bg-white p-6 md:p-9 rounded-lg shadow-md relative flex flex-col md:flex-row items-center md:items-start">
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        <img src={PurvaImage} alt="Purva Gharat" className="w-48 h-48 rounded-full object-cover"/>
      </div>
      <div>
        <p className="font-bold text-lg leading-relaxed mb-4 md:mb-0 sm:text-sm md:text-lg lg:text-xl" style={{ color: '#757575' }}>
          <span className="font-bold text-lg" style={{ color: 'black' }}><TypingAnimation text="Hello! I am Purva, " /></span>
          A passionate developer with a love for creating beautiful and functional web applications. I enjoy learning new technologies and improving my skills. 
        </p>
        <div className="flex flex-col md:flex-row md:mt-4 space-y-2 md:space-y-0 md:space-x-4">
          <a href="https://github.com/gharat-purva" target="_blank" rel="noopener noreferrer" className="font-sans inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pastel-pink to-pastel-blue group-hover:from-pastel-blue group-hover:to-pastel-pink dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
              <FaGithub className="mr-2" /> GitHub
            </span>
          </a>
          <a href="https://www.linkedin.com/in/purvagharat/" target="_blank" rel="noopener noreferrer" className="font-sans inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pastel-purple to-pastel-green group-hover:from-pastel-green group-hover:to-pastel-purple dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800">
            <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
              <FaLinkedin className="mr-2" /> LinkedIn
            </span>
          </a>
          <a href="mailto:purva600@gmail.com" className="font-sans inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pastel-yellow to-pastel-red group-hover:from-pastel-red group-hover:to-pastel-yellow dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
             <FaEnvelope className="mr-2" /> Gmail
             </span>
          </a>
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pastel-blue to-pastel-teal rounded-b"></div>
    <div className="absolute bottom-0 left-0" style={{ backgroundColor: '#e5d6f5', padding: '22px', transform: 'rotate(-45deg)' }}></div>
  </section>
);

export default Profile;
