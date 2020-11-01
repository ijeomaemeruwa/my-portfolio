import React from 'react'
import '../ProjectsSection/projectssection.scss'
//import { CustomButton, ButtonLink } from '../TopBar/TopBarElements'
//import { BsChevronRight } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import oatts from '../../assets/images/oatts.png'
import compact from '../../assets/images/compact.png'
import gratia from '../../assets/images/gratia.png'


/*
 <CustomButton className="projects_btn mx-auto">
    <ButtonLink to="/projects">
        View All <BsChevronRight />
    </ButtonLink>
    </CustomButton>
*/


const ProjectsSection = () => {
    return (
    <>
    <section className="projects">
    <div className="projects_section">
    <div className="col-md-6 my-auto ml-3 text-left project_header">
    <h2><span>Projects.</span></h2> 
    </div>

    <div className="project_preview row mx-auto">
    <div className="col-md-6">
    <img src={oatts} alt="ecommerce application" />
    </div>
    <div className="col-md-6 my-auto text-center p-2">
     <h4>Ecommerce Application</h4>
     <p></p>
    <Link to="https://github.com/ijeomaemeruwa/react-oatts" 
    className="project_link">View Project</Link>
    </div>
    </div>

    
    <div className="project_preview row mx-auto">
    <div className="col-md-6">
    <img src={compact} alt="Compact app" />
    </div>
    <div className="col-md-6 my-auto text-center p-2">
     <h4>Compact App</h4>
     <p></p>
     <Link to="https://github.com/ijeomaemeruwa/compact-app" 
     className="project_link">View Project</Link>
     </div>
    </div>

    <div className="project_preview row mx-auto">
    <div className="col-md-6">
    <img src={gratia} alt="Gratia Bookings" />
    </div>
    <div className="col-md-6 my-auto text-center p-2">
     <h4>Gratia Bookings</h4>
     <p></p>
    <Link to="https://github.com/ijeomaemeruwa/gratiabookings" 
    className="project_link">View Project</Link>
    </div>
    </div>
    </div>
    </section>     
    </>
)
}

export default ProjectsSection
