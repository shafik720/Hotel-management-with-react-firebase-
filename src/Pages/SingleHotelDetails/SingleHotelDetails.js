import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleHotelDetails.css'

const SingleHotelDetails = () => {
    let param = useParams();
    return (
        <div>
            <h2>Single Hotel Details here : {param.hotelId} </h2>
        </div>
    );
};

export default SingleHotelDetails;