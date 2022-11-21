import React from 'react';

const SingleHotelDetail = (props) => {
    return (
        <div>
            <h2>Hotel Name : {props.index.hotelName} </h2>
        </div>
    );
};

export default SingleHotelDetail;