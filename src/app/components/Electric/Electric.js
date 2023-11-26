import React from 'react'
import './electric.css'
import { Button } from '@nextui-org/react';
import electricData from '../electricdata/page';
import Link from 'next/link';


export default function Electric() {

  return (
    <>
    <div className='electric-home' id="Electric">
        {/* <div>
            <h1>Wanna try Electric</h1>
            <h3>Let's Explore the Electric car with us</h3>
        
        </div> */}
        <div class="wrapper">
      <figure class="cardss">
        <img
          src="https://etimg.etb2bimg.com/photo/97130541.cms"
          width="640"
          height="640"
          alt=""
        />
        <figcaption>
          <blockquote>
            Wanna Go Electric.
          </blockquote>
          <cite
            >Let's Explore the world of Electric Car with Us.
            </cite>
            <cite>
                <Button>
                    <Link href="/components/electricdata"> Explore</Link></Button>
            </cite>
          <p class="credit" >
            <strong>Electric</strong> 
          </p>
        </figcaption>
      </figure>
    </div> 
    </div>
    </>
  );
}
