import React, { useState } from "react";
import './Portfolio.css';
import './ministyles.css';
import {Menu, Header, Footer} from "./Components"
import {Projects, Scripts, Hobbies} from "./Pages"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ParticleBackground from "./Components/ParticleBackground";

function Portfolio() {
    const [isMenuOpen, openMenu] = useState(false);

    function toggleMenu() {
        openMenu(!isMenuOpen);
        console.log(!isMenuOpen);
    }

    return (
        <Router>
            <ParticleBackground />
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div id="wrapper">
                {/* Menu button is located in Header */}
                <Header toggleMenu={toggleMenu}/> 
                <Projects />
                <Scripts />
                <Footer />
            </div>

            
        </Router>
    );
}
export default Portfolio;