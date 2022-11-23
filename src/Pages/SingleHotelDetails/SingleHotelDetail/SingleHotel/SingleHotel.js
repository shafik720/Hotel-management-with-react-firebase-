import React from 'react';
import { addToDb , getFromDb } from '../../../../local storage/localStorage';
import Hotel from './Hotel/Hotel';
import './SingleHotel.css';

const SingleHotel = (props) => {
    function handleBookButton(element) {
        addToDb(element);
    }
    
    
    return (
        <div className='row table-parent'>
            <div className="col-lg-12 table fw-bold fw-bolder ">
<<<<<<< HEAD
            {
                props.index.map(index=> index.includes('#') || <Hotel index={index}></Hotel>)
            }    
            <button onClick={()=>handleBookButton(props.index)}>Book Now</button>
            </div>            
=======
                
>>>>>>> 6def928d8bc1430ae61b6797e71e7614cff39384
        </div>
    );
};

export default SingleHotel;