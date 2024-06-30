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
    const [url, setUrl] = useState({
        from : "",
        to : "",
        departure : "",
        returnVal : "",
        passengers : ""
        
    });

    const flightBackend = async () => {
        const apiUrl = "http://127.0.0.1:5000/flight"; // Define your API URL here
    
        const requestOptions = {
            method: 'POST', // or 'GET', 'PUT', 'DELETE', etc.
            headers: {
                'Content-Type': 'application/json'
                // Add any other headers as needed
            },
            body: JSON.stringify({ url }) // Convert the 'url' state object to JSON string
        };
    
        try {
            const response = await fetch(apiUrl, requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Handle successful response here if needed
            console.log('Response:', response);
        } catch (error) {
            // Handle errors here
            console.error('Error fetching data:', error);
        }
    };

    const toAvia = () => {
        const urlString = `https://www.aviasales.com/search/${url.from}${url.departure}${url.to}${url.returnVal}${url.passengers}?request_source=search_form`;
        window.open(urlString, '_blank');
    }

    function updateUrl(from, to, departure, returnVal, passengers) {
        setUrl(prevUrl => ({
            from: from || prevUrl.from,
            to: to || prevUrl.to,
            departure: (departure === "" ? "" : departure.split('/')[1] + departure.split('/')[0]) || prevUrl.departure,
            returnVal: (returnVal === "" ? "" : returnVal.split('/')[1] + returnVal.split('/')[0]) || prevUrl.returnVal,
            passengers: passengers || prevUrl.passengers
        }));
    }

    function updateFrom(from) {
        setFrom(from);
    }

    useEffect(() => {
    $(departureRef.current).datepicker({
      format: 'mm/dd/yyyy',
      orientation: "bottom auto",
      autoclose: true
    }).on('changeDate', function (e) {
        updateUrl("", "", e.format(), "", "");
    });

    $(returnRef.current).datepicker({
        format: 'mm/dd/yyyy',
        orientation: "bottom auto",
        autoclose: true
      }).on('changeDate', function (e) {
        updateUrl("", "", "", e.format(), "");
    });

    $(departureNewRef.current).datepicker({
    format: 'mm/dd/yyyy',
    orientation: "bottom auto",
    autoclose: true
    }).on('changeDate', function (e) {
        updateUrl("", "", e.format(), "", "");
    });

    $(returnNewRef.current).datepicker({
        format: 'mm/dd/yyyy',
        orientation: "bottom auto",
        autoclose: true
    }).on('changeDate', function (e) {
        updateUrl("", "", "", e.format(), "");
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
                    <AirportFinder updateUrl={updateUrl} updateFrom={updateFrom} bool={true} hint={"From"} class={"from-new"} widthBool={widthBool}/>
                    <AirportFinder updateUrl={updateUrl} updateFrom={updateFrom} bool={false} hint={"To"} class={"to-new"} widthBool={widthBool}/>
                    <div className="middle-new-container">
                        <input className="middle-item" placeholder="Departure" id="departure-new" ref={departureNewRef}>

                        </input>
                        <input className="middle-item" placeholder="Return" id="return-new" ref={returnNewRef}> 

                        </input>
            
                    </div>
                    <input className="num-people-new" placeholder="Passengers" onChange={(e) => {updateUrl("","","","",e.target.value)}}>

                    </input>
                    <div className="search-flights-new" onClick={() => {toAvia(); flightBackend()}}>
                        Search flights
                    </div>
                </div>
                : 
                <div className="flight-action-container">
                    <AirportFinder updateUrl={updateUrl} updateFrom={updateFrom} bool={true} hint={"From"} class={"from"} widthBool={widthBool}/>
                    <AirportFinder updateUrl={updateUrl} updateFrom={updateFrom} bool={false} hint={"To"} class={"middle"} widthBool={widthBool}/>
                    <input className="middle" placeholder="Departure" id="departure" ref={departureRef}>

                    </input>
                    <input className="middle" placeholder="Return" id="return" ref={returnRef}>

                    </input>
                    <input className="num-people" placeholder="Passengers" onChange={(e) => {updateUrl("","","","",e.target.value)}}>

                    </input>
                    <div className="search-flights" onClick={() => {toAvia(); flightBackend()}}>
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
            <CustomCarousel/>
        </>
    );
}

export default Flight;