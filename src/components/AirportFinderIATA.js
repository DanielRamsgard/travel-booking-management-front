// src/components/AirportFinder.js
import React, { useState, useEffect, useRef } from "react";

const AirportFinder = (props) => {
    const [query, setQuery] = useState('');
    const [airports, setAirports] = useState([]);
    const [filteredAirports, setFilteredAirports] = useState([]);
    const [show, setShow] = useState(false);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    const checkUpdate = (airport) => {
        if (props.bool) {
            props.updateFrom(airport.iata);
        } 
    }

    useEffect(() => {
        // Load the JSON data once when the component mounts
        fetch('/static/json/airports.json')
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
                const iata = airport.iata ? airport.iata.toLowerCase() : '';
                const iso = airport.iso ? airport.iso.toLowerCase() : '';
                const searchQuery = query.toLowerCase();

                return name.includes(searchQuery) || iata.includes(searchQuery) || iso.includes(searchQuery);
            });
            setFilteredAirports(results);
        } else {
            setFilteredAirports([]);
        }
    }, [query, airports]);

    const filterAirportWord = (str) => {
        if (!str) return '';
        return str.split(' ').filter(word => word.toLowerCase() !== 'airport' && word.toLowerCase() !== 'international').join(' ');
    };

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
            {filteredAirports.length !== 0 && show ? <ul ref={dropdownRef} className={filteredAirports.length > 8 ? (props.widthBool ? "dropdown-new-phone" : "dropdown-new") : (props.widthBool ? "dropdown-new-new-phone" : "dropdown-new-new")}>
                {filteredAirports.map((airport, index) => (
                    <>  
                        <div className="airport-item" key={index} onClick={() => {setQuery(airport.iata); setShow(false); checkUpdate(airport)}}>
                            {filterAirportWord(airport.name) }{(index + 1 !== filteredAirports.length)? <div className="bar-new"></div> : <></>}
                        </div>
                        
                        
                    </>
                ))}
            </ul>: <></>}
        </>
    );
};

export default AirportFinder;