import React from 'react';

const SingleHotelDetail = (props) => {
    let { id, thumbImg, swimmingPool, stars, restaurant, ratings, price, hotelName, freeWifi, freeParking, fitnessCenter, city, beachFront, bar, airportShuttle } = props.index;
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="text-center">
                        <h2>Hotel Name : {hotelName} </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotelDetail;