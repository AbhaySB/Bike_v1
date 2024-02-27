import React from "react";
import './style.css'

import z1000 from '../../assets/bikeImages/z1000.png'
import NinjaLogo from '../../assets/icons/ninjaLogo.png'

export default function cardBike() {
    return (
        <div className="CardBikeContainer h-72 w-80 m-5">
            <div className='CardBikeImage'>
                <img src={z1000} alt="bike" />
            </div>
            <div className='CardText'>
                <img className="w-24 h-10" src={NinjaLogo} alt="" />
                <p>Z1000</p>
            </div>
        </div>
    )
}