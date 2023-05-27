import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-base md:text-xl mt-8 md:mt-20">
          Hello, my name is Hargobinda. I have worked on many projects, and one of my favorite projects that I have worked on is the Crypto Currency Dashboard. Additionally, I have worked on a project called Flash Card Generator.
        </p>
        <br />
        <p className="text-base md:text-xl mt-4">
          My responsibilities include researching, designing, implementing, and managing software programs. I also test and evaluate new programs, identify areas for modification in existing programs, and write and implement efficient code. I determine operational practicality and ensure the software meets the desired requirements.
        </p>
      </div>
    </div>
  );
};

export default About;
