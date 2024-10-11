import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutMeHome = () => {
  return (
    <div className="flex justify-center items-center h-full py-16 px-8 md:px-36 bg-[#F1F5F9] dark:bg-[var(--darkmode-color)]">
      <div className="flex flex-col md:flex-row items-center bg-white border border-gray-300 rounded-lg shadow-lg w-full md:max-w-5xl lg:max-w-6xl hover:bg-gray-100 dark:border-[#707382] dark:bg-[#2A3A4E] dark:hover:bg-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
        {/* Profile Image */}
        <img
          className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-80 md:rounded-none md:rounded-l-lg shadow-inner transition duration-300 ease-in-out hover:filter hover:grayscale"
          src="public/my-photo-1.jpg"
          alt="Fon Yingrak Muansawad"
        />

        {/* Card Content */}
        <div className="flex flex-col justify-between p-8 leading-normal text-center md:text-left w-full">
          {/* Title */}
          <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-[#E5E7EB]">
            Fon Yingrak Muansawad
          </h5>

          {/* Extended Description */}
          <p className="mb-4 text-lg font-normal text-gray-700 dark:text-[#9FA2AC]">
            I’m a passionate front-end developer based in Munich, dedicated to
            building immersive, user-friendly digital experiences. With a
            background in digital learning and social innovation, I leverage my
            interdisciplinary skills to craft intuitive interfaces that bring
            real value to users. Fluent in multiple languages and well-versed in
            cross-cultural communication, I aim to create accessible and
            inclusive designs that resonate globally.
          </p>

          {/* Learn More Button */}
          <Link to="/about">
            <button className="mt-4 mb-4 px-8 py-3 text-lg font-semibold text-[#1F4F82] bg-transparent border-2 border-[#1F4F82] rounded-lg hover:text-white hover:bg-[#1F4F82] transition-colors duration-300 dark:text-[#FFD300] dark:border-[#FFD300] dark:hover:bg-[#FFD300] dark:hover:text-[#10162F]">
              Learn More
            </button>
          </Link>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/fon-yingrak-muansawad/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            {/* Email Icon */}
            <a
              href="mailto:y.muansawad@gmail.com"
              className="text-red-600 hover:text-red-800 transition-colors duration-300"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeHome;
