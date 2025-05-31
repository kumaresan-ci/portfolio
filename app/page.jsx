"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  useEffect(() => {
    const element = document.getElementById("typed-text");
    const text = "skilled in Automation, Debugging & Development";
    let index = 0;
    let isDeleting = false;

    const typingSpeed = 70;
    const pauseTime = 1000;

    let timeout;

    const type = () => {
      if (!element) return;

      if (isDeleting) {
        index--;
        element.textContent = text.substring(0, index);
      } else {
        index++;
        element.textContent = text.substring(0, index);
      }

      if (!isDeleting && index === text.length) {
        timeout = setTimeout(() => {
          isDeleting = true;
          type();
        }, pauseTime);
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        timeout = setTimeout(type, pauseTime);
      } else {
        timeout = setTimeout(type, typingSpeed);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <div className="text-xl flex items-baseline gap-2">
              <span>Technical Support Engineer</span>
              <span
                className="text-[#00ff99] font-medium block min-w-[30ch] whitespace-nowrap border-[#00ff99] pr-1"
                id="typed-text"
              ></span>
            </div>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-[#00ff99]">Kumaresan</span>
            </h1>
            <p className="mb-9 text-white/80">
              A tech-minded problem solver with 2 years in support — building
              tools, fixing bugs, and automating workflows using Python, Django,
              Node.js, and React.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border-accent rounded-full flex justify-center items-center text-[#00ff99] text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
