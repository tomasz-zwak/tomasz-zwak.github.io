import { useEffect, useState } from "react";

function ProjectEntry(props){
    const {picno, styleno, selected} = props;



    function Tile(){
        return (<article onClick={props.onClick}>
            <span className="image">
                <img src={`images/pic0${picno}.jpg`} alt="" />
            </span>
            <a>
                <h2>Title</h2>
                <div className="content">
                    <p>ShortDescription</p>
                </div>
            </a>
        </article>)
    }

    function Expanded(){
        return (
            <div className="showing">
                <article onClick={props.onClick}>
                    <span className="image">
                        <img src={`images/pic0${picno}.jpg`} alt="" />
                    </span>
                </article>
                <div className="last">
                    <h2>
                        Item
                        <div>
                            <span className="tech-pill">Java</span>
                            <span className="tech-pill">C#</span>
                            <span className="tech-pill">MySQL</span>
                            <span className="tech-pill">Java</span>
                        </div>
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        )
    }

    function getProject(){
        if(selected){
            return <Expanded />
        } else{
            return <Tile />
        }
    }
        
    return (
        getProject()
    )
}
export default ProjectEntry;
