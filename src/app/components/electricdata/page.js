'use client'
import React, { useState } from 'react'
import './ten.css'
import './data.css'
import dataTen from './data'
import Navbar from '../Navbar/Navbar'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Footer from '../Footer/Footer'





// const sortDataByPriceLowToHigh = () => {
//  dataTen.sort((a, b) => {
//     const priceA = parseFloat(a.price.split('Rs. ')[1].split(' Lakh')[0]);
//     const priceB = parseFloat(b.price.split('Rs. ')[1].split(' Lakh')[0]);
//     return priceA - priceB;
//   });

// };




 function electricData() {


  const [data, setData] = useState(dataTen);

  const sortDataByPriceLowToHigh = () => {
    const sortedData = [...data].sort((a, b) => {
      const priceA = parseFloat(a.price.split('Rs. ')[1].split(' Lakh')[0]);
      const priceB = parseFloat(b.price.split('Rs. ')[1].split(' Lakh')[0]);
      return priceA - priceB;
    });

    setData(sortedData); // Update the state with the sorted data
  };

  const sortDataByPriceHighToLow = () => {
    const sortedData = [...data].sort((a, b) => {
      const priceA = parseFloat(a.price.split('Rs. ')[1].split(' Lakh')[0]);
      const priceB = parseFloat(b.price.split('Rs. ')[1].split(' Lakh')[0]);
      return priceB - priceA; // Sort in descending order (high to low)
    });
    setData(sortedData);
  };

  const sortMileageByHighToLow = () => {
    const sortedData = [...data].sort((a, b) => {
      const mileageA = parseFloat(a.mileage.split(' kmpl')[0]);
    const mileageB = parseFloat(b.mileage.split(' kmpl')[0]);
    return mileageB - mileageA;// Sort in descending order (high to low)
    });
    setData(sortedData);
  };

  const sortFuelByHighToLow = () => {
    const sortedData = [...data].sort((a, b) => {
      const mileageA = parseFloat(a.fuel.split(' kmpl')[0]);
    const mileageB = parseFloat(b.fuel.split(' kmpl')[0]);
    return mileageB - mileageA;// Sort in descending order (high to low)
    });
    setData(sortedData);
  };

  const sortEngineByHighToLow = () => {
    const sortedData = [...data].sort((a, b) => {
      const engineA = parseFloat(a.engine.split(' cc')[0]);
    const engineB = parseFloat(b.engine.split(' cc')[0]);
    return engineB - engineA;// Sort in descending order (high to low)
    });
    setData(sortedData);
  };



  return (
    <div>
      
    <Navbar/>
<div class='drop-ss'>
  
  <Button onClick={sortDataByPriceLowToHigh} className='color-gradience'> Price Low to High </Button>
  <Button onClick={sortDataByPriceHighToLow} className='color-gradience'> Price High to Low </Button>
  <Button onClick={sortMileageByHighToLow} className='color-gradience'> More Range </Button>
  {/* <Button onClick={sortFuelByHighToLow}> Fuel Tank Capacity </Button> */}
  <Button onClick={sortEngineByHighToLow} className='color-gradience'> More Engine Power </Button>
</div>
<ul class="cards">
  {data.map((item,index)=>(
 <li>
<article class="cardsess">
  <img
    class="cardsess__background"
    src={item.img}
    alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
    width="1920"
    height="2193"
  />
  <div class="cardsess__content | flow">
    <div class="cardsess__content--container | flow">
      <h2 class="cardsess__title">{item.title}</h2>
      <p class="cardsess__description">
       Price:- {item.price}<br/> 
       Motor Power:- {item.engine}<br/>
       Range:- {item.mileage}<br/>
       Seating Capacity:- {item.seating}

        </p>
    </div>
  </div>
</article>    
</li>
  ))}
 

</ul>
<Footer/>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.min.js"
  integrity="sha384-123456"
  crossorigin="anonymous"
></script>
</div>

  )
};

export default electricData;
