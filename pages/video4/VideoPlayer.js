import { wait } from "@testing-library/dom";
import React, {useState} from "react";
import ReactPlayer from "react-player";
import { withRouter } from "react-router-dom";

function VideoPlayer(props){

    const settings = {
        url: "https://youtu.be/OyDyOweu-PA",
        minInterval: 10000,
        maxInterval: 10000,
        pauseDuration: 10000,
    }
    const [playing, setPlaying] = useState(false);
    const [played, setPlayed] = useState(0);
    const [minInterval, setMinInterval] = useState(100000);
    const [maxInterval, setMaxInterval] = useState(100000);
    const [pauseDuration, setPauseDuration] = useState(100000);
    const [lastPause, setLastPause] = useState(0);
    const [url, setUrl] = useState("");

    const handleSubmit = (event) =>{
        console.log(settings)
        setUrl(settings.url)
        setMinInterval(settings.minInterval)
        setMaxInterval(settings.maxInterval)
        setPauseDuration(settings.pauseDuration)
        setPlaying(true)
    }

    const handleUrlChange = (event)=>{
        settings.url = event.target.value
    }

    const onProgress = (progress) => {
        setPlayed(progress.playedSeconds);
        const deltaTime = played - lastPause;
        const chance = (deltaTime - minInterval) / ((maxInterval - minInterval)||1);
        if(chance > Math.random()){
            console.log(lastPause);
            setLastPause(played);
            setPlaying(false);
            console.log("start")
            setTimeout(() => {

                setPlaying(true)
                console.log("finish")
            }, pauseDuration*1000);
        }
    }

    return (
        <div>
            <input onChange={handleUrlChange} type="text" placeholder="Video url" />
            <button onClick={handleSubmit}>PLAY VIDEO</button>

            <div style={{alignContent: "horizontaly"}}>

                <ReactPlayer 
                    url={url} 
                    controls={true} 
                    playing={playing}
                    onProgress={onProgress}
                />
                <iframe style = {{}} src="https://deadsimplechat.com/UVSRrOR72" width="400px" height="600px"></iframe>
            </div>
        </div>
    );
}

export default VideoPlayer;