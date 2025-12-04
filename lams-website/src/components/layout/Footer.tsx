"use client";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-linear-to-br from-amber-900 via-amber-800
  text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full
        blur-3xl"
        ></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full
        blur-3xl"
        ></div>
      </div>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-xl mb-4 uppercase tracking-wider">
              About Us
            </h3>
            <p className="text-amber-100 leading-relaxed">
              Welcome to the LAMS, a premier platform offering courses from top
              universities and institutions around the world.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-4 text-amber-100">
              <div className="flex items-start gap-3 group mb-3">
                <MapPin className="text-2xl mt-1 group-hover:scale-110 transition-transform"></MapPin>
                <p className="leading-relaxed">
                  207 Regent Street,
                  <br></br> London, England W1B3HH
                </p>
              </div>
              <div className="flex items-start gap-3 group mb-3">
                <Phone className="text-2xl mt-1 group-hover:scale-110 transition-transform"></Phone>
                <p className="leading-relaxed">Tel.: +44 20 8068 4422 </p>
              </div>
              <div className="flex items-start gap-3 group">
                <Mail className="text-2xl mt-1 group-hover:scale-110 transition-transform"></Mail>
                <p className="leading-relaxed">info@lams.ac</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 uppercase tracking-wider">
              Pages
            </h3>
            <ul className="space-y-3">
              {["About Us", "Courses", "News"].map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-amber-100 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4 uppercase tracking-wider">
              Blog
            </h3>
            <div className="space-y-3 ">
              <p className="text-amber-100 leading-relaxed hover:text-white hover:translate-x-1 inline-block transition-all">
                The Importance Of Occupational Standards To Higher Education
                Learners
              </p>
              <p className="text-amber-100 leading-relaxed hover:text-white hover:translate-x-1 inline-block transition-all">
                5 Most Common Master’s Degrees In 2023
              </p>
              <p className="text-amber-100 leading-relaxed hover:text-white hover:translate-x-1 inline-block transition-all">
                The Critical Power of Self-Assessment for Lifelong Learners
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-700/40 pt-8 text-center text-amber-200">
          <p className="">
            Copyright ©{new Date().getFullYear()}London Academy of Management
            and Sciences. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
