import "./Testimonials.css"
import { getImageUrl } from "../image-util"

function Testimonials() {
    return (
        <>
            <section id="testimonials" className="testimonials">
                <h1>Testimonials</h1>
                <article>

                    <section>
                        <div className="rating">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            
                        </div>
                        <img src={getImageUrl("pic1.jpg")} alt="pic1" />
                        <hr />
                        <div className="review">
                            <span>Selena G.</span>
                            <span>"Really enjoyed the atmosphere."</span>
                        </div>
                    </section>

                    <section>
                        <div className="rating">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <img src={getImageUrl("pic2.jpg")} alt="pic2" />
                        <hr />
                        <div className="review">
                            <span>Brandon M.</span>
                            <span>"Really enjoyed the atmosphere."</span>
                        </div>
                    </section>

                    <section>
                        <div className="rating">
                        <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                        </div>
                        <img src={getImageUrl("pic3.jpg")} alt="pic3" />
                        <hr />
                        <div className="review">
                            <span>Peter R.</span>
                            <span>"The greek salad was excellent!"</span>
                        </div>
                    </section>

                    <section>
                        <div className="rating">
                        <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <img src={getImageUrl("pic4.jpg")} alt="pic4" />
                        <hr />
                        <div className="review">
                            <span>Neha J.</span>
                            <span>"Awesome place peaceful atmosphere with delicious food"</span>
                        </div>
                    </section>

                </article>

            </section>
        </>
    )
}

export default Testimonials


