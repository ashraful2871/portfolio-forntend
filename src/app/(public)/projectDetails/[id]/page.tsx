import Image from "next/image";
import { Github, Link as LinkIcon } from "lucide-react";
import { IProjects } from "../../../../../types";

interface ProjectDetailsProps {
  params: {
    id: string;
  };
}

const getProjectDetails = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project/single-project/${id}`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch project details");
  }
  return res.json();
};

const ProjectDetails = async ({ params }: ProjectDetailsProps) => {
  const project: IProjects = await getProjectDetails(params.id);

  return (
    <div className="min-h-screen  text-white p-3">
      <div className="px-3">
        {/* Project Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#D2B48C]">{project?.name}</h1>
          <p className="mt-4 text-lg text-gray-400">{project?.description}</p>
        </div>

        {/* Project Details Section */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Left Side: Project Image */}
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Image
              src={project?.image}
              alt={project?.name}
              width={800}
              height={600}
              priority
            />
          </div>

          {/* Right Side: Project Details */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#D2B48C]">
                Tech Stack
              </h2>
              <p className="text-lg text-gray-400">{project?.techStack}</p>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#D2B48C]">
                Description
              </h2>
              <p className="text-lg text-gray-400">{project?.description}</p>
            </div>

            {/* Challenges */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-[#D2B48C]">
                Challenges Faced
              </h2>
              <p className="text-lg text-gray-400">
                {project?.challenges ||
                  "No major challenges faced during the project."}
              </p>
            </div>

            {/* My Contribution */}
            {project?.myContribution && (
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-[#D2B48C]">
                  My Contribution
                </h2>
                <p className="text-lg text-gray-400">
                  {project.myContribution}
                </p>
              </div>
            )}

            {/* Links */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-[#D2B48C]">Links</h2>
              <div className="flex space-x-4">
                {project?.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#D2B48C] text-black px-4 py-2 rounded-md hover:bg-[#C0A276] transition"
                  >
                    <LinkIcon size={18} />
                    <span>Live</span>
                  </a>
                )}
                {project?.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#D2B48C] text-black px-4 py-2 rounded-md hover:bg-[#C0A276] transition"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
