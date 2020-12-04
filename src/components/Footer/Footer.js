import React from 'react'
import '../Footer/footer.scss'

import { VscGithub, VscMail } from 'react-icons/vsc'
import { SiLinkedin } from 'react-icons/si'
import { FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
    return (
    <>
    <footer className="footer">
    <div className="footer_section container">
    <div className="footer_contact col-md-6">
    <h4>Work with me</h4>
    <p>
    <a 
    href="mailto:helloijeoma@gmail.com" 
    className="mail"
    target="_blank"  rel="noopener noreferrer">
    <VscMail /> helloijeoma@gmail.com 
    </a>
    </p>
    </div> 

    <div className="footer_socials col-md-6">
    <h4>Reach me:</h4>
    <div className="socials">
    <a 
    href="https://github.com/ijeomaemeruwa" 
    target="_blank"  rel="noopener noreferrer">
    <VscGithub />
    </a>
    
    <a 
    href="https://linkedin.com/in/ijeoma-emeruwa" 
    target="_blank"  rel="noopener noreferrer">
    <SiLinkedin />
    </a>
    
    <a 
    href="https://twitter.com/ijeomaemeruwa" 
    target="_blank"  rel="noopener noreferrer">
    <FaTwitterSquare />
    </a>
    </div>

    </div>
    </div>    
    </footer>       
    </>
    )
}

export default Footer
