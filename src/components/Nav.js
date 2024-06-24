import React, { useState }  from "react";
import useWindowWidth from "./useWindowWidth";
import NavPage from "./NavPage";

const Nav = () => {
    const widthBool = useWindowWidth(700);
    const [nav, setNav] = useState(false);

    function updateNav(nav) {
        setNav(nav);
    }

    return (
        <>
            { nav ? <NavPage updateNav={updateNav}/> : <></> }
            <div className="nav-container">
                <div className="nav-container-2">
                    <a href="/" className="travel"> TRAVEL </a>
                    { widthBool ?
                    <div className="nav-container-3" onClick={() => {updateNav(true);}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16">
                            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </div>
                    : 
                    <div className="nav-container-3">
                        <a href="/" className="nav-text"> Home <div className="bar"></div> </a>
                        <a href="/flight" className="nav-text"> Flights <div className="bar"></div> </a>
                        <a href="/hotel" className="nav-text"> Hotels <div className="bar"></div> </a>
                        <a href="/about" className="nav-text"> About <div className="bar"></div> </a>
                        <a href="/contact" className="nav-text"> Contact <div className="bar"></div> </a>
                    </div>}
                    
                </div>
            </div>
        </>
    );
}

export default Nav;