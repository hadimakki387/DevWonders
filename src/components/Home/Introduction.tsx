import { customAnimation } from "@/utils/constants";
import Reveal from "react-awesome-reveal";
import AboutMeArticle from "./AboutMeArticle";
import SocialMediaLinks from "./SocialMediaLinks";

function Introduction() {
  return (
    <div className="GlicthContainer HomeBody ">
      <div className="">
        <AboutMeArticle />

        <div className="WindowsSocialMediaDiv">
          <Reveal
            triggerOnce
            keyframes={customAnimation}
            duration={400}
            delay={1300}
          >
            <SocialMediaLinks />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
