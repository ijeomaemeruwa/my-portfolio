import React, {useState} from 'react'
import TopBar from '../../components/TopBar/TopBar'
import NavBar from '../../components/NavBar/NavBar/NavBar'
import Hero from '../../components/Hero/Hero'
import AboutSection from '../../components/AboutSection/AboutSection'
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection'
import Footer from '../../components/Footer/Footer'

//import { Stretch } from 'styled-loaders-react'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

return (
<>        
<TopBar 
  isOpen={isOpen} 
  toggle={toggle} 
  />
<NavBar toggle={toggle} />

<Hero />
<AboutSection />
<ProjectsSection />
<Footer />
</>
);
}

export default Home;