import React from 'react'
import './style.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import MainNavbar from '../../components/MainNavbar/MainNavbar'
import Footer from '../../components/Footer/Footer'
import AboutBike from '../../components/AboutBike/AboutBike'
import R6 from '../../assets/bikeImages/R6.png'
import BlackWheel from '../../assets/other/BlackWheel.png'
import One from '../../assets/gear/1.png'
import Two from '../../assets/gear/2.png'
import Three from '../../assets/gear/3.png'
import Four from '../../assets/gear/4.png'
import Five from '../../assets/gear/5.png'
import Six from '../../assets/gear/6.png'
import Neutral from '../../assets/gear/N.png'

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
        <div className='OtherDetailsContainer'>
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
          <div className='HighlightsDetails'>
            <div className='bikePrice flex'>
              <div>
                <h1>NINJA Z1000 Price</h1>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                </table>
              </div>
              <div className='PriceContainerImg'>
                <img src={BlackWheel} alt="" />
              </div>
            </div>
            <div className='moreDetails flex'>
              <div>
                <h1>NINJA Z1000 Key Highlights</h1>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                  <tr>
                    <td>Ninja Z1000</td>
                    <td>15Lakhs</td>
                  </tr>
                </table>
              </div>
              <div className='keyHighlightsImg'>
                {/* <img src={One} className='w-16' alt="" />
                <img className='mt-10 w-16' src={Neutral} alt="" />
                <img className='mt-10 w-16' src={Two} alt="" />
                <img className='mt-10 w-16' src={Three} alt="" />
                <img className='mt-10 w-16' src={Four} alt="" />
                <img className='mt-10 w-16' src={Five} alt="" />
                <img className='mt-10 w-16' src={Six} alt="" /> */}
                <img className='mt-5 w-16' src={Six} alt="" />
                <img className='mt-10 w-16' src={Five} alt="" />
                <img className='mt-10 w-16' src={Four} alt="" />
                <img className='mt-10 w-16' src={Three} alt="" />
                <img className='mt-10 w-16' src={Two} alt="" />
                <img className='mt-10 w-16' src={Neutral} alt="" />
                <img src={One} className='mt-10 w-16' alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className='AboutBikeContainer'>
          <AboutBike bikeName = "Kawasaki Ninja Z1000" bikeDesc = "" bikeImg = ""/>
        </div>
      </div>
      <Footer />
    </>
  )
}
