import React from 'react'
import { CustomButton } from '../TopBar/TopBarElements'
import { BsChevronRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import '../AboutSection/aboutsection.scss'

const AboutSection = () => {
    return (
    <>
    <section className="about_section">
    <div className="about_section_container">

    <div className="col-md-6 text-left">
    <h2><span>About.</span></h2> 
    </div>

    <div className="col-md-8 col-sm-10 ml-2 my-3 text-left about_text">
    <p>A self taught front end developer devoted to building beautiful, functional web and mobile experiences focused on
        accessibility and optimized performance. I have always enjoyed learning new things and working on my development as 
        a professional. 
    </p>

    <CustomButton className="btn">
    <Link to="/aboutpage" className="about_btn">
        More About Me <BsChevronRight />
    </Link>
    </CustomButton>
    </div> 
    </div>  
    </section>      
    </>
    )
}

export default AboutSection;
