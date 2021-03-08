import ProjectEntry from "./ProjectEntry";
import { useState } from "react";
function ProjectContainer(props) {
    const [selected, setSelected] = useState(null);

    function getProjects(params) {
        let projects = [{
            picno: 1,
            styleno: 1,
            technologies: []
        },
        {
            picno: 2,
            styleno: 2,
        },
        {
            picno: 3,
            styleno: 3,
        }];
        if (selected){
            return projects.filter(project => project.picno === selected)
        }
        return projects;
    }

    function ReturnButton(){
        let classList = "icon solid fas fa-arrow-left return-arrow" 
        if(!selected){
            classList += " invisible"
        }
        return <a className={classList} onClick={() => setSelected(null)}></a>
    }

    function select(index){
        if(!selected){
            setSelected(index)
        }
    }

    return(
        <div>
            <ReturnButton />
            <section className="tiles">
                {getProjects().map((entry, index) => (
                    <ProjectEntry picno={entry.picno} 
                    styleno={entry.styleno} 
                    onClick={() => select(index+1)}
                    selected={selected}
                    key={index} />
                    ))}
            </section>
        </div>
    )
}
export default ProjectContainer;