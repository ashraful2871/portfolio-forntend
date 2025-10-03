import BlogCard from "@/components/shared/BlogCard";
import React from "react";
import { IBlog } from "../../../../types";

const Blogs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blog/all-blogs`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <div className="space-y-5 py-16  bg-black text-[#DAC6A8]">
      <h1 className="text-4xl font-bold text-center">My Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto my-5">
        {data?.map((blog: IBlog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
