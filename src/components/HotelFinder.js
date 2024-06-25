// src/components/AirportFinder.js
import React, { useState, useEffect, useRef } from "react";

const HotelFinder = (props) => {
    const [query, setQuery] = useState('');
    const [airports, setAirports] = useState([]);
    const [filteredAirports, setFilteredAirports] = useState([]);
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    const checkUpdate = (airport) => {
        if (props.bool) {
            props.updateFrom(airport.name);
        } 
    }

    useEffect(() => {
        // Load the JSON data once when the component mounts
        fetch('/static/json/cities.json')
            .then(response => response.json())
            .then(data => setAirports(data))
            .catch(error => console.error('Error loading airport data:', error));
    }, []);

    useEffect(() => {
        if (props.bool) {
            props.updateUrl(query,"","","","");
        } else {
            props.updateUrl("",query,"","","");
        }
        // Query the data locally
        if (query.length > 2) {
            const results = airports.filter(airport => {
                const name = airport.name ? airport.name.toLowerCase() : '';
                const searchQuery = query.toLowerCase();

                return name.includes(searchQuery);
            });
            setFilteredAirports(results);
        } else {
            setFilteredAirports([]);
        }
    // eslint-disable-next-line
    }, [query, airports]);

    const handleClickOutside = (event) => {
        if (
            inputRef.current && !inputRef.current.contains(event.target) &&
            dropdownRef.current && !dropdownRef.current.contains(event.target)
        ) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                className={props.class}
                value={query}
                onChange={e => {setQuery(e.target.value); setShow(true)}}
                placeholder={props.hint}
            />
            {filteredAirports.length !== 0 && show ? <ul ref={dropdownRef} className={filteredAirports.length > 8 ? (props.widthBool ? "dropdown-new" : "dropdown-new") : (props.widthBool ? "dropdown-new-new" : "dropdown-new-new")}>
                {filteredAirports.map((airport, index) => (
                    <div key={airport.name + index}>  
                        <div className="airport-item" onClick={() => {setQuery(airport.name); setShow(false); checkUpdate(airport)}}>
                            {airport.name }{(index + 1 !== filteredAirports.length)? <div className="bar-new"></div> : <></>}
                        </div>
                        
                        
                    </div>
                ))}
            </ul>: <></>}
        </>
    );
};

export default HotelFinder;