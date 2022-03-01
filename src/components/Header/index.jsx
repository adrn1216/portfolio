import { Link } from "react-router-dom";
import { HeaderContainer, Nav } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <p>adrn1216</p>
        <Nav>
          <Link to="/">Intro</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
