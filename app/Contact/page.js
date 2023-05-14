"use client";
import { images } from "@/assets/images";
import Image from "next/image";

import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:text-sm xl:text-[24px]"
    >
      <label htmlFor="name" className="text-neutral-400">
        Your Name(required)
      </label>
      <input
        className="sm:max-xl:mb-5 mb-10 xl:mt-2 focus:outline-none focus:shadow-pro sm:max-xl:h-8 h-16 sm:max-xl:px-2 px-4 border-neutral-400 border rounded"
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email" className="text-neutral-400">
        Your Email(required)
      </label>
      <input
        className="sm:max-xl:mb-5 mb-10 xl:mt-2  focus:outline-none focus:shadow-pro sm:max-xl:h-8 h-16 sm:max-xl:px-2 px-4 border-neutral-400 border rounded"
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
      />

      <label htmlFor="subject" className="text-neutral-400">
        Subject
      </label>
      <input
        className="sm:max-xl:mb-5 mb-10 xl:mt-2  focus:outline-none focus:shadow-pro sm:max-xl:h-8 h-16 sm:max-xl:px-2 px-4 border-neutral-400 border rounded"
        type="text"
        name="subject"
        id="subject"
        value={formData.subject}
        onChange={handleChange}
      />

      <label htmlFor="message" className="text-neutral-400">
        Your Message
      </label>
      <textarea
        className="sm:max-xl:mb-5 mb-10 xl:mt-2 focus:outline-none focus:shadow-pro max-sm:min-h-[200px] xl:min-h-[250px] p-2 border-neutral-400 border rounded"
        name="message"
        id="message"
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        className="text-white w-fit sm:max-xl:text-sm text-xl font-semibold bg-black sm:max-xl:py-2 py-4 sm:max-xl:px-5 px-10 uppercase rounded-[5px]"
      >
        Send
      </button>
    </form>
  );
};

const Contact = () => {
  return (
    <div className=" my-[10vw] " id="contact">
      <p className="max-sm:text-[35px] text-3xl xl:text-[45px] xl:leading-tight font-bold capitalize text-center">
        Get In Touch
      </p>
      <p className=" text-center max-sm:text-xl text-[15px] xl:text-[27px] max-sm:mt-5 font-light ">
        Finance and Jurisprudence are our main directions and we know how to
        deal with many financial issues and how to do business in today’s
        reality and conditions.
      </p>
      <div className="flex max-sm:flex-col mt-[5vw]">
        <div className=" flex-1 m-auto">
          <Image src={images.mailRafiki} alt="mail" className=" sm:w-[36vw]" />
        </div>
        <div className="flex-1 max-sm:my-5">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
