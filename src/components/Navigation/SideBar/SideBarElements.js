import styled from 'styled-components'
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: var(--dark-color);
  display: grid;
  align-items: center;
  overflow-x: hidden;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(GrClose)`
  background: #feefea;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
 
`;

export const MenuWrapper = styled.div`
   color: #feefea;
`;

export const MobileMenu = styled.ul`
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows repeat(6, 100px);
   text-align: center;
   padding: 4rem 0;

   @media screen and (max-width: 480px){
    grid-template-rows repeat(6, 80px);
   }
  
`;

export const MobileLink = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   letter-spacing: 1px;
   font-weight: 600;
   text-decoration: none;
   list-style none;
   color: #eed3be;
   cursor: pointer;
   transition: 0.4s all ease;


   &:hover {
       color: #fefefe;
       text-decoration: none;
       transition: 0.4s all ease;
   }
`;

export const MobileBlogLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
letter-spacing: 1px;
font-weight: 600;
text-decoration: none;
list-style none;
color: #eed3be;
cursor: pointer;
transition: 0.4s all ease;


&:hover {
    color: #fefefe;
    text-decoration: none;
    transition: 0.4s all ease;
}
`;

export const SocialContact = styled.div`
   display: flex;
   justify-content: center;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  padding: 0 1rem;
  color: #feefea;
  font-size: 1.5rem;

  &:hover {
    color: #feefea; 
  }
`;

export const MobileBtnWrap = styled.div`
 padding: 1rem 0;
 margin: 0 auto;

`;

export const SideNavButton = styled.nav`
  display: flex;
  align-items: center;
`;


export const ResumeLink = styled.a`
border: none;
background: #eed3be;
color: var(--dark-color);
padding: 10px 25px;
margin-top: 1rem;
font-size: 1.2rem;
font-weight: 600;
letter-spacing: 2px;
cursor: pointer;
text-decoration: none;
transition: 0.4s all ease;

&:hover {
  background: #000;
  color: #eed3be;
  text-decoration: none;
  transition: 0.4s all ease;
}
`;