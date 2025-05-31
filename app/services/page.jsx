"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Bug Fixing & System Debugging",
    description:
      "I can identify, trace, and resolve frontend and backend issues efficiently. Whether it’s a browser bug, API error, or system misbehavior, I aim to deliver clean, permanent fixes that improve stability and user experience.",
    href: "",
  },
  {
    num: "02",
    title: "Workflow Automation",
    description:
      "I design and build automation scripts and tools that save time, reduce manual work, and improve accuracy. From backend task automation to XML/Excel data processing, I create scalable solutions that integrate well with existing systems.",
    href: "",
  },
  {
    num: "03",
    title: "Technical Support Engineering",
    description:
      "I can handle issue tracking, root cause analysis, and customer-facing support — with a developer mindset. I help bridge the gap between support teams and engineering by understanding both technical and operational needs.",
    href: "",
  },
  {
    num: "04",
    title: "Full-Stack Web Development",
    description:
      "I continue to build projects using Python, Node.js, React, and Django. I enjoy combining logic and UI to create complete solutions — from backend logic to interactive UIs — and I'm constantly learning to grow into a full-stack development role.",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[35px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500">
                  {service.title}
                </h2>
                {/* desciption */}
                <p>{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
