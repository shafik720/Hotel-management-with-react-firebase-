import React from 'react';
import './HotelDisplay.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const HotelDisplay = (props) => {
    let { id, thumbImg, swimmingPool, stars, restaurant, ratings, price, hotelName, freeWifi, freeParking, fitnessCenter, city, beachFront, bar, airportShuttle } = props.index;

    let navigate = useNavigate();
    function goToSingleHotel(element){
        let path = `/cities/${element}`;
        navigate(path);
    }
    return (
        <div className='col-lg-4 col-md-6'>
            <div className=" hotel-single-card h-100">
                <div className="hotel-img-div">
                    <img src={thumbImg} alt="" />
                    <span>{stars} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> </span>
                </div>
                <h2>{hotelName} </h2>
                <div className="desc-div">
                    <div className="desc-left">
                        <p>Ratings : <span className='darkRed-text'>{ratings}</span> </p>
                        <p>Price : <span className='darkRed-text'>{price}</span>  </p>
                        <p>Fitness Center : {fitnessCenter} </p>
                        <p>Beach Front : {beachFront} </p>
                        <p>Restaurant : {restaurant} </p>
                    </div>
                    <div className="desc-right">
                        <p>Swimming Pool : {swimmingPool} </p>
                        <p>Free Wifi : {freeWifi} </p>
                        <p>Parking : {freeParking} </p>
                        <p>Bar : {bar} </p>
                        <p>Airport Shuttle : {airportShuttle} </p>
                    </div>
                </div>
                <button onClick={()=>goToSingleHotel(id)} className='book-button'>Book Now</button>
            </div>
        </div>
    );
};

export default HotelDisplay;