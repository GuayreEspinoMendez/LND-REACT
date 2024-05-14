import { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./Feature.css"
import AnimatedCard from '../../components/animated-card/AnimatedCard'
import ScrollToTopButton from '../../components/scrollToTop/ScrollToTop'



function Feature() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <body className='feature-body'>
        <div className="container">
          <AnimatedCard imageUrl="/images/zapa2.png" sunColor="orange-b-gradient"/>
          <AnimatedCard imageUrl="/images/zapa9.png" sunColor="pink-gradient"/>
          <AnimatedCard imageUrl="/images/zapa5.png" sunColor="blue-gradient"/>
          <AnimatedCard imageUrl="/images/zapa3.png" sunColor="orange-gradient"/>
          <AnimatedCard imageUrl="/images/zapa8.png" sunColor="white-gradient"/>
          <AnimatedCard imageUrl="/images/zapa7.png" sunColor="black-gradient"/>
          <AnimatedCard imageUrl="/images/zapa6.png" sunColor="green-gradient"/>
        </div>
    </body>
    <ScrollToTopButton></ScrollToTopButton>
    <Footer/>
    </>
  )
}

export default Feature