"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { IProjects } from "../../../types";

const ProjectCard = ({ project }: { project: IProjects }) => {
  return (
    <div className="bg-[#1F1F1F] shadow-lg rounded-lg overflow-hidden border border-[#2a2a2a] hover:scale-[1.02] transition-transform">
      {/* Project Image */}
      <div className="relative w-full h-52">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#D2B48C]">{project.name}</h3>
        <p className="text-sm text-gray-400 mt-2 line-clamp-3">
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <Link
            href={`/projectDetails/${project.id}`}
            className="flex items-center gap-2 text-[#D2B48C] border border-[#D2B48C] px-4 py-2 rounded-md hover:bg-[#C0A276] hover:text-black transition"
          >
            <span>View More</span>
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
