import React from "react";
import HamburgerMenu from "../HamburgerMenu";
import Link from "next/link";
import Image from "next/image";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/utils/constants";

function NavBar({ toggleSideBar }: { toggleSideBar: Function }) {
  return (
    <div className="NavBar">
      <div>
        <Reveal triggerOnce cascade keyframes={customAnimation} duration={400}>
          <Link href={"/"}>
            <Image
              width={50}
              height={50}
              alt="home"
              src="/house-solid-white.png"
              className="HomeBtn"
            />
          </Link>
        </Reveal>
      </div>
      <div className="NavBarList">
        <ul className="flex LinksList">
          <Reveal
            triggerOnce
            cascade
            keyframes={customAnimation}
            duration={400}
            delay={200}
          >
            <div>
              <li className="LinksListItems">
                <Link href={"/about"} className="Links">
                  ABOUT
                </Link>
              </li>
            </div>
            <div>
              <li className="LinksListItems">
                <Link href={"/projects"} className="Links">
                  PROJECTS
                </Link>
              </li>
            </div>
            <div>
              <li className="LinksListItems">
                <Link href={"/contactMe"} className="Links">
                  CONTACT
                </Link>
              </li>
            </div>
          </Reveal>
        </ul>
      </div>
      <div
        className="HamburgerMenu reveal"
        onClick={() => {
          toggleSideBar();
        }}
      >
        <HamburgerMenu />
      </div>
    </div>
  );
}

export default NavBar;
