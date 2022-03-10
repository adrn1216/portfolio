import React, { Fragment } from "react";
import { AboutMe, Reviews, Skills } from "./style";
import SkillCard from "../../components/SkillCard";
import ReviewCard from "../../components/ReviewCard";
import profile from "../../assets/webp/profile-picture.webp";
import { reviews, skills } from "../../constant";

const About = () => {
  return (
    <Fragment>
      <AboutMe>
        <img src={profile} alt="portrait of a man in formal attire" />
        <div>
          <div>
            <h1>Louis Reyes</h1>
            <p>
              Hello! I'm Louis. I do frontend web programming using ReactJS and
              currently employed at Samsung Electronics Phil Corp. I love
              working in a team especially collaborating with backend devs and
              UX designers and am also well-versed in Agile Scrum.
            </p>
            <p>
              I graduated from Bulacan State Univesity and I'm glad to where the
              programming industry is taking me that I turned my profession into
              my passion.
            </p>
            <p>
              Aside from programming, I freelance video editing on Fiverr where
              I make video ads and trailer for mobile games and NFT projects. I
              am also a part time creative designer on Flying Fox where I help
              with social media contents and also provide my video editing
              service.
            </p>
            <a href="mailto: louisadrianreyes@yahoo.com">
              louisadrianreyes@yahoo.com
            </a>
          </div>
        </div>
      </AboutMe>
      <Skills>
        <h3>My Skills / Tech Stack</h3>
        <div>
          {skills.map(({ icon, title, description }) => {
            return (
              <SkillCard icon={icon} title={title} description={description} />
            );
          })}
        </div>
      </Skills>
      <Reviews>
        <h3>Fiverr Reviews</h3>
        {reviews.map((item) => {
          return <ReviewCard review={item} />;
        })}
      </Reviews>
    </Fragment>
  );
};

export default About;
