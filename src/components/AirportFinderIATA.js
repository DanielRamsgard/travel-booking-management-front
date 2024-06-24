// src/components/AirportFinder.js
import React, { useState, useEffect } from "react";

const AirportFinder = () => {
    const [query, setQuery] = useState('');
    const [airports, setAirports] = useState([]);
    const [filteredAirports, setFilteredAirports] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Load the JSON data once when the component mounts
        fetch('/static/json/airports.json')
            .then(response => response.json())
            .then(data => setAirports(data))
            .catch(error => console.error('Error loading airport data:', error));
    }, []);

    useEffect(() => {
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

    return (
        <div className="airport-container">
            <input
                type="text"
                value={query}
                onChange={e => {setQuery(e.target.value); setShow(true)}}
                placeholder="From"
            />
            {filteredAirports.length !== 0 && show ? <ul className="dropdown">
                {filteredAirports.map((airport, index) => (
                    <>  
                        {index < 8 ? <div className="airport-item" key={index} onClick={() => {setQuery(airport.iata); setShow(false)}}>
                            {filterAirportWord(airport.name)}
                        </div> : <></>}
                        {(index + 1 !== filteredAirports.length)? (index < 7 ? <div className="bar-new"></div> : <></>) : <></>}
                        
                    </>
                ))}
            </ul>: <></>}
        </div>
    );
};

export default AirportFinder;