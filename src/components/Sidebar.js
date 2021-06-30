import React from 'react'
import github from '../assets/icons/github.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import resume from '../assets/resume.pdf'
import { motion } from 'framer-motion'

const Sidebar = () => {
    const handleEmailMe = () => {
        window.open("mailto:raazdeepghosh@gmail.com")
    }
    const sidebar_variant = {
        hidden: {
            x: '-20vw',

        },
        visible: {
            x: 0,

            transition: {
                delay: 0.1, duration: 0.5, type: 'spring'
            }
        }
    }


    return (
        <motion.div className="sidebar"
            variants={sidebar_variant}
            initial='hidden'
            animate="visible"

        >
            <img src='/434.png' alt="avatar" className="sidebar__avatar" />
            <div className="sidebar__name">Rajdip Ghosh<span></span> </div>
            <div className="sidebar__item sidebar__title"> <p style={{fontSize:".9rem"}}>STUDENT|DEVELOPER|LEARNER</p> </div>
            <a href={resume} download="resume.pdf">
                <div className="sidebar__item sidebar__resume">
                    <img src={tie} alt="resume" className="sidebar__icon" />Download Resume
                </div>
            </a>
            <figure className="sidebar__social-icons my-2">
                <a href="https://www.facebook.com/ghosh.raazdeep/"><img src="/icons8-facebook.svg" alt="facebook" className="sidebar-fb mr-3" /></a>
                <a href="https://www.linkedin.com/in/raazdeep/"><img src="icons8-linkedin.svg" alt="linkedin" className="sidebar-in" /></a>
                <a href="https://join.skype.com/invite/vwzhFVmemmrl"><img src="/icons8-skype.svg" alt="Skype" className="sidebar__icon" /></a>
            </figure>
            <div className="sidebar__contact">
                <div className="sidebar__item sidebar__github">
                    <a href="https://github.com/RajdipGhosh99"><img src={github} alt="github" className="sidebar__icon mr-3" />github</a>
                </div>
                <div className="sidebar__location">
                    <img src={pin} alt="location" className="sidebar__icon mr-3" />
                    Kolkata, India</div>
                <div className="sidebar__item">raazdeepghosh@gmail.com</div>
            </div>
            <div className="sidebar__item sidebar__email" onClick={handleEmailMe}>email me</div>
        </motion.div>
    )
}

export default Sidebar;