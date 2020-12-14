import React from 'react'
import '../Footer/footer.scss'

import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { BsPeople } from 'react-icons/bs'

const Footer = () => {
    return (
    <>
    <footer className="footer">
    <div className="footer_section container">

    <div className="footer_contact col-md-8">
    <h4>Let's work together <span><BsPeople /></span></h4>
    <h6>I'm open to helping you or your company reach your goal.</h6>
    <p>
    <a 
    href="mailto:helloijeoma@gmail.com" 
    target="_blank"  rel="noopener noreferrer">
    helloijeoma@gmail.com 
    </a>
    </p>
    </div> 

    <div className="footer_socials">
    <h6>Connect...</h6>
    <div className="socials">
    <a 
    href="https://github.com/ijeomaemeruwa" 
    target="_blank"  rel="noopener noreferrer">
    <FiGithub />
    </a>
    
    <a 
    href="https://linkedin.com/in/ijeoma-emeruwa" 
    target="_blank"  rel="noopener noreferrer">
    <FiLinkedin />
    </a>
    
    <a 
    href="https://twitter.com/ijeomaemeruwa" 
    target="_blank"  rel="noopener noreferrer">
    <FiTwitter />
    </a>
    </div>

    </div>
    </div>    
    </footer>       
    </>
    )
}

export default Footer
