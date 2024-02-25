import React from 'react'
import './style.css'

import Navbar from './Navbar.js'
import LandingPageBikeImage from '../../assets/bikeImages/z1000.png'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

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
                        <div>

                            <span className='heading bg-gray-500 text-2xl text-white font-semibold m-1 p-1 rounded-md'>UNLEASH BEAST</span>
                            {/* <p className='AnimatedContent text-gray-500 font-semibold text-5xl mt-2 mb-2 flex gap-2'>
                                GET TO KNOW YOUR
                                <span className='text-gray-800'>
                                    <TypeAnimation
                                        sequence={[
                                            'Vehicle',
                                            2000,
                                        ]}
                                        speed={250}
                                        style={{ fontSize: '1em'}}
                                        repeat={Infinity}
                                    />
                                </span>
                            </p> */}
                            <p className='AnimatedContent text-gray-700 font-semibold text-5xl mt-2 mb-2 '>
                                <TypeAnimation
                                    sequence={[
                                        'GET TO KNOW YOUR VEHICLE',
                                        1200,
                                        'GET VEHICLE DETAILS',
                                        1200,
                                    ]}
                                    speed={150}
                                    style={{ fontSize: '1em' }}
                                    repeat={Infinity}
                                />
                            </p>
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
