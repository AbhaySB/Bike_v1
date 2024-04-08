import React from 'react'

import './style.css'

export default function BrandCard(props) {
  return (
    <div className='BrandCardMain flex justify-center items-center'>
      <img src={props.image} alt="" />
    </div>
  )
}
