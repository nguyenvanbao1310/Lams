"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (!/^[0-9+ ]*$/.test(value)) return;

    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error("Full Name is required");
      return;
    }

    if (!formData.email) {
      toast.error("Email is required");
      return;
    }

    if (formData.phone && !/^[0-9+ ]+$/.test(formData.phone)) {
      toast.error("Phone number must contain only numbers");
      return;
    }

    const checkLengthPhone = formData.phone.replace(/\s/g, "");

    if (checkLengthPhone.length < 10 || checkLengthPhone.length > 15) {
      toast.error("Phone number must be between 10 and 15 digits");
      return;
    }

    if (!formData.subject) {
      toast.error("Subject is required");
      return;
    }

    if (!formData.message) {
      toast.error("Message is required");
      return;
    }
    setShowConfirm(true);
  };

  const handleConfirmSend = () => {
    toast.success("✅ Thank you for your message! We will contact you soon.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    setShowConfirm(false);
  };

  return (
    <main className="bg-gray-100 min-h-full">
      <div className=" mt-10">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <div className="text-sm text-gray-600 mb-6">
                <Link
                  href="/"
                  className="text-yellow-600 hover:text-yellow-700"
                >
                  Home
                </Link>{" "}
                / Contact Us
              </div>

              <h1 className="text-5xl font-bold text-gray-800 mb-8 uppercase tracking-wide">
                Contact Us
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Welcome to the LAMS, a premier platform offering courses from
                top universities and institutions around the world.
              </p>

              <div className="bg-gradient-to-br from-yellow-600 to-amber-800 rounded-2xl p-8 text-white">
                <div className="mb-8">
                  <div className="text-xs font-semibold uppercase tracking-widest opacity-90 mb-2">
                    Main Campus
                  </div>
                  <div className="text-lg leading-relaxed">
                    207 Regent Street, London,
                    <br />
                    England W1B3HH
                  </div>
                </div>

                <div className="mb-8">
                  <div className="text-xs font-semibold uppercase tracking-widest opacity-90 mb-2">
                    Phone
                  </div>
                  <a
                    href="tel:+442080684422"
                    className="text-lg hover:opacity-80 transition-opacity"
                  >
                    +44 20 8068 4422
                  </a>
                </div>

                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest opacity-90 mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:info@lams.ac"
                    className="text-lg hover:opacity-80 transition-opacity"
                  >
                    info@lams.ac
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    onChange={handleChange}
                    value={formData.message}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-yellow-600 resize-vertical"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-600 to-amber-800 text-white font-semibold py-4 px-8 rounded-lg hover:-translate-y-1 hover:shadow-xl transition-all uppercase tracking-wider"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto p-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl ">
          <h2 className="text-2xl font-semibold text-yellow-700 mb-5 text-center">
            Find Us on the Map
          </h2>
          <iframe
            className="w-full h-[400px] rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74381.78705483736!2d106.64596406953126!3d10.801492917631117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ff90b28e2a7%3A0xd5907b763ed74d36!2sT%C3%B2a%20Nh%C3%A0%20Charmington%20La%20Pointe!5e1!3m2!1svi!2s!4v1765007627555!5m2!1svi!2s"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Confirm Submission
            </h3>

            <p className="text-gray-600 mb-6">
              Are you sure you want to send this message?
            </p>

            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleConfirmSend}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-600 to-amber-800 text-white font-semibold hover:shadow-lg"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
