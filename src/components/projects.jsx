import ProjectCard from "./project_card";

export default function Projects() {
  const projectList = [
    {
      title: "Be Glamourous",
      description:
        "Be Glamourous is an AI-powered mobile app that analyzes facial skin conditions from selfies to provide personalized skincare recommendations. It also features a social platform where users can share experiences, reviews, and skincare tips.",
      link: "https://github.com/rZoysa/BeGlamourous",
      images: [
        "../images/be_glamourous/1.png",
        "../images/be_glamourous/2.png",
        "../images/be_glamourous/3.png",
      ],
      technologies: ["Flutter", "Dart", "Python & YOLOv8", "Flask", "Node.js & Express.js", "MySQL "],
    },
    {
      title: "Receipt Print Android Application and Reps, Receipts Manage System for Standard Industries (Pvt) Ltd",
      description: "Working as a freelance fullstack developer in this project for Standard Industries (Pvt) Ltd Bombuwala",
      link: "",
      images: ["../images/standard/1.png"],
      technologies: ["Flutter", "Dart", "React", "JavaScript", "Node.js & Express.js", "MySQL"],
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-10 max-w-10/12 mx-auto">
      <h2 className="text-3xl font-semibold text-center text-white">
        Projects
      </h2>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            images={project.images}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
}
