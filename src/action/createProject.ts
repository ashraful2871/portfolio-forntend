"use server";

import { authOptions } from "@/components/halper/authOption";
import { getServerSession } from "next-auth";
import { ICreateProject } from "../../types";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) throw new Error("User not authenticated");
  const projectInfo = Object.fromEntries(data.entries());
  const modifiedProject = {
    name: projectInfo.name,
    image: projectInfo.image,
    techStack: projectInfo.techStack,
    description: projectInfo.description,
    myContribution: projectInfo.myContribution,
    liveLink: projectInfo.liveLink,
    githubLink: projectInfo.liveLink,
    challenges: projectInfo.challenges,
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project/create-project`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(modifiedProject),
    }
  );
  const result = await res.json();
  if (!result?.id) throw new Error("Project creation failed");
  revalidateTag("PROJECT");
  redirect("/");
};
