import React from "react";
import Nav from "./Nav";

const Flight = () => {
    return (
        <>
            <Nav />
            <div className="airport-container">
                <img alt="Airport" className="img-container" src="/static/media/airport.jpeg"></img>
            </div>
            <div className="flight-content-container">
                <div className="flight-title">
                    Search Cheap Flight Tickets
                </div>
                <div className="flight-subtitle">
                    Helping you save on flights since 2007
                </div>
                <div className="flight-action-container">
                    <div className="from">

                    </div>
                    <div className="middle">

                    </div>
                    <div className="middle">

                    </div>
                    <div className="middle">

                    </div>
                    <div className="num-people">

                    </div>
                    <div className="search-flights">
                        Search flights
                    </div>
                </div>
            </div>
        </>
    );
}

export default Flight;