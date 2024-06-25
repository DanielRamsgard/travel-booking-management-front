import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";
import useWindowWidth from "./useWindowWidth";
import $ from 'jquery';
import 'bootstrap-datepicker';
import CustomCarousel from "./CustomCarousel";
import HotelFinder from "./HotelFinder";

const Hotel = () => {
    const [from, setFrom] = useState("");
    const widthBool = useWindowWidth(900);
    const widthBoolTitle = useWindowWidth(372);
    const departureRef = useRef(null);
    const returnRef = useRef(null);
    const departureNewRef = useRef(null);
    const returnNewRef = useRef(null);
    const [url, setUrl] = useState({
        location : "",
        departure : "",
        returnVal : "",
        guests : ""
        
    });

    const toAvia = () => {
        const urlString = `https://www.booking.com/searchresults.html?ss=${url.location}&ssne=${url.location}&aid=397594&lang=en-us&sb=1&dest_type=city&checkin=${url.departure}&checkout=${url.returnVal}&group_adults=${url.guests}&no_rooms=1&group_children=0`;
        window.open(urlString, '_blank');
    }

    function updateUrl(location, departure, returnVal, guests) {
        setUrl(prevUrl => ({
            location: location || prevUrl.location,
            departure: (departure === "" ? "" : departure.split('/')[2] + '-' + departure.split('/')[0] + '-' + departure.split('/')[1]) || prevUrl.departure,
            returnVal: (returnVal === "" ? "" : returnVal.split('/')[2] + '-' + returnVal.split('/')[0] + '-' + returnVal.split('/')[1]) || prevUrl.returnVal,
            guests: guests || prevUrl.guests
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
        updateUrl("", e.format(), "", "");
    });

    $(returnRef.current).datepicker({
        format: 'mm/dd/yyyy',
        orientation: "bottom auto",
        autoclose: true
      }).on('changeDate', function (e) {
        updateUrl("", "", e.format(), "");
    });

    $(departureNewRef.current).datepicker({
    format: 'mm/dd/yyyy',
    orientation: "bottom auto",
    autoclose: true
    }).on('changeDate', function (e) {
        updateUrl("", e.format(), "", "");
    });

    $(returnNewRef.current).datepicker({
        format: 'mm/dd/yyyy',
        orientation: "bottom auto",
        autoclose: true
    }).on('changeDate', function (e) {
        updateUrl("", "", e.format(), "");
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
                <img alt="Airport" className="img-container" src="/static/media/hotel.jpeg"></img>
            </div>
            <div className={ widthBool ? "flight-content-container-new" : "flight-content-container"}>
                <div className={ widthBool ? "flight-title-new" : "flight-title"}>
                    { widthBool ?  widthBoolTitle ? "Hotels" : "Search Hotels" : "Search Cheap Hotel Rooms"}
                </div>
                <div className="flight-subtitle">
                    { widthBool ?  widthBoolTitle ? "Search rooms" : "Serving customers since 2007" : "Helping you save on hotels since 2007"}
                </div>
                { widthBool ? 
                <div className="flight-action-container-new">
                    <HotelFinder updateUrl={updateUrl} updateFrom={updateFrom} bool={true} hint={"Location"} class={"from-new"} widthBool={widthBool}/>
                    <div className="middle-new-container">
                        <input className="middle-item" placeholder="Departure" id="departure-new" ref={departureNewRef}>
                    
                        </input>
                        <input className="middle-item" placeholder="Return" id="return-new" ref={returnNewRef}> 

                        </input>
            
                    </div>
                    <input className="num-people-new" placeholder="Guests" onChange={(e) => {updateUrl("","","",e.target.value)}}>

                    </input>
                    <div className="search-flights-new" onClick={toAvia}>
                        Search hotels
                    </div>
                    <div className="blocker"/>

                </div>
                : 
                <div className="flight-action-container">
                    <HotelFinder updateUrl={updateUrl} updateFrom={updateFrom} bool={true} hint={"Location"} class={"from-hotel"} widthBool={widthBool}/>
                    <input className="middle" placeholder="Departure" id="departure" ref={departureRef}>
                    {console.log(url)}
                    </input>
                    <input className="middle" placeholder="Return" id="return" ref={returnRef}>

                    </input>
                    <input className="num-people" placeholder="Guests" onChange={(e) => {updateUrl("","","",e.target.value)}}>

                    </input>
                    <div className="search-flights" onClick={toAvia}>
                        Search hotels
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

export default Hotel;