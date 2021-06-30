import React from 'react';
import { NavLink } from 'react-router-dom';
import {motion} from "framer-motion";

const Navbar = () =>{

    const navbar_variant = {
        hidden: {
            y: '-70vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7, type: 'spring'
            }
        }
    
    }
    return ( <>
        <motion.div className="navbar"
            variants={navbar_variant}
            initial='hidden'
            animate='visible' >

                
                       <div className="nav-item">
                              <NavLink activeClassName="menu-active" className="nav-link" exact to="/">Resume</NavLink>
                        </div>
                        <div className="nav-item">
                              <NavLink activeClassName="menu-active" className="nav-link" to="/about">About</NavLink>
                        </div>
                        <div className="nav-item">
                              <NavLink activeClassName="menu-active" className="nav-link" to="/projects">projects</NavLink>
                        </div>
        </motion.div>

    </>
    );
    }
export default Navbar;