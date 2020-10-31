import React from 'react'
import './hero.scss'
import { CustomButton, ButtonLink } from '../TopBar/TopBarElements'
import { BsChevronRight, BsChevronDown } from 'react-icons/bs'

const Hero = () => {
    return (
    <>
    <section className="hero_section">
    <div className="hero_container">

    <div className="hero_header col-md-5 mt-2 ml-3 text-left">
    <h2><span>Hello.</span></h2>
    </div>

    <div className="col-md-12 hero_content">
    <p>It's,</p>
    <h1>Ijeoma Emeruwa</h1> 
    <h3>Front End Developer.</h3>
     
    <CustomButton className="btn">
    <ButtonLink to="/projects">
        Projects <BsChevronRight />
    </ButtonLink>
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
