import React from "react";

export default function About() {
  return (
    <section id="about">
        
        
      <div className="container mx-auto flex px-10 py-0 md:flex-row flex-col items-center">
          
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Ntombi
           
          </h1>
          
          <p className="mb-8 leading-relaxed">
          I am a graduate in Software Engineering from WeThinkCode_. 
          My passion and aptitude for coding have been evident throughout my academic and 
          professional journey, driving my dedication to excel in the field of software engineering.          
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/ntombifuthi-motaung-95a74a207/"
              className="inline-flex text-black-400 bg-pink-700 border-0 py-2 px-6 focus:outline-none hover:bg-pink-300 rounded text-lg">
              Contact me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-black-400 bg-pink-700 border-0 py-2 px-6 focus:outline-none hover:bg-pink-300 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="h-50 w-96"
            alt="hero"
            src="./index.jpg"
          />
        </div>
      </div>
    </section>
  );
}
