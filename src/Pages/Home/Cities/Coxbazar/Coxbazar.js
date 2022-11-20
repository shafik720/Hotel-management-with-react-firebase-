import React, { useEffect, useState } from 'react';
import HotelDisplay from '../HotelDisplay/HotelDisplay';

const Coxbazar = () => {
    let[hotels, setHotels] = useState([]);
    useEffect(()=>{
        fetch('all-hotels.json')
        .then(res=>res.json())
        .then(data=>setHotels(data))
    },[])
    return (
        <div>
            <h2>Hotels In Cox's Bazar</h2>
            <div className="hotels-div">
                {
                    hotels.map(index=><HotelDisplay 
                        key = {index.id}
                        index={index}
                    ></HotelDisplay>)
                }
            </div>
        </div>
    );
};

export default Coxbazar;