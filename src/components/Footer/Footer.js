import React from 'react'
import '../Footer/footer.scss'
import { Link } from 'react-router-dom'
import { Contact, ContactLink } from '../TopBar/TopBarElements'

const Footer = () => {
    return (
    <>
    <footer className="footer">
    <div className="footer_section">

    <div className="col-md-6 my-auto ml-3 text-left footer_header">
    <h2><span style={{ color: "#000" }}>Contact.</span></h2> 
    </div> 

    <div className="footer_content col-md-6 col-sm-12 mx-auto my-3 text-left">
    <div className="contact col-md-8 text-center mx-auto">
    <h3>Get In Touch.</h3>
    <h5>I'm open to collaborating, freelance, open source and full time roles.</h5>
    <p>
    <Link 
    to="mailto:helloijeoma@gmail.com" 
    className="mail"
    target="_blank"  rel="noopener noreferrer">
    helloijeoma@gmail.com
    </Link>
    </p>

    <Contact className="social_links">
    <ContactLink to="https://github.com/ijeomaemeruwa"  target="_blank" 
     rel="noopener noreferrer">
      GitHub
    </ContactLink>
    <ContactLink to="https://linkedin.com/in/ijeoma-emeruwa"  target="_blank" 
     rel="noopener noreferrer">
      LinkedIn
    </ContactLink>
    <ContactLink to="https://twitter.com/ijeomaemeruwa"  target="_blank" 
     rel="noopener noreferrer">
      Twitter
    </ContactLink>      
    </Contact>

    </div> 
    </div>
    </div>     
    </footer>       
    </>
    )
}

export default Footer
