import Nav from "./components/Nav";
import Content from "./components/Content";
import Video from "./components/Video";
import React, { useState } from "react";

function App() {
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

export default App;
