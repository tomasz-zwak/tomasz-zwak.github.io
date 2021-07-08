import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Tree from './Tree'

function Menu(props) {
    const { isOpen, toggleMenu } = props;
    const [githubScriptList, setGithubScriptList] = useState(null);

    useEffect(() => {
        if (isOpen) {
            open()
        } else {
            close()
        }
        if (!githubScriptList) {
            getGithubScripts();
        }
    }, [isOpen]);

    function open() {
        document.body.classList.add('is-menu-visible');
    }

    function close() {
        document.body.classList.remove('is-menu-visible');
    }

    function getGithubScripts() {
        const repo = "https://api.github.com/repos/ttzv/Scripts/contents"
        fetch(repo).then(response => response.json())
            .then(json => {
                const data = json.filter(j => j.type === "dir").map(j => j.name)
                setGithubScriptList(data);
            })
    }

    function buildTree(data) {
        if (!data) return null;
        return data.map(element => (
            <li>
                <Link to={`/scripts/${element}`} onClick={toggleMenu}>{element}</Link>
            </li>
        ));
    }

    return (
        <nav id="menu">
            <div className="inner">
                <ul>
                    <li>
                        <Link to="/" onClick={toggleMenu}>Projects</Link>
                    </li>
                    <li>
                        <Tree header={<Link to="/scripts"
                            onClick={toggleMenu}> Scripts</Link>}>
                            {buildTree(githubScriptList)}
                        </Tree>
                    </li>
                    <li>
                        <Link to="/hobbies" onClick={toggleMenu}>Hobbies & interests</Link>
                    </li>
                </ul>
            </div>
            <a className="close" onClick={toggleMenu}>Close</a>
        </nav>
    );
}
export default Menu;