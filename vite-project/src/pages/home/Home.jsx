import { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./Home.css"



function Home() {

  return (
    <>
    <Header/>
    <body>
    <div className='portada'>
      <img src='/images/Fondo2.jpg' className="desktop-image" />
      
      <img src='/images/PosiblePortada.jpg' className="mobile-image" />
    </div>
    </body>
    <Footer/>
    </>
  )
}

export default Home
