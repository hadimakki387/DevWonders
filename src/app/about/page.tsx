"use client";
import NavBar from "../../components/Home/NavBar";

import { useState } from "react";
import ExperienceLis from "../../components/About/ExperienceLis.jsx";
import ReadsLis from "../../components/About/ReadsLis";
import Cursor from "../../components/Cursor";
import SocialMediaLinks from "../../components/Home/SocialMediaLinks";
import NextButton from "../../components/NextButton";
import SideBar from "../../components/SideBar";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/utils/constants";

function About() {
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <div className="gradient AboutBody ">
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <Cursor />
      <NavBar toggleSideBar={toggleSideBar} />
      <Reveal
        triggerOnce
        cascade
        keyframes={customAnimation}
        duration={400}
        delay={700}
      >
        <div>
          <h1 className="AboutTitle">About Me.</h1>
        </div>
      </Reveal>
      <article className="AboutArticle ">
        <Reveal
          triggerOnce
          cascade
          keyframes={customAnimation}
          duration={400}
          delay={1000}
        >
          <div className="">
            <h4 className="">My Experiences.</h4>
          </div>
        </Reveal>

        <ul className="timeline AboutUl">
          <ExperienceLis />
        </ul>
        <Reveal
          triggerOnce
          cascade
          keyframes={customAnimation}
          duration={400}
          delay={1600}
        >
          <div className="">
            <h4 className="">My Reads.</h4>
          </div>
        </Reveal>

        <ul className="timeline AboutUl">
          <ReadsLis />
        </ul>
        <div className="">
          <Reveal
            triggerOnce
            cascade
            keyframes={customAnimation}
            duration={400}
          >
            <NextButton URI="/projects" Content="Lets Continue To Projects" />
            <div className="WindowsSocialMediaDiv">
              <SocialMediaLinks />
            </div>
          </Reveal>
        </div>
      </article>
    </div>
  );
}

export default About;
