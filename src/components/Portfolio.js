import React from "react";
import covid from "./images/covid.png";
import chatbot from "./images/chatbot.png";
import healthcare from "./images/healthcare.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatbot,
      link: "https://github.com/shikhar5647/MLOps-AI-Agents",
      title: "ML-Ops Agents and chatbots using Langchain and Autogen",
    },
    {
      id: 2,
      src: healthcare,
      link: "https://github.com/shikhar5647/healthcare_anamoly_detection",
      title: "Healthcare Anamoly Detection Using Autoencoders.",
    },
    {
      id: 3,
      src: covid,
      link: "https://github.com/shikhar5647/Covid-Detection-from-Chest-X-Ray",
      title: "Covid 19 Detection Using Chest X-ray.",
    },
  ];

  return (
    <div
      id="portfolio"
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full box-border
    text-white md:h-full px-8"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
       justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6"></p>
        </div>
      </div>

      <div
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12
      sm:px-0"
      >
        {portfolios.map(({ id, src, link, title }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className={`rounded-md duration-200 hover:scale-105 ${
                id === 1 ? `min-w-full h-128` : ""
              }`}
            />
            <div className="flex flex-col items-center justify-center">
              <h3 className="m-2">{title}</h3>
              <button className="w-1/2 px-6 py-3 border-gray-400 border-t-2 duration-200 hover:scale-105">
                <a href={link} target="_blank" rel="noreferrer">
                  Code
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
