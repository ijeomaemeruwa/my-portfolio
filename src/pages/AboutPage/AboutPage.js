import React from 'react'
import '../AboutPage/aboutpage.scss'
import { CustomButton, ButtonLink } from '../../components/TopBar/TopBarElements'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import Footer from '../../components/Footer/Footer'

const About = () => {
return (
    <>
    <section className="about_section">
    <div className="about_container">
    <div className="about_content col-md-8 m-auto">
    <h2>About Ijae</h2>
    <p>
      I am a front end developer who enjoys building user interfaces and web applications. I have a passion for developing 
      interactive features that enhance user experience and making the web accessible for users.
      Finding my purpose as a woman in technology has been one of the greatest fulfilments and
      putting that knowledge to valuable use has given me an opportunity to be part of a growing 
      and always evolving community.
    </p>
    <p>
    My current stack includes; <u>JavaScript ES6+</u>, <u>Bootstrap</u>, <u>SASS</u>, <u>React.js and Redux</u> and <u>Firebase</u>. However, my goal is to become a full stack developer
    and add back end technologies such as <u>Node.js (Express)</u>, <u>SQL</u> and <u>MongoDB</u> to my technical skills. I am always open to learning interesting programming languages that 
    solves problems efficiently.
    </p>
    <p>
      I also have an interest in design, contributing to open source software and wrting technical articles.
      In the future I would like to look into AI and cloud services such as AWS.
    </p>

    <div className="row about_buttons mx-auto py-3 px-2">
    <CustomButton className="col-md-4">
    <ButtonLink to="/">
      <BsChevronLeft />  Home 
    </ButtonLink>
    </CustomButton>

    <CustomButton className="col-md-4">
    <ButtonLink to="https://zety.com/mycv/emeruwa-ijeoma2" 
    download="Ijeoma Emeruwa Resume"
    >
        Resume <BsChevronRight />
    </ButtonLink>
    </CustomButton>
    </div>

    </div>
    </div>
    </section>
    <Footer />        
    </>
)
}

export default About
