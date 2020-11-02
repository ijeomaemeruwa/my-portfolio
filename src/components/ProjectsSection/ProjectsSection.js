import React from 'react'
import '../ProjectsSection/projectssection.scss'
// import {Link} from 'react-router-dom'
import oatts from '../../assets/images/oatts.png'
import compact from '../../assets/images/compact.png'
import gratia from '../../assets/images/gratia.png'


const ProjectsSection = () => {
    return (
    <>
    <section className="projects">
    <div className="projects_section">
    <div className="col-md-6 my-auto ml-3 text-left project_header">
    <h2><span>Projects.</span></h2> 
    </div>

    <div className="project_preview row mx-auto">
    <div className="col-md-6 mx-auto">
    <img src={oatts} alt="ecommerce application" />
    </div>
    <div className="col-md-6 col-sm-10 my-auto text-left p-3 project_info">
     <h4>Ecommerce Application</h4>
     <p>A beauty ecommerce application built with <u>React</u>, <u>Redux</u>, <u>SASS</u>, <u>Firebase</u>. The application uses react to build the user interface and 
     redux to manage complex state such as multiple user authentication and adding items to cart.
     </p>
    <a href="https://github.com/ijeomaemeruwa/react-oatts" 
    className="project_link text-center"
    target="_blank" 
    rel="noopener noreferrer"
    >
    View Project
    </a>
    </div>
    </div>

    
    <div className="project_preview row mx-auto">
    <div className="col-md-6">
    <img src={compact} alt="Compact app" />
    </div>
    <div className="col-md-6 col-sm-10 my-auto text-left p-3 project_info">
     <h4>Compact App</h4>
     <p>A web application built with <u>JavaScript</u> and <u>ES6</u> concepts,
      that enables a user upload url and files to a <u>Firebase</u> database which provides persistence to the DOM and offline access and utilizing array methods 
     to filter and sort saved files.
     </p>
     <a href="https://github.com/ijeomaemeruwa/compact-app" 
     className="project_link text-center" 
     target="_blank" 
     rel="noopener noreferrer"
     >
      View Project
      </a>
     </div>
    </div>

    <div className="project_preview row mx-auto">
    <div className="col-md-6">
    <img src={gratia} alt="Gratia Bookings" />
    </div>
    <div className="col-md-6 col-sm-10 my-auto text-left p-3 project_info">
     <h4>Gratia Bookings</h4>
     <p></p>
    <a href="https://github.com/ijeomaemeruwa/gratiabookings" 
    className="project_link text-center"
    target="_blank" 
    rel="noopener noreferrer"
    >
    View Project
    </a>
    </div>
    </div>
    </div>
    </section>     
    </>
)
}

export default ProjectsSection
