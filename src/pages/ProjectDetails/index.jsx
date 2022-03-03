import React from "react";
import { Button } from "../../components/Button";
import { ProjectDetailsContainer, ProjectPreview, Technologies } from "./style";
import { ReactComponent as ArrowRightIcon } from "../../assets/svg/arrow-right-icon.svg";
import { Link } from "react-router-dom";
import { projects } from "../../constant";

const ProjectDetails = () => {
  const id = window.location.pathname.split("/")[2];
  const project = projects.filter((item) => item.id === id)[0];
  const { image, title, about, date, technologies } = project;

  return (
    <ProjectDetailsContainer>
      <section className="summary">
        <h5>{title}</h5>
        <h1>Project Preview</h1>
        {image.map((item) => {
          return <ProjectPreview className="preview" image={item} />;
        })}
      </section>
      <section>
        <h2>About the project</h2>
        <p>{about}</p>
        <p className="date">{date}</p>
      </section>
      <section>
        <h2>Technologies</h2>
        <div className="technologies">
          {technologies.map((item) => {
            return (
              <Technologies>
                <p>{item}</p>
              </Technologies>
            );
          })}
        </div>
      </section>
      <section className="actions">
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
      </section>
    </ProjectDetailsContainer>
  );
};

export default ProjectDetails;
