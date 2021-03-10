import ProjectEntry from "./ProjectEntry";
import { useState } from "react";
function ProjectContainer(props) {
    const [selected, setSelected] = useState(null);

    function getProjects(params) {
        let projects = [{
            pics: [
                "item1.png",
                "item2.png",
                "item3.png",
                "item4.png",
                "item5.png"],
            styleno: 1,
            content:{
                title: "ITEM",
                shortDesc: "Automatic template generation and service integration.",
                tech:["Java", "Maven", "Postgres"],
                description: <Item />
            }
        },
        {
            pics: [
                "ior1.png",
                "ior2.png",
                "ior3.png",
                "ior4.png"],
            styleno: 2,
            content:{
                title: "ITEM on rails",
                shortDesc: "Web implementation of ITEM with several enhancements.",
                tech:["Ruby on rails", "Postgres"],
                description: <ItemOnRails />
            }
        },
        {
            pics: ["safeaddress1.png", "safeaddress2.png"],
            styleno: 3,
            content:{
                title: "Safe_Address",
                shortDesc: "Additional safety in Outlook.",
                tech:["C#", "VSTO"],
                description: <SafeAddress />
            }
        }];
        if (selected){
            return projects.filter((project, index) => index+1 === selected)
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
                    <ProjectEntry pics={entry.pics} 
                        styleno={entry.styleno} 
                        title={entry.content.title}
                        shortDesc={entry.content.shortDesc}
                        tech={entry.content.tech}
                        onClick={() => select(index+1)}
                        selected={selected}
                        key={index}>
                            {entry.content.description}
                    </ProjectEntry>
                    ))}
            </section>
        </div>
    )
}

function Item(props) {
    return(
        <section>
            <p>
                Item is a Java-based desktop application which was created to automate several repetitive tasks at my current job.<br></br>
            </p>
            <h3>Features</h3>
            <ul>
                <li>Define your own custom templates for:</li>
                <ul>
                    <li>Emails</li>
                    <li>Email signatures</li>
                    <li>SMS (uses SMSAPI)</li>
                </ul>
                <li>Synchronize User data from LDAP</li>
                <li>Automaticaly generate user-specific email message or signature</li>
                <li>Send user-specific emails</li>
            </ul>
            <p>To learn more about this project visit it's Github page.</p>
            <p>
                <a href="https://github.com/ttzv/ITem">
                    <button className="primary ">
                        <i className="icon brands fa-github"></i>
                        Github
                    </button>
                </a>
            </p>
            <button className="primary">
                <i className="fas fa-download"></i>
                Download
            </button>
        </section>
    )
}

function ItemOnRails(props) {
    return (
        <section>
            <p>
                Web implementation of my Java project with the same name with several direct improvements.<br></br>
                Built using Ruby on Rails framework, hence the name - "Item on Rails".
                <br></br>
            </p>
            <h3>Features</h3>
            In addition to automatic message generation it is now possible to:
            <ul>
                <li>
                    Define your own variable fields and set-up their behavior such as:
                    <ul>
                        <li>Which user-specific attribute should be inserted in template</li>
                        <li>Optionally apply a "mask" to attribute to customize it further</li>
                        <li>Whether generated variable should be stored in database for later inspection</li>
                    </ul>
                </li>
                <li>Select multiple Users at once and automatically generate personalized template for each of them.</li>
                <li>OAuth login and Gmail API integration (not available in previev version due to Google limitations)</li>
            </ul>
            <p>To learn more about this project visit it's Github page.</p>
            <p>
                <a href="https://github.com/ttzv/item_on_rails">
                    <button className="primary ">
                        <i className="icon brands fa-github"></i>
                        Github
                    </button>
                </a>
            </p>
            <button className="primary">
                <i className="fas fa-download"></i>
                Live preview
            </button>
        </section>
    )
}

function SafeAddress(props) {
    return(
        <section>
            <p>
                SafeAddress is a free, open source Microsoft Outlook plugin which purpose is to show a warning whenever your message contains recipients from outside your domain.
            </p>
            <h3>Features</h3>
            <ul>
                <li>Show warning when your email contains external recipients</li>
                <li>Configure safe domains</li>
            </ul>
            <p>To learn more about this project visit it's Github page.</p>
            <p>
                <a href="https://github.com/ttzv/SafeAddress">
                    <button className="primary ">
                        <i className="icon brands fa-github"></i>
                        Github
                    </button>
                </a>
            </p>
            <button className="primary">
                <i className="fas fa-download"></i>
                Download
            </button>
        </section>
    )
}
export default ProjectContainer;