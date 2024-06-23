import React from "react";

const NavPage = (props) => {

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
                <div className="navpage-text">
                    Home
                </div>
                <div className="navpage-text">
                    Flights
                </div>
                <div className="navpage-text">
                    Hotels
                </div>
                <div className="navpage-text">
                    About
                </div>
                <div className="navpage-text">
                    Contact
                </div>
            </div>
        </div>
    );
}

export default NavPage;