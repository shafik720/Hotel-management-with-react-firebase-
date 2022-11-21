import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleHotelDetails.css'

const SingleHotelDetails = () => {
    let param = useParams();
    let hotelId = param.hotelId;
    return (
        <div>
            <h2>Single Hotel Details here : {hotelId} </h2>
        </div>
    );
};

export default SingleHotelDetails;