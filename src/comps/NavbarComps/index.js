import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    Icon,
} from './NavElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                <Icon />
                    <NavLink to ='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to ='/' activeStyle>
                        Home
                    </NavLink>
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar