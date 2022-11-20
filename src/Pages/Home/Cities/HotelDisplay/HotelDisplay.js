import React from 'react';
import './HotelDisplay.css'

const HotelDisplay = (props) => {
    let { thumbImg, swimmingPool, stars, restaurant, ratings, price, hotelName, freeWifi, freeParking, fitnessCenter, city, beachFront, bar, airportShuttle } = props.index;
    return (
        <div className='col-lg-4 col-md-6'>
            <div className=" hotel-single-card h-100">
                <div className="hotel-img-div">
                    <img src={thumbImg} alt="" />
                </div>
                <h2>{hotelName} </h2>
                <div className="desc-div">
                    <div className="desc-left">
                        <p>Ratings : {ratings} </p>
                        <p>Price : {price} </p>
                        <p>Fitness Center : {fitnessCenter} </p>
                    </div>
                    <div className="desc-right">
                        <p>Swimming Pool : {swimmingPool} </p>
                        <p>Free Wifi : {freeWifi} </p>
                        <p>Parking : {freeParking} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDisplay;