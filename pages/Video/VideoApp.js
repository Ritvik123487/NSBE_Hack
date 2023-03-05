import React, { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";
import "./index.css"

function VideoApp() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="App" style={{ height: "100%" }}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (

        <div className = "button1">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setInCall(true)}
          >
            Join Call
          </Button>
        </div>
      )}
    </div>
  );
}

export default VideoApp;
