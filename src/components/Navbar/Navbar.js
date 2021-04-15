import React from 'react'
import{Nav,NavBtn,NavBtnLink,NavLink,NavMenu,Bars} from "./NavbarElments"
import img from "../../assests/AZEM.png"

const Navbar=({toggle})=> {
    return (
        <>
        <Nav>
            <NavLink to="/">
                <img src={img} style={{width:"8rem" ,height:"8rem"}}/>
            </NavLink>
            <Bars onClick={toggle}/>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/contactus" activeStyle>
                    Contact Us
                </NavLink>
                <NavLink to="/signup" activeStyle>
                    Sign Up
                </NavLink>
               <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavMenu>
            {/* <NavBtn>
                <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn> */}
        </Nav>
        </>
    )
}

export default Navbar
