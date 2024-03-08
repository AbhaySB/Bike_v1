import React from 'react'

import './style.css'
import z1000 from '../../assets/bikeImages/z1000.png'
import { Link } from 'react-router-dom'

export default function AboutBike() {
    return (
        <div className='AboutBikeMainContainer'>
            <div>
                <div className=''>
                    <img src={z1000} alt="" />
                </div>
                <div className=''>
                    <div className='flex justify-center m-3 text-2xl'>
                        <h1>Kawasaki Ninja Z1000</h1>
                    </div>
                    <div className='text-center'>
                        <p>
                            The Kawasaki Z1000 is a sporty motorcycle loved for its powerful engine, aggressive design, and responsive handling. With a 1,000cc four-cylinder engine, it offers thrilling rides and comfortable commuting.
                        </p>
                    </div>
                    <div className='flex justify-center gap-3'>
                        <Link className='VisitBtnAboutBike flex justify-center items-center rounded-md'>
                            Visit Kawasaki
                        </Link>
                        <Link className='VisitBtnAboutBike flex justify-center items-center rounded-md'>
                            Visit Kawasaki
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
