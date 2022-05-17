import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { HeaderContainer, Nav } from "./style";

const Header = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const location = useLocation();
  useEffect(() => {
    console.log("louis", location.pathname);
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  return (
    <HeaderContainer>
      <div>
        <p>adrn1216</p>
        <Nav>
          <Link to="/" className={currentPage === "/" ? "active" : ""}>
            Intro
          </Link>
          <Link to="/about" className={true ? "" : ""}>
            About Me
          </Link>
          <Link
            to="/projects"
            className={currentPage === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={currentPage === "/contact" ? "active" : ""}
          >
            Contact Me
          </Link>
          <Link
            to="/fiverr"
            className={currentPage === "/fiverr" ? "active" : ""}
          >
            Fiverr
          </Link>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
