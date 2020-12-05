import React, {Component} from 'react';
import './projects.scss';

import PROJECT_DATA from '../../data/projectsdata';
import Image from 'react-bootstrap/Image';


class Projects extends Component {
  state = {
    projectsCollection: PROJECT_DATA
  }


  render() {
    const { projectsCollection } = this.state;
    return (
    <>
    <section className="projects_section">
     <div className="projects_content">

    <div className="project_header">
      <h3>Projects</h3> 
      <hr /> 
    </div>

   <div>
    {
     projectsCollection.map(project => (
      <div key={project.id} className="projects_container row mx-auto">
      <div className="col-md-6">
      <Image src={project.image} alt={project.title} fluid />
      </div>

      <div className="m-auto text-left col-md-5 project_info">
      <h4>{project.title}</h4>
      <div>
        {project.tags.tag.map((tag) => (
      <small key={tag.id}>{tag.language}</small>
       ))
        }
      <p>{project.description}</p>
       <div className="links row ml-2">
       <p>{project.github}</p>
       <p>{project.live}</p>
      </div>
      </div>

      </div>
      </div>
     ))
    }
   </div>
    </div>   
    </section>      
    </>
    )
}
}

export default Projects
