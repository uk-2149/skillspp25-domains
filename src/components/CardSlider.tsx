import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Card = {
  title: string;
  description: string;
};

const cardData: Card[] = [
  {
    title: "Visual & Illustration Design",
    description:
      "Craft digital artwork using Adobe tools. Learn composition, color theory, and storytelling through design to create impactful visual illustrations.",
  },
  {
    title: "App Development (Flutter)",
    description:
      "Build mobile apps for Android and iOS with Flutter. Learn Dart, responsive UI design, and app architecture to launch full-featured cross-platform apps.",
  },
  {
    title: "Video & Motion Graphics",
    description:
      "Edit videos and create animations using Premiere Pro and After Effects. Learn keyframes, color theory, and visual effects for engaging content.",
  },
  {
    title: "UI/UX Design",
    description:
      "Design user-friendly websites and apps using Figma. Learn layout, usability, and user flow to create smooth, intuitive digital experiences.",
  },
  {
    title: "Embedded Systems & Microcontrollers",
    description:
      "Build hardware projects using microcontrollers. Learn real-time programming, sensors, and C/C++ coding to control devices like robots or smart systems.",
  },
  {
    title: "DevOps",
    description:
      "Learn how software is built, tested, and deployed using cloud tools. Understand automation, CI/CD, and platforms like AWS or Docker for scalable development.",
  },
  {
    title: "Video & Motion Graphics",
    description:
      "Edit videos and create animations using Premiere Pro and After Effects. Learn keyframes, color theory, and visual effects for engaging content.",
  },
  {
    title: "Blockchain",
    description:
      "Learn Web3 basics, cryptography, and smart contracts. Explore Ethereum, MetaMask, and build decentralized apps using tools like ethers.js and Solidity.",
  },
  {
    title: "3D Designing",
    description:
      "Use Blender to create 3D models, animations, and environments. Learn the art of visualizing objects with geometry, textures, and motion.",
  },
  {
    title: "Game Development",
    description:
      "Design interactive games using Unity, Unreal, or Godot. Learn programming, game mechanics, and graphics basics to create your own digital worlds.",
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Control devices remotely using Arduino and ESP boards. Learn sensor circuits, embedded coding, and real-time data handling from hardware to server.",
  },
  {
    title: "Cybersecurity",
    description:
      "Learn ethical hacking, network attacks, and OSINT tools through hands-on tasks. Develop hacker-like thinking and defend systems using practical security tools over 4 weeks.",
  },
  {
    title: "Backend Development",
    description:
      "Build APIs and manage databases using Node.js, Express, and MongoDB. Learn how the server side of web apps works and secure user data.",
  },
  {
    title: "Generative AI",
    description:
      "Create AI models that generate text, images, and more. Learn prompt engineering, transformers, vector databases, and build creative GenAI projects.",
  },
  {
    title: "Frontend Development",
    description:
      "Design beautiful, responsive websites using HTML, CSS, JS, and frameworks like React. Learn UI/UX principles to craft interactive user experiences.",
  },
  {
    title: "Competitive Coding",
    description:
      "Boost problem-solving and logic with timed coding challenges. Learn fast and efficient code writing—perfect for interviews and programming contests.",
  },
  {
    title: "AI / Machine Learning",
    description:
      "Explore machine learning concepts, Python libraries, regression, classification, and neural networks. Build ML models and present a mini-project by course end.",
  },
];

const CardSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToPrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#262EB5] text-white px-6 py-8 rounded-2xl w-[90vw] max-w-md mx-auto shadow-2xl flex flex-col items-center min-h-[330px] transition-all duration-300">
      <div className="flex items-center justify-center gap-4 px-2 w-full my-auto">
        <button
          onClick={goToPrev}
          className="hover:bg-white/10 p-2 rounded-full transition-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction === "left" ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "left" ? 30 : -30 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-1 flex flex-col items-center"
          >
            <h2 className="text-3xl font-semibold tracking-wide text-center mb-6 font-[Inter]">
              {cardData[currentIndex].title}
            </h2>
            <p className="text-sm md:text-base text-center max-w-xs font-light tracking-tight leading-relaxed">
              {cardData[currentIndex].description}
            </p>
            <span className="font-bold">Register Now!!</span>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goToNext}
          className="hover:bg-white/10 p-2 rounded-full transition-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
