import React, { useEffect, useRef } from "react";
import Nav from "./Nav";
import useWindowWidth from "./useWindowWidth";
import $ from 'jquery';
import 'bootstrap-datepicker';

const Flight = () => {
    const widthBool = useWindowWidth(900);
    const widthBoolTitle = useWindowWidth(372);

    const departureRef = useRef(null);
    const returnRef = useRef(null);

  useEffect(() => {
    $(departureRef.current).datepicker({
      format: 'mm/dd/yyyy',
      orientation: "bottom auto" 
    });

    $(returnRef.current).datepicker({
        format: 'mm/dd/yyyy',
        orientation: "bottom auto"
      });

    // Cleanup on component unmount
    return () => {
      $(departureRef.current).datepicker('destroy');
      $(returnRef.current).datepicker('destroy');
    };
  }, []);

    return (
        <>
            <Nav />
            <div className="airport-container">
                <img alt="Airport" className="img-container" src="/static/media/airport.jpeg"></img>
            </div>
            <div className="flight-content-container">
                <div className="flight-title">
                    { widthBool ?  widthBoolTitle ? "Flights" : "Search Flights" : "Search Cheap Flight Tickets"}
                </div>
                <div className="flight-subtitle">
                    { widthBool ?  widthBoolTitle ? "Search tickets" : "Serving customers since 2007" : "Helping you save on flights since 2007"}
                </div>
                { widthBool ? 
                <div className="flight-action-container-new">
                    <div className="from-new">

                    </div>
                    <div className="to-new">

                    </div>
                    <div className="middle-new-container">
                        <div className="middle-item">

                        </div>
                        <div className="middle-item">

                        </div>
            
                    </div>
                    <div className="num-people-new">

                    </div>
                    <div className="search-flights-new">
                        Search flights
                    </div>
                </div>
                : 
                <div className="flight-action-container">
                    <input className="from" placeholder="From">

                    </input>
                    <input className="middle" placeholder="To">

                    </input>
                    <input className="middle" placeholder="Departure" id="departure" ref={departureRef}>

                    </input>
                    <input className="middle" placeholder="Return" id="return" ref={returnRef}>

                    </input>
                    <input className="num-people" placeholder="Passengers">

                    </input>
                    <div className="search-flights">
                        Search flights
                    </div>
                </div>
                }
            </div>
        </>
    );
}

export default Flight;