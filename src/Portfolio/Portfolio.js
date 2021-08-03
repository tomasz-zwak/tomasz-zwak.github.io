import React, { useState } from "react";
import './Portfolio.css';
import './ministyles.css';
import {Menu, Header, Footer} from "./Components"
import {Projects, Scripts} from "./Pages"
import { Element } from "react-scroll";
import ParticleBackground from "./Components/ParticleBackground";
import ButtonScrollTop from "./Components/ButtonScrollTop";
import LandingContainer from "./Components/LandingContainer";

function Portfolio() {
    const [isMenuOpen, openMenu] = useState(false);

    function toggleMenu() {
        openMenu(!isMenuOpen);
        console.log(!isMenuOpen);
    }
    return (
        <div>
            <ParticleBackground />
            <ButtonScrollTop />
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div id="wrapper">
                <Header toggleMenu={toggleMenu}/> 
                <div id="main">
                    <div className="inner" id="landing">
                        <header>
                            <h1>Hello!</h1>
                        </header>   
                        <LandingContainer />
                    </div>
                    <div className="inner" id="projects" name="projects">
                        <header>
                            <h1>My projects</h1>
                        </header>
                        <Projects />               
                    </div>
                    <div className="inner" id="scripts">
                        <header>
                            <h1>Scripts</h1>
                        </header>
                        <Scripts />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
export default Portfolio;