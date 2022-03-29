import {React, useState} from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
    AiOutlineCode,
    AiOutlineHome,
    AiOutlineProject,
    AiOutlineUser,
} from "react-icons/ai";
import {MdOutlineContactMail} from "react-icons/md";

import '../stylesheets/navbar.css';

function NavBar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 50) {
            updateNavbar(true);
        }
        else {
            updateNavbar(false);
        }
    };

    window.addEventListener('scroll', changeNavbarColor);
    
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle = {{ backgroundColor: "black", zIndex: 50 }}
            />
            <Navbar
                expanded={expandNavbar}
                fixed="top"
                expand="md"
                className={navColour ? "sticky" : "navbar"}
            >
                <Container>
                    
                    <Navbar.Brand href="#home" className="d-flex">
                        <span className="brand-name" onClick={() => setExpandNavbar(false)}>AS</span>
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        onClick={() => {
                            setExpandNavbar(expandNavbar ? false : "expanded");
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto nav-items" defaultActiveKey="#home">
                            <Nav.Item>
                                <Nav.Link href="#home" onClick={() => setExpandNavbar(false)}>
                                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#aboutme" onClick={() => setExpandNavbar(false)}>
                                    <AiOutlineUser style={{ marginBottom: "2px" }} /> About Me
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#technologies" onClick={() => setExpandNavbar(false)}>
                                    <AiOutlineCode style={{ marginBottom: "2px" }}/> Technologies
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#projects" onClick={() => setExpandNavbar(false)}>
                                    <AiOutlineProject style={{ marginBottom: "2px" }} /> Projects
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link href="#contactme" onClick={() => setExpandNavbar(false)}>
                                    <MdOutlineContactMail style={{ marginBottom: "2px" }} /> Contact Me
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    )
}

export default NavBar
