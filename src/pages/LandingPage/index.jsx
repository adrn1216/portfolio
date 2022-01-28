import React, { Fragment, useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { AboutMe, Intro, Project, Projects } from "./style";
import { ReactComponent as DownloadIcon } from "../../assets/svg/download-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/arrow-right-icon.svg";
import profile from "../../assets/webp/profile-picture.webp";
import ReactTypingEffect from "react-typing-effect";
import bayad1 from "../../assets/images/bayad1.png";
import getall1 from "../../assets/images/getall1.png";
import ancora2 from "../../assets/images/ancora2.png";
import winterfell1 from "../../assets/images/winterfell1.png";
import oldportfolio3 from "../../assets/images/oldportfolio3.png";
import { Link } from "react-router-dom";

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
          {[
            {
              title: "Bayad Content Management System",
              description:
                "A content management system for the Bayad Benter mobile app.",
              image: bayad1,
            },
            {
              title: "GetAll Content Management System",
              description:
                "A content management system for the All Day mobile delivery app.",
              image: getall1,
            },
            {
              title: "Ancora (Internal Project of White Cloak Technologies)",
              description: "An online learning platform for the company.",
              image: ancora2,
            },
            {
              title:
                "Winterfell (Internal Project of White Cloak Technologies)",
              description:
                "A proof of concept project developed by the 1st batch of trainees.",
              image: winterfell1,
            },
            {
              title: "Old Portfolio Design",
              description: "Yo yo",
              image: oldportfolio3,
            },
          ].map(({ title, description, image }) => {
            return (
              <Project image={image}>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </Project>
            );
          })}
          <Button type="primary" suffixIcon={<ArrowRightIcon />} width="218px">
            Ver más en Behance
          </Button>
        </div>
      </Projects>
    </Fragment>
  );
};

export default LandingPage;
