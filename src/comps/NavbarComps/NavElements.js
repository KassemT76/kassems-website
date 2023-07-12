
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../../images/icon.svg';

export const Nav = styled.nav`
  background: rgb(1, 4, 54);
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  /* Third Nav */
  justify-content: flex-start; 
  border-bottom: 2px solid white;
`;
  
export const NavLink = styled(Link)`
  color: rgb(255,255,255);
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 85px;
  width: 100%;
  cursor: pointer;
  padding-right: 20px;
  padding-left: 20px;
  &:hover {
    background: rgb(21, 24, 54);
  }
  &.active {
    color: rgb(200, 200, 255);
    background: #483f6d;
  }
  text-align: center;
  border: 2px solid white;
  transition: all 0.5s ease-in;
`;
  
export const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  width: 100%;
  white-space: nowrap;
  @media screen and (max-width: 200px) {
    display: none;
  }
`;
export function Icon(){
  return <img src={icon} alt="a cool icon" width="250" height = "150" style={
    {
      padding: '10px'
    }
  }/>;
}

  