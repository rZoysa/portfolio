import ProjectCard from "./project_card";

export default function Projects() {
  const projectList = [
    {
      title: "Be Glamourous",
      description: "A short description of your Flutter app.",
      link: "https://github.com/rZoysa/BeGlamourous",
      images: [
        "../images/be_glamourous/1.png",
        "../images/be_glamourous/2.png",
        "../images/be_glamourous/3.png",
      ],
    },
    {
      title: "Another App",
      description: "Another brief description of your project.",
      link: "https://github.com/yourproject2",
      images: [
        "https://mir-s3-cdn-cf.behance.net/projects/404/9ff9f4214855313.Y3JvcCwyODAwLDIxOTAsMCw5Nw.png",
        "https://cdn.dribbble.com/userupload/31551725/file/original-369ff8277fc7c3ab9fe8d5a3dd86c835.jpg",
      ],
    },
    {
      title: "Cool Flutter App",
      description: "An innovative mobile app built with Flutter",
      link: "https://yourapp.com",
      images: [
        "https://mir-s3-cdn-cf.behance.net/projects/404/9ff9f4214855313.Y3JvcCwyODAwLDIxOTAsMCw5Nw.png",
        "https://cdn.dribbble.com/userupload/31551725/file/original-369ff8277fc7c3ab9fe8d5a3dd86c835.jpg",
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
