"use server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const create = async (data: FormData) => {
  const blogInfo = Object.fromEntries(data.entries());
  const modifiedBlog = {
    title: blogInfo.title,
    content: blogInfo.content,
  };

  // Validate the blog information
  if (!modifiedBlog.title || !modifiedBlog.content) {
    throw new Error("Title and content are required");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/create-blog`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(modifiedBlog),
  });

  const result = await res.json();

  if (result?.id) {
    revalidateTag("BLOGS");
    redirect("/blogs");
  }
  return result;
};
