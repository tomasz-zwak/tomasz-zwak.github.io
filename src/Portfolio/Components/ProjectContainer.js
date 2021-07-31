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
                tech:["JavaFX", "Maven", "Hibernate", "Postgres", "H2", "JPMS"],
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
        },
        {
            pics: [
                "pdfadp1.png",
                "pdfadp2.png"
                ],
            styleno: 2,
            content:{
                title: "PDFADP",
                shortDesc: "Add description page to PDF.",
                tech:["JavaFX", "Maven", "JPMS"],
                description: <PDFADP />
            }
        },
        {
            pics: [
                "ae1.png",
                "ae2.png"
                ],
            styleno: 2,
            content:{
                title: "Attachment Encrypt",
                shortDesc: "Encrypt files and send pasword via SMS",
                tech:["C#", "WinForms", "SMSAPI"],
                description: <AttachmentEncrypt />
            }
        },
        {
            pics: [
                "portfolio1.png"
                ],
            styleno: 2,
            content:{
                title: "Portfolio",
                shortDesc: "My personal portfolio page",
                tech:["React", "Github API"],
                description: <Portfolio />
            }
        },
        {
            pics: [
                
                ],
            styleno: 2,
            content:{
                title: "EMS",
                shortDesc: "Employee Management System",
                tech:["Java", "Spring Boot", "Hibernate", "React"],
                description: <EMS />
            }
        },
        {
            pics: [
                "aform1.png"
                ],
            styleno: 2,
            content:{
                title: "Applicaton Form",
                shortDesc: "Simple Web form to collect customer complaints.",
                tech:["React", "Google Web Apps", "Firebase"],
                description: <ApplicationForm />
            }
        }
    ];
        if (selected){
            return projects.filter((project, index) => index+1 === selected)
        }
        return projects;
    }

    function ReturnButton(){
        let classList = "icon solid fas fa-arrow-left return-arrow button" 
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
            <br></br>
            <div className="project-buttons-row">
                <a className="button" href="https://github.com/ttzv/ITem">
                    <i className="icon brands fa-github"></i>
                    Github
                </a>
                <a className="button" href="https://github.com/ttzv/ITem/releases/download/1.0/ITem.7z">
                    <i className="fas fa-download"></i>
                    Download
                </a>
            </div>
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
            <br></br>
            <div className="project-buttons-row">
                <a href="https://github.com/ttzv/item_on_rails">
                    <button className="primary ">
                        <i className="icon brands fa-github"></i>
                        Github
                    </button>
                </a>
                <a href="https://item-on-rails.herokuapp.com/">
                    <button className="primary">
                        <i class="fas fa-globe"></i>
                        Live preview
                    </button>
                </a>
            </div>
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
            <br></br>
            <div className="project-buttons-row">
                <a className="button" href="https://github.com/ttzv/SafeAddress">
                    <i className="icon brands fa-github"></i>
                    Github
                </a>
                <a className="button" href="https://github.com/ttzv/SafeAddress/releases/download/v0.24/SafeAddress.msi">
                    <i className="fas fa-download"></i>
                    Download
                </a>
            </div>
        </section>
    )
}

function PDFADP(props) {
    return(
        <section>
            <p>
                A small JavaFX application that adds one additional page with your desired text to any selected PDF.
                <br></br>
                <br></br>
                Built to speed up the process of adding descriptions to PDF invoices which are later inspected by accounting department. 
            </p>
                <div className="row">
                    <a className="button" href="https://github.com/ttzv/PDFAddDescPage">
                        <i className="icon brands fa-github"></i>
                        Github
                    </a>
                    <a className="button" href="https://github.com/ttzv/PDFAddDescPage/releases/download/v0.1/pdfadp.zip">
                        <i className="fas fa-download"></i>
                        Download
                    </a>
                </div>
            
        </section>)
}

