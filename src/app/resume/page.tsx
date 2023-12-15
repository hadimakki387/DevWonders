"use client";
import Cursor from "@/components/Cursor";

import NextButton from "@/components/NextButton";
import SocialMediaLinks from "@/components/Home/SocialMediaLinks";
import Link from "next/link";

import { useEffect, useState } from "react";
import Image from "next/image";
import NavBar from "@/components/Home/NavBar";
import Reveal from "react-awesome-reveal";
import { customAnimation, shortCustomAnimation } from "@/utils/constants";
import ViewPdf from "@/components/global/ViewPdf";

function Resume() {
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <div className="">
      <Cursor />
      <NavBar toggleSideBar={toggleSideBar} />

      <div className="ResumeBody">
        <Reveal
          triggerOnce
          cascade
          keyframes={shortCustomAnimation}
          duration={400}
          delay={700}
        >
          <h1 className="ResumeTitle">Resume.</h1>

          <p className="ResumeText">
            Reach out to me via my{" "}
            <Link className="contactLink" href={"/contact"}>
              Contact Page
            </Link>{" "}
            or{" "}
            <a href={"/MyResume.pdf"} className="ContactLink" download>
              Download
            </a>{" "}
            the resume
          </p>

          <div className="resumeImgDiv">
           <ViewPdf url="/MyResume.pdf"/>
          </div>
    
          <div>
            <NextButton
              Content="Are you convinced to contact me now ?"
              URI="/contactMe"
            />
            <div className="WindowsSocialMediaDiv">
              <SocialMediaLinks />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Resume;
