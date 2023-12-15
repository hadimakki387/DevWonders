import { customAnimation } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import Reveal from "react-awesome-reveal";

function ProjectsLogic({ onProjectSelect }: { onProjectSelect: Function }) {
  const Projects = [
    {
      name: "Dawrat 'Coming Soon'",
      excerpt: "A website where Students to share there studying process and materials to benifit each others.",
      description:
        "A user-centric educational platform crafted with Next.js and Tailwind CSS. Dawrat simplifies the learning experience by enabling class administrators to upload course materials seamlessly. With responsive design and advanced search functionalities, students can easily access and submit solutions, fostering an efficient and organized educational environment.",
      technologies: ["NextJs", "Tailwind","React Toolkit"],
      img: "dawrat.png",
      githubLink: "https://github.com/hadimakki387/dawrat-api",
      link: "https://dawrat.netlify.app/",
    },
    {
      name: "Codestream",
      excerpt: "A website where users can learn about MERN development",
      description:
        "This website is designed to guide users through the intricacies of MERN (MongoDB, Express.js, React, Node.js) stack development. Offering structured lessons, practical insights, and real-world projects, LearnMERN is the perfect resource for those aspiring to become adept Full-Stack developers. Dive into the world of MERN development, acquire valuable skills, and elevate your web development expertise with this comprehensive online learning platform.",
      technologies: ["NextJs", "Tailwind","React Toolkit"],
      img: "codestream.png",
      githubLink: "https://github.com/hadimakki387/courses-website",
      link: "https://codestream.netlify.app/",
    },
    {
      name: "Tiktok Agency",
      excerpt: "Landing Page for a Tiktok Agency",
      description:
        "The TikTok agency's landing page is a responsive and visually captivating website built using Next.js, React.js, and CSS. With its mobile-friendly design and intuitive navigation, the page showcases the agency's expertise in leveraging TikTok's platform for successful marketing campaigns. Through compelling visuals, interactive elements, and clear calls-to-action, the landing page creates an immersive experience, effectively communicating the agency's value proposition and engaging visitors across devices.",
      technologies: ["NextJs", "ReactJs", "Css3"],
      img: "tiktok-agency.png",
      githubLink:
        "https://github.com/hadimakki387/marketing-agnce-landing-page",
      link: "https://tiktok-agency.netlify.app/",
    },
  ];

  return (
    <Reveal
      triggerOnce
      cascade
      keyframes={customAnimation}
      duration={500}
      delay={800}
    >
      {Projects.map((project, index) => (
        <div className="" onClick={() => onProjectSelect(project)} key={index}>
          <figure className="projectFigure">
            <Image
              className="ProjectImg"
              width={1920}
              height={1080}
              src={"/" + project.img}
              alt="sample99"
            />
            <figcaption>
              <h3 className="ProjectTitle">{project.name}</h3>
              <h4 className="ProjectExcerpt">{project.excerpt}</h4>
              <br />
              <div className="TechnologiesDiv">
                {project.technologies.map((technology, index) => (
                  <h4 className="Technologies" key={index}>
                    {technology}
                  </h4>
                ))}
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Reveal>
  );
}

export default ProjectsLogic;
