import React from 'react';

const Project = ({ title, description, image, skills, caseStudyLink, youtubeLink, caseStudyButtonText }) => {
  return (
    <div className="flex flex-wrap items-center -mx-4 mb-12">
      <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
        <img src={`${process.env.PUBLIC_URL}/projectImages/${image}`} alt={title} className="rounded-lg shadow-lg" />
      </div>
      <div className="w-full md:w-1/2 px-4">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap -mx-2 mb-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm m-2">{skill}</span>
          ))}
        </div>
        <div className="flex space-x-4">
          {caseStudyLink && (
            <a 
              href={caseStudyLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              {caseStudyButtonText || "CASE STUDY"}
            </a>
          )}
          {youtubeLink && (
            <a 
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              Watch on YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;