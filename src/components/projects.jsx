import ProjectCard from "./project_card";

export default function Projects() {
  const beGlamourousImages = Object.values(
    import.meta.glob("../assets/images/be_glamourous/*.png", { eager: true })
  ).map((img) => img.default);

  const spacexImages = Object.values(
    import.meta.glob("../assets/images/spacex/*.png", { eager: true })
  ).map((img) => img.default);

  const standardImages = Object.values(
    import.meta.glob("../assets/images/standard/*.png", { eager: true })
  ).map((img) => img.default);

  const weatherappImages = Object.values(
    import.meta.glob("../assets/images/weatherapp/*.png", { eager: true })
  ).map((img) => img.default);

  const tomatoGameImages = Object.values(
    import.meta.glob("../assets/images/tomato_game/*.png", { eager: true })
  ).map((img) => img.default);

  const projectList = [
    {
      title: "Be Glamourous",
      description:
        "Be Glamourous is an AI-powered mobile app that analyzes facial skin conditions from selfies to provide personalized skincare recommendations. It also features a social platform where users can share experiences, reviews, and skincare tips.",
      link: "https://github.com/rZoysa/BeGlamourous",
      images: beGlamourousImages,
      technologies: [
        "Flutter",
        "Dart",
        "Python & YOLOv8",
        "Flask",
        "Node.js & Express.js",
        "MySQL ",
      ],
    },
    {
      title:
        "Receipt Print Android Application and Reps, Receipts Management System for Standard Industries (Pvt) Ltd",
      description:
        "Working as a freelance fullstack developer in this project for Standard Industries (Pvt) Ltd Bombuwala",
      link: "",
      images: standardImages,
      technologies: [
        "Flutter",
        "Dart",
        "React",
        "JavaScript",
        "Node.js & Express.js",
        "MySQL",
      ],
    },
    {
      title: "SpaceX Explorer",
      description:
        "A sleek Flutter app to explore SpaceX rockets, launch and landing pads. Built with MVC architecture, real-time SpaceX API data, custom animations.",
      link: "https://github.com/rZoysa/SpaceX",
      images: spacexImages,
      technologies: [
        "Flutter",
        "Dart",        
        "API Integration",
      ],
    },
    {
      title: "Weather App",
      description:
        "Developed a cross-platform weather application for both Android and iOS, integrating the OpenWeatherMap API to fetch real-time weather data. The app provides users with accurate weather forecasts, temperature updates, and other meteorological details in an intuitive and user-friendly interface.",
      link: "https://github.com/rZoysa/weather_app",
      images: weatherappImages,
      technologies: ["Flutter", "Dart", "API Integration"],
    },
    {
      title: "Tomato Math Game",
      description:
        " Designed and developed the Tomato Math Game, a web-based interactive mathematical game utilizing the Tomato API. Built as a final project for my 3rd-year subject, the game features a real-time leaderboard, dynamic updates, and an intuitive user interface to enhance user engagement. Play the game from here.",
      link: "https://github.com/rZoysa/Tomato-Game",
      images: tomatoGameImages,
      technologies: ["React.js", "JavaScript", "Firebase", "API Integration"],
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-10 w-10/12 lg:w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold text-center text-white">
        Projects
      </h2>

      {/* Grid Layout for Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 gap-6 mt-8">
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
