import React from 'react'

import './style.css'
import H2logo from '../../assets/bikeImages/h2_bike.png'
import { Link } from 'react-router-dom';

export default function mainSlider() {
    return (
        <div className='mainBanner mb-10 mt-10 flex justify-between items-center'>
            <div className='mainBannerTextContent text-white p-14'>
                <h1 className='text-3xl mb-2'>Kawasaki Ninja H2</h1>
                <span className='text-base'>
                    Kawasaki Ninja H2: Sleek, powerful, cutting-edge design, supercharged engine, unparalleled performance, adrenaline rush, ultimate speed demon.
                </span>
                <div className='mt-4'>
                    <Link className='primary-btn-mainBanner flex items-center justify-center' to='/home'>
                        VISIT
                    </Link>
                </div>
            </div>
            <div className='flex h-96 w-80'>
                <img src={H2logo} alt="bike" />
            </div>
        </div>
    )
}
