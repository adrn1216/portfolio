import { FooterContainer, Nav } from "./style";
import { ReactComponent as FiverrIcon } from "../../assets/svg/fiverr-icon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram-icon.svg";
import { ReactComponent as BehanceIcon } from "../../assets/svg/behance-icon.svg";

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>adrn1216</p>
        <Nav>
          <a href="/">Intro</a>
          <a href="/about">About Me</a>
          <a href="/projects">Projects</a>
        </Nav>
        <Nav>
          <a href="/contact">Contact Me</a>
          <a href="mailto: louisadrianreyes@yahoo.com">Mail</a>
          <a href="/">LinkedIn</a>
        </Nav>
        <Nav>
          <a href="/">Social</a>
          <div className="social-links">
            <FiverrIcon
              onClick={() =>
                window.open(
                  "https://business.fiverr.com/freelancers/adrn1216",
                  "_blank"
                )
              }
            />
            <FacebookIcon
              onClick={() => window.open("https://fb.com/adrn1216", "_blank")}
            />
            <InstagramIcon
              onClick={() =>
                window.open("https://instagram.com/adrn1216", "_blank")
              }
            />
            <BehanceIcon
              onClick={() =>
                window.open("https://behance.net/adrn1216", "_blank")
              }
            />
          </div>
        </Nav>
      </div>
      <small>&copy; 2022 Louis Adrian Reyes</small>
    </FooterContainer>
  );
};
