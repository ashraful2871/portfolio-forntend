import ProjectCard from "./ProjectCard";
import { IProjects } from "../../../types";

const Projects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project/all-projects`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return (
    <section className="py-16 bg-black text-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#D2B48C]">My Projects</h2>
        <p className="text-gray-400 text-lg mt-4">
          Here is a showcase of my projects.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto my-5">
        {data?.map((project: IProjects) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* View All Button */}
      {/* <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="flex items-center gap-2 bg-[#D2B48C] text-black px-6 py-3 rounded-md font-medium hover:bg-[#C0A276] transition"
        >
          View All Projects
        </Link>
      </div> */}
    </section>
  );
};

export default Projects;
