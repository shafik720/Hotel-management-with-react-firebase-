import React from 'react';
import { getFromDb } from '../../local storage/localStorage';
import './Bookings.css'

const Bookings = () => {
    let dbValue = getFromDb();
    // console.log(dbValue.map(index=>index));
    // dbValue.map(index=>console.log(index))
    return (
        <div>
            <h2>Bookings</h2>
        </div>
    );
};

export default Bookings;