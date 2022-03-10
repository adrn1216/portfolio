import React, { Fragment, useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { AboutMe, Intro, Project, Projects } from "./style";
import { ReactComponent as DownloadIcon } from "../../assets/svg/download-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/arrow-right-icon.svg";
import profile from "../../assets/webp/profile-picture.webp";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import { projects } from "../../constant";

const LandingPage = () => {
  const [role, setRole] = useState("Web Developer");

  useEffect(() => {
    setTimeout(function () {
      setRole(
        role === "Web Developer"
          ? "Creative Designer"
          : role === "Creative Designer"
          ? "Video Editor"
          : "Web Developer"
      );
    }, 3000);
  }, [role]);

  return (
    <Fragment>
      <Intro>
        <h1>
          I am <span className="name">Louis Reyes.</span>
        </h1>
        <h1>
          <ReactTypingEffect
            speed={150}
            eraseSpeed={80}
            eraseDelay={1000}
            typingDelay={100}
            text={["Web Developer", "Creative Designer", "Video Editor"]}
          />
        </h1>
        <h5>This is my web portfolio!</h5>
        <div>
          <Link to="/projects">
            <Button type="primary">See Projects</Button>
          </Link>
          <Button type="secondary" prefixIcon={<DownloadIcon />}>
            Download CV
          </Button>
        </div>
      </Intro>
      <AboutMe>
        <div className="profilePic">
          <img src={profile} alt="portrait of a man in formal attire" />
        </div>
        <div>
          <div>
            <h2>About Me</h2>
            <p>
              Passionate Front End Developer with more than 2 years of
              experience building stable and maintainable codebases using
              ReactJS in fast-paced and collaborative environments. Bringing
              mock-ups to life using HTML/CSS/JavaScript. Well-versed in Agile
              Scrum.
            </p>
            <p>
              Aside from programming, I freelance video editing and graphic
              designing making mobile game ads and trailer for clients from
              different countries.
            </p>
          </div>

          <Link to="/about">
            <Button type="secondary" suffixIcon={<ArrowRightIcon />}>
              More about me
            </Button>
          </Link>
        </div>
      </AboutMe>
      <Projects>
        <h3>Projects</h3>
        <div>
          {projects.slice(0, 3).map(({ title, description, image }) => {
            return (
              <Project image={image[0]}>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Project>
            );
          })}
          <Link to="/projects">
            <Button width="300px" type="primary">
              See All Projects
            </Button>
          </Link>
          <Button
            type="secondary"
            suffixIcon={<ArrowRightIcon />}
            width="300px"
            onClick={() =>
              window.open(
                "https://www.fiverr.com/users/adrn1216/portfolio",
                "_blank"
              )
            }
          >
            View Fiverr Portfolio
          </Button>
        </div>
      </Projects>
    </Fragment>
  );
};

export default LandingPage;
