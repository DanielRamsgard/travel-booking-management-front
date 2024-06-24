import React from "react";

const Card = (props) => {
    return (
        <>
            
            <div className="card-container">
                <div className="card-img-container">
                    <img alt="Card" className="card-img" src="/static/media/ams.jpg"></img>
                </div>
                <div className="card-title">
                    Amsterdam
                </div>
                <div className="card-price">
                    from $718
                </div>
            </div>

        </>
    );
}

export default Card;