import React from 'react'
import { TypeAnimation } from 'react-type-animation';

import './style.css'
import MainNavbar from '../../components/MainNavbar/MainNavbar'
import BrandCard from '../../components/BrandCard/BrandCard'
import Footer from '../../components/Footer/Footer';
import CardBike from '../../components/CardBike/CardBike';

export default function VehicleGallery() {
  return (
    <>
      <MainNavbar />
      <div className='VehicleGalleryMain'>
        <div className='GalleryBrandCard'>
          <div className='HeadingGallery flex justify-center h-32 items-center text-5xl pt-10'>
            <p> Select Company</p>
          </div>
          <div className='flex justify-evenly h-96 items-center'>
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
          </div>
        </div>
        <div className='GalleryBikeCard'>
          <div className='HeadingGallery flex justify-center h-32 p-20 mt-12 mb-10 ml-36 items-center text-5xl gap-4'>
            <p>Explore</p>
            <div className='w-96'>
            <TypeAnimation
              sequence={[
                'Motorcycle',
                1600,
                'Cruiser',
                1600,
                'Sportbike',
                1600,
                'Cafe racer',
                1600,
                'Street bike',
                1600,
                'Naked bike',
                1600,
                'Adventure bike',
                1600,
              ]}
              speed={170}
              style={{ fontSize: '1em' }}
              repeat={Infinity}
            />
            </div>
          </div>
          <div className='grid grid-cols-4 ml-20 mr-20 pl-5'>
            <CardBike />
            <CardBike />
            <CardBike />
            <CardBike />
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
      </div>
      <Footer />
    </>
  )
}