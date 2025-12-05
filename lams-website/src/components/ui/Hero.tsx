"use client";
import Image from "next/image";
import anh16 from "../../../public/images/anh16.png";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-600 via-gray-500 to-amber-700"></div>
      <div className="absolute inset-0 opacity-20">
        <Image
          src={anh16}
          alt="Students"
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fadeIn">
          <h1 className="text-5xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Welcome to{" "}
            <span className="bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              LAMS
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Advance your profession and enhance your abilities with a wide range
            of online courses, including certificates, short courses, and
            executive programmes.
          </p>

          <div className="space-x-10">
            <a
              href="#about-us"
              className="inline-block bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 "
            >
              About us
            </a>
            <a
              href="#about-us"
              className="inline-block bg-linear-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 "
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
