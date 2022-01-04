import React, { Fragment } from "react";
import { Button } from "../../components/Button";
import Header from "../../components/Header";
import { Intro } from "./style";
import { ReactComponent as DownloadIcon } from "../../assets/svg/download-icon.svg";

const LandingPage = () => {
  return (
    <Fragment>
      <Header />
      <Intro>
        <div>
          <h1>
            I am <span>Louis Reyes.</span>
          </h1>
          <h1>Web Developer</h1>
          <h5>Este es mi Portafolio web!</h5>
        </div>
        <div className="intro-div-buttons">
          <Button type="primary">See Projects</Button>
          <Button type="secondary" prefixIcon={<DownloadIcon />}>
            Download CV
          </Button>
        </div>
      </Intro>
    </Fragment>
  );
};

export default LandingPage;
