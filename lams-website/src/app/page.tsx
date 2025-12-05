"use client";

import Hero from "@/components/ui/Hero";
import { ICON_MAP } from "@/data/mockData";
import { Feature, HomeData, Pillar, StatItem } from "@/data/types";
import { useEffect, useState } from "react";
import accessible from "../../public/images/accessible.jpg";
import readiness from "../../public/images/career-readiness.jpg";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("");
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
  return (
    <>
      <Hero />

      <section className="py-20 bg-linear-to-br from-amber-600 to-amber-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opactivy-10">
          <div className="absolute top-0 right-0 w-96 h-96 "></div>
          <div className="absolute bottom-0 left-0 w-96 h-96"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {dataLoad?.pillars.map((item: Pillar, i: number) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <div
                  key={i}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <h3 className="font-bold text-2xl mb-4 uppercase tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-lg text-amber-100 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about-us" className="py-24 bg-white ">
        <div className="container mx-auto px-4 ">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-amber-600 to-amber-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 leading-relaxed">
              LAMS is an international academy based in London, offering
              flexible and affordable pathways in business, technology, science,
              and professional development. We integrate modern teaching methods
              with practical, real-world skills to prepare learners for a
              successful global career. Our academy embraces diversity,
              welcoming students from all backgrounds — from young learners to
              working professionals and international applicants seeking
              meaningful opportunities for growth.
            </p>
          </div>
        </div>
      </section>

      <section
        id="programs"
        className="py-24 bg-linear-to-br from-gray-50 to-amber-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            Why Choose LAMS?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ml-5 lg:mb-16 items-center">
            <div className="text-4xl md:text-5xl font-bold text-center bg-linear-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={accessible}
                  alt="Students"
                  className="w-full h-96 object-cover  group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from black/50 to-transparent"></div>
              </div>
            </div>
            <div className="space-y-6">
              {dataLoad?.features.map((feature: Feature, i) => {
                const Icon = ICON_MAP[feature.icon];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105"
                  >
                    <div
                      className={`text-5xl bg-linear-to-br ${feature.color} p-4 rounded-xl shadoww-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon />
                    </div>
                    <h3 className="font-bold text-2xl text-gray-800">
                      {feature.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center bg-white p-12 rounded-3xl shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              At LAMS, we believe that quality education should empower rather
              than limit. Our institution is built around the values of
              accessibility, innovation, and real-world relevance — ensuring
              every learner gains the knowledge, confidence, and practical
              skills needed to thrive in today’s global environment. Whether you
              are starting your academic journey or advancing your career, LAMS
              provides a supportive pathway toward meaningful success.{" "}
            </p>
            <a
              href="#programs"
              className="mt-4 inline-block bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white brightness-96">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-linear-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
            Full Accreditation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-10">
              {dataLoad?.stats.map((stat: StatItem, i) => {
                const Icon = ICON_MAP[stat.icon];
                return (
                  <div
                    key={i}
                    className="flex items-center gap-6 p-8 bg-linear-to-br from-amber-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <div className="text-6xl group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <h3 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-xl text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src={readiness}
                alt="Students"
                className="w-full h-[500px] object-cover  group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from black/50 to-transparent"></div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center bg-linear-to-br from-gray-50 to-amber-50 p-12 rounded-3xl shadoww-xl">
            <p className="text-lg text-gray-700 text-justify leading-relaxed mb-8">
              LAMS works in partnership with recognized educational bodies to
              ensure that our programmes meet high academic and industry
              standards. Our qualifications are designed to align with
              international frameworks, giving students confidence that the
              education they receive is credible, reputable, and globally
              relevant. Through ongoing quality assurance and collaboration with
              trusted awarding organisations, we maintain a strong commitment to
              academic excellence and continuous improvement.
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-linear-to-r from-amber-600 to-amber-800 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              Career Services & Centers
              <MoveRight
                className="ml-1 transition-transform duration-300 group-hover:translate-x-2"
                size={20}
              />
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact-us"
        className="py-24 bg-linear-to-br from-gray-900 via-gray-800 to-amber-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Find Your Dream Course
          </h2>
          <p className="text-center text-gray-300 text-lg mb-12">
            Start your journey to sucess today
          </p>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Search by Course Name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="grow px-6 py-4 rounded-xl text-white-900 focus:outline-none focus:ring-amber-500 transition-all text-lg"
                />
                <select
                  value={selectedDept}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-amber-500 transition-all text-lg"
                >
                  <option value="">Select Deparment</option>
                  <option value="business">Business</option>
                  <option value="technology">Technology</option>
                  <option value="science">Science</option>
                  <option value="sustainability">ustainability</option>
                </select>
                <button className="bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:cursor-pointer hover:to-amber-800 px-10 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl whitespace-nowrap hover:scale-105">
                  Find Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
