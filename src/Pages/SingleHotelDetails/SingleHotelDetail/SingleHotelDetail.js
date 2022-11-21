import React from 'react';

const SingleHotelDetail = (props) => {
    let { id, thumbImg, swimmingPool, stars, restaurant, ratings, price, hotelName, freeWifi, freeParking, fitnessCenter, city, beachFront, bar, airportShuttle } = props.index;
    return (
        <div>
            <h2>Hotel Name : {hotelName} </h2>
        </div>
    );
};

export default SingleHotelDetail;