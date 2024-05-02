import { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./Home.css"
import Slider from '../../components/slider/Slider.jsx'
import ScrollToTopButton from '../../components/scrollToTop/ScrollToTop.jsx'


function Home() {

  return (
    <>
    <Header/>
    <body className='home-body'>
    <div className='portada'>
      <img src='/images/Fondo2.jpg' className="desktop-image" />
      
      <img src='/images/PosiblePortada.jpg' className="mobile-image" />
      
    </div>
    <div className='Carrousel'>
      <Slider/>
      </div>
      <ScrollToTopButton/>
    </body>
    <Footer/>
    </>
  )
}

export default Home
