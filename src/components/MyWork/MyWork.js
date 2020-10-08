import React, { Component } from 'react'
import { Projects } from '../Projects/Projects'

export class MyWork extends Component {
    state = {
        projects: [

            {
              id: 1,
              title: 'Gratia bookings',
              description: 'A simple static hotel, flight and cargo bookings site',
              image: '',
              full_description: '',
              technologies: '',
              road_block: '',
              lessons: '',
              github: '',
              live_link: ''
            },
            {
              id: 2,
              title: 'Compact App',
              description: 'A mini app to store your favorite resources as url files',
              image: '',
              full_description: '',
              technologies: '',
              road_block: '',
              lessons: '',
              github: '',
              live_link: ''
            },
            {
              id: 3,
              title: 'Bookclub',
              description: 'A web app created to view the current New York times bestsellers',
              image: '',
              full_description: '',
              technologies: '',
              road_block: '',
              lessons: '',
              github: '',
              live_link: ''
            },
            {
              id: 4,
              title: 'Kanban app',
              description: 'A productivity tool',
              image: '',
              full_description: '',
              technologies: '',
              road_block: '',
              lessons: '',
              github: '',
              live_link: ''
            },
            {
              id: 5,
              title: 'Asos clone',
              description: 'Asos face and body category ecommerce site',
              image: '',
              full_description: '',
              technologies: '',
              road_block: '',
              lessons: '',
              github: '',
              live_link: ''
            }

        ]
    }

    render() {
    return (
    <div className="my_projects">
    <div className="showcase">
        {this.state.projects.map((project) => (
           <Projects key={project.id} data={project} />
        ))}

    </div>
                
    </div>
    )
}
}
