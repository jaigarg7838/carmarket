import React,{useState} from 'react'



const dataTen = [
  {
    title:"MAHINDRA THAR",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg",
    price: "Rs. 10.98 Lakh - Rs. 16.94 Lakh",
    mileage:"15.2 kmpl",
    engine:"l2184cc",
    seating:" 4 Seater",
    fuel:"57.0 Litres"
  },
  {
    title:"MAHINDRA XUV700",
    img: "https://etimg.etb2bimg.com/photo/101457372.cms",
    price: "Rs. 14.03 Lakh - Rs. 26.57 Lakh",
    mileage:"15.09 kmpl",
    engine:"1999cc",
    seating:" 5 Seater",
    fuel:"60.0 Litres"
  },
  {
    title:"HYUNDAI CRETA",
    img: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/141115/creta-exterior-right-front-three-quarter-16.jpeg?isig=0&q=80&q=80",
    price: "Rs. 10.87 Lakh - Rs. 19.20 Lakh",
    mileage:"17.00 kmpl",
    engine:"1498cc",
    seating:" 5 Seater",
    fuel:"50.0 Litres"
  },
  {
    title:"HONDA ELEVATE",
    img: "https://cdni.autocarindia.com/ExtraImages/20230606011216_honda_elevate.jpg",
    price: "Rs.11.00 Lakh - Rs. 16.20 Lakh",
    mileage:"16.92 kmpl",
    engine:"1498cc",
    seating:" 5 Seater",
    fuel:"40.0 Litres"
  },
  {
    title:"TOYOTA URBAN CRUISER HYRYDER",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Hyryder/10910/1690544495925/front-left-side-47.jpg",
    price: "Rs.10.86 Lakh - Rs. 19.99 Lakh",
    mileage:"26.60 kmpl",
    engine:"1462cc",
    seating:" 5 Seater",
    fuel:"45.0 Litres"
  },
  {
    title:"MARUTI JIMNY",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Jimny/6182/1686117643111/front-left-side-47.jpg",
    price: "Rs.12.74 Lakh - Rs. 15.05 Lakh",
    mileage:"16.39 kmpl",
    engine:"1462cc",
    seating:" 4 Seater",
    fuel:"40.0 Litres"
  },
    {
      title:"KIA SELTOS",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg",
      price: "Rs. 10.90 Lakh - Rs. 20.30 Lakh",
      mileage:"17.0 kmpl",
      engine:"1497cc",
      seating:" 5 Seater",
      fuel:"50.0 Litres"

    },
    {
      title:"TATA HARRIER",
      img: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/139139/harrier-facelift-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80&q=80",
      price: "Rs.15.49 Lakh - Rs. 26.44 Lakh",
      mileage:"16.80 kmpl",
      engine:"1956cc",
      seating:" 5 Seater",
      fuel:"50.0 Litres"
    },
    {
      title:"HYUNDAI VERNA",
      img: "https://www.financialexpress.com/wp-content/uploads/2023/02/2023-Hyundai-Verna.jpg",
      price: "Rs.10.96 Lakh - Rs. 17.38 Lakh",
      mileage:"20.00 kmpl",
      engine:"1482cc",
      seating:" 5 Seater",
      fuel:"45.0 Litres"
    },
    {
      title:"TATA SAFARI",
      img: "https://cars.tatamotors.com/images/safari/iconic-design-2023.jpg",
      price: "Rs.16.19 Lakh - Rs. 27.34 Lakh",
      mileage:"16.30 kmpl",
      engine:"1956cc",
      seating:" 7 Seater",
      fuel:"50.0 Litres"
    },
    
    {
      title:"MG HECTOR",
      img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230208094150_500_1740.JPG&w=726&h=482&q=75&c=1",
      price: "Rs.15.00 Lakh - Rs. 22.00 Lakh",
      mileage:"13.79 kmpl",
      engine:"1451cc",
      seating:" 5 Seater",
      fuel:"60.0 Litres"
    },
    {
      title:"HONDA CITY",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/City/9710/1677914238296/front-left-side-47.jpg",
      price: "Rs.11.63 Lakh - Rs. 16.11 Lakh",
      mileage:"18.40 kmpl",
      engine:"1498cc",
      seating:" 5 Seater",
      fuel:"40.0 Litres"
    },
    {
      title:"VOLKSWAGEN VIRTUS",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-6.jpeg?isig=0&q=80",
      price: "Rs.11.48 Lakh - Rs. 19.29 Lakh",
      mileage:"20.08 kmpl",
      engine:"999-1498cc",
      seating:" 5 Seater",
      fuel:"45.0 Litres"
    },
    {
      title:"SKODA KUSHAQ",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Kushaq/9771/1697178106968/front-left-side-47.jpg",
      price: "Rs.10.89 Lakh - Rs. 20.01 Lakh",
      mileage:"18.86 kmpl",
      engine:"1498cc",
      seating:" 5 Seater",
      fuel:"50.0 Litres"
    },    {
      title:"SKODA SLAVIA",
      img: "https://imgd.aeplcdn.com/1280x720/n/cw/ec/156661/skoda-slavia-left-front-three-quarter1.jpeg?isig=0",
      price: "Rs.10.89 Lakh - Rs. 19.12 Lakh",
      mileage:"19.47 kmpl",
      engine:"1498cc",
      seating:" 5 Seater",
      fuel:"45.0 Litres"
    },    {
      title:"VOLKSWAGEN TAIGUN",
      img: "https://www.financialexpress.com/wp-content/uploads/2023/06/Volkswagen-Virtus-and-TAIGUN-2.jpg",
      price: "Rs.11.62 Lakh - Rs. 19.76 Lakh",
      mileage:"18.41 kmpl",
      engine:"999-1498cc",
      seating:" 5 Seater",
      fuel:"50.0 Litres"
    },    {
      title:"MAHINDRA SCORPIO CLASSIC",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio-Classic/10764/1690268502010/front-left-side-47.jpg",
      price: "Rs.13.25 Lakh - Rs. 17.06 Lakh",
      mileage:"16.08 kmpl",
      engine:"2184cc",
      seating:" 7 Seater",
      fuel:"60.0 Litres"
    },
    {
      title:"HYUNDAI ALCAZAR",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/142523/alcazar-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80",
      price: "Rs.16.77 Lakh - Rs. 21.23 Lakh",
      mileage:"18.8 kmpl",
      engine:"1482cc",
      seating:" 7 Seater",
      fuel:"50.0 Litres"
    },   {
      title:"TATA NEXON EV",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV-2023/11024/1694146347051/front-left-side-47.jpg",
      price: "Rs.14.74 Lakh - Rs. 19.94 Lakh",
      mileage:"465 km/charge",
      engine:"electric",
      seating:" 5 Seater",
      fuel:"......"
    },   {
      title:"MAHINDRA XUV400 EV",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/XUV400-EV/6820/1662704228567/front-left-side-47.jpg",
      price: "Rs.15.99 Lakh - Rs. 19.39 Lakh",
      mileage:"375 km/charge",
      engine:"electric",
      seating:" 5 Seater",
      fuel:"......."
    },   {
      title:"MG ASTOR",
      img: "https://www.rushlane.com/wp-content/uploads/2022/06/mg-astor-prices-june-2022-new-1200x900.jpg",
      price: "Rs.10.82 Lakh - Rs. 18.69 Lakh",
      mileage:"15.43 kmpl",
      engine:"1498cc",
      seating:" 5 Seater",
      fuel:"45.0 Litres"
    }, 
    {
      title:"MARUTI GRAND VITARA",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Grand-Vitara/10505/1689588262879/front-left-side-47.jpg",
      price: "Rs.10.70 Lakh - Rs. 19.99 Lakh",
      mileage:"20.58 kmpl",
      engine:"1462cc",
      seating:" 5 Seater",
      fuel:"45.0 Litres"
    },
    {
      title:"KIA CARENS",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Carens/10308/1687340273074/front-left-side-47.jpg",
      price: "Rs.10.45 Lakh - Rs. 19.45 Lakh",
      mileage:"20.00 kmpl",
      engine:"1493cc",
      seating:" 7 Seater",
      fuel:"45.0 Litres"
    },
    
    
    
  ];


  





  export default dataTen;