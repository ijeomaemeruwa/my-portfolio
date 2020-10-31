import React, {useState, useEffect } from 'react'
import { 
    Nav, 
    NavContainer, 
    NavLogo,
    MobileNavIcon,
    NavMenu,
    NavItem,
    NavLinks
} from '../NavBar/NavElements'
import { CustomButton, ButtonLink } from '../../TopBar/TopBarElements'
import { CgMenuRight } from 'react-icons/cg';
import { BsChevronRight } from 'react-icons/bs'

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
        IJAE.
    </NavLogo>

    <MobileNavIcon onClick={toggle}>
      <CgMenuRight />
    </MobileNavIcon>

    <NavMenu>
    <NavItem>
        <NavLinks to="aboutme"
         activeClass="active"
         spy={true}
         smooth={true}
         offset={-80}
         duration={500}
         >
        About</NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to="projects"
         activeClass="active"
         spy={true}
         smooth={true}
         offset={-80}
         duration={500}
         >
        Projects</NavLinks>
    </NavItem>
    <NavItem>
        <NavLinks to="contact"
         activeClass="active"
         spy={true}
         smooth={true}
         offset={-80}
         duration={500}
         >
        Contact</NavLinks>
    </NavItem>
    <CustomButton>
    <ButtonLink to="https://zety.com/mycv/ijeomaemeruwa" download="Ijeoma Emeruwa Resume">
        Resume <BsChevronRight />
    </ButtonLink>
    </CustomButton>
    </NavMenu>
    </NavContainer>
    </Nav>  
    </>
)
}

export default NavBar;
