import React from 'react'

import './style.css'
import MainSlider from '../../components/MainSlider/MainSlider'
import MainNavbar from '../../components/MainNavbar/MainNavbar'
import CardBike from '../../components/CardBike/CardBike';
import AdvertisementSlider from '../../components/AdvertisementSlider/AdvertisementSlider';
import Footer from '../../components/Footer/Footer';
import BikeNews from '../../components/BikeNews/BikeNews';

export default function Home() {
    return (
        <div className='MainHomeContainer'>
            <MainNavbar />
            <MainSlider />
            <div className="homepage">
                <div className='flex justify-center'>
                    <div className='grid grid-cols-4'>
                        <CardBike />
                        <CardBike />
                        <CardBike />
                        <CardBike />
                        <CardBike />
                        <CardBike />
                        <CardBike />
                        <CardBike />
                    </div>
                </div>
                <div className='mb-14 mt-14'>
                    <AdvertisementSlider />
                </div>
                <div className='homePageNews'>
                    <h1 className='homePageNewsTitle flex justify-center'>TOP NEWS</h1>
                    <BikeNews />
                    <BikeNews />
                    <BikeNews />
                    <BikeNews />
                </div>
                <div className='mt-10'>
                    <Footer />
                </div>
            </div>
        </div>
    )
}
