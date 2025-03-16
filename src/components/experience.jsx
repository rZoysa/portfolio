import React from "react";

export default function Experience() {
  const technologies = [
    { name: "Flutter", image: "../images/logos/flutter.svg" },
    { name: "Dart", image: "../images/logos/dart.png" },
    { name: "HTML", image: "../images/logos/html.svg" },
    { name: "CSS", image: "../images/logos/css.svg" },
    { name: "JavaScript", image: "../images/logos/JavaScript.png" },
    { name: "Tailwind", image: "../images/logos/tailwind.png" },
    { name: "Bootstrap", image: "../images/logos/bootstrap.svg" },
    { name: "React", image: "../images/logos/React.png" },
    { name: "Node.js", image: "../images/logos/nodejs.png" },
    { name: "Php", image: "../images/logos/php.png" },
    { name: "GitHub", image: "../images/logos/github.png" },
    { name: "MySQL", image: "../images/logos/mysql.svg" },
    { name: "Firebase", image: "../images/logos/firebase.svg" },
  ];

  return (
    <div id="experience" className="flex justify-center pt-20 px-4 sm:px-10">
      <div className="flex flex-col w-full max-w-6xl">
        <h1 className="text-4xl font-bold text-center text-white mb-5">
          Experience
        </h1>
        <p className="text-lg text-center text-gray-300 mb-8">
          Technologies I worked with
        </p>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {technologies.map((technology, index) => (
            <TechnologyCard key={index} name={technology.name} image={technology.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function TechnologyCard({ image, name }) {
  return (
    <div
      className="bg-white/5 rounded-xl w-full h-36 flex flex-col items-center justify-center p-4 
      hover:bg-white/10 hover:scale-105 transition-transform cursor-pointer duration-300"
    >
      <img src={image} className="w-full h-20 object-contain" alt={name} />
      <p className="text-lg text-white mt-2">{name}</p>
    </div>
  );
}
