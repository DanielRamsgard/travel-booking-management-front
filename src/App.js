import Landing from "./components/Landing";
import React from "react";
import Flight from "./components/Flight";
import Hotel from "./components/Hotel";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/flight" element={<Flight />}/>
                <Route path="/hotel" element={<Hotel />}/>
                <Route path="/about" element={<About bool={false}/>}/>
                <Route path="/contact" element={<About bool={true}/>}/>
            </Routes>
        </Router>
    );
}

export default App;
