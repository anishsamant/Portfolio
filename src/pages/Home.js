import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import AboutMe from '../components/AboutMe';
import ContactMe from '../components/ContactMe';

function Home() {
    return (
        <div> 
            <NavBar />
            <Header />
            <AboutMe />
            <Technologies />
            <Projects />
            <ContactMe />
        </div>
    )
}

export default Home