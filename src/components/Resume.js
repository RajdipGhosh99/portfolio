import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion'
import { tools, languages } from './data/resume_data'


const Resume = () => {

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return (
        <motion.div className="container resume"

            variants={resume_variants}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <div className="row">
                <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">EDUCATION
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            B.Tech in Computer Science Enginnering
                        </h5>
                        <p className="resume-card__name">
                            MAKAUT (2017-2021)
                        </p>
                    </div>
    
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Higher Secondary Education
                        </h5>
                        <p className="resume-card__name">
                            WBCHSE (2017)
                        </p>
                        
                    </div>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                        Secondary Education
                        </h5>
                        <p className="resume-card__name">
                            WBBSE (2015)
                        </p>
                    </div>
                </div>
                {/* <div className="col-lg-6 resume-card" >
                    <h4 className="resume-card__heading">
                        Experience
                    </h4>
                    <div className="resume-card__body">
                        <h5 className="resume-card__title">
                            Intern
                        </h5>
                        <p className="resume-card__name">
                            TCS (2020)
                        </p>
                        <p className="resume-card__details">I work as a intern in TCS and also completed some projects on testing</p>
                    </div>
                </div> */}
            </div>

            <div className="row">
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        LANGUAGE and FRAMEWORK/LIBRARIES
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            languages.map(language =>
                                <Bar value={language} />
                            )
                        }
                    </div>
                </div>
                <div className="col-lg-6 resume-languages">
                    <h5 className="reume-language__heading">
                        TOOLS and SOFTWARES
                    </h5>
                    <div className="resume-language__body mt-3">
                        {
                            tools.map(tool => <Bar value={tool} />)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;