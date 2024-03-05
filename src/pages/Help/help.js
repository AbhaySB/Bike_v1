import React from 'react'

import './style.css'
import Navbar from '../../components/MainNavbar/MainNavbar';
import Footer from '../../components/Footer/Footer';
import GitHub from '../../assets/icons/github.png'
import LinkedIn from '../../assets/icons/linkedIn.png'
import MailIcon from '../../assets/icons/MailIcon.png'
import { Link } from 'react-router-dom';

export default function help() {
    return (
        <>
            <Navbar />
            <div className='MainHelpContainer'>
                <div className='SecondHelpContainer'>
                    <div className='flex justify-center items-center gap-1'>
                        <h1 className='flex justify-center h-28 items-center text-3xl' >contact us</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </div>

                    <div className='HelpIconsContainer flex justify-evenly items-center gap-1 h-80 p-10'>
                        <Link className='HelpInnerContainer' to="https://github.com/AbhaySB" target='_blank'>
                            <img src={GitHub} alt="" className='IconsOfHelp h-40' />
                            <p className="text-balance">Need support? Visit my GitHub profile for assistance and to report any issues. Click the Box to access my GitHub page.</p>
                        </Link>
                        <Link className='HelpInnerContainer' to="mailto:usernameabhay17@gmail.com" target='_blank'>
                            <img src={MailIcon} alt="" className='IconsOfHelp h-32 m-6'/>
                            <p className="text-balance">
                                Have a question or need assistance? Feel free to reach out to me via email. Click the Box to send me a message directly.
                            </p>
                        </Link>
                        <Link className='HelpInnerContainer' to="https://www.linkedin.com/in/abhay9919/" target='_blank'>
                            <img src={LinkedIn} alt="" className='IconsOfHelp h-28 m-6' />
                            <p className="text-balance">
                                Connect with me on LinkedIn for professional inquiries, networking opportunities, and more. Click the Box to visit my LinkedIn profile
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
