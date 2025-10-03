import React from "react";
import { IBlog } from "../../../types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogCardProps {
  blog: IBlog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Card className="max-w-md  my-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex items-center gap-4 pb-2">
        <Avatar>
          {blog.user.photo ? (
            <AvatarImage src={blog.user.photo} alt={blog.user.name} />
          ) : (
            <AvatarFallback>
              {blog.user.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <p className="text-sm font-medium">{blog.user.name}</p>
          <p className="text-xs text-muted-foreground">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-bold">{blog.title}</CardTitle>
        <CardDescription className="">{blog.content}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
