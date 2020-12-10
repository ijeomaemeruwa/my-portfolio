import { GrHtml5, GrCss3, GrReactjs } from 'react-icons/gr'
import { SiJavascript, SiFirebase,  SiMongodb } from 'react-icons/si'
import { BsBootstrap } from 'react-icons/bs'
import { BiGitRepoForked} from 'react-icons/bi'
import { FaNodeJs, FaSass } from 'react-icons/fa'
// SiGraphql , GrAccessibility, GrMysql, SiGraphql, SiApollographql, SiAmazonaws

const TOOLS_DATA = [

    {
        id: '1',
        icon: <GrHtml5 />,
        tools: 'HTML'
    },
    {
        id: '2',
        icon: <GrCss3 />,
        tools: 'CSS'
    },
    {
        id: '3',
        icon: <BsBootstrap />,
        tools: 'Bootstrap'
    },
    {
        id: '4',
        icon: <FaSass />,
        tools: 'SASS'
    },
    {
        id: '5',
        icon: <SiJavascript />,
        tools: 'JavaScript'
    },
    {
        id: '6',
        icon: <BiGitRepoForked />,
        tools: 'Git'
    },
    {
        id: '7',
        icon: <GrReactjs />,
        tools: 'React.js'
    },
    {
        id: '8',
        icon: <FaNodeJs />,
        tools: 'Node.js(Express)'
    },
    {
        id: '9',
        icon: <SiMongodb />,
        tools: 'MongoDB'
    },
    {
        id: '10',
        icon: <SiFirebase />,
        tools: 'Firebase'
    }
]

export default TOOLS_DATA;