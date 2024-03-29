// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-pink-700 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            About
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="text-white mr-5 hover:text-black">
            Projects
          </a>
          <a href="#skills" className="text-white mr-5 hover:text-black">
            Skills
          </a>
          <a href="#lifestyle" className="text-white mr-5 hover:text-black">
            Lifestyle
          </a>
       
        </nav>
        <a
          href="https://www.linkedin.com/in/ntombifuthi-motaung-95a74a207/"
          className="inline-flex items-center bg-pink-500 border-0 py-1 px-3 focus:outline-none hover:bg-pink-300 rounded text-base mt-4 md:mt-0">
          Hire Me
          
        </a>
      </div>
    </header>
  );
}
