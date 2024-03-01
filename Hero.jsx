import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"
import LoginButton from './LoginButton'
const Hero = () => {
  return (
    <>
        <div className='hero'>
          <div className='row'>
            <Heading subtitle='WELCOME TO JOURNEY THROUGH STORIES' title='Best Imaginary Visual Fables Expertise' />
            <div  className="log-btn">
               <LoginButton/> 
            </div>
          </div>
         </div>
       
    </>
  )
}

export default Hero
