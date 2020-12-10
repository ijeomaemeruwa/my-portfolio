import pantry from '../images/pantry.png'
import oatts from '../images/homepage2.png'
import wetranslate from '../images/weTranslate.png'

//import { VscLinkExternal, VscGithub } from 'react-icons/vsc';

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
        github: "https://github.com/ijeomaemeruwa/pantry",
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
                    id: '004',
                    language: 'React'
                },
                {
                    id: '005',
                    language: 'Sass'
                },
                {
                    id: '006',
                    language: 'Firebase'
                }
                ]
            },
        description: 'A beauty ecommerce application built with a checkout process and stripe payment integration.',
        github: "https://github.com/ijeomaemeruwa/react-oatts",
        live: "https://oatts-ecommerce.netlify.app/"
    },
    {
        id: '3',
        image: wetranslate,
        title: 'weTranslate',
        tags: {
            id: '103',
            tag: [
                {
                    id: '007',
                    language: 'React'
                },
                {
                    id: '008',
                    language: 'Sass'
                },
                {
                    id: '009',
                    language: 'Nodejs'
                }
                ]
            },
        description: 'A website for outsourcing translator talent, incorporating web internalization, nodejs auth and a chatbot.',
        status: 'In Development Stage',
        github: "https://github.com/ijeomaemeruwa/weTranslate",
        // live: ''
    },

];

export default PROJECT_DATA;