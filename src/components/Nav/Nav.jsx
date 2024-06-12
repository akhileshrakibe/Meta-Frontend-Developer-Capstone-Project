import "./Nav.css";
import { getImageUrl } from "../image-util"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { useRef } from "react";

function Nav() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header id="top">
        <nav>
          <div className="nav-img">
            <img src={getImageUrl("Asset 16@4x.png")} alt="navimg" />
          </div>

          <div ref={navRef} id="res-menu" className="bar">

            <LinkS to="top" spy={true} smooth={true} offset={0} duration={500}>
              Home
            </LinkS>
            <LinkS to="about" spy={true} smooth={true} offset={0} duration={500} >
              About
            </LinkS>
            <LinkS to="lemon" spy={true} smooth={true} offset={0} duration={500}>
              Little Lemon
            </LinkS>
            <LinkS to="menu" spy={true} smooth={true} offset={0} duration={500}>
              Menu
            </LinkS>
            <LinkS to="testimonials" spy={true} smooth={true} offset={0} duration={500}>
              Testimonials
            </LinkS>
  
            <div className="">
              <button onClick={showNavbar} className="nav-btn nav-close-btn">
                <FaTimes />
              </button>
            </div>

          </div>  

          <div className="burger">

            <button onClick={showNavbar} className="nav-btn">
              <FaBars />
            </button>

          </div>

        </nav>
      </header>
    </>
  );
}

export default Nav;
