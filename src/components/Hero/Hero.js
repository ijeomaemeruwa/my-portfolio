import React from 'react'
import '../Hero/Hero.css'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';


export const Hero = () => {
    const arrow = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>

    return (
    <div>
     <div className="hero-container container mx-auto my-5">

    <Fade>
    <div className="hero_content col-md-8 col-sm-6">
    <h4>Hello, I'm</h4>
    <h1>Ijeoma Emeruwa</h1>
    <h3>Front End Developer. UI Developer</h3>

    <div className="contact_icons my-5">
    <a href="https://github.com/ijeomaemeruwa" target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/github2.png')} alt="my github" />
    </a>
    <a href="https://linkedin.com/in/ijeomaemeruwa" target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/linkedin.png')} alt="my linkedin" />
    </a>
    <a href="mailto:helloijeoma@gmail.com" target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/mail2.png')} alt="my mail" />
    </a>
    </div>
    </div> 
    </Fade>

    <div className="about col-md-8">
    <Fade>
    <h2 className="strike">About me</h2>
    <br />
    <p>A self taught front end developer who enjoys developing 
        an accesible and optimized user experience with front end tools, technologies, and also learning 
        about new practices to make my code readable and scalable for optimum performance.
    </p> 
    <p>When i'm not working on projects, i'm reading about open source, technical writing and exploring 
        new places to eat.
    </p>  
    </Fade>   
    </div>
    </div>

    <div className="row container mx-auto btn_links">
    <Fade bottom>
    <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:5b77721c-2aa1-438e-8128-61c2f4aff47a#pageNum=1" 
       className="btn-1" download="Ijeoma Emeruwa Resume">
        Resume {arrow}
    </a>
    <Link to="/mywork" className="col-md-2 btn-2"><button>My projects {arrow}</button></Link>
    </Fade>
    </div>

    <hr style={{ width: "70%", background: '#d5d5d5'}} className="my-5 mx-auto"/>      
    </div>
    )
}
