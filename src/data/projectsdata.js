import pantry from '../images/pantry.png'
import oatts from '../images/homepage2.png'

import { VscLinkExternal, VscGithub } from 'react-icons/vsc';

const PROJECT_DATA = [

    {
        id: '1',
        image: pantry,
        title: 'Pantry Recipe App',
        tags: {
            id: '101',
            tag: [
                {
                    id: '001',
                    language: 'React'
                },
                {
                    id: '002',
                    language: 'Sass'
                },
                {
                    id: '003',
                    language: 'Firebase'
                }
                ]
            },
        description: 'An application that lets users create, save, share and search for recipes.',
        github: <a href="https://github.com/ijeomaemeruwa/pantry"><VscGithub /></a>,
        live: ''
    },
    {
        id: '2',
        image: oatts,
        title: 'Ecommerce Application',
        tags: {
            id: '102',
            tag: [
                {
                    id: '003',
                    language: 'React'
                },
                {
                    id: '004',
                    language: 'Sass'
                },
                {
                    id: '005',
                    language: 'Firebase'
                }
                ]
            },
        description: 'A beauty ecommerce application built with a checkout process and stripe payment integration.',
        github: <a href="https://github.com/ijeomaemeruwa/react-oatts"><VscGithub /></a>,
        live: <a href="https://oatts-ecommerce.netlify.app/"><VscLinkExternal /></a>
    }

];

export default PROJECT_DATA;