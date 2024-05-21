import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div name="contact" className="w-full h-screen">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full max-[520px]:mt-32">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-black">
              Contact
            </p>
            <p className="py-6">Submit the form below to get in touch with me</p>
          </div>

          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/91ab6b84-befa-46ef-8e58-51aba14f230b"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 border-black rounded-md focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 border-black  rounded-md focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 border-black rounded-md focus:outline-none"
              ></textarea>

              <button className="text-white font-bold bg-black px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
