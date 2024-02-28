import React from 'react'

import './style.css'
import BikeIcon from '../../assets/icons/bike.png'

export default function BikeNews() {
    return (
        <div className='BikeNewsContainer'>
            <div className='BikeNewsSecondContainer'>
                <div className='bikeNewsImg'>
                    <img src={BikeIcon} alt="" />
                </div>
                <div className='bikeNewsContent'>
                    <h1 className='m-2 text-3xl '>Heading</h1>
                    <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adpsum dolor sit amet consectetur adipisicing elit. Perferendis, quae vel. Eos temporibus dignissimos itaque dolore, nulla ab harum vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error expedita dignissimos vero velit, minima voluptate nisi quasi excepturi fugit facilis itaque amet facere inventore quod dicta ipsum aut, quam explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa totam blanditiis illum esse est quaerat saepe neque suscipit at iste!!</p>
                </div>
            </div>
        </div>
    )
}
