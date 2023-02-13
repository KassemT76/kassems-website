import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from './NavElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to ='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to ='/home' activeStyle>
                        Home
                    </NavLink>
                </NavMenu>
                
            </Nav>
        </>
    );
};

export default Navbar