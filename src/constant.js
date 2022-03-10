import { ReactComponent as ReactIcon } from "./assets/svg/react-icon.svg";
import { ReactComponent as JavascriptIcon } from "./assets/svg/javascript-icon.svg";
import { ReactComponent as HtmlIcon } from "./assets/svg/html-icon.svg";
import { ReactComponent as CssIcon } from "./assets/svg/css-icon.svg";
import { ReactComponent as GitIcon } from "./assets/svg/git-icon.svg";
import { ReactComponent as ProjectIcon } from "./assets/svg/project-icon.svg";
import { ReactComponent as MultimediaIcon } from "./assets/svg/multimedia-icon.svg";
import { ReactComponent as DeploymentIcon } from "./assets/svg/deployment-icon.svg";

import bayad1 from "./assets/images/bayad1.png";
import bayad2 from "./assets/images/bayad2.png";
import bayad3 from "./assets/images/bayad3.png";
import bayad4 from "./assets/images/bayad4.png";
import getall1 from "./assets/images/getall1.png";
import getall2 from "./assets/images/getall2.png";
import getall3 from "./assets/images/getall3.png";
import getall4 from "./assets/images/getall4.png";
import getall5 from "./assets/images/getall5.png";
import ancora1 from "./assets/images/ancora1.png";
import ancora2 from "./assets/images/ancora2.png";
import winterfell1 from "./assets/images/winterfell1.png";
import oldportfolio1 from "./assets/images/oldportfolio1.png";
import oldportfolio2 from "./assets/images/oldportfolio2.png";
import oldportfolio3 from "./assets/images/oldportfolio3.png";

export const projects = [
  {
    id: "bayad-cms",
    title: "Bayad Content Management System",
    description: "A content management system for the Bayad Center Mobile App",
    image: [bayad1, bayad2, bayad3, bayad4],
    about:
      "A project by White Cloak Technologies. Our team consisted of more than 10 devs simultaneously working on the mobile app and web and I was one of the 3 frontend devs who started the project from scratch working on the Content Management System that is needed for the app content and customer service. I only included a screenshot of the login page as most screens shows private data of the client and is owned by White Cloak. This is where I researched on new technologies namely TypeScript, AWS (Cognito) and Jest for TDD.",
    date: "June - December 2020",
    technologies: [
      "Typescript",
      "React JS",
      "Next JS",
      "Ant Design",
      "Styled Components",
      "AWS (Cognito & Amplify)",
      "HTML",
      "CSS",
      "Javascript",
      "Restful API",
      "Axios",
      "ES Lint",
      "Storybook",
      "Enzyme",
      "Jest",
    ],
  },
  {
    id: "getall-cms",
    title: "GetAll Content Management System",
    description:
      "A content management system for the Get All Mobile Delivery App",
    image: [getall5, getall2, getall1, getall3, getall4],
    about:
      "A project by White Cloak Technologies. The project is more than a year old when I joined the team. This is the first time that I contributed in a codebase where everything is setup already and a codebase where multiple projects share the same logic and components. Our team consisted of more than 10 devs simultaneously working on the mobile app and web and I was one of the 2 frontend devs performing bugfix and adding new features on the Content Management System that is needed for the app content. I only included images of the app from play store and a screenshot of the login page and a few dashboard graphics as most screens shows private data of the client and is owned by White Cloak.",
    date: "January - October 2021",
    technologies: [
      "React JS",
      "Redux",
      "Ant Design",
      "Styled Components",
      "HTML",
      "CSS",
      "Javascript",
      "Restful API",
      "Axios",
      "Chart JS",
      "Socket.io",
      "ES Lint",
      "Storybook",
    ],
  },
  {
    id: "old-portfolio",
    title: "Old Portfolio Design",
    description: "Old portfolio design I made while learning Next JS and Figma",
    image: [oldportfolio1, oldportfolio2, oldportfolio3],
    about:
      "This is my first portfolio design I made while learning Next JS, Figma and Vercel.",
    date: "October 2021",
    technologies: ["Next JS", "HTML", "CSS", "Javascript"],
  },
  {
    id: "ancora-wc",
    title: "Ancora (Internal Project of White Cloak Technologies)",
    description: "An online learning platform for the company",
    image: [ancora2, ancora1],
    about:
      "A project by White Cloak Technologies. Our team consisted of 4 devs and I was one of the 2 frontend devs who started the project from scratch. Set up (2) separate projects to cater features exclusive for different users. Researched and implemented new technology (GraphQL) in a short span of time. Quickly developed lots of new features per sprint which made the product ready to use for internal training programs in a span of 4 months.",
    date: "Februaru - June 2020",
    technologies: [
      "React JS",
      "Apollo GraphQL",
      "Ant Design",
      "Styled Components",
      "Auth0",
      "HTML",
      "CSS",
      "Javascript",
      "Less",
      "Lodash",
    ],
  },
  {
    id: "winterfell-wc",
    title: "Winterfell (Internal Project of White Cloak Technologies)",
    description:
      "A proof of concept project developed by the 1st batch of trainees",
    image: [winterfell1],
    about:
      "A project by White Cloak Technologies. Our team consisted of almost 20 trainees simultaneously working on the mobile app and web. Recreate the initial version of the winterfell project done during the capstone in ancora training program. Enhanced CSS skills by not using any css framework.",
    date: "November 2019 - January 2020",
    technologies: [
      "React JS",
      "Styled Components",
      "HTML",
      "CSS",
      "Javascript",
      "Restful API",
      "Axios",
    ],
  },
];

