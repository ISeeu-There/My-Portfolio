"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsEnvelope, BsTelephone, BsSend } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Submitted", formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[38px]">
          {/* Contact Details */}
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <h2 className="text-[42px] font-bold text-cyan-500 group-hover:text-cyan-500 transition-all duration-500 capitalize">
                Get in Touch
              </h2>
              <p className="text-white/60 mt-4">
                Feel free to reach out via email, phone, or by filling out the
                contact form. I look forward to hearing from you!
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-4 text-white/80">
                  <BsEnvelope className="text-cyan-500 text-2xl" />
                  <span>email@example.com</span>
                </li>
                <li className="flex items-center gap-4 text-white/80">
                  <BsTelephone className="text-cyan-500 text-2xl" />
                  <span>+123 456 7890</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full xl:w-[50%]">
            <form
              onSubmit={handleSubmit}
              className="bg-stone-950 p-6 rounded-lg shadow-lg space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-cyan-500 text-xl font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-stone-950 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-cyan-500 text-xl font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-stone-950 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-cyan-500 text-xl font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 rounded-lg bg-stone-950 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-cyan-500 text-white font-medium rounded-lg hover:bg-cyan-600 transition-all duration-300"
              >
                <BsSend /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
