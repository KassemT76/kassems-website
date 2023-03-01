
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../../images/cool.png';

export const Nav = styled.nav`
  background: rgb(1, 4, 54);
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  /* Third Nav */
  justify-content: flex-start; 
`;
  
export const NavLink = styled(Link)`
  color: rgb(255,255,255);
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 85px;
  cursor: pointer;
  padding-right: 20px;
  padding-left: 20px;
  &:hover {
    background: rgb(21, 24, 54);
  }
  &.active {
    color: rgb(0, 64, 191);
    background: rgb(21, 24, 54);
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -12px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  width: 100vw;
  white-space: nowrap;
  @media screen and (max-width: 200px) {
    display: none;
  }
`;
export function Icon(){
  return <img src={icon} alt="a cool icon" width="50" height = "50" style={
    {
      padding: '50px'
    }
  }/>;
}

  