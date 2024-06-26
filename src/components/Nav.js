import React, { useState }  from "react";
import useWindowWidth from "./useWindowWidth";
import NavPage from "./NavPage";
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
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
                    <div onClick={() => {navigate("/")}} className="travel"> TRAVEL </div>
                    { widthBool ?
                    <div className="nav-container-3" onClick={() => {updateNav(true);}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 16 16">
                            <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </div>
                    : 
                    <div className="nav-container-3">
                        <div onClick={() => {navigate("/")}} className="nav-text"> Home <div className="bar"></div> </div>
                        <div onClick={() => {navigate("/flight")}} className="nav-text"> Flights <div className="bar"></div> </div>
                        <div onClick={() => {navigate("/hotel")}} className="nav-text"> Hotels <div className="bar"></div> </div>
                        <div onClick={() => {navigate("/about")}} className="nav-text"> About <div className="bar"></div> </div>
                        <div onClick={() => {navigate("/contact")}} className="nav-text"> Contact <div className="bar"></div> </div>
                    </div>}
                    
                </div>
            </div>
        </>
    );
}

export default Nav;