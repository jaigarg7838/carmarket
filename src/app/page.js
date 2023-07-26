'use client'
import Image from 'next/image'
import  './page.module.css'
import './styles/custom.css'
import Navbar from './components/Navbar'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useEffect } from 'react'
import Homepage from './components/Homepage'
import About from './components/About'
import Budget from './components/Budget'
import Footer from './components/Footer'


export default function Home() {

  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])

  return (
    <main >
    <Navbar />
    <Homepage/>
    <About />
    <Budget/>
    <Footer/>
    </main>
  )
}
