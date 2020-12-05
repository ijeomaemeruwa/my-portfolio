import React, {Component} from 'react'
import './tools.scss'

import TOOLS_DATA from '../../data/toolsdata'

class Tools extends Component {

  state = {
    toolsCollection: TOOLS_DATA
  }

  render() {
    const { toolsCollection } = this.state;

    return (
    <>
    <section className="skills">
    <div className="skills_content container text-center">

    <div className="col-md-8 mx-auto text-center skills_header">
     <h3>Tech Stack</h3>
     <p>I work with a variety of tools and technologies and open to learning new and innovative technologies.</p>
    </div>


    <div  className="card_container">
      {
        toolsCollection.map(tools => (
        <div key={tools.id} className="cards">
          {tools.icon}
          <p>{tools.tools}</p>
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

export default Tools;
