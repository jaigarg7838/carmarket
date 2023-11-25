import React,{useState} from 'react'



const dataTen = [
  {
    title:"TOYOTA FORTUNER",
    img: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/44709/fortuner-exterior-left-front-three-quarter.jpeg?q=80",
    price: "Rs.33.43 Lakh - Rs. 51.44 Lakh",
    mileage:"10.00 kmpl",
    engine:"2694cc",
    seating:" 7 Seater",
    fuel:"80.0 Litres"
  },
  {
    title:"TOYOTA CAMRY",
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Camry/10926/1690544712715/front-left-side-47.jpg",
    price: "Rs. 46.17 Lakh",
    mileage:"9.98 kmpl",
    engine:"2487cc",
    seating:" 5 Seater",
    fuel:"50.0 Litres"
  },
  {
    title:"MERCEDES-BENZ GLA",
    img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/44784/gla-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
    price: "Rs. 48.50 Lakh - Rs. 52.70 Lakh",
    mileage:"10.79 kmpl",
    engine:"1332cc",
    seating:" 5 Seater",
    fuel:"70.0 Litres"
  },
    {
      title:"TOYOTA HILUX",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Hilux/10924/1691990326111/front-left-side-47.jpg",
      price: "Rs. 30.40 Lakh - Rs. 37.90 Lakh",
      mileage:"14.0 kmpl",
      engine:"2755cc",
      seating:" 5 Seater",
      fuel:"80.0 Litres"

    },
    {
      title:"BMW X1",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/X1/10064/1683261436040/front-left-side-47.jpg",
      price: "Rs. 45.90 Lakh - Rs. 51.60 Lakh",
      mileage:"16.53 kmpl",
      engine:"1499cc",
      seating:" 5 Seater",
      fuel:"51.0 Litres"
    },
    {
      title:"MG GLOSTER",
      img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20200925120306_Gloster-lead-image.jpg&w=726&h=482&q=75&c=1",
      price: "Rs. 38.80 Lakh - Rs. 43.87 Lakh",
      mileage:"13.92 kmpl",
      engine:"1996cc",
      seating:" 7 Seater",
      fuel:"75.0 Litres"
      },
      {
        title:"AUDI A4",
      img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20220208104501_Audi_A4_LT_1.jpg",
      price: "Rs. 43.85 Lakh - Rs. 51.85 Lakh",
      mileage:"12.28 kmpl",
      engine:"1984cc",
      seating:" 5 Seater",
      fuel:"54.0 Litres"
      },
      {
        title:"VOLKSWAGEN TIGUAN",
        img: "https://img-ik.cars.co.za/news-site-za/images/2020/07/2021-VW-Tiguan-R-9.jpg?tr=h-347,w-617",
        price: "Rs. 35.17 Lakh",
        mileage:"12.65 kmpl",
        engine:"1984cc",
        seating:" 5 Seater",
        fuel:"60.0 Litres"
      },
      {
        title:"TOYOTA FORTUNER LEGENDER",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner-Legender/10229/1686033870927/front-left-side-47.jpg",
        price: "Rs. 43.67 Lakh - Rs. 47.64 Lakh",
        mileage:"10.00 kmpl",
        engine:"2755cc",
        seating:" 7 Seater",
        fuel:"80.0 Litres"
      },
      {
        title:"SKODA KODIAQ",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Skoda/Kodiaq/9829/1691573278237/front-left-side-47.jpg",
      price: "Rs. 38.50 Lakh - Rs. 41.95 Lakh",
      mileage:"12.78 kmpl",
      engine:"1984cc",
      seating:" 7 Seater",
      fuel:"58.0 Litres"
      },
      {
        title:"JEEP MERIDIAN",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Jeep/Meridian/11327/1698222546625/front-left-side-47.jpg",
        price: "Rs.33.40 Lakh - Rs. 39.46 Lakh",
        mileage:"10.76 kmpl",
        engine:"1956cc",
        seating:" 7 Seater",
        fuel:"60.0 Litres"
      },
      {
        title:"AUDI Q3",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/Q3-Sportback/10568/1689596340846/front-left-side-47.jpg",
        price: "Rs. 46.27 Lakh - Rs. 51.94 Lakh",
        mileage:"11.99 kmpl",
        engine:"1984cc",
        seating:" 5 Seater",
        fuel:"62.0 Litres"
      },
      {
        title:"BMW 2 SERIES",
      img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/2-Series/10577/1689667139509/front-left-side-47.jpg",
      price: "Rs. 43.50 Lakh - Rs. 46.00 Lakh",
      mileage:"14.82 kmpl",
      engine:"1998cc",
      seating:" 5 Seater",
      fuel:"50.0 Litres"
      },
      {
        title:"ISUZU MU-X",
        img: "https://imgd.aeplcdn.com/664x374/n/cw/ec/48084/mu-x-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
        price: "Rs. 35.00 Lakh - Rs. 37.90 Lakh",
        mileage:"12.31 kmpl",
        engine:"1898cc",
        seating:" 7 Seater",
        fuel:"55.0 Litres"
      },
      {
        title:"CITROEN C5 AIRCROSS",
        img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Citroen/C5-Aircross/10948/1690897068289/front-left-side-47.jpg",
        price: "Rs. 36.91 Lakh - Rs. 37.67 Lakh",
        mileage:"17.50 kmpl",
        engine:"1997cc",
        seating:" 5 Seater",
        fuel:"53.0 Litres"
      },
      {
        title:"MINI COOPER COUNTRYMAN",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210305021413_Mini_Countryman.jpg",
        price: "Rs. 48.10 Lakh - Rs. 49.00 Lakh",
        mileage:"14.34 kmpl",
        engine:"1998cc",
        seating:" 5 Seater",
        fuel:"51.0 Litres"
      },
      {
        title:"MINI COOPER 3 DOOR",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20210622041750_mini_convertible.jpg&w=700&q=90&c=1",
        price: "Rs. 42.70 Lakh",
        mileage:"17.33 kmpl",
        engine:"1998cc",
        seating:" 4 Seater",
        fuel:"44.0 Litres"
      },
      {
        title:"MERCEDES-BENZ A-CLASS LIMOUSINE",
        img: "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20180424061458_Merc-A-class-front-brown-1.jpg&w=872&h=578&q=75&c=1",
        price: "Rs. 45.80 Lakh",
        mileage:"15.80 kmpl",
        engine:"1332cc",
        seating:" 5 Seater",
        fuel:"51.0 Litres"
      },
    
      {
        title:"HYUNDAI IONIQ 5",
        img: "https://etimg.etb2bimg.com/photo/87978583.cms",
        price: "Rs. 45.90 Lakh",
        mileage:"481 km/charge",
        engine:"electric",
        seating:" 5 Seater",
        fuel:"----"
      },
    
    
  ];


  





  export default dataTen;