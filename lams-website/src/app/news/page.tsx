"use client";

import { HomeData } from "@/data/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import BlogSection from "@/components/ui/BlogSection";

export default function NewsPage() {
  const [dataLoad, setDataLoad] = useState<HomeData | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/home");
      const result = await res.json();
      console.log("CHECK ICON: ", result);
      setDataLoad(result);
    };
    load();
  }, []);

  const featuredArticle = dataLoad?.blogPosts[0];
  const topStories = dataLoad?.blogPosts.slice(1);

  return (
    <div className="mt-20 min-h-auto bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            NEWSROOM | LAMS
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Stay updated with the latest insights in higher education and
            professional development
          </p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <Image
                src={
                  featuredArticle?.image ?? "/images/blog_image/blog_study.jpg"
                }
                alt={featuredArticle?.title ?? "No Title"}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="text-sm text-yellow-600 font-semibold mb-3">
                {featuredArticle?.date}
              </div>
              <span className="inline-block text-sm text-amber-600 bg-amber-100 px-3 py-1 rounded-full mb-3">
                {featuredArticle?.category}
              </span>

              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 hover:text-yellow-600 transition-colors cursor-pointer">
                {featuredArticle?.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {featuredArticle?.excerpt}
              </p>
              <button className="hover:cursor-pointer bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {topStories && topStories && (
        <BlogSection blogPosts={topStories} title="TOP STORIES" />
      )}
    </div>
  );
}
