import React from 'react';
import Hotel from './Hotel/Hotel';
import './SingleHotel.css';

const SingleHotel = (props) => {
    console.log(props.index);
    return (
        <div className='row table-parent '>            
            <div className="col-lg-12 table ">
            {
                props.index.map(index=><Hotel index={index}></Hotel>)
            }    
            <button>Book Now</button>
            </div>            
        </div>
    );
};

export default SingleHotel;