import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-16 bg-white shadow-md flex flex-col items-center py-8 space-y-6">
        <a href="https://github.com/dchernopolskiy" className="text-gray-600 hover:text-blue-600">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/dan-chernopolskii/" className="text-gray-600 hover:text-blue-600">
          <Linkedin size={24} />
        </a>
        <a href="https://www.instagram.com/hcf0xf9d/" className="text-gray-600 hover:text-blue-600">
          <Instagram size={24} />
        </a>
      </div>
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold">Dan Chernopolskii</div>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hey, I'm <span className="text-blue-600">Dan Chernopolskii</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            I'm a program manager. I love building products and capable teams, tinkering with cars and electronics, photography and cats.
          </p>
          <a href="#projects" className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            View Projects
            <ArrowRight className="ml-2" size={20} />
          </a>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;