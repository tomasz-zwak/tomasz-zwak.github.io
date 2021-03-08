import React, {useEffect} from 'react';

function Menu(props){
    const {isOpen, handleToggle} = props;
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
                    <li><a href="index.html">Projects</a></li>
                    <li><a href="generic.html">Scripts</a></li>
                    <li><a href="generic.html">Hobbies & Interests</a></li>
                </ul>
            </div>
            <a className="close" href="#menu" onClick={handleToggle}>Close</a>
        </nav>
    );
}
export default Menu;