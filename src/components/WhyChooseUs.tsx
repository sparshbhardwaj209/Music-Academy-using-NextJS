"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Collaborative Composition",
      description:
        "Compose music together in real time with your band, students, and fellow musicians. Collaborate on compositions, share ideas, and make creative decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Composition
        </div>
      ),
    },
    {
      title: "Real-time Performance",
      description:
        "Experience changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your composition. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real-time performance demo"
          />
        </div>
      ),
    },
    {
      title: "Version Control for Scores",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your music scores, eliminating the need for constant manual updates. Stay in sync, keep your band aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Version Control for Scores
        </div>
      ),
    },
    {
      title: "Never Run Out of Ideas",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your music project, eliminating the need for constant manual updates. Stay in sync, keep your band aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Never Run Out of Ideas
        </div>
      ),
    },
  ];


import Image from "next/image";
const WhyChooseUs = () => {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs