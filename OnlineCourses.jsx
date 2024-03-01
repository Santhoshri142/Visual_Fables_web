import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {

  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='FABLES' title='Browse Our Fables' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                <img src={val.cover} alt=""/>
                  
                </div>
                <h1>{val.theme}</h1>
                <span>{val.course}</span>
              </div>
            
            ))}
          </div>
        </div>
      </section>
      
    </>
  )
}

export default OnlineCourses
