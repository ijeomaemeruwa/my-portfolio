import React from 'react'
import './hero.scss'

import TextLoop from 'react-text-loop'
import CustomButton from '../../components/CustomButton/CustomButton'


const Hero = () => {
    return (
    <>
    <section className="hero">
        <div className="hero_content text-center mx-auto col-md-6 col-sm-10">
        <p>Hello, I'm</p>
        <h1>IJEOMA EMERUWA</h1>
        <h2>
            <TextLoop springConfig={{ stiffness: 180, damping: 8}}>
            <span>FrontEnd Developer</span>
            <span>Open Source</span>
            <span>Accessibility nerd</span>
            <span>Technical Writer</span>
            </TextLoop>     
        </h2>
        <p>On a mission to make the web accessible and optimized for quality developer and user experience.
        </p>
        <div className="row container hero_btn mx-auto col-md-10">
        <CustomButton>
            Resume
        </CustomButton>
        <CustomButton>
            Projects
        </CustomButton>
        </div> 
        </div>
    </section> 
    </>
    )
}

export default Hero
