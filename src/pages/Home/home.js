import React from 'react'
import bikeDetailsApi from '../../api/bikeDetailsApi'

import './style.css'
import MainNavbar from '../../components/MainNavbar/MainNavbar'
import MainSlider from '../../components/MainSlider/MainSlider'
import CardBike from '../../components/CardBike/CardBike';
import AdvertisementSlider from '../../components/AdvertisementSlider/AdvertisementSlider';
import BikeNews from '../../components/BikeNews/BikeNews';
import Footer from '../../components/Footer/Footer';

export default function Home() {

    const {bikeData, getData} = bikeDetailsApi();   // If we want to use data directly we can use [bikeData]
    const storedData = getData();                   // here we are using data which is stored locally


    return (
        <div className='MainHomeContainer'>
            <MainNavbar />
            <MainSlider />
            <div className="homepage">
                <div className='flex justify-center'>
                    <div className='grid grid-cols-4'>
                        {storedData.slice(0, 8).map(e => (
                            <CardBike name={e.model.slice(0, 21)} />
                        ))}
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
