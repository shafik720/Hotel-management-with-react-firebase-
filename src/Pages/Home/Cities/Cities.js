import React from 'react';
import './Cities.css';
import cox from '../../../assets/img/cox.jpg'

const Cities = () => {
    return (
        <div className='cities-parent'>
            <h1>Select Your City</h1>
            <div className="cities">
                <div draggable className="city">
                    <div className="city-img">
                        <img src={cox} alt="" />
                    </div>
                    <h2>Cox's Bazar</h2>
                </div>
                <div draggable className="city">
                    <div className="city-img">
                        <img src={cox} alt="" />
                    </div>
                    <h2>Cox's Bazar</h2>
                </div>
                <div draggable className="city">
                    <div className="city-img">
                        <img src={cox} alt="" />
                    </div>
                    <h2>Cox's Bazar</h2>
                </div>
                <div draggable className="city">
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