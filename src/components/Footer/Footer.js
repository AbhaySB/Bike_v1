import React from 'react'

import './style.css'
import { Link } from 'react-router-dom'
import LinkedInLogo from '../../assets/icons/linkedIn.png'
import GithubLogo from '../../assets/icons/github.png'

export default function Footer() {
    return (
        <div className='footerContainer flex justify-between items-center'>
            <div className='m-5 p-12 flex flex-col'>
                <h1>
                    Explore the world of bikes with us.
                </h1>
                <p>
                    Contact us at usernameabhay17@gmail.com for inquiries and collaborations.
                </p>
                <p className=''>
                    All rights reserved. © 2024. Unauthorized use prohibited.
                </p>
            </div>
            <div className='w-60 h-20 mr-24'>
                <div className='flex justify-center'>
                    Developer : Abhay Singh
                </div>
                <div className='flex justify-center items-center'>
                    <Link to="https://www.linkedin.com/in/abhay9919/" target="_blank">
                        <img className='w-8 h-8' src={LinkedInLogo} alt="" />
                    </Link>
                    <Link to="https://github.com/AbhaySB" target="_blank">
                        <img className='w-12 h-12' src={GithubLogo} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
