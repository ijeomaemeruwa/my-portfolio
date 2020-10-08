import React from 'react'
import '../Footer/Footer.css'

export const Footer = () => {
    return (
    <div>
     <div className="footer">
    <div className="footer_content text-center">
     <h2>Let's work together!</h2>
     <h5>You can reach me anytime if you need a developer or have questions.</h5>
      <h3 className="mt-3"><a href="mailto:helloijeoma@gmail.com" target="_blank"  rel="noopener noreferrer">helloijeoma@gmail.com</a></h3>
      <div className="contact">
        <p>Follow me and reach out:</p>
      <a href="https://github.com/ijeomaemeruwa" target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/github2.png')} alt="my github" />
     </a>
     <a href="https://linkedin.com/in/ijeomaemeruwa" target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/linkedin.png')} alt="my linkedin" />
    </a>
    <a href="https://twitter.com/ijeomaemeruwa" target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/twitter2.png')} alt="my twitter" />
    </a>
      </div>
    </div>
    </div>       
    </div>
    )
}
