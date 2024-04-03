import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

import './style.css'
import MainSlider from '../../components/MainSlider/MainSlider'
import MainNavbar from '../../components/MainNavbar/MainNavbar'
import CardBike from '../../components/CardBike/CardBike';
import AdvertisementSlider from '../../components/AdvertisementSlider/AdvertisementSlider';
import Footer from '../../components/Footer/Footer';
import BikeNews from '../../components/BikeNews/BikeNews';
import { logDOM } from '@testing-library/react';

export default function Home() {

    const [bikeData, setBikeData] = useState([]);

    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/motorcycles', {
            params: {
                make: 'kawasaki',
                model: 'ninja'
            },
            headers: {
                'X-Api-Key': process.env.BIKE_API_KEY || 'U2FaK0P+UIOXnRUnNs0Vkg==4FgDUMbI0PC95wS1',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                setBikeData(response.data);
            })
            .catch(error => {
                console.error('Error:', error.response.data);
            });
    }, [])

    return (
        <div className='MainHomeContainer'>
            <MainNavbar />
            <MainSlider />
            <div className="homepage">
                <div className='flex justify-center'>
                    <div className='grid grid-cols-4'>
                        {bikeData.slice(0, 8).map(e => (
                            <CardBike name={e.model.slice(0,21)}/>
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
