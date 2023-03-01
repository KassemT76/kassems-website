import React from "react";
import {
    Nav,
    NavLink,
    NavMenu,
    Icon,
} from './NavElements'

const Navbar = () => {
    return (
        <>
            <Nav>
            <Icon />
                <NavMenu>
                
                    <NavLink to ='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to ='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to ='/project' activeStyle>
                        Project Gallery
                    </NavLink>
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar