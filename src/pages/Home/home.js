import React from 'react'

import './style.css'
import MainSlider from '../../components/MainSlider/mainSlider'
import MainNavbar from '../../components/MainNavbar/mainNavbar'

export default function Home() {
    return (
        <div className='MainHomeContainer'>
            <MainNavbar />
            <MainSlider />
            <div className="homepage flex justify-center">
                HOME
            </div>
        </div>
    )
}
