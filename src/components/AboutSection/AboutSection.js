import React from 'react'
import { CustomButton, ButtonLink } from '../TopBar/TopBarElements'
import { BsChevronRight } from 'react-icons/bs'
import '../AboutSection/aboutsection.scss'

const AboutSection = () => {
    return (
    <>
    <section className="about_section">
    <div className="about_section_container">

    <div className="col-md-6 my-auto ml-3 text-left about_header">
    <h2><span>About.</span></h2> 
    </div>

    <div className="col-md-6 col-sm-12 mx-auto my-3 text-left about_text">
    <p>A self taught front end developer devoted to building beautiful, functional web and mobile experiences focused on
        accessibility and optimized performance. I have always enjoyed learning new things and working on my development as 
        a professional. 

    </p>
    <CustomButton className="btn">
    <ButtonLink to="/aboutpage">
        More About Me <BsChevronRight />
    </ButtonLink>
    </CustomButton>
    </div> 
    </div>  
    </section>      
    </>
    )
}

export default AboutSection;
