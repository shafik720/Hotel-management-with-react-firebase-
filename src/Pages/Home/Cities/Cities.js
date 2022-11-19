import React from 'react';
import './Cities.css';
import cox from '../../../assets/img/cox.jpg'

const Cities = () => {
    return (
        <div>
            <div className="cities">
                <div className="city">
                    <div className="city-img">
                        <img src={cox} alt="" />
                    </div>
                    <h2>Cox's Bazar</h2>
                </div>
            </div>
        </div>
    );
};

export default Cities;