import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import useWindowWidth from "./useWindowWidth";
import $ from 'jquery';
import 'bootstrap-datepicker';
import CustomCarousel from "./CustomCarousel";
import AirportFinder from "./AirportFinderIATA";

const Flight = () => {
    const [from, setFrom] = useState("");
    const widthBool = useWindowWidth(900);
    const widthBoolTitle = useWindowWidth(372);
    const departureRef = useRef(null);
    const returnRef = useRef(null);
    const departureNewRef = useRef(null);
    const returnNewRef = useRef(null);

  useEffect(() => {
    $(departureRef.current).datepicker({
      format: 'mm/dd/yyyy',
      orientation: "bottom auto",
      autoclose: true
    });

    $(returnRef.current).datepicker({
        format: 'mm/dd/yyyy',
        orientation: "bottom auto",
        autoclose: true
      });

    $(departureNewRef.current).datepicker({
    format: 'mm/dd/yyyy',
    orientation: "bottom auto",
    autoclose: true
    });

    $(returnNewRef.current).datepicker({
        format: 'mm/dd/yyyy',
        orientation: "bottom auto",
        autoclose: true
    });

    const departureRefCurrent = departureRef.current;
    const returnRefCurrent = returnRef.current;
    const departureNewRefCurrent = departureNewRef.current;
    const returnNewRefCurrent = returnNewRef.current;

    // Cleanup on component unmount
    return () => {
      $(departureRefCurrent).datepicker('destroy');
      $(returnRefCurrent).datepicker('destroy');
      $(departureNewRefCurrent).datepicker('destroy');
      $(returnNewRefCurrent).datepicker('destroy');
    };
  }, []);

    return (
        <>
            <Nav />
            <div className={widthBool ? "airport-container-new" : "airport-container"}>
                <img alt="Airport" className="img-container" src="/static/media/airport.jpeg"></img>
            </div>
            <div className={ widthBool ? "flight-content-container-new" : "flight-content-container"}>
                <div className={ widthBool ? "flight-title-new" : "flight-title"}>
                    { widthBool ?  widthBoolTitle ? "Flights" : "Search Flights" : "Search Cheap Flight Tickets"}
                </div>
                <div className="flight-subtitle">
                    { widthBool ?  widthBoolTitle ? "Search tickets" : "Serving customers since 2007" : "Helping you save on flights since 2007"}
                </div>
                { widthBool ? 
                <div className="flight-action-container-new">
                    <input className="from-new" placeholder="From" onChange={(e) => {setFrom(e.target.value)}}>

                    </input>
                    <input className="to-new" placeholder="To">

                    </input>
                    <div className="middle-new-container">
                        <input className="middle-item" placeholder="Departure" id="departure-new" ref={departureNewRef}>

                        </input>
                        <input className="middle-item" placeholder="Return" id="return-new" ref={returnNewRef}> 

                        </input>
            
                    </div>
                    <input className="num-people-new" placeholder="Passengers">

                    </input>
                    <div className="search-flights-new">
                        Search flights
                    </div>
                </div>
                : 
                <div className="flight-action-container">
                    <AirportFinder />
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

                <div className={ widthBool ? "popular-new" : "popular"}>
                    <div className="title-pop">
                        { widthBool ? "Popular" : "Popular Destinations"}
                    </div>
                    <div className="sub-title-pop">
                        from {from}
                    </div>
                </div>
            </div>
            <CustomCarousel />
        </>
    );
}

export default Flight;