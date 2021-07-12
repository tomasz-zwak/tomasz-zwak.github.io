import { useState, useEffect } from "react";

const useGithubScriptList = () => {
    const [scriptList, setScriptList] = useState(null);
    useEffect(() => {
        if(!scriptList){
            getGithubScripts();
        }
    })

    function getGithubScripts() {
        const repo = "https://api.github.com/repos/ttzv/Scripts/contents"
        fetch(repo).then(response => response.json())
            .then(json => {
                const data = json.filter(j => j.type === "dir").map(j => j.name)
                setScriptList(data);
            })
    };

    return scriptList;
}

export default useGithubScriptList;