import React from 'react';
import { addToDb } from '../../../../local storage/localStorage';
import Hotel from './Hotel/Hotel';
import './SingleHotel.css';

const SingleHotel = (props) => {
    function handleBookButton(element){
        addToDb(element);
        console.log(element);
    }
    
    return (
        <div className='row table-parent'>            
            <div className="col-lg-12 table fw-bold fw-bolder ">
            {
                props.index.map(index=><Hotel index={index}></Hotel>)
            }    
            <button onClick={()=>handleBookButton(props.index)}>Book Now</button>
            </div>            
        </div>
    );
};

export default SingleHotel;