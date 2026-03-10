import { Button } from "./Button.jsx";

import { useState } from "react";

import {motion} from 'framer-motion';

import {fadedInOut} from './custom_motion';

export const ContactForm = () => {
  //set the form to empty object with key and value
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validate if all the input fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill the form completely...");
      return;
    }

    setIsLoading(true);
//stimulated for time taken to send message
    setTimeout(() => {
      console.log(formData);

      setIsLoading(false);

      alert("Message sent successfully...");
//refresh the input fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-full items-left text-left"
      >
        <motion.div 
        className="w-full flex gap-5 "  
        variants={fadedInOut()}
        initial="hidden"
        whileInView="show"
        >
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="name" className="font-semibold text-headercolor">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-white text-lg bg-black/80 border border-gray-600 outline-0 placeholder:text-lg`}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="font-semibold text-headercolor">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-white text-lg bg-black/80 border border-gray-600 outline-0 placeholder:text-lg`}
            />
          </div>
        </motion.div>
        <motion.div 
          className="flex flex-col gap-2 w-full"
          variants={fadedInOut()}
          initial = "hidden"
          whileInView="show"
        >
          <label htmlFor="subject" className="font-semibold text-headercolor">
            Subject
          </label>
          <input
            type="text"
            placeholder="What's this about?"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-3 py-2 text-white text-lg bg-black/80 border border-gray-600 outline-0 placeholder:text-lg`}
          />
        </motion.div>
        <motion.div 
          className="flex flex-col gap-2 w-full"
          variants={fadedInOut()}
          initial = "hidden"
          whileInView = "show"
          >
          <label htmlFor="message" className="font-semibold text-headercolor">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
            className={`w-full h-48 resize-none px-3 py-2 text-white text-lg bg-black/80 border border-gray-600 outline-0`}
          ></textarea>
        </motion.div>
          <Button
            text={isLoading? "Sending Message...":"Send Message"}
            className={`bg-brown hover:bg-bhove w-fit py-5 px-10 cursor-pointer text-white text-xl font-semibold`}
            Btntype={"submit"}
          />
      </form>
    </>
  );
};
