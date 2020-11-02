import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

//   margin-top: -80px;
// height: 80px;
//  top: 0;
 //  z-index: 10;

export const Nav = styled.nav`
  background: #000;
  color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px; 
`;

export const NavLogo = styled(RouterLink)`
   color: var(--tertiary-color);
   justify-self: flex-start;
   cursor: pointer;
   display: flex;
   align-items: center;
   font-weight: bold;
   font-size: 1.3rem;
   font-family: 'Josefin Sans', sans-serif;
   text-decoration: none;
   transition: 0.8s all ease;

   &:hover{
     color: var(--tertiary-color) !important;
     text-decoration: none;
     transition: 0.8s all ease;
   }
`;

export const MobileNavIcon = styled.div `
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: #fff;
    height: 20px;
  }

&:hover {
  color: var(--tertiary-color);
}
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(ScrollLink)`
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 2px;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.4s all ease;

  &.active {
      color: var(--tertiary-color);
  }
  &:hover {
    text-decoration: none;
    color: var(--tertiary-color);
    transition: 0.4s all ease;
  }
`;

