import React, { useState } from "react";
import './Portfolio.css';
import './ministyles.css';
import {Menu, Header, Footer} from "./Components"
import {Projects, Scripts} from "./Pages"
import ParticleBackground from "./Components/ParticleBackground";
import {Link , animateScroll} from "react-scroll";
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
                            <h1>Hello</h1>
                            <LandingContainer />
                        </header>   
                        <div>
                            <Link to="projects" className="button"
                                smooth={true}
                                offset={-20}
                                duration={500}>Projects</Link>         
                            <Link to="scripts" className="button"
                                smooth={true}
                                offset={-20}
                                duration={500}>Scripts</Link>
                        </div>
                    </div>
                    <div className="inner" id="projects">
                        <header>
                            <h1>My projects</h1>
                            <p>Text</p>
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