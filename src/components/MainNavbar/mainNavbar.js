import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'
import logo from '../../assets/icons/logo.png';

export default function Navbar() {

    return (
        <aside className='navbarMainContainer w-full h-20 flex items-center justify-evenly '>
            <Link className='navItem logoBtn flex gap-2' to='/' onClick={() => window.location.reload()}>
                <img src={logo} className='logoImage h-8 w-8' alt="Logo" />
                My Ride
            </Link>
            <Link className='navItem'>Home</Link>
            <Link className='navItem'>About</Link>
            <div className='searchField flex items-center justify-end border border-solid border-gray-400 rounded-sm'>
                <input type="text" placeholder='Search' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="searchBtn w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            <Link className='navItem'>VehicleGallery</Link>
            <Link className='navItem'>Help</Link>
            <Link className='navItem userIcon flex gap-1 bg-white w-auto p-1 items-center justify-center rounded-md border border-solid border-gray-400'>User
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

            </Link>
        </aside>
    )
}
