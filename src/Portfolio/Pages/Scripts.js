import { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { getByText } from '@testing-library/react';


function Scripts(props) {
    const [scripts, setScripts] = useState([]);
    let { scriptName } = useParams();

    useEffect(()=>{
        getFiles(scriptName).then(response => response.json())
        .then()
    }, [scriptName])

    async function getFiles(gitFolder){
        return await fetch(`https://api.github.com/repos/ttzv/Scripts/contents/${gitFolder}`)
    }

    async function getContents(json){
        return Promise.all(json.map(j => j.download_url));
    }

    function buildTabs(data){
        if(data){
            return(
                scripts.map(script => (
                    <Tab>{script.name}</Tab>
                ))
            )
        } else {
            return null;
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
                return null;
        }
    }

    function getDescription(){
        if(scripts){
            let readme = scripts.find(script => script.name === "README.md");
            return readme.download_url
        }
    }
    const title = (scriptName ? scriptName : "Scripts");
    return(
        <div id="main">
            <div className="inner">
                <h1>{title}</h1>
                {/* <p><MarkdownSection url={getDescription()} /></p> */}
                <hr></hr>
                <Tabs>
                    <TabList>
                       {/* {buildTabs(scripts)} */}
                    </TabList>
                    {/* {buildTabPanels(scripts)} */}
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
    },[downloadUrl])

    return(
        <SyntaxHighlighter language={language} showLineNumbers={true} style={tomorrowNight}>
            {code}
        </SyntaxHighlighter>
    )
}

function MarkdownSection(props){
    const {url, content} = props;
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        if(url){
            fetch(url).then(response =>{
                if(response.ok){
                    response.text()
                    .then(setMarkdown);
                }
            })
        } else {
            setMarkdown(content);
        }
    },[url, content])

    return(
        <ReactMarkdown>
            {markdown}
        </ReactMarkdown>
    )
}