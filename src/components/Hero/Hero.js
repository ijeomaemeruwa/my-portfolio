import React from 'react'
import '../Hero/Hero.css'
import { Link } from 'react-router-dom'

export const Hero = () => {
    const arrow = <svg width="1.2em" height="1.2em" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
                  </svg>

    return (
    <div>
     <div className="hero-container container mx-auto my-5">

    <div className="hero_content col-md-8 col-sm-6">
    <h4>Hello, I'm</h4>
    <h1>Ijeoma Emeruwa</h1>
    <h3>Front End Developer. UI Developer</h3>

    <div className="contact_icons my-5">
    <a href="https://github.com/ijeomaemeruwa" target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/github.svg')} alt="my github" />
    </a>
    <a href="https://linkedin.com/in/ijeomaemeruwa" target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/linkedin.svg')} alt="my linkedin" />
    </a>
    <a href="mailto:helloijeoma@gmail.com" target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/mail.png')} alt="my mail" />
    </a>
    </div>
    </div> 

    <div className="about col-md-8">
    <h3 className="strike">About me</h3>
    <br />
    <p>A self taught front end developer who enjoys developing 
        an accesible and optimized user experience with front end technologies, and also learning 
        about new practices to make my code readable and scalable for optimum performance.
    </p> 
    <p>When i'm not working on projects, i'm reading about open source, technical writing and exploring 
        new places to eat.
    </p>  
    </div>    
    </div> 

    <div className="row container mx-auto btn_links">
    <Link to="/resume" className="col-md-2 btn_text"><button>Resume {arrow}</button></Link>
    <Link to="/projectpage" className="col-md-2 btn_text"><button>My projects {arrow}</button></Link>
    </div>

    <hr style={{ width: "70%", background: '#d5d5d5'}} className="my-5 mx-auto"/>      
    </div>
    )
}
