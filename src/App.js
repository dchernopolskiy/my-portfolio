import React, { useEffect } from 'react';
import Project from './Project';
import projectsData from './projectsData.json';
import { ArrowRight, Github, Linkedin, Instagram, BookOpen, YouTube } from 'lucide-react';
import ScrollDownArrow from './ScrollDownArrow'
import ContactForm from './ContactForm'; 

const backgroundImage = `${process.env.PUBLIC_URL}/img/background.jpeg`;
const VisiblePortfolioWithFixedSocials = () => {
  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Background image */}
			<div 
			  className="fixed inset-0 bg-cover bg-center z-0"
			  style={{ backgroundImage: `url(${backgroundImage})` }}
			/>
      
      {/* Overlay with reduced opacity */}
      <div className="fixed inset-0 bg-black opacity-30 z-10" />

      {/* Fixed Social Icons Sidebar */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50">
        <div className="bg-white rounded-lg shadow-lg p-3 flex flex-col space-y-4">
          <a href="https://www.linkedin.com/in/dan-chernopolskii/" className="text-gray-600 hover:text-blue-600" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        {/*  <a href="https://youtube.com" className="text-gray-600 hover:text-blue-600" aria-label="YouTube">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
          </a>*/}
          <a href="https://github.com" className="text-gray-600 hover:text-blue-600" aria-label="GitHub">
            <Github size={24} />
          </a>
         {/* <a href="#" className="text-gray-600 hover:text-blue-600" aria-label="Portfolio">
            <BookOpen size={24} />
          </a>*/}
          <a href="https://www.instagram.com/hcf0xf9d/" className="text-gray-600 hover:text-blue-600" aria-label="Instagram">
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Fixed Navigation */}
		<nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 z-40 shadow-md">
		  <div className="w-full px-4 py-4 flex justify-between items-center">
		    <h1 className="text-2xl font-bold text-gray-800">Dan Chernopolskii</h1>
		    <div className="space-x-4">
		      <a href="#home" className="text-gray-800 hover:text-blue-600">Home</a>
		      <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
		      <a href="#projects" className="text-gray-800 hover:text-blue-600">Projects</a>
		      <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>
		    </div>
		  </div>
		</nav>

      {/* Content */}
      <div className="relative z-20 pt-16">
      
			{/* Home Section */}
			<section id="home" className="min-h-screen flex flex-col justify-between items-center px-4 py-16 relative">
			  <div className="flex-1 flex items-center">
			    <div className="text-center">
			      <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
			        Hey, I'm <span className="text-blue-300">Dan Chernopolskii</span>
			      </h2>
			      <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
			        I'm a program manager. I love building products and capable teams, tinkering with cars and electronics, photography and cats.
			      </p>
			      <a 
			        href="#projects" 
			        className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
			      >
			        View Projects
			        <ArrowRight className="ml-2" size={20} />
			      </a>
			    </div>
			  </div>
			  <div className="mt-8">
			    <ScrollDownArrow />
			  </div>
			</section>

        {/* About Section */}
			 <section id="about" className="bg-white py-16 px-4">
			  <div className="container mx-auto max-w-4xl">
			    <h2 className="text-4xl font-bold text-center mb-8">ABOUT ME</h2>
{/*			    <p className="text-center mb-8">
			      I've worked with creation of extremely capable teams for years now. I'm fortunate enough to have worked with incredible professionals that taught me incredible things, trusted me with their knowledge and personalities and I'm hoping to share this experience forward. I'm always looking for something in AR/XR space and robotics, ideally oriented towards helping people with disabilities. I would love to work on the implementation of things that will help people! Anything in the field of device development, AI implementation in daily life, Platform implementation, potentially Cloud.
			    </p>*/}
			    <div className="flex flex-wrap -mx-4">
			      <div className="w-full md:w-1/2 px-4 mb-8">
			        <h3 className="text-2xl font-bold mb-4">Get to know me!</h3>
			        <p className="mb-4">
			          I've worked with creation of extremely capable teams for years now. I'm fortunate enough to have worked with incredible professionals that taught me incredible things, trusted me with their knowledge and personalities and I'm hoping to share this experience forward. 
			        </p>
			        <p className="mb-4">
			          I'm always looking for something in AR/XR space and robotics, ideally oriented towards helping people with disabilities. I would love to work on the implementation of things that will help people! Anything in the field of device development, AI implementation in daily life, Platform implementation, potentially Cloud.
			        </p>
{/*			        <p>
			          I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
			        </p>*/}
			        <a 
			          href="#contact" 
			          className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
			        >
			          CONTACT
			        </a>
			      </div>
			      <div className="w-full md:w-1/2 px-4">
			        <h3 className="text-2xl font-bold mb-4">My Skills</h3>
			        <div className="flex flex-wrap -mx-2">
			          {['Program Management', 'Financial Planning', 'Product Management', 'Software Development Methodologies', 'Supplier, Account Management', 'React', '*NIX', 'C++', 'Github', 'Responsive Design'].map((skill) => (
			            <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm m-2">{skill}</span>
			          ))}
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

        {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-gray-100 py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">PROJECTS</h2>
          <p className="text-center mb-12">
            Here you will find some of the personal and clients projects that I created with each project containing its own case study
          </p>
          <div className="space-y-12">
            {projectsData.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
        <section id="contact" className="bg-white py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-center mb-8">CONTACT ME</h2>
            <p className="text-center mb-8">
            	//This doesn't work yet! email me to daniil.chernopolskii@gmail.com ;)
            </p>
            <p className="text-center mb-8">
              Feel free to reach out if you have any questions or if you'd like to work together!
            </p>
            <ContactForm />
          </div>
        </section>
			  <footer className="bg-gray-100 text-black py-8">
    		<div className="container mx-auto text-center px-4">
      	<p>&copy; 2024 Dan Chernopolskii</p>
    		</div>
  			</footer>
      </div>
    </div>
  );
};

export default VisiblePortfolioWithFixedSocials;