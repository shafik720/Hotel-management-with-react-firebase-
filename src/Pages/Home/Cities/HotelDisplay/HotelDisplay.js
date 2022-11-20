import React from 'react';
import './HotelDisplay.css'

const HotelDisplay = (props) => {
    let{thumbImg, swimmingPool, stars, restaurant, ratings, price, hotelName, freeWifi, freeParking, fitnessCenter, city, beachFront, bar, airportShuttle} = props.index;
    return (
        <div className='col-lg-4'>
            <div className="">
            <h2>Hotel Name : {props.index.hotelName} </h2>
            </div>
        </div>
    );
};

export default HotelDisplay;