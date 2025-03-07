import About from '../About/About';
import Project1 from '../Project1/Project1';
import Project2 from '../Project2/Project2';
import Project3 from '../Project3';
import Skills from '../Skills/Skills';
import './Homepage.css'



const Homepage = () => {
    return(
    <div className='wholepage'>
      <div  className='landing-cont'>
          <p>Hi, I’m Alex, a full-stack developer based in Atlanta.</p>
          <a id='about' href="mailto:alexcarl.dev@gmail.com" className="landing-email">
            Get in touch
          </a>
      </div>

      <div  >
        <About />
      </div>
      <div>
        <Skills />
      </div>
      <div id='projects'>
        <h3 className='font-bold'>Projects</h3>
        <Project1 />
        <Project2 />
        <Project3 />
      </div>

    </div>
    )

}

export default Homepage;
