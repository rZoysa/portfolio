import ProjectCard from "./project_card";

export default function Projects() {
  const projectList = [
    {
      title: "Project One",
      description: "A short description of your Flutter app.",
      link: "https://github.com/yourproject1",
      images: [
        "https://crocodic.com/wp-content/uploads/2016/10/thumbnail-news-manfaat-mobile-app-565c154db3d7d-620x350.jpg",
        "https://mir-s3-cdn-cf.behance.net/projects/404/9ff9f4214855313.Y3JvcCwyODAwLDIxOTAsMCw5Nw.png",
      ],
    },
    {
      title: "Another App",
      description: "Another brief description of your project.",
      link: "https://github.com/yourproject2",
      images: [
        "https://crocodic.com/wp-content/uploads/2016/10/thumbnail-news-manfaat-mobile-app-565c154db3d7d-620x350.jpg",
        "https://mir-s3-cdn-cf.behance.net/projects/404/9ff9f4214855313.Y3JvcCwyODAwLDIxOTAsMCw5Nw.png",
      ],
    },
    {
      title: "Cool Flutter App",
      description: "An innovative mobile app built with Flutter.",
      link: "https://yourapp.com",
      images: [
        "https://crocodic.com/wp-content/uploads/2016/10/thumbnail-news-manfaat-mobile-app-565c154db3d7d-620x350.jpg",
        "https://mir-s3-cdn-cf.behance.net/projects/404/9ff9f4214855313.Y3JvcCwyODAwLDIxOTAsMCw5Nw.png",
      ],
    },
  ];
  return (
    <section id="projects" className="py-20 px-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
}
