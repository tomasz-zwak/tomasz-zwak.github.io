import { useEffect } from 'react';
import '../../Portfolio/prism.js';
import '../../Portfolio/prism.css';

function Scripts(props) {

    
    let code = `class Message{
        constructor(template, user){
            this.template = template
            this.user = user
        }    
    }`
    
    return(
        <div id="main">
            <div className="inner">
                <h1>Scripts</h1>
                <p>Collection of my scripts that consists mostly of batch and powershell scripts that I use in my day to day job as an IT technician. 
                    <br></br>
                    Most recent of my work uses Google Apps Script.
                </p>
                <hr></hr>
                <pre className="line-numbers">
                    <code className="language-js">
                        {code}
                    </code>
                </pre>
            </div>
        </div>
    )
}
export default Scripts;