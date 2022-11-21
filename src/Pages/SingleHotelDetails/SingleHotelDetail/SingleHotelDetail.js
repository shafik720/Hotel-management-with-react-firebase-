import React from 'react';
import './SingleHotelDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell, faUmbrellaBeach, faUtensils, faPersonSwimming, faWifi, faCar, faChampagneGlasses, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';


const SingleHotelDetail = (props) => {
    let { id, thumbImg, swimmingPool, stars, restaurant, ratings, price, hotelName, freeWifi, freeParking, fitnessCenter, city, beachFront, bar, airportShuttle } = props.index;
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-8 mx-auto my-5 ">
                    <div className="single-hotel-div">
                        <h2 className='text-center mb-5'> {hotelName} </h2>
                        <div className="row singleHotel-desc ">
                            <div className="col-lg-6 ">
                                <div className=" ">
                                    <div className="singleHotel-desc-left">
                                        {/* <p>Ratings : <span className='darkRed-text'>{ratings}</span> </p>
                                        <p>Price : <span className='darkRed-text'>{price}</span>  </p> */}
                                        <p> <span className='iconBox'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Fitness Center : {fitnessCenter} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faUmbrellaBeach}></FontAwesomeIcon></span>Beach Front : {beachFront} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon></span> Restaurant : {restaurant} </p>
                                        <p><span className='iconBox'><FontAwesomeIcon icon={faCar}></FontAwesomeIcon></span>Parking : {freeParking} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
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

                        <div className="row my-5">
                            <div className="col-lg-12">
                                <h2 className='text-center mb-4'>Room Type & Price</h2>
                                <div className="table-div ">
                                    <table className='text-center'>
                                        <tr>
                                            <th>Room Type</th>
                                            <th>Sleeps</th>
                                            <th>Price</th>
                                        </tr>
                                        <tr>
                                            <td>Double Room</td>
                                            <td>Double</td>
                                            <td>Price : 750</td>
                                        </tr>
                                        <tr>
                                            <td>Single Room</td>
                                            <td>Single</td>
                                            <td>Price : 550</td>
                                        </tr>
                                    </table>
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