import React from "react";

const Video = (props) => {
    const handleVideo = () => {
        if (props.active === 1 || props.active === -1) {
            return "/static/media/surfing.mp4";
        }
        else if (props.active === 2) {
            return "/static/media/waves.mp4";
        }
        else if (props.active === 3) {
            return "/static/media/caravan.mp4";
        }
        else if (props.active === 4) {
            return "/static/media/car.mp4";
        }
        else if (props.active === 5) {
            return "/static/media/road.mp4";
        } else {
            return "/static/media/waves.mp4";
        }
    }

    return (
        <>
            <video className="video-slide" src={handleVideo()} autoPlay muted loop></video>
            <div className={ props.active === 1 || props.active === 4 ? "tint-dark" : "tint"}/>
        </>
    );
}

export default Video;