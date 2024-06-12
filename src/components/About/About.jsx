import './About.css'
import { getImageUrl } from "../image-util";

function About() {
  return (
    <>
      <article id='about' className='about'> 

        <section className='para'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant. To craft the menu, Mario relies on family recipes and
            his experience as a chef in Italy. Adrian does all the marketing for
            the restaurant and led the effort to expand the menu beyond classic
            Italian to incorporate additional cuisines from the Mediterranean
            region.
          </p>
        </section>

        <section className='img'>

          <img src={getImageUrl("pic5.jpg")} alt="pic5" />
          <img src={getImageUrl("pic6.jpg")} alt="pic6" />
          
        </section>

      </article>
    </>
  )
}

export default About
