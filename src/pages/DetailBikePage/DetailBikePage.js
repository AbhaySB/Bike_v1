import React from 'react'
import './style.css'

import MainNavbar from '../../components/MainNavbar/MainNavbar'
import Footer from '../../components/Footer/Footer'
import AboutBike from '../../components/AboutBike/AboutBike'

export default function DetailBikePage() {
  return (
    <>
      <MainNavbar />
      <div className='MainDetailContainer flex justify-between'>
        <div className='OtherDetailsContainer m-40'>
          Other Details
        </div>
        <div className='AboutBikeContainer'>
          <AboutBike />
        </div>
      </div>
      <Footer />
    </>
  )
}
