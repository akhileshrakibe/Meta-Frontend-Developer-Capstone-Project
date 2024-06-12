import "./Hero.css";
import { getImageUrl } from "../image-util";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div id="lemon" className="hero-div">
            <section className="hero">
                <h1>Little Lemon</h1>
                <p>Chicago</p>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional
                    recipes served with a modern twist.
                </p>

                <div className="btn-res">
                    <Link to="/booking">Reserve Table</Link>
                </div>
            </section>

            <section className="hero-img">
                <img
                    src={getImageUrl("recipeimg3.jpg")}
                    alt="hero-img"
                    className=""
                />
            </section>
        </div>
    );
}

export default Hero;
