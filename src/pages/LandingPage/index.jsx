import React, { Fragment } from "react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { AboutMe, Intro } from "./style";
import { ReactComponent as DownloadIcon } from "../../assets/svg/download-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/arrow-right-icon.svg";
import profile from "../../assets/webp/profile-picture.webp";

const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <Intro>
        <h1>
          I am <span>Louis Reyes.</span>
        </h1>
        <h1>Web Developer</h1>
        <h5>Este es mi Portafolio web!</h5>
        <div>
          <Button type="primary">See Projects</Button>
          <Button type="secondary" prefixIcon={<DownloadIcon />}>
            Download CV
          </Button>
        </div>
      </Intro>
      <AboutMe>
        <img src={profile} alt="portrait of a man in formal attire" />
        <div>
          <div>
            <h2>About Me</h2>
            <p>
              Passionate Front End Developer with 2 years experience building
              stable and maintainable codebases using ReactJS in fast-paced and
              collaborative environments. Bringing mock-ups to life using
              HTML/CSS/JavaScript. Well-versed in Agile Scrum. Aside from
              programming, I freelance video editing making mobile game ads and
              trailer for clients from different countries.
            </p>
            <p>
              I graduated with a bachelor’s degree in Information Technology
              last 2019 and got my first job with White Cloak Technologies where
              I completed a 6-month training specializing on web development
              using ReactJS. Projects
            </p>
          </div>

          <Button type="secondary" suffixIcon={<ArrowRightIcon />}>
            More about me
          </Button>
        </div>
      </AboutMe>
    </Fragment>
  );
};

export default LandingPage;
