import React from "react";

const Video = (props) => {
    const handleVideo = () => {
        if (props.active === 1 || props.active === -1) {
            return "/static/media/waves.mp4";
        }
        else if (props.active === 2) {
            return "/static/media/surfing.mp4";
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
            return "/static/media/surfing.mp4";
        }
    }

    return (
        <>
            {(props.active === 1)&& (
                <div className="video-animation"/>
            )}
            {(props.active === 2)&& (
                <div className="video-animation"/>
            )}
            {(props.active === 3)&& (
                <div className="video-animation"/>
            )}
            {(props.active === 4)&& (
                <div className="video-animation"/>
            )}
            {(props.active === 5)&& (
                <div className="video-animation"/>
            )}
            <video className="video-slide" src={handleVideo()} autoPlay muted loop playsinline></video>
            <div className={ props.active === 2 || props.active === 4 || props.active === -1 ? "tint-dark" : "tint"}/>
        </>
    );
}

export default Video;