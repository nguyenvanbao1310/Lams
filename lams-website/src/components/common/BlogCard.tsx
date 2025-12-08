"use client";

import React from "react";
import Image from "next/image";
import { BlogPost } from "@/data/types";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:cursor-pointer hover:shadow-2xl transition-all duration-300">
      <div className="overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={600}
          height={400}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="inline-block text-sm text-amber-600 bg-amber-100 px-3 py-1 rounded-full mb-3">
          {post.category}
        </span>

        <h3 className="font-bold text-xl mb-3 group-hover:text-amber-700 transition-colors">
          {post.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>

        <div className="text-sm text-yellow-700">
          <span>{post.date}</span> • <span>{post.author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
