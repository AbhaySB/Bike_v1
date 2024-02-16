import React from 'react'

import './style.css'
import MainSlider from '../../components/MainSlider/mainSlider'
import MainNavbar from '../../components/MainNavbar/mainNavbar'

export default function Home() {
    return (
        <>
            <MainNavbar />
            <MainSlider />
            <div className="bg-red-400 flex justify-center">
                HOME
            </div>
        </>
    )
}
