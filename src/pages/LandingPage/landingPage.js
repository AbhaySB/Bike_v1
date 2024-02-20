import React from 'react'
import './style.css'

import Navbar from './Navbar.js'

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <div className='landingPage bg-gray-100'>
                <div className='flex items-center justify-center'>
                    <span className='headLine'>HEADLINE</span>
                </div>
                <div className='flex items-center justify-center gap-96'>
                    <img src="" alt="IMAGE" />
                    <div className=' max-w-60'>

                        <h1>HEADING</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus animi</p>

                        <button className='primary-btn-landingPage flex gap-1 items-center justify-center'>
                            Lets go
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
