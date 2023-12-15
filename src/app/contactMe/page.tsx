"use client";
import React, { useEffect, useState } from "react";
import Cursor from "@/components/Cursor";
import NextButton from "@/components/NextButton";
import SocialMediaLinks from "@/components/Home/SocialMediaLinks";
import SideBar from "@/components/SideBar";
import NavBar from "@/components/Home/NavBar";
import Reveal from "react-awesome-reveal";
import { customAnimation } from "@/utils/constants";

function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = ({ e }: { e: any }) => {
    e.preventDefault();

    const emailSubject = "New Message";
    const recipient = "hmakki387@gmail.com";
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoUrl;
  };

  const handleNameChange = ({ e }: { e: any }) => {
    setName(e.target.value);
  };

  const handleEmailChange = ({ e }: { e: any }) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = ({ e }: { e: any }) => {
    setMessage(e.target.value);
  };

  const [sideBar, setSideBar] = useState(false);

  function toggleSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <div className="snipcss-RDU5U">
      <Cursor />
      <SideBar sideBar={sideBar} toggleSideBar={toggleSideBar} />

      <NavBar toggleSideBar={toggleSideBar} />

      <div className="ContactDiv">
        <Reveal
          triggerOnce
          cascade
          keyframes={customAnimation}
          duration={400}
          delay={700}
        >
          <h1 className="AboutTitle ">Contact.</h1>
          <article>
            <p className="">
              shoot me an email directly on
              <b className="MyEmail"> hmakki387@gmail.com</b>
            </p>
          </article>
        </Reveal>
      </div>

      <br />

      <form
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <div className="fields ">
          <Reveal
            triggerOnce
            cascade
            keyframes={customAnimation}
            duration={400}
            delay={1000}
          >
            <div className="field half">
              <input
                type="text"
                name="name"
                id="name"
                className="form-control NameArea TransparentInput"
                placeholder="Name"
                aria-required="true"
                value={name}
                onChange={() => {
                  handleNameChange;
                }}
              />
            </div>
            <div className="field half ">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control TransparentInput"
                placeholder="Email"
                aria-required="true"
                value={email}
                onChange={() => {
                  handleEmailChange;
                }}
              />
            </div>
            <div className="field ">
              <textarea
                name="message"
                id="message"
                rows={5}
                className="form-control TextArea"
                placeholder="Message"
                aria-required="true"
                spellCheck="false"
                value={message}
                onChange={() => {
                  handleMessageChange;
                }}
              ></textarea>
            </div>
          </Reveal>
        </div>
        <Reveal
          triggerOnce
          cascade
          keyframes={customAnimation}
          duration={400}
          delay={1000}
        >
          <div className="">
            <button
              className="btn btn-default "
              type="submit"
              aria-label="Send Message"
            >
              Send Message
            </button>
          </div>
        </Reveal>
      </form>
      <div className="">
        <Reveal
          triggerOnce
          cascade
          keyframes={customAnimation}
          duration={400}
          delay={1000}
        >
          <NextButton Content="Go Back Home" URI="/" />
          <div className="WindowsSocialMediaDiv">
            <SocialMediaLinks />
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default ContactMe;
