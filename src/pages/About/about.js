import React from 'react'

import './style.css'
import MainNavbar from '../../components/MainNavbar/MainNavbar'
import Footer from '../../components/Footer/Footer'
import R1 from '../../assets/bikeImages/R1.png'
// import RC8 from '../../assets/bikeImages/RC8.png'

export default function about() {
  return (
    <>
      <div className='MainContainerAbout'>
        <MainNavbar />
      </div>
      <div className='SecondContainerAbout text-white'>
        <div className='AboutImage'>
          <img src={R1} alt="" />
        </div>
        <div className='AboutSection'>
          <div className='flex justify-center items-center gap-1 m-5'>
            <h1 className='AboutHeading'>ABOUT MY RIDE</h1>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="HeadingImage w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
              </svg>
            </div>
          </div>
          <div className='AboutDescContainer'>
            <div className='AboutDesc'>
              At "My Ride", we're passionate about bikes and everything related to them. From the latest models to classic rides, we strive to provide comprehensive details and insights to help you make informed decisions about your biking journey.
              <br />
              This website is a Creation of Abhay Singh, a dedicated developer with a love for both coding and Bikes. Abhay's vision was to create a platform where bike enthusiasts like you could find all the information they need in one place, presented in a user-friendly and interactive format.
              <br />
              Built with ReactJS, our site is designed to deliver a seamless browsing experience, allowing you to explore a wide range of bikes, specifications, and reviews effortlessly. Whether you're a seasoned rider or just starting out, we aim to cater to your needs and preferences, helping you discover the perfect bike for your adventures.
              <br />
              Thank you for visiting "My Ride". We hope you find our content valuable and inspiring. Feel free to reach out to us with any questions, suggestions, or feedback. Happy riding!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
