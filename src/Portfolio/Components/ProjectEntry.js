import { useEffect, useState } from "react";
import Carousel from "./Carousel";

function ProjectEntry(props){
    const {pics, 
        styleno, 
        title, 
        shortDesc, 
        tech, 
        onClick, 
        selected,
        children} = props;

    function Tile(){
        return (<article onClick={onClick}>
            <span className="image">
                <img src={`images/${pics[0]}`} alt="" />
            </span>
            <a>
                <h2>{title}</h2>
                <div className="content">
                    <p>{shortDesc}</p>
                </div>
            </a>
        </article>)
    }

    function createTechPills(){
       return tech.map((tech_el, index) => <span className="tech-pill" key={index}>{tech_el}</span>);
    }


    function Expanded(){
        return (
            <div className="showing">
                <article>
                    <Carousel>
                        {pics.map(pic => (
                            <img src={`images/${pic}`}/>
                        ))}
                    </Carousel>
                </article>
                <div className="last">
                    <h2>
                        {title}
                        <div>
                            {createTechPills()}
                        </div>
                    </h2>
                    {children}
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
