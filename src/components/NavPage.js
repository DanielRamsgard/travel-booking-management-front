import React from "react";
import { useNavigate } from "react-router-dom";

const NavPage = (props) => {
    const navigate = useNavigate();

    return (
        <div className="container-container">
            <div className="x-container">
                <div className="x-svg" onClick={() => {props.updateNav(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </div>
            </div>
            <div className="navpage-container">
                <div onClick={() => {navigate("/")}} className="navpage-text"> Home <div className="bar"></div> </div>
                <div onClick={() => {navigate("/flight")}} className="navpage-text"> Flights <div className="bar"></div> </div>
                <div onClick={() => {navigate("/hotel")}} className="navpage-text"> Hotels <div className="bar"></div> </div>
                <div onClick={() => {navigate("/about")}} className="navpage-text"> About <div className="bar"></div> </div>
                <div onClick={() => {navigate("/contact")}} className="navpage-text"> Contact <div className="bar"></div> </div>
            </div>
        </div>
    );
}

export default NavPage;