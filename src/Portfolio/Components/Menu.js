import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Menu(props){
    const {isOpen, toggleMenu} = props;
    useEffect(() =>{
        if(isOpen){
            open()           
        } else {
            close()
        }
    });

    function open() {
        document.body.classList.add('is-menu-visible');
    }

    function close() {
        document.body.classList.remove('is-menu-visible');
    }

    return(
        <nav id="menu">
            <div className="inner">
                <h2></h2>
                <ul>
                    <li>
                        <Link to="/" onClick={toggleMenu}>Projects</Link>
                    </li>
                    <li>
                        <Link to="/scripts" onClick={toggleMenu}>Scripts</Link>
                    </li>
                    <li>
                        <Link to="/hobbies" onClick={toggleMenu}>Hobbies & interests</Link>
                    </li>
                </ul>
            </div>
            <a className="close" href="#menu" onClick={toggleMenu}>Close</a>
        </nav>
    );
}
export default Menu;