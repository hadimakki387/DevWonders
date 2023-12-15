"use client";
import Cursor from "@/components/Cursor";
import NavBar from "@/components/Home/NavBar";
import ProjectsLogic from "@/components/Projects/ProjectsLogic";
import NextButton from "@/components/NextButton";
import ProjectInfo from "@/components/Projects/ProjectInfo";
import { useEffect, useState } from "react";
import SocialMediaLinks from "@/components/Home/SocialMediaLinks";
import SideBar from "@/components/SideBar";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/utils/constants";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  const handleProjectSelect = (project: any) => {
    if (selectedProject) {
      return;
    }
    setSelectedProject(project);
  };

  function setNull() {
    setSelectedProject(null);
  }
  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <div className="">
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />
      <div className={selectedProject ? "opacity-20" : ""}>
        <Cursor />

        <NavBar toggleSideBar={toggleSideBar} />

        <div className="Projects">
          <Reveal
            triggerOnce
            cascade
            keyframes={customAnimation}
            duration={400}
            delay={500}
          >
            <div>
              <h1 className="ProjectTitle">Projects.</h1>
            </div>
          </Reveal>
          <ProjectsLogic onProjectSelect={handleProjectSelect} />
          <Reveal
            triggerOnce
            cascade
            keyframes={customAnimation}
            duration={400}
          >
            <div>
              <NextButton URI="/resume" Content="Lets Go To My Resume." />
            </div>
            <div className="WindowsSocialMediaDiv">
              <SocialMediaLinks />
            </div>
          </Reveal>
        </div>
      </div>

      <div className={selectedProject ? "ProjectInfo" : ""}>
        {selectedProject && (
          <ProjectInfo
            handleClickAway={() => {}}
            project={selectedProject}
            setNull={setNull}
          />
        )}
      </div>
    </div>
  );
}

export default Projects;
