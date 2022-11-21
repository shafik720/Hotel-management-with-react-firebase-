import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHotels from '../../Hooks/useHotels';
import './SingleHotelDetails.css'

const SingleHotelDetails = () => {
    let param = useParams();
    let hotelId = param.hotelId;
    let[hotels, setHotels] = useHotels();
    // console.log(hotelId);
    let foundedHotel = hotels.find(index=>index.id == hotelId);
    console.log(foundedHotel);
    return (
        <div>
            <h2>Single Hotel Details here : {foundedHotel?.hotelName} </h2>
        </div>
    );
};

export default SingleHotelDetails;