import {React, useEffect, useRef } from 'react';
import Typed from 'typed.js';

import '../stylesheets/header.css';

function Header() {
    const myName = " Anish Samant";
    const attributes = ["Blockchain Enthusiast", "3x Salesforce Certified", 
        "Software Engineer", "Full Stack Developer", "Blockchain Developer",
        "Sports Fanatic", "Foodie"
    ];
    
    useEffect(() => {
        const typed = new Typed(ele.current, {
            strings: attributes,
            startDelay: 0,
            typeSpeed: 120,
            backSpeed: 30,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: false,
            autoInsertCSS: true,
        });

        return () => {
            typed.destroy();
        }
      });
    const ele = useRef(null)

    return (
        <div className="header px-10 py-5" id="home">
            <div className="header-content row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm12">
                    <div className="d-flex flex-column justify-content-center text-section">
                        <span className="Im-text">
                            Hi There! <span className="wave">👋🏻</span>
                            <br />
                            I'm <span className="my-name">{myName}</span>
                        </span>
                        <span ref={ele} className="my-attributes py-2"></span>
                        <div className="d-flex flex-row mt-3 justify-content-center">
                            <a href="#contactme" className="btn-hire-me">Hire Me</a>
                            <a href="https://drive.google.com/file/d/1zMXyWRglxBzunVgP6_v5FaUFVxYGhbd-/view?usp=sharing" 
                                target='_blank' rel='noopener noreferrer'
                                className="btn-get-resume">Get Resume</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm12">
                    <div className="d-flex justify-content-center">
                        <img className="img-fluid custom-img" alt="my-img" src="/assets/profilePic/profilePic.jpg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
