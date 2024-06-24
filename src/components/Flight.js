import React from "react";
import Nav from "./Nav";

const Flight = () => {
    return (
        <>
            <Nav />
            <div className="airport-container">
                <img alt="Airport" className="img-container" src="/static/media/airport.jpeg"></img>
            </div>
        </>
    );
}

export default Flight;