export const skills = [
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

export const reviews = [
  {
    name: "charlottejune85",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e87e73421ac7cb8b35373f8657bb7ccf-1637605942615/71ba4970-65e6-4e64-a91e-24527d302de9.JPG",
    description:
      "Adrian aka Louis was great to work with, third time I have used him. I had lots of additional requests and he had completed the video in 3 days, but I was very busy with my personal work life, so I asked if he could edit more at a later date. He was happy to accommodate this and always pleased to put his customers' first.\n\nWould 100% recommend, you can't go wrong with him in my opinion.",
    star: "5",
    country: "United Kingdom",
  },
  {
    name: "zicobakker5",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/493f1ac74956c06856ee912b0a999d37-1600763403134/a61f30ce-c68d-4bee-9852-29a71daa522e.JPG",
    description:
      "The products he delivered are of great quality and he understands exactly what we need. If we have feedback he delivers that feedback on point and with his own creativity if need be. This time I ordered two trailers at the same time, previously I already had one. So he brings consistent quality. \n\nHe did have too many projects running at the same time this time. But he solved that professionally and kept us up to date accordingly!",
    star: "5",
    country: "Netherlands",
  },
  {
    name: "elecular5",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/84ab65ebcae2f69598e6d4a30ef8e4f6-1641824736845/6dccf810-0379-4b81-bb3d-6241811f52a9.png",
    description:
      "this is my second buy from adrn1216 and I really liked his ads. he was very communicative and delivered High quality videos. he also accommodated all of my requested changes",
    star: "5",
    country: "Germany",
  },
  {
    name: "garretx5",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/31da501f5745f2eff7db09bf5ff616a4-1640260655366/198545a7-faf9-4e16-9135-c82fe11f93a2.jpg",
    description:
      "First time using fiveer, dude was chilled, easy to get along with. Well look at the video, im satisfied, so should you.",
    star: "5",
    country: "China",
  },
  {
    name: "charlottejune85",
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e87e73421ac7cb8b35373f8657bb7ccf-1637605942615/71ba4970-65e6-4e64-a91e-24527d302de9.JPG",
    description:
      "Second time using Adrian, he is very communicative and allows time for editing if required.\n\nAlways going the extra mile to ensure 100% satisfaction!\nDo use him for editing your videos, you will not be disappointed with the end result, in my opinion.",
    star: "5",
    country: "United Kingdom",
  },
];
