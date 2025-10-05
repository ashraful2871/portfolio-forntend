"use server";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/components/halper/authOption";

export const create = async (data: FormData) => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) throw new Error("User not authenticated");

  const blogInfo = Object.fromEntries(data.entries());
  const modifiedBlog = {
    title: blogInfo.title,
    content: blogInfo.content,
    userId: parseInt(session.user.id),
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog/create-blog`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modifiedBlog),
      credentials: "include",
    }
  );

  const result = await res.json();

  if (!result?.id) throw new Error("Blog creation failed");

  revalidateTag("BLOGS");
  redirect("/blog");
};
