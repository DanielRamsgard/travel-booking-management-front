import Nav from "./Nav";
import Content from "./Content";
import useWindowWidth from "./useWindowWidth";
import Video from "./Video";
import React, { useState } from "react";

const Landing = () => {
    const [active, setActive] = useState(-1);
    const [animate, setAnimate] = useState(true);
    const widthBool = useWindowWidth(700);

    function updateAnimate(bool) {
        setAnimate(bool);
    }

    function updateActive(id) {
        setActive(id);
    }

    return (
        <>  
            { widthBool ?
            <>
                <div className="tint-dark"></div>
                <div className="img-slide-container">
                    <img className="video-slide" alt="Background" src="/static/media/home.png"></img>
                </div>
            </>
            : 
            <Video active={active} animate={animate} updateAnimate={updateAnimate}/> 
            }
            <Nav />
            <Content active={active} updateActive={updateActive}/>
        </>
    );
}

export default Landing;
