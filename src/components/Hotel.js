import React from "react";
import Nav from "./Nav";
import AirportFinder from "./AirportFinderIATA";

const Hotel = () => {
    return (
        <>
            <Nav />
            <div className="spacer-2"></div>
            <AirportFinder />
            
        </>
    );
}

export default Hotel;