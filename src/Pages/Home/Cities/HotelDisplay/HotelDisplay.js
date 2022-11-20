import React from 'react';
import './HotelDisplay.css'

const HotelDisplay = (props) => {
    let { thumbImg, swimmingPool, stars, restaurant, ratings, price, hotelName, freeWifi, freeParking, fitnessCenter, city, beachFront, bar, airportShuttle } = props.index;
    return (
        <div className='col-lg-4 col-md-6'>
            <div className=" hotel-single-card h-100">
                <div className="hotel-img-div">
                    <img src={thumbImg}  alt="" />
                </div>
                <h2>{hotelName} </h2>
                <p>Ratings : {ratings} </p>
                <p>Price : {price} </p>
            </div>
        </div>
    );
};

export default HotelDisplay;