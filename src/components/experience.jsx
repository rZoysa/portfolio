import React from "react";
import flutterLogo from "../assets/images/logos/flutter.svg";
import dartLogo from "../assets/images/logos/dart.png";
import htmlLogo from "../assets/images/logos/html.svg";
import cssLogo from "../assets/images/logos/css.svg";
import jsLogo from "../assets/images/logos/JavaScript.png";
import tailwindLogo from "../assets/images/logos/tailwind.png";
import bootstrapLogo from "../assets/images/logos/bootstrap.svg";
import reactLogo from "../assets/images/logos/React.png";
import nodejsLogo from "../assets/images/logos/nodejs.png";
import phpLogo from "../assets/images/logos/php.png";
import githubLogo from "../assets/images/logos/github.png";
import mysqlLogo from "../assets/images/logos/mysql.svg";
import firebaseLogo from "../assets/images/logos/firebase.svg";

export default function Experience() {
  const technologies = [
    { name: "Flutter", image: flutterLogo },
    { name: "Dart", image: dartLogo },
    { name: "HTML", image: htmlLogo },
    { name: "CSS", image: cssLogo },
    { name: "JavaScript", image: jsLogo },
    { name: "Tailwind", image: tailwindLogo },
    { name: "Bootstrap", image: bootstrapLogo },
    { name: "React", image: reactLogo },
    { name: "Node.js", image: nodejsLogo },
    { name: "PHP", image: phpLogo },
    { name: "GitHub", image: githubLogo },
    { name: "MySQL", image: mysqlLogo },
    { name: "Firebase", image: firebaseLogo },
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
