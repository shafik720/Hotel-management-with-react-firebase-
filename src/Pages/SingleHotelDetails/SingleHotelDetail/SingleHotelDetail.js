import React from 'react';
import './SingleHotelDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faUmbrellaBeach, faUtensils } from '@fortawesome/free-solid-svg-icons';


const SingleHotelDetail = (props) => {
    let { id, thumbImg, swimmingPool, stars, restaurant, ratings, price, hotelName, freeWifi, freeParking, fitnessCenter, city, beachFront, bar, airportShuttle } = props.index;
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 mx-auto my-5 border">
                    <div className="">
                        <h2 className='text-center mb-5'>Hotel Name : {hotelName} </h2>
                        <div className="row singleHotel-desc">
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="singleHotel-desc-left">
                                        <p>Ratings : <span className='darkRed-text'>{ratings}</span> </p>
                                        <p>Price : <span className='darkRed-text'>{price}</span>  </p>
                                        <p> <span className='iconBox'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Fitness Center : {fitnessCenter} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faUmbrellaBeach}></FontAwesomeIcon></span>Beach Front : {beachFront} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon></span> Restaurant : {restaurant} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="">
                                    <div className="singleHotel-desc-left">
                                        <p>Swimming Pool : {swimmingPool} </p>
                                        <p>Free Wifi : {freeWifi} </p>
                                        <p>Parking : {freeParking} </p>
                                        <p>Bar : {bar} </p>
                                        <p>Airport Shuttle : {airportShuttle} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotelDetail;