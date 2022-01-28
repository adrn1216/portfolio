import React, { Fragment } from "react";
import { AboutMe, Skills } from "./style";
import SkillCard from "../../components/SkillCard";
import { ReactComponent as ReactIcon } from "../../assets/svg/react-icon.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/svg/javascript-icon.svg";
import { ReactComponent as HtmlIcon } from "../../assets/svg/html-icon.svg";
import { ReactComponent as CssIcon } from "../../assets/svg/css-icon.svg";
import { ReactComponent as GitIcon } from "../../assets/svg/git-icon.svg";
import { ReactComponent as ProjectIcon } from "../../assets/svg/project-icon.svg";
import { ReactComponent as MultimediaIcon } from "../../assets/svg/multimedia-icon.svg";
import { ReactComponent as DeploymentIcon } from "../../assets/svg/deployment-icon.svg";
import profile from "../../assets/webp/profile-picture.webp";

const About = () => {
  const skills = [
    {
      icon: <ReactIcon />,
      title: "React",
      description: "React JS, Next JS, Redux, Context API",
    },
    {
      icon: <JavascriptIcon />,
      title: "Javascript",
      description: "Javascript, Typescript",
    },
    {
      icon: <HtmlIcon />,
      title: "HTML",
      description: "HTML5, Semantic HTML, Accessibility",
    },
    {
      icon: <CssIcon />,
      title: "CSS",
      description: "CSS3, SASS, Styled Components, Ant Design",
    },
    {
      icon: <GitIcon />,
      title: "Git",
      description: "Github, Gitlab, Bitbucket",
    },
    {
      icon: <DeploymentIcon />,
      title: "Deployment",
      description: "Vercel, Namecheap, Porkbun",
    },
    {
      icon: <ProjectIcon />,
      title: "Management",
      description: "Trello, Jira",
    },
    {
      icon: <MultimediaIcon />,
      title: "Multimedia",
      description: "Adobe Premiere Pro, Figma",
    },
  ];
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
              I graduated from a university and I'm glad to where the
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
    </Fragment>
  );
};

export default About;
