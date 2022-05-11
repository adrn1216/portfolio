import React from "react";
import { Button } from "../../components/Button";
import { Project, ProjectsContainer } from "./style";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/arrow-right-icon.svg";
import { Link } from "react-router-dom";
import { projects } from "../../constant";

const Projects = () => {
  return (
    <ProjectsContainer>
      {projects.map(({ id, title, description, image }) => {
        return (
          <Link to={`/project/${id}`}>
            <Project image={image[0]}>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </Project>
          </Link>
        );
      })}
      <Link to="/contact">
        <Button width="300px" type="primary">
          Contact Me
        </Button>
      </Link>
      <Button
        type="secondary"
        suffixIcon={<ArrowRightIcon />}
        width="300px"
        onClick={() =>
          window.open(
            "https://business.fiverr.com/freelancers/adrn1216",
            "_blank"
          )
        }
      >
        View Freelancer Profile
      </Button>
    </ProjectsContainer>
  );
};

export default Projects;
