import React from 'react'
import './hero.scss'
import { CustomButton, ScrollButton } from '../TopBar/TopBarElements'
import { BsChevronDown } from 'react-icons/bs'

const Hero = () => {

    return (
    <>
    <section className="hero_section">
    <div className="hero_container">

    <div className="hero_header col-md-5 mt-2 ml-3 text-left animate__animated animate__fadeInUp">
    <h2><span>Hello.</span></h2>
    </div>

    <div className="col-md-12 hero_content">
    <p>It's,</p>
    <h1>Ijeoma Emeruwa</h1> 
    <h3>Front End Developer.</h3>
     
    <CustomButton className="btn">
    <ScrollButton 
     to="projects"
     activeClass="active"
     spy={true}
     smooth={true}
     offset={-80}
     duration={500}
    >
    Projects 
</ScrollButton>
</CustomButton>
    <span className="scroll_down">
    <BsChevronDown />
    </span>
    </div>

    </div>
    </section>        
    </>
    )
}

export default Hero
