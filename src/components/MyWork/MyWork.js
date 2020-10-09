import React, { Component } from 'react'
import { Projects } from '../Projects/Projects'

export class MyWork extends Component {
    state = {
        projects: [

          {
            id: 1,
            title: 'Compact App',
            description: 'A client side application that uploads and saves url as files. Also, utilizes firebase firestore database to persist data offline and save to database',
            image: '',
            technologies: '+HTML +CSS +Javascript +Firebase',
            github: 'https://github.com/ijeomaemeruwa/compact-app',
            live_link: 'https://compactapp.netlify.app/',
            message: 'Status: In Development'
          },
          {
            id: 2,
            title: 'Bookclub',
            description: 'Built the user interface with react and integrated the NYTimes api to fetch and display API data using react hooks',
            image: '',
            technologies: '+React +API +React-Bootstrap',
            github: 'https://github.com/ijeomaemeruwa/bookclub',
            live_link: 'https://bookclub-app.netlify.app/'
          },

            {
              id: 3,
              title: 'Gratia bookings',
              description: 'A static travel, hotel and cargo bookings website with contact form and newsletter integrated with firebase and mailchimo respectively',
              image: '',
              technologies: '+React +React-Bootstrap +Firebase',
              github: 'https://github.com/ijeomaemeruwa/gratiabookings',
              live_link: 'https://gratiabookings-v1.netlify.app/',
              message: 'Staus: Private Repo'
            },
            {
              id: 4,
              title: 'Kanban app',
              description: 'A productivity tool that uses the trello api to create a dashboard used to manage task and manage projects.',
              image: '',
              technologies: '+React +ContextAPI +REST API',
              github: 'https://github.com/ijeomaemeruwa/kanban_app',
              live_link: '',
              message: 'Status: In Development'
            },
            {
              id: 5,
              title: 'Asos clone',
              description: 'Asos ecommerce website clone with a twist',
              image: '',
              message: 'Status: Coming soon'
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
