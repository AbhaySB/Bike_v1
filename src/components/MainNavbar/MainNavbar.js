import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './style.css'
import logo from '../../assets/icons/logo.png';
import Profile from '../ProfileCard/Profile';

export default function Navbar() {

    const [showProfile, setShowProfile] = useState(true)

    function HandleProfileClick() {
        if (showProfile) {
            setShowProfile(false)
        } else {
            setShowProfile(true)
        }
    }

    return (
        <aside className='navbarMainContainer w-full h-20 flex items-center justify-between'>
            <Link className='navItem flex gap-2 ml-20' to='/'>
                <img src={logo} className='logoImage h-8 w-8' alt="Logo" />
                My Ride
            </Link>
            <Link className='navItem' to='/home'>Home</Link>
            <Link className='navItem' to='/about'>About</Link>
            <div className='searchField flex items-center justify-end'>
                <input type="text" placeholder='Search' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="searchBtn w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <Link className='navItem' to='/vehiclegallery'>VehicleGallery</Link>
            <Link className='navItem' to='/help'>Help</Link>
            {showProfile ? (
                <Link onClick={HandleProfileClick} className='userIcon navItem flex gap-1 w-auto p-1 items-center justify-center rounded-md border border-solid border-gray-400 mr-20'>
                    User
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </Link>
            ) : (
                <div className='h-16 mr-2'>
                    <Link onClick={HandleProfileClick} className='userIconOpen navItem flex w-auto items-center h-auto justify-center'>
                    
                            <div>
                                <Profile />
                            </div>
                      
                    </Link>
                </div>
            )
            }
        </aside>
    )
}
