import React, { useEffect, useState } from 'react';
import useHotels from '../../../../Hooks/useHotels';
import HotelDisplay from '../HotelDisplay/HotelDisplay';

const Dhaka = () => {
    let[hotels, setHotels] = useHotels();
    return (
        <div>
            <h2 className='text-center mt-5'>Hotels In Dhaka</h2>
            <div className="hotels-div container my-5">
                <div className="row gy-4">
                {
                    hotels.map(index=> index.city === 'dhaka' && <HotelDisplay 
                    key = {index.id}
                    index={index}
                ></HotelDisplay>)
                }                    
                </div>                
            </div>
        </div>
    );
};

export default Dhaka;