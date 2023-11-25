import { useRouter } from 'next/navigation'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Homepage() {
  return (
    <>
    <div className='homepage' id='Homepage'>
      <div className='homepage-text word-by-word'>
        <h1><span>Welcome to the CarMarket</span></h1>
        <h4><span>A place to suggest you the car under your budget</span></h4>
      </div>
    </div>
    <div>
{/* <SimpleSlider /> */}
    </div>
    </>
  )
}


