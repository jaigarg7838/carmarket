'use client'
import Image from 'next/image'
import  './page.module.css'
import './styles/custom.css'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useEffect } from 'react'
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'
import Budget from './components/Budget/Budget'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Electric from './components/Electric/Electric'




export default function Home() {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])



  return (
    <main >
<Navbar/>
    <Homepage/>
    <About />
    <Budget/>
    <Electric/>
    <Footer/>
    </main>
    
  )
  
}
