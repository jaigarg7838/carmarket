import React,{useState} from 'react'



const dataTen = [
  {
    title:"HYUNDAI EXTER",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Exter/10443/1694584843066/front-left-side-47.jpg",
    price: "Rs. 6.00 Lakh - Rs. 10.10 Lakh",
    mileage:"19.40 kmpl",
    engine:"1197cc",
    seating:" 5 Seater",
    fuel:"37.0 Litres"
  },
  {
    title:"TATA PUNCH",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Punch/10681/1691392713058/front-left-side-47.jpg",
    price: "Rs. 6.00 Lakh - Rs. 10.10 Lakh",
    mileage:"20.09 kmpl",
    engine:"1199cc",
    seating:" 5 Seater",
    fuel:"37.0 Litres"
  },
  {
    title:"MARUTI FRONX",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/FRONX/9243/1673943130006/front-left-side-47.jpg",
    price: "Rs. 7.46 Lakh - Rs. 13.33 Lakh",
    mileage:"21.79 kmpl",
    engine:"1197cc",
    seating:" 5 Seater",
    fuel:"37.0 Litres"
  },
    {
      title:"KIA SONET",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Sonet/10879/1690461063637/front-left-side-47.jpg",
      price: "Rs. 7.79 Lakh - Rs. 14.89 Lakh",
      mileage:"19.0 kmpl",
      engine:"998cc - 1493cc",
      seating:" 5 Seater",
      fuel:"45.0 Litres"

    },
    {
      title:"MARUTI SUZUKI BALENO",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Baleno/10497/1689584210485/front-left-side-47.jpg",
      price: "Rs. 6.61 Lakh - Rs. 9.88 Lakh",
      mileage:"19.56 kmpl",
      engine:"1197cc",
      seating:" 5 Seater",
      fuel:"37.0 Litres"
    },
    {
      title:"MARUTI SUZUKI SWIFT",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/10402/1688128138547/front-left-side-47.jpg",
      price: "Rs. 5.99 Lakh - Rs. 9.03 Lakh",
      mileage:"23.76 kmpl",
      engine:"1197cc",
      seating:" 5 Seater",
      fuel:"37.0 Litres"
      },
      {
        title:"HYUNDAI i20",
      img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-left-front-three-quarter-5.jpeg?isig=0&q=80",
      price: "Rs. 6.99 Lakh - Rs. 11.16 Lakh",
      mileage:"20.28 kmpl",
      engine:"998cc - 1493cc",
      seating:" 5 Seater",
      fuel:"37.0 Litres"
      },
      {
        title:"TATA ALTROZ",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Altroz/10707/1690032362798/front-left-side-47.jpg",
        price: "Rs. 6.60 Lakh - Rs. 10.74 Lakh",
        mileage:"25.11 kmpl",
        engine:"1199cc - 1497cc",
        seating:" 5 Seater",
        fuel:"37.0 Litres"
      },
      {
        title:"HYUNDAI VENUE",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/10142/1684739946788/front-left-side-47.jpg",
        price: "Rs. 7.77 Lakh - Rs. 13.48 Lakh",
        mileage:"18.15 kmpl",
        engine:"998cc - 1493cc",
        seating:" 5 Seater",
        fuel:"45.0 Litres"
      },
      {
        title:"TATA NEXON",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon/11104/1697698470038/front-left-side-47.jpg",
      price: "Rs. 8.10 Lakh - Rs. 15.50 Lakh",
      mileage:"21.5 kmpl",
      engine:"1199cc - 1499cc",
      seating:" 5 Seater",
      fuel:"44.0 Litres"
      },
      {
        title:"MARUTI VITARA BREZZA",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Brezza/10388/1694424068944/front-left-side-47.jpg",
        price: "Rs. 8.29 Lakh - Rs. 14.14 Lakh",
        mileage:"18.76 kmpl",
        engine:"1462cc",
        seating:" 5 Seater",
        fuel:"48.0 Litres"
      },
      {
        title:"MARUTI ERTIGA",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ertiga/10293/1687252933647/front-left-side-47.jpg",
        price: "Rs. 8.64 Lakh - Rs. 13.08 Lakh",
        mileage:"17.99 kmpl",
        engine:"1462cc",
        seating:" 7 Seater",
        fuel:"45.0 Litres"
      },
      {
        title:"MAHINDRA XUV 300",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/XUV300/10770/1690267108916/front-left-side-47.jpg",
      price: "Rs. 7.99 Lakh - Rs. 14.76 Lakh",
      mileage:"20.00 kmpl",
      engine:"1197cc - 1497cc",
      seating:" 5 Seater",
      fuel:"42.0 Litres"
      },
      {
        title:"MARUTI SUZUKI DZIRE",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift-Dzire/10243/1686044076724/front-left-side-47.jpg",
        price: "Rs. 6.51 Lakh - Rs. 9.39 Lakh",
        mileage:"24.12 kmpl",
        engine:"1197cc",
        seating:" 5 Seater",
        fuel:"37.0 Litres"
      },
      {
        title:"MARUTI WAGON R",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Wagon-R/10365/1687580655855/front-left-side-47.jpg",
        price: "Rs. 5.54 Lakh - Rs. 7.42 Lakh",
        mileage:"20.52 kmpl",
        engine:"998cc - 1197cc",
        seating:" 5 Seater",
        fuel:"32.0 Litres"
      },
      {
        title:"TATA TIAGO",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tiago/10657/1690023230928/front-left-side-47.jpg",
        price: "Rs. 5.60 Lakh - Rs. 8.20 Lakh",
        mileage:"23.84 kmpl",
        engine:"1197cc",
        seating:" 5 Seater",
        fuel:"35.0 Litres"
      },
      {
        title:"HONDA AMAZE",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Features/DSC_7272.jpg&w=700&q=90&c=1",
        price: "Rs. 7.10 Lakh - Rs. 9.71 Lakh",
        mileage:"24.70 kmpl",
        engine:"1199cc - 1498cc",
        seating:" 5 Seater",
        fuel:"35.0 Litres"
      },
      {
        title:"HYUNDAI AURA",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Aura/10126/1694588549389/front-left-side-47.jpg",
        price: "Rs. 6.33 Lakh - Rs. 8.90 Lakh",
        mileage:"25.40 kmpl",
        engine:"998cc - 1197cc",
        seating:" 5 Seater",
        fuel:"37.0 Litres"
      },
    
      {
        title:"TATA TIAGO EV",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Tiago-EV/6279/1676111344905/front-left-side-47.jpg",
        price: "Rs. 8.69 Lakh - Rs. 12.04 Lakh",
        mileage:"250-315 km/charge",
        engine:"electric",
        seating:" 5 Seater",
        fuel:"----"
      },
      {
        title:"MG COMET EV",
        img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Comet-EV/9391/1682077644177/front-left-side-47.jpg?imwidth=420&impolicy=resize",
        price: "Rs. 7.98 Lakh - Rs. 9.98 Lakh",
        mileage:"230 Km/charge",
        engine:"electric",
        seating:" 4 Seater",
        fuel:"----"
      },
      {
        title:"TOYOTA GLANZA",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Glanza/10231/1686812796183/front-left-side-47.jpg",
        price: "Rs. 6.81 Lakh - Rs. 10.00 Lakh",
        mileage:"22.35 kmpl",
        engine:"1197cc",
        seating:" 5 Seater",
        fuel:"37.0 Litres"
      },
    
  ];


  





  export default dataTen;