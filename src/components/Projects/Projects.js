import React from 'react'
import '../Projects/Projects.css'
import Fade from 'react-reveal/Fade';

export const Projects = (props) => {


return (

    <div>
    <div className="projects_showcase">
    <Fade big>
    <div className="card mb-3 mx-lg-auto mx-md-auto" style={{ maxWidth: '540px', background: '#111' }}>
    <div className="row no-gutters">
    <div className="col-md-10">
    <div className="card-body">
    <h4 className="card-title">{props.data.title}</h4>
    <p className="card-text">{props.data.description}</p>
    <h6 className="card-text"><small style={{letterSpacing: '1px'}}>{props.data.technologies}</small></h6>
    <p>{props.data.message}</p>
    <div className="links">
       <a href={props.data.github} target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/github2.png')} alt="my github" />
       </a>
       <a href={props.data.live_link} target="_blank"  rel="noopener noreferrer">
        <img src={require('../../assets/icons/external_link.png')} alt="live link" />
       </a>
    </div>
    </div>
    </div>
    </div>
    </div>
    </Fade>
    </div>
    </div>     
)
}
