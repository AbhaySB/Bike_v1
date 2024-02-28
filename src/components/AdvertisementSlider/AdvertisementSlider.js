import React from 'react'
import {useNavigate } from 'react-router-dom';

import './style.css'
import Poster from '../../assets/other/AdvertisementPoster.jpg'

export default function AdvertisementSlider() {

    const navigate = useNavigate();

    function navigateAdvertisement(){
        navigate('/')
    }



    return (
        <div className='advertisementContainer'>
            <div className='advertisementSecondContainer'>
                <img className='poster' src={Poster} alt="" onClick={navigateAdvertisement} />
            </div>
        </div>
    )
}
