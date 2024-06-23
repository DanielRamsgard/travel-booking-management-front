import React from "react";

const Video = () => {
    return (
        <>
            <video className="video-slide" src="/static/media/caravan.mp4" autoPlay muted loop></video>
            <div className="tint"/>
        </>
    );
}

export default Video;