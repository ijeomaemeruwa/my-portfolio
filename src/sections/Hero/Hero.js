import React from 'react'
import './hero.scss'
import {Link} from 'react-router-dom'

//  {/* <TextLoop springConfig={{ stiffness: 180, damping: 8}}>
//             <span>Front End Developer</span>
//             <span>Open Source </span>
//             {/* <span>Accessibility nerd</span>
//             <span>Technical Writer</span> */}
//             </TextLoop>   


const Hero = () => {
    return (
    <>
    <section className="hero">
        <div className="hero_content text-center mx-auto col-md-6 col-sm-10">
        <p>Hello, I'm</p>
        <h1>IJEOMA EMERUWA</h1>
        <h2>
        <span>Front End Developer</span>
           
        </h2>
        <p>On a mission to make the web accessible and optimized for quality developer and user experience.
        </p>
        <div className="hero_btn mx-auto col-md-10">
        <a href="https://docs.google.com/document/d/e/2PACX-1vTfNTkZCGhYJUAmw-salt-GwG4zFWHcC0O20FDgsSW8frW_dtvDZ8en1PzKtmq6nCQ3KPcZJn6Ltm8P/pub" 
        className="hero_link"
        target="_blank"  rel="noopener noreferrer">
        Resume
        </a>
        <Link to="/projects" className="hero_link">Projects</Link>
        </div> 
        </div>
    </section> 
    </>
    )
}

export default Hero
