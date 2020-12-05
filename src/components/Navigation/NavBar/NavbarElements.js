
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Nav = styled.nav `
  background: #fefefe;
  height: 80px;
//   margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px; 
`;

export const NavLogo = styled(Link)`
   justify-self: flex-start;
   cursor: pointer;
   display: flex;
   align-items: center;
   margin-left: 24px;
   text-decoration: none;
   transition: 0.8s all ease;

   &:hover {
    text-decoration: none; 
   }

`;

export const MobileIcon = styled.div `
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: var(--dark-color);
    height: 20px; 
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  color: #325466;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-decoration: none;
  padding: 1rem 1rem 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 0.4s all ease;

  &:hover {
    text-decoration: none;
    transition: 0.4s all ease;
    color: #000;
    width: 100%;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
}
`;

export const BlogLink = styled.a`
color: var(--dark-color);
display: flex;
align-items: center;
font-size: 1.2rem;
font-weight: 500;
letter-spacing: 2px;
text-decoration: none;
padding: 1rem 1rem 0 1rem;
height: 100%;
cursor: pointer;
transition: 0.4s all ease;

&:hover {
  text-decoration: none;
  transition: 0.4s all ease;
  color: #000;
}
`;

export const BtnLink = styled.a`
   border: none;
   background: var(--dark-color);
   color: #fefefe;
   padding: 10px 25px;
   font-size: 1.2rem;
  font-weight: 500;
   letter-spacing: 2px;
   cursor: pointer;
   text-decoration: none;
   transition: 0.4s all ease;

   &:hover {
       background: #000;
       color: #fefefe;
       text-decoration: none;
       transition: 0.4s all ease;
   }

`;