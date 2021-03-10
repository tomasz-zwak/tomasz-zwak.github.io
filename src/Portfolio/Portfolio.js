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

function Portfolio() {
    const [isMenuOpen, openMenu] = useState(false);

    function toggleMenu() {
        openMenu(!isMenuOpen);
        console.log(!isMenuOpen);
    }

    return (
        <Router>
            <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div id="wrapper">
                {/* Menu button is located in Header */}
                <Header toggleMenu={toggleMenu}/> 
                <Switch>
                    <Route path="/" exact>
                        <Projects />
                    </Route>
                    <Route path="/scripts/:scriptName?">
                        <Scripts />
                    </Route>
                    <Route path="/hobbies">
                        <Hobbies />
                    </Route>
                </Switch>

                <Footer />
            </div>

            
        </Router>
    );
}
export default Portfolio;