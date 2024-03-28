import React from 'react'
import './style.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import MainNavbar from '../../components/MainNavbar/MainNavbar'
import Footer from '../../components/Footer/Footer'
import AboutBike from '../../components/AboutBike/AboutBike'
import R6 from '../../assets/bikeImages/R6.png'

const maxSpec = {
  weight: 250,
  speed: 300,
  cc: 1500,
  torque: 190,
  bhp: 250
}

const CircleDetails = {
  weight: 174,
  speed: 170,
  cc: 311,
  torque: 27.3,
  bhp: 35
};

export default function DetailBikePage() {
  return (
    <>
      <MainNavbar />
      <div className='MainDetailContainer flex justify-between'>
        <div className='OtherDetailsContainer m-40'>
          <div className="bikeImagesDetailTab">
            <div>
              <img src={R6} alt="" />
            </div>
          </div>
          <div className="DetailCircle flex justify-evenly">
            <div className='CircleStyling'>
              <CircularProgressbar className='h-28' styles={buildStyles({
                textSize: "2rem",
                textColor: "white",
                pathColor: "#0ba70b",
              })} strokeWidth={6} maxValue={maxSpec.weight} value={CircleDetails.weight} text={`${CircleDetails.weight}`} />
              <p>Kerb Weight</p>
            </div>
            <div className='CircleStyling'>
              <CircularProgressbar className='h-28' styles={buildStyles({
                textSize: "2rem",
                textColor: "white",
                pathColor: "#0ba70b",
              })} strokeWidth={6} maxValue={maxSpec.cc} value={CircleDetails.cc} text={`${CircleDetails.cc}`} />
              <p>CC</p>
            </div>
            <div className='CircleStyling'>
              <CircularProgressbar className='h-28' styles={buildStyles({
                textSize: "2rem",
                textColor: "white",
                pathColor: "#0ba70b",
              })} strokeWidth={6} maxValue={maxSpec.speed} value={CircleDetails.speed} text={`${CircleDetails.speed}`} />
              <p>Top Speed</p>
            </div>
            <div className='CircleStyling'>
              <CircularProgressbar className='h-28' styles={buildStyles({
                textSize: "2rem",
                textColor: "white",
                pathColor: "#0ba70b",
              })} strokeWidth={6} maxValue={maxSpec.torque} value={CircleDetails.torque} text={`${CircleDetails.torque}`} />
              <p>Torque</p>
            </div>
            <div className='CircleStyling'>
              <CircularProgressbar className='h-28' styles={buildStyles({
                textSize: "2rem",
                textColor: "white",
                pathColor: "#0ba70b",
              })} strokeWidth={6} maxValue={maxSpec.bhp} value={CircleDetails.bhp} text={`${CircleDetails.bhp}`} />
              <p>BHP</p>
            </div>
          </div>
        </div>
        <div className='AboutBikeContainer'>
          <AboutBike />
        </div>
      </div>
      <Footer />
    </>
  )
}
