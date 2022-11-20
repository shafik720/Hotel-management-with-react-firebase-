import React, { useEffect, useState } from 'react';
import HotelDisplay from '../HotelDisplay/HotelDisplay';

const Dhaka = () => {
    let[hotels, setHotels] = useState([]);
    useEffect(()=>{
        fetch('all-hotels.json')
        .then(res=>res.json())
        .then(data=>setHotels(data))
    },[])
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