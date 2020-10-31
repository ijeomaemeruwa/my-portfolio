import React from 'react'
import '../AboutPage/aboutpage.scss'
import { CustomButton, ButtonLink } from '../../components/TopBar/TopBarElements'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'

const About = () => {
return (
    <>
    <section className="about_section">
    <div className="about_container">
    <div className="about_content col-md-8 m-auto">
    <h2>About Ijae</h2>
    <p>
    Finding my purpose as a woman in technology has been one of the greatest fulfilments and
    putting that knowledge to valuable use has given me an opportunity to be part of a growing and always evolving community.
    My current stack includes; <u>JavaScript ES6+</u>, <u>Bootstrap</u>, <u>SASS</u>, <u>React.js and Redux</u> and <u>Firebase</u>. However, my goal is to become a full stack developer
    and add back end technologies such as <u>Node.js (Express)</u>, <u>SQL</u> and <u>MongoDB</u> to my technical skills. I am always open to learning interesting programming languages that 
    solves problems efficiently.
    </p>

    <div className="row">
    <CustomButton>
    <ButtonLink to="/">
      <BsChevronLeft />  Home 
    </ButtonLink>
    </CustomButton>

    <CustomButton>
    <ButtonLink to="https://zety.com/mycv/ijeomaemeruwa" 
    download="Ijeoma Emeruwa Resume"
    >
        Resume <BsChevronRight />
    </ButtonLink>
    </CustomButton>
    </div>

    </div>
    </div>
    </section>        
    </>
)
}

export default About
