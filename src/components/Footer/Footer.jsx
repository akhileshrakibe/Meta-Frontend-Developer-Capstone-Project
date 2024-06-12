import "./Footer.css"
import { Link } from "react-router-dom";
import { getImageUrl } from "../image-util";
import { Link as LinkS } from "react-scroll";

function Footer() {
  return (
    <>
      <section className="footer">

        <div className="footer-img">
          <img src={getImageUrl("Asset 20@4x.png")} alt="img-foot" className="w-36" />
        </div>

        <div className="footer-content">
        
          <div>
              <h1>Navigation</h1>
              
              <Link to="/" >Home</Link>
              <LinkS to="about" spy={true} smooth={true} offset={0} duration={500}>About</LinkS>
              <LinkS to="menu" spy={true} smooth={true} offset={0} duration={500}>Menu</LinkS>
              <Link to="/booking">Reservations</Link>
              <LinkS to="lemon" spy={true} smooth={true} offset={0} duration={500}>Little Lemon</LinkS>
              <LinkS to="testimonials" spy={true} smooth={true} offset={0} duration={500}>Testimonials</LinkS>
              <LinkS to="top" spy={true} smooth={true} offset={0} duration={500}>Top of Page</LinkS>
          </div>
          <div>
              <h1>Contact</h1>
              
              <Link to="#">Phone Number</Link>
              <Link to="#">Email</Link>
              <Link to="#">Address</Link>
              
          </div>
          <div>
              <h1>Social Media</h1>
              
              <Link to="#">Facebook</Link>
              <Link to="#">Instagram</Link>
              <Link to="#">Linked In</Link>
              <Link to="#">Twitter</Link>
          </div>

        </div>
      </section>

      <div className="copyright">
          &copy; Copyright. All rights reserved.
      </div>

    </>
  )
}

export default Footer

