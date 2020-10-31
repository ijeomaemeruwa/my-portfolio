import React from 'react'
import '../ProjectsSection/projectssection.scss'
import { CustomButton, ButtonLink } from '../TopBar/TopBarElements'
import { BsChevronRight } from 'react-icons/bs'
import {Link} from 'react-router-dom'

const ProjectsSection = () => {
    return (
    <>
    <section className="projects">
    <div className="projects_section">
    <div className="col-md-6 my-auto ml-3 text-left project_header">
    <h2><span>Projects.</span></h2> 
    </div>

    <div className="project_preview row mx-auto">
    <div className="col-md-7">
    <img src={require('../../assets/images/compact_project.png')} alt="compact_project" />
    </div>
    <div className="col-md-5">
     <h4>Compact App</h4>
     <p>An app that saves url and files into a folder</p>
    <Link to="compact-project">View Project</Link>
    </div>
    </div>

    <CustomButton className="projects_btn mx-auto">
    <ButtonLink to="/projects">
        View All <BsChevronRight />
    </ButtonLink>
    </CustomButton>
    </div>
    </section>     
    </>
)
}

export default ProjectsSection
