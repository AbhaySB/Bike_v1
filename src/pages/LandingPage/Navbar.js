import React from 'react'
import './style.css'

import logo from '../../assets/icons/logo.png'
import { Link } from 'react-router-dom'


export default function LandingPage() {
    return (
        <>
            <aside className='mainContainer flex justify-between items-center'>
                <Link className='navbarText logoBtn ml-32 flex gap-2' to='/' onClick={()=> window.location.reload()}>
                    <img src={logo} className='logoImage h-8 w-8' alt="Logo" />
                    My Ride
                </Link>
                <aside className='navbarText flex gap-32 mr-20'>
                    <Link className='loginBtn' to='/login'>
                        Login
                    </Link>
                    <Link className='registerBtn' to='/register'>
                        Register
                    </Link>
                    <Link className='helpBtn' to='/help'>
                        Help
                    </Link>
                    <Link className='aboutBtn' to='/about'>
                        About
                    </Link>
                </aside>
            </aside>
        </>
    )
}
