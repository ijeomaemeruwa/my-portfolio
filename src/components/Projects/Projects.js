import React from 'react'
import { Link } from 'react-router-dom'
import '../Projects/Projects.css'

export const Projects = (props) => {

return (

    <div>

    <div className="projects_showcase">
    <div class="card mx-auto mb-5" style={{ maxWidth: '60%', height: '250px'}}>
    <div class="row no-gutters">

    <div class="col-md-8">
    
    </div>

    <div class="col-md-4">
    <div class="card-body">
    <h4 class="card-title">{props.data.title}</h4>
    <p class="card-text">{props.data.description}</p>
    <Link to={props.data.link} >View Project</Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>     
)
}
