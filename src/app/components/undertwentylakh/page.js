'use client'
import React, { useState } from 'react'
import './ten.css'
import dataTen from './data'
import Navbar from '../Navbar/Navbar'
import { Button } from '@nextui-org/react'
import Footer from '../Footer/Footer'




// const sortDataByPriceLowToHigh = () => {
//  dataTen.sort((a, b) => {
//     const priceA = parseFloat(a.price.split('Rs. ')[1].split(' Lakh')[0]);
//     const priceB = parseFloat(b.price.split('Rs. ')[1].split(' Lakh')[0]);
//     return priceA - priceB;
//   });

// };




 function TenLakh() {


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
 
  <Button onClick={sortDataByPriceLowToHigh} shadow color="gradient"> Price Low to High </Button>
  <Button onClick={sortDataByPriceHighToLow} shadow color="gradient"> Price High to Low </Button>
  <Button onClick={sortMileageByHighToLow} shadow color="gradient"> More Average </Button>
  <Button onClick={sortFuelByHighToLow} shadow color="gradient"> Fuel Tank Capacity </Button>
  <Button onClick={sortEngineByHighToLow} shadow color="gradient"> More Engine Power </Button>
</div>
<ul class="cards">
  {data.map((item,index)=>(
 <li>
 <a href="" class="cardes">
   <img src={item.img}class="card__imagess" alt="" />
   <div class="card__overlayss">
     <div class="card__headerss">
       <svg class="card__arcss" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
       <img class="card__thumbss" src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Monogram-CM-Logo-by-Greenlines-Studios.jpg" alt="" />
       <div class="card__headerss-text">
       <h3 class="card__titless"><i><b> {item.title}</b></i></h3>            
         <span class="card__statusss"><b>{item.price} </b> </span>
       </div>
     </div>
     <p class="card__descriptionss"><b>Mileage:</b>{item.mileage}<br/><b> Engine Power Option:-</b>{item.engine}<br/><b>Fuel Tank Capacity:-</b>{item.fuel} <br/>
     <b>Seating Capacity:-</b>{item.seating}</p>
   </div>
 </a>      
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

export default TenLakh;
