import React, {useState, useEffect} from 'react'

import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../../Logo/Logo'

import { 
    Nav, 
    NavContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavButton,
    BtnLink,
    BlogLink
} from '../NavBar/NavbarElements'


const NavBar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)
    
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setScrollNav(true)
        }else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
       window.addEventListener('scroll', changeColor)
    }, [])
    

    return (
    <>
    <Nav scrollNav={scrollNav}> 
    <NavContainer> 

    <NavLogo to="/">
    <Logo />
    </NavLogo>

    <MobileIcon onClick={toggle}>
      <AiOutlineMenu />
    </MobileIcon>

    <NavMenu>
    <NavItem>
    <NavLink to="/about">About</NavLink >
    </NavItem>

    <NavItem>
    <NavLink to="/projects">Projects</NavLink >
    </NavItem>

    <NavItem>
    <NavLink to="/tools">Skills</NavLink >
    </NavItem>

    <NavItem>
    <BlogLink href="https://helloijeoma.hashnode.dev"  
    target="_blank"  rel="noopener noreferrer"
    >
    Blog
    </BlogLink >
    </NavItem>
    </NavMenu>

    <NavButton>
    <BtnLink 
    href="mailto:helloijeoma@gmail.com" 
    className="mail"
    target="_blank"  rel="noopener noreferrer"
    >
    Contact</BtnLink >
    </NavButton>

    </NavContainer>
    </Nav>  
    </>
)
}

export default NavBar;
