import React from "react";

const Card = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    return (
        <>
            
            <div className="card-container" onClick={scrollToTop}>
                <div className="card-img-container">
                    <img alt="Card" className="card-img" src={props.img}></img>
                </div>
                <div className="card-title">
                    {props.city}
                </div>
                <div className="card-price">
                    {props.country}
                </div>
            </div>

        </>
    );
}

export default Card;