function AttachmentEncrypt(props) {
    return(
        <section>
            <p>
            Application that automates the process of generating password-protected archives and sending the password to the recipient.
            <br></br>
            Developed by me and my work colleague <a href="https://github.com/DominikBulandra">Dominik</a>
            <br></br><br></br>
            This is an in-house solution to satisfy a demand to increase security of attachments sent to customers.
            </p>
            <div className="project-buttons-row">
                <a className="button" href="https://github.com/ttzv/AttachmentEncrypt">
                    <i className="icon brands fa-github"></i>
                    Github
                </a>
                <a className="button" href="https://github.com/ttzv/PDFAddDescPage/releases/download/v0.1/pdfadp.zip">
                    <i className="fas fa-download"></i>
                    Download
                </a>
            </div>
        </section>)
}

function Portfolio(props) {
    return(
        <section>
            <p>
                The page you are currently on.<br></br><br></br>
                I bootstrapped it with create-react-app and used several React libraries to make it look and work nicely.<br></br><br></br>
                This page also uses Github API which queries my Scripts repository and creates dynamic content based on README.md and files in the repo.  
                Any new script pushed to github repository will be immediately visible on my website.<br></br>
                List of libraries used:
                <ul>
                    <li>
                        <a href="https://react-spring.io/">React Spring</a>
                    </li>
                    <li>
                        <a href="https://github.com/react-syntax-highlighter/react-syntax-highlighter">React Syntax Highlighter</a>
                    </li>
                    <li>
                        <a href="https://github.com/matteobruni/tsparticles">React tsParticles</a>
                    </li>
                    <li>
                        <a href="https://github.com/reactjs/react-tabs">react-tabs</a>
                    </li>
                    <li>
                        <a href="https://github.com/remarkjs/react-markdown">react-markdown</a>
                    </li>
                </ul>

            </p>
            <div className="row">
                <a className="button" href="https://github.com/tomasz-zwak/portfolio">
                    <i className="icon brands fa-github"></i>
                    Github
                </a>
            </div>
        </section>)
}

function EMS(props) {
    return(
        <section>
            <p>
                Web application that I'm building right now for my current employer.
                <br></br>
                Among many other things the main features that I want to implement are:
                <ul>
                    <li>Holiday management system</li>
                    <li>Admin interface that will allow to:
                        <ul>
                            <li>Create new user in AD</li>
                            <li>Create G Suite account for said user</li>
                            <li>Send welcome messages, generate signatures</li>
                            <li>Integrate with as many internally used company software as possible</li>
                        </ul>
                    </li>
                    <li>Authorization and authentication using Google OAuth</li>
                    <li>Reimplement AttachmentEncrypt as a web service</li>
                    <li>Implement functionalities of ITem</li>
                    <li>Provide internal API for variety of applications</li>
                </ul>
            </p>
        </section>)
}

function ApplicationForm(props) {
    return(
        <section>
            <p>
                A web form that was built by me and my colleague <a href="https://github.com/DominikBulandra">Dominik</a><br></br>
                It's purpose is to provide an easy way for customers to report a defect and request a service.
                It also stores all submissions in a organized worksheet which improves the workflow.
                <br></br>
                <br></br>
                Form submission sends data to Google Web App backend which then stores it in a worksheet.
                <br></br>
                <br></br>
                Attached files are uploaded to Firebase storage and direct links are sent along with form data.
                <br></br>
                <br></br>
                Using React for such a simple web form might've been an overkill but it allowed us to learn more about bootstrapping the project with create-react-app, handling forms, making API calls and building the project to host it on Apache server.<br></br>
                By working on it together with my colleague we've also learned how to collaborate on a project using git and Github. 

            </p>
                <div className="project-buttons-row">
                    <a className="button" href="https://www.serwis.atal.pl">
                        <i class="fas fa-globe"></i>
                        Live
                    </a>
                </div>
        </section>)
}

export default ProjectContainer;