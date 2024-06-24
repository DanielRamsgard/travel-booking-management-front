import Landing from "./components/Landing";
import React from "react";
import Flight from "./components/Flight";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />}/>
                <Route path="/flight" element={<Flight />}/>
            </Routes>
        </Router>
    );
}

export default App;
