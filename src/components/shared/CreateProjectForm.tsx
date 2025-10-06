"use client";

import { createProject } from "@/action/createProject";
import Form from "next/form";

const CreateProjectForm = () => {
  return (
    <div className="flex-1 p-6 md:p-10 ">
      <div className="max-w-2xl mx-auto  rounded-2xl shadow-md p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-6">Create New Project</h1>

        <Form
          action={createProject}
          className="space-y-5 grid grid-cols-2 gap-5"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Project Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-[#C0A276] px-3 py-2 focus:ring focus:ring-[#C0A276]"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="image">
              Image URL
            </label>
            <input
              type="url"
              id="image"
              name="image"
              required
              className="w-full rounded-md border border-[#C0A276] px-3 py-2 focus:ring focus:ring-[#C0A276]"
            />
          </div>

          {/* Tech Stack */}
          <div className="col-span-2">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="techStack"
            >
              Tech Stack
            </label>
            <input
              type="text"
              id="techStack"
              name="techStack"
              required
              placeholder="React, Node.js, Tailwind..."
              className="w-full rounded-md border border-[#C0A276] px-3 py-2 focus:ring focus:ring-[#C0A276]"
            />
          </div>

          {/* Description */}
          <div className="col-span-2">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              className="w-full rounded-md border border-[#C0A276] px-3 py-2 focus:ring focus:ring-[#C0A276]"
            />
          </div>

          {/* My Contribution (optional) */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="myContribution"
            >
              My Contribution{" "}
              <span className="text-gray-400 text-sm">(optional)</span>
            </label>
            <textarea
              id="myContribution"
              name="myContribution"
              rows={3}
              className="w-full rounded-md border border-[#C0A276] px-3 py-2 focus:ring focus:ring-[#C0A276]"
            />
          </div>

          {/* Live Link */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="liveLink"
            >
              Live Link
            </label>
            <input
              type="url"
              id="liveLink"
              name="liveLink"
              required
              placeholder="https://yourproject.com"
              className="w-full rounded-md border border-[#C0A276] px-3 py-2 focus:ring focus:ring-[#C0A276]"
            />
          </div>

          {/* GitHub Link */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="githubLink"
            >
              GitHub Link
            </label>
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              required
              placeholder="https://github.com/username/repo"
              className="w-full rounded-md border border-[#C0A276] px-3 py-2 focus:ring focus:ring-[#C0A276]"
            />
          </div>

          {/* Challenges */}
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="challenges"
            >
              Challenges
            </label>
            <textarea
              id="challenges"
              name="challenges"
              rows={3}
              required
              className="w-full rounded-md border border-[#C0A276] px-3 py-2 focus:ring focus:ring-[#C0A276]"
            />
          </div>

          <button
            type="submit"
            className="col-span-2 w-full bg-[#C0A276] text-white font-medium py-2 rounded-md hover:bg-[#c5a068] transition"
          >
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default CreateProjectForm;
