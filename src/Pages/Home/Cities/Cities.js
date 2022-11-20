import React from 'react';
import './Cities.css';
import cox from '../../../assets/img/cox.jpg'
import dhaka from '../../../assets/img/dhaka.jpg'
import ctg from '../../../assets/img/ctg.jpg'
import kuakata from '../../../assets/img/kuakata.jpg'
import { useNavigate } from 'react-router-dom';

const Cities = () => {
    let navigate = useNavigate();
    function navigateCoxbazar(){
        navigate('/coxbazar');
    }
    return (
        <div className='cities-parent'>
            <h1>Select Your City</h1>
            <div className="cities">
                <div onClick={navigateCoxbazar} draggable className="city">
                    <div className="city-img">
                        <img src={cox} alt="" />
                    </div>
                    <h2>Cox's Bazar</h2>
                </div>
                <div draggable className="city">
                    <div className="city-img">
                        <img src={dhaka} alt="" />
                    </div>
                    <h2>Dhaka</h2>
                </div>
                <div draggable className="city">
                    <div className="city-img">
                        <img src={ctg} alt="" />
                    </div>
                    <h2>Chittagong</h2>
                </div>
                <div draggable className="city">
                    <div className="city-img">
                        <img src={kuakata} alt="" />
                    </div>
                    <h2>Kuakata</h2>
                </div>
            </div>
        </div>
    );
};

export default Cities;