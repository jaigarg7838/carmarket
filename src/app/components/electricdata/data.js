import React,{useState} from 'react'



const dataTen = [
      {
        title:"TATA TIAGO EV",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tiago-EV/6279/1676111344905/front-left-side-47.jpg",
        price: "Rs. 8.69 Lakh - Rs. 12.04 Lakh",
        mileage:"250-315 km/charge",
        engine:"73.75bhp",
        seating:" 5 Seater",
       
      },
      {
        title:"MG COMET EV",
        img: "https://carindia.in/wp-content/uploads/2023/04/DSC01111-01-640x469.jpeg",
        price: "Rs. 7.98 Lakh - Rs. 9.98 Lakh",
        mileage:"230 Km/charge",
        engine:"41.42bhp",
        seating:" 4 Seater",
       
      },
      {
        title:"TATA NEXON EV",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV-2023/11024/1694146347051/front-left-side-47.jpg",
        price: "Rs. 14.74 Lakh - Rs. 19.94 Lakh",
        mileage:"465 Km/charge",
        engine:"142.68bhp",
        seating:" 5 Seater",
       
      },
      {
        title:"KIA EV6",
        img: "https://cdni.autocarindia.com/ExtraImages/20210331025034_Kia_EV6_GT_001.jpg",
        price: "Rs. 60.95 Lakh - Rs. 65.95 Lakh",
        mileage:"708 Km/charge",
        engine:"320.55bhp",
        seating:" 5 Seater",
       
      },   {
        title:"MAHINDRA XUV400 EV",
        img: "https://img.onmanorama.com/content/dam/mm/en/news/business/images/2023/1/17/mahindra-xuv400.jpg",
        price: "Rs. 15.99 Lakh - Rs. 19.39 Lakh",
        mileage:"456 Km/charge",
        engine:"147.51bhp",
        seating:" 5 Seater",
       
      },   {
        title:"BMW I7",
        img: "https://imgd.aeplcdn.com//642x361//n/cw/ec/152081/bmw-i7-right-front-three-quarter4.jpeg?isig=0&wm=1&q=75",
        price: "Rs. 200.03 Lakh - Rs. 250.00 Lakh",
        mileage:"590 Km/charge",
        engine:"536.40bhp",
        seating:" 5 Seater",
       
      },   {
        title:"TATA TIGOR EV",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tigor-EV/9458/1675751484779/front-left-side-47.jpg",
        price: "Rs. 12.49 Lakh - Rs. 13.75 Lakh",
        mileage:"315 Km/charge",
        engine:"73.75bhp",
        seating:" 5 Seater",
       
      },   {
        title:"BMW IX",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg",
        price: "Rs. 121.00 Lakh",
        mileage:"446 Km/charge",
        engine:"321.84bhp",
        seating:" 5 Seater",
       
      },   {
        title:"MG ZS EV",
        img: "https://images.hindustantimes.com/auto/img/2021/02/10/1600x900/ZS_EV_3_1612773064600_1612773078718_1612948001829.jpg",
        price: "Rs. 22.88 Lakh - Rs. 26.00 Lakh",
        mileage:"461 Km/charge",
        engine:"174.33bhp",
        seating:" 5 Seater",
       
      },   {
        title:"HYUNDAI KONA ELECTRIC",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Kona/6228/1658735368758/front-left-side-47.jpg",
        price: "Rs. 23.84 Lakh - Rs. 24.03 Lakh",
        mileage:"452 Km/charge",
        engine:"134.10bhp",
        seating:" 5 Seater",
       
      },   {
        title:"BMW I4",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220823035920_DSC00555.jpg&w=726&h=482&q=75&c=1",
        price: "Rs. 72.50 Lakh - Rs. 77.50 Lakh",
        mileage:"493 Km/charge",
        engine:"335.25bhp",
        seating:" 5 Seater",
       
      },   {
        title:"LOTUS ELETRE",
        img: "https://www.topgear.com/sites/default/files/2022/10/Lotus%20Eletre%20hero%20image_1.jpg",
        price: "Rs. 255.00 Lakh - Rs. 299.00 Lakh",
        mileage:"600 Km/charge",
        engine:"603.46bhp",
        seating:" 5 Seater",
       
      },
      {
        title:"BYD ATTO 3",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BYD/Atto-3/9307/1673519348297/front-left-side-47.jpg",
        price: "Rs. 33.99 Lakh - Rs. 34.49 Lakh",
        mileage:"521 Km/charge",
        engine:"201.15bhp",
        seating:" 5 Seater",
       
      }, 
      {
        title:"CITROEN EC3",
        img: "https://ds-prod.citroen.in/static-assets/ds-static/s3fs-public/2023-01/Citroen_eC3_Banner_800x730_1_0.jpg?lOGrgXXYpeAYa9aayAuBM.9BbD49feF3",
        price: "Rs. 11.61 Lakh - Rs. 12.79 Lakh",
        mileage:"320 Km/charge",
        engine:"56.22bhp",
        seating:" 5 Seater",
       
      }, 
      {
        title:"BYD E6",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220830030414_BYD_E6_front_static.jpg&w=700&q=90&c=1",
        price: "Rs. 29.15 Lakh",
        mileage:"415 Km/charge",
        engine:"93.87bhp",
        seating:" 5 Seater",
       
      }, 
      {
        title:"AUDI E-TRON",
        img: "https://www.audi-mediacenter.com/system/production/media/71164/images/a41672e1a01de586f023e4491da3f88548b52984/A1814539_web_2880.jpg?1698345785",
        price: "Rs. 100.02 Lakh - Rs. 126.00 Lakh",
        mileage:"582 Km/charge",
        engine:"300bhp",
        seating:" 5 Seater",
       
      }, 
      {
        title:"MERCEDES-BENZ EQS",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221012011708_EQS_akbar_colour_correction.jpeg&w=700&q=90&c=1",
        price: "Rs. 159.00 Lakh",
        mileage:"857 Km/charge",
        engine:"516.29bhp",
        seating:" 5 Seater",
       
      }, 
      {
        title:"VOLVO X40 RECHARGE",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51766/xc40-recharge-exterior-left-front-three-quarter.jpeg?q=80",
        price: "Rs. 56.90 Lakh",
        mileage:"418 Km/charge",
        engine:"408.00bhp",
        seating:" 5 Seater",
       
      }, 
      {
        title:"VOLVO C40 RECHARGE",
        img: "https://images.hindustantimes.com/auto/img/2023/09/03/1600x900/Volvo_C40_Recharge_Review_1693024675545_1693714295233.jpg",
        price: "Rs. 62.95 Lakh",
        mileage:"530 Km/charge",
        engine:"402.30bhp",
        seating:" 5 Seater",
       
      }, 
      {
        title:"AUDI E-TRON GT",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20211026063734_Audi_e_Tron_GT_lead.jpg&w=726&h=482&q=75&c=1",
        price: "Rs. 173.00 Lakh",
        mileage:"401 Km/charge",
        engine:"522.99bhp",
        seating:" 5 Seater",
       
      }, 
      {
        title:"Mercedes-Benz EQE SUV",
        img: "https://www.mercedes-benz.com.au/content/dam/hq/passengercars/cars/eqe/suv-x294-pi/overview/teaser/10-2022/images/mercedes-benz-eqe-suv-x294-hightlights-videostill-3302x1858-10-2022.jpg",
        price: "Rs. 139.00 Lakh",
        mileage:"645 Km/charge",
        engine:"402.30bhp",
        seating:" 5 Seater",
       
      }, 
      {
        title:"BMW IX1",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230928011454_ertwert.jpg&w=700&q=90&c=1",
        price: "Rs. 66.90 Lakh",
        mileage:"440 Km/charge",
        engine:"308.43bhp",
        seating:" 5 Seater",
       
      }, 
    
  ];


  





  export default dataTen;