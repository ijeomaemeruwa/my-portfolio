import React, {Component} from 'react'
import './projects.scss'

import PROJECT_DATA from '../../data/projectsdata'

// import pantry from '../../images/pantry.png'
// import oatts from '../../images/homepage2.png'

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

      <div className="img_container col-md-7">
      <img src={project.image} alt={project.title} />
      </div>

      <div className="col-md-5 col-sm-10 my-auto text-left project_info">
      <h4>{project.title}</h4>

      <div>{project.tags.tag.map((tag) => (
         <small key={tag.id}>{tag.language}</small>
      ))}
      </div>

      <p>{project.description}</p>

      {/* <div className="links row ml-2">
       <p>Github</p>
       <p>Live</p>
      </div> */}

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
