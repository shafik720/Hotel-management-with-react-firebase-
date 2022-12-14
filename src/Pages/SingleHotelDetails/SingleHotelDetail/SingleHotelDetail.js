import React from 'react';
import './SingleHotelDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faUmbrellaBeach, faUtensils, faPersonSwimming, faWifi, faCar, faChampagneGlasses, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import SingleHotel from './SingleHotel/SingleHotel';


const SingleHotelDetail = (props) => {
    let { id, thumbImg, swimmingPool, stars, restaurant, ratings, price, hotelName, freeWifi, freeParking, fitnessCenter, city, beachFront, bar, airportShuttle } = props.index;
    let roomDetails = props?.index?.rooms;
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 mx-auto my-5 ">
                    <div className="single-hotel-div">
                        <h2 className='text-center mb-5'> {hotelName} </h2>
                        <div className="row singleHotel-desc ">
                            <div className="col-lg-6 col-md-6">
                                <div className=" ">
                                    <div className="singleHotel-desc-left">
                                        
                                        <p> <span className='iconBox'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Fitness Center : {fitnessCenter} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faUmbrellaBeach}></FontAwesomeIcon></span>Beach Front : {beachFront} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon></span> Restaurant : {restaurant} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faCar}></FontAwesomeIcon></span>Parking : {freeParking} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="">
                                    <div className="singleHotel-desc-left">
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faPersonSwimming}></FontAwesomeIcon></span>Swimming Pool : {swimmingPool} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faWifi}></FontAwesomeIcon></span>Free Wifi : {freeWifi} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faChampagneGlasses}></FontAwesomeIcon></span>Bar : {bar} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faPlaneDeparture}></FontAwesomeIcon></span>Airport Shuttle : {airportShuttle} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            
            <div className="row px-2">
                {roomDetails ?  <div className=" col-lg-12 table table-header ">
                        <h2>Room Type</h2>
                        <h2>Sleeps</h2>
                        <h2>Price</h2>
                        <h2 className='text-center'>Booking</h2>
                    </div> : <h2 className='text-center text-danger fw-bolder'>Room Details Currently Not Available ! <br /> Check Again Later</h2>}
            
                <div className="col-lg-12">                    
                    <div className="">
                        {
                            roomDetails && roomDetails?.map(index => <SingleHotel
                                index={index}
                            ></SingleHotel>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHotelDetail;