import React from "react";
import Guvife from "../assets/portfolio/Guvife.png";
import Todolist from "../assets/portfolio/Todolist.png";
import StudentMentor from "../assets/portfolio/StudentMentor.png";

const Portfolio = () => {
  const portfolios = [
 
    {
      title: "Mock Zen-Class Portal",
      imgSrc: money,
      projectDesc: `I developed an exceptional student dashboard for ZEN Class, providing students with a comprehensive platform for managing their academic journey. With this dashboard, students can effortlessly participate in classes, submit assignments, seek assistance for their queries, and request leaves. This tool aims to enhance the educational experience and empower students to succeed in their studies.`,
      deployLink: "https://main--effervescent-faun-547ef4.netlify.app//",
      frontEndLink: "https://github.com/Abhishek94Bire/zenclass-frontend-main",
      backEndLink:
        "https://github.com/Abhishek94Bire/zen_class_backend-main",
    },
    
    {
      title: "To Do List",
      imgSrc: todolist,
      projectDesc: `Simple Todo List created using React.
          This project which enables the user to add the to do list and change
          it's completed status.`,
      deployLink:
        "https://652a5ddb56e84e111da278d2--chipper-valkyrie-9a0ae7.netlify.app/",
      frontEndLink: "https://github.com/Abhishek94Bire/Guvi-Task-Simple-todoList-react-main",
      backEndLink: "",
    },
    {
      title: "Simple e-Commerce Shopping Cart",
      imgSrc: ecommcart,
      projectDesc: `Simple eCommerce Shopping Cart created using React.
          This project which enables the user to add the available item to the shop cart and remove the added item from the cart.`,
      deployLink: "https://652a62ddfdf121149a3f781c--sunny-custard-24ba1e.netlify.app/",
      frontEndLink: "https://github.com/Abhishek94Bire/GuviTask-React-shopcart-main",
      backEndLink: "",
    },
    {
      title: "Student Mentor Panel",
      imgSrc: studentmentor,
      projectDesc: `Student Mentor Panel created using React.
          Student Mentor Panel created using ReactJS, Bootstrap, MUI. This project enables the admin user to add, remove and manage both the student and teacher data.`,
      deployLink: "https://famous-kataifi-1433d3.netlify.app/",
      frontEndLink: "https://github.com/Abhishek94Bire/React--Day--7-Context-API-Resubmit",
      backEndLink: "",
    },
  
  ];
  return (
    <div
      name="portfolio"
      className="w-full md:h-screen h-screen my-20"
    >
      <div className="max-w-screen-lg max-[520px]:mt-32 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-black">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-white">
          {portfolios.map(({ id, src, demo, fe, be, name }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg bg-black "
            >
              <p className="text-white text-center font-bold py-2">{name}</p>
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 h-30 mt-2 mb-2"
              />
              <div className="flex items-center justify-center bg-black opacity-4">
                <button
                  onClick={(event) => window.open(fe, "_blank")}
                  className="w-1/2 px-3 py-2 m-3 duration-200 hover:scale-105 border border-white"
                >
                  Frontend
                </button>
                <button
                  onClick={(event) => window.open(demo, "_blank")}
                  className=" w-1/2 px-3 py-2 m-3 duration-200 hover:scale-105  border border-white  "
                >
                  Live
                </button>
                <button
                  onClick={(event) => window.open(be, "_blank")}
                  className="w-1/2 px-3 py-2 m-3 duration-200 hover:scale-105 border border-white"
                >
                  Backend
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
