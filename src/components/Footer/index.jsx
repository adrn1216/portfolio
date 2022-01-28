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
          <a href="">Intro</a>
          <a href="">About Me</a>
          <a href="">Projects</a>
        </Nav>
        <Nav>
          <a href="">Contact Me</a>
          <a href="">Mail</a>
          <a href="">LinkedIn</a>
        </Nav>
        <Nav>
          <a href="">Social</a>
          <div className="social-links">
            <FiverrIcon />
            <FacebookIcon />
            <InstagramIcon />
            <BehanceIcon />
          </div>
        </Nav>
      </div>
      <small>&copy; 2022 Louis Adrian Reyes</small>
    </FooterContainer>
  );
};
