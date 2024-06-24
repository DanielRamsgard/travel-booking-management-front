import Landing from "./components/Landing";
import React from "react";
import Flight from "./components/Flight";
import Hotel from "./components/Hotel";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/flight" element={<Flight />}/>
                <Route path="/hotel" element={<Hotel />}/>
            </Routes>
        </Router>
    );
}

export default App;
