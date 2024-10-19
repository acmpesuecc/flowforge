'use client';
import React from 'react';
import './resource.css';

const handleReturn = () =>
   {
    window.location.href = '/';
   };

const ResourcePage: React.FC = () =>
  {
  const resources = [
    { title: 'Starter Pack', link: 'https://www.google.com', description: 'Access our trial version starter pack' },
    { title: 'Demo', link: 'https://www.google.com', description: 'Who does not love a demo' },
    { title: 'Research Paper', link: 'https://www.google.com', description: 'That  is right, we have research papers under our name' },
    { title: 'Library', link: 'https://www.google.com', description: 'Do not miss the chance to glance at our vast library' },
    { title: 'Video Representation', link: 'https://www.google.com', description: 'Facing issues? We got you step by step' },
    { title: 'Extra Links', link: 'https://www.google.com', description: 'Make sure you click here' },
  ];

  return (
    <div className="resource-page">

      <h1 className="text-center text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
        RESOURCE
      </h1>

      <div className="resource-list">

        {resources.map((resource, index) => (
          <div key={index} className="resource-item">

            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              <h2>{resource.title}</h2>
            </a>

            <p>{resource.description}</p>

          </div>
        ))}

          <button onClick={handleReturn} className="back-button">
               Back to Homepage
          </button>

      </div>
    </div>
  );
};

export default ResourcePage;