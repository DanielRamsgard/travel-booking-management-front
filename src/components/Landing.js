import Nav from "./Nav";
import Content from "./Content";
import Video from "./Video";
import React, { useState } from "react";

const Landing = () => {
    const [active, setActive] = useState(-1);
    const [animate, setAnimate] = useState(true);

    function updateAnimate(bool) {
        setAnimate(bool);
    }

    function updateActive(id) {
        setActive(id);
    }

    return (
        <>
            <Video active={active} animate={animate} updateAnimate={updateAnimate}/>
            <Nav />
            <Content active={active} updateActive={updateActive}/>
        </>
    );
}

export default Landing;
