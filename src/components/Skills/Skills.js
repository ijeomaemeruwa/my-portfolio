import React from 'react'

export const Skills = () => {

    const caret = <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                  </svg>
    return (
    <div className="container">
    <div className="skills text-center" style={{ height: '100%' }}>
    <h3 className="strike">Skills</h3> 
    <p>Here are the tools and technologies I work with:</p>

   <div className="icons_container container my-5 mx-auto">
   <div className="row">
  
   <div className="col-md-3 col-sm-6 text-left">
    <p>{caret} HTML</p>
    <p>{caret} CSS</p>
    <p>{caret} JavaScript (ES6+)</p>
   </div>

   <div className="col-md-3 col-sm-6 text-left">
   <p>{caret} BootStrap</p>
   <p>{caret} SASS</p>
   <p>{caret} React + Redux</p>
   </div>

   <div className="col-md-3 col-sm-6 text-left">
   <p>{caret} Git</p>
   <p>{caret} GitHub</p>
   <p>{caret} FireBase</p>
   </div> 

   </div> 
   </div>
<hr style={{ width: "85%", background: '#d5d5d5'}} className="my-5 mx-auto"/>    
</div>
</div>
    )
}
