"use client";
import React from "react";
import BlogCard from "../common/BlogCard";
import { BlogPost } from "@/data/types";

interface BlogSectionProps {
  blogPosts: BlogPost[];
  title: string;
}

const BlogSection = ({ blogPosts, title }: BlogSectionProps) => {
  return (
    <section id="news" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
