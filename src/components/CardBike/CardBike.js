import React from "react";
import './style.css'
import { Link } from "react-router-dom";

import z1000 from '../../assets/bikeImages/z1000.png'
import NinjaLogo from '../../assets/icons/ninjaLogo.png'

export default function cardBike(props) {

    return (
        <Link to="/detailBikePage" className="CardBikeContainer h-72 w-80 m-5">
            <div className='CardBikeImage'>
                <img src={z1000} alt="bike" />
            </div>
            <div className='CardText'>
                <img className="w-20 h-10" src={NinjaLogo} alt="" />
                <p className="w-60 h-11 flex justify-center items-center">{props.name}</p>
            </div>
        </Link>
    )
}