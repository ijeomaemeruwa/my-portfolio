import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

export const TopBarContainer = styled.div`
 position: fixed; 
 height: 100%;
 width: 100%;
 z-index: 999; 
 left: 0;
 top: 0;
 display: grid;
 align-items: center;
 background: var(--tertiary-color);
 overflow-x: hidden; 
 transition: 0.5s ease-in-out; 
 opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(MdClose)`
  color: var(--accent-color);

  &.hover {
    color: #101010;
}
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
`;

export const TopBarWrapper = styled.div `
  color: #feefea;
`

export const TopBarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(6, 100px);
 text-align: center;
 padding: 4rem 2rem;
 text-decoration: none;


 @media screen and (max-width: 480px) {
  grid-template-rows: repeat(6, 80px);
 }
`;

export const TopBarLink = styled(ScrollLink) `
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 4rem;
 text-decoration: none !important;
 list-style: none;
 transition: 0.4s ease-in-out;
 color: #101010;
 cursor: pointer;

 &:hover {
   color: #fff !important;
   transition: 0.4s ease-in-out;
 }

 @media screen and (max-width: 786px) {
   font-size: 2rem;
 }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ContactLink = styled(RouterLink) `
  padding: 1rem;
  font-size: 2rem;
  color: #1f1f1f !important;
  text-decoration: none !important;
  transition: 0.4s ease-in-out;

  &:hover {
  color: #fff !important;
  transition: 0.4s ease-in-out;
  }

  @media screen and (max-width: 786px) {
    padding: 0 0.6rem;
    font-size: 1.5rem;
  }
`;


export const CustomButton = styled.div`
  padding: 1.5rem;
`;

export const TopNavButton = styled(RouterLink)`
 border: none;
 outline: none;
 padding: 0.6rem 2rem;
 background: #000;
 color: #feefea !important;
 text-decoration: none !important;
 transition: 0.4s ease-in-out;
 letter-spacing: 2px;
 text-align: center;
 font-size: 1.2rem;
 font-weight: 400;

 &:hover {
  background: #1f1f1f !important;
  border: none;
  transition: 0.4s ease-in-out;  
}
`;

export const ButtonLink = styled(RouterLink)`
  border: 2px solid var(--tertiary-color);
  outline: none;
  padding: 0.6rem 2rem;
  background: transparent;
  color: var(--tertiary-color) !important;
  text-decoration: none !important;
  transition: 0.4s ease-in-out;
  letter-spacing: 2px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;

  &:hover {
    background: var(--tertiary-color);
    color: #000 !important;
    border: none;
    transition: 0.4s ease-in-out;  
  }

`;

//Scroll Buttons

export const ScrollButton = styled(ScrollLink)`
  border: 2px solid var(--tertiary-color);
  outline: none;
  padding: 0.6rem 2rem;
  background: transparent;
  color: var(--tertiary-color) !important;
  text-decoration: none !important;
  transition: 0.4s ease-in-out;
  letter-spacing: 2px;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;

  &:hover {
    background: var(--tertiary-color);
    color: #000 !important;
    border: none;
    transition: 0.4s ease-in-out;  
  }

`;