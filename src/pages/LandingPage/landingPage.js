import React from 'react'
import './style.css'

import Navbar from './Navbar.js'
import LandingPageBikeImage from '../../assets/bikeImages/z1000.png'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <>
            <div className='mainContainerBackground'>
                <Navbar />
                <div className='landingPage'>
                    <div className='flex items-center justify-center'>
                        <div className='headLine'>ROLLING DREAMS</div>
                    </div>
                    <div className='landingPageContainerTwo flex items-center justify-center mr-28'>
                        <img className='landingPageBikeImage' src={LandingPageBikeImage} alt="Bike" />
                        <div className=''>

                            <span className='heading bg-yellow-400 text-2xl text-white font-semibold m-1 p-1 rounded-md'>UNLEASH BEAST</span>
                            <p className='text-yellow-400 font-semibold text-5xl mt-2 mb-2'>GET TO KNOW YOUR <span className='text-black'>VEHICLE</span></p>
                            <Link className='primary-btn-landingPage flex gap-1 items-center justify-center m-1' to='/home'>
                                Lets go
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
