import { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import { getByText } from '@testing-library/react';


function Scripts(props) {
    const [scripts, setScripts] = useState('');
    let { scriptName } = useParams();
    
    function getCode(){
        let url = "https://raw.githubusercontent.com/ttzv-training-repos/item/master/app/assets/javascripts/logic/PasswordGenerator.js"
        fetch(url).then(r => r.text())
        .then(setScripts);
    }

    useEffect(()=>{
        if(scripts.length === 0){
            getFiles(scriptName).then(response => response.json())
            .then(setScripts)
        }
    },[])

    async function getFiles(gitFolder){
        return await fetch(`https://api.github.com/repos/ttzv/Scripts/contents/${gitFolder}`)
    }

    function buildTabs(data){
        if(data){
            return(
                scripts.map(script => (
                    <Tab>{script.name}</Tab>
                ))
            )
        } else {
            return '';
        }
    }

    function buildTabPanels(data){
        if(data){
            return(
                scripts.map(script => (
                    <TabPanel>
                        <Code language={getExt(script.name)}
                            downloadUrl={script.download_url}/>
                    </TabPanel>
                ))
            )
        } else {
            return '';
        }
    }

    function getExt(fileName){
        const ext = fileName.split(".").pop();
        switch (ext) {
            case "bat":
                return "batch";
            case "ps1":
                return "powershell";
            case "gs":
                return "javascript";
            case "js":
                return "javascript";
            default:
                break;
        }
    }
    const title = (scriptName ? scriptName : "Scripts");
    return(
        <div id="main">
            <div className="inner">
                <h1>{title}</h1>
                <p>Collection of my scripts that consists mostly of batch and powershell scripts that I use in my day to day job as an IT technician. 
                    <br></br>
                    Most recent of my work uses Google Apps Script.
                </p>
                <hr></hr>
                <Tabs>
                    <TabList>
                       {buildTabs(scripts)}
                    </TabList>
                    {buildTabPanels(scripts)}
                </Tabs>
                
            </div>
        </div>
    )
}
export default Scripts;

function Code(props) {
    const {language, downloadUrl} = props;
    const [code, setCode] = useState('');

    useEffect(() => {
        if(downloadUrl){
            fetch(downloadUrl).then(response =>{
                if(response.ok){
                    response.text()
                    .then(setCode);
                }
            })
        }
    },'')

    return(
        <SyntaxHighlighter language={language} showLineNumbers={true} style={tomorrowNight}>
            {code}
        </SyntaxHighlighter>
    )
}