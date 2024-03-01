import React from "react"
import AboutCard from "../about/AboutCard"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"

import Footer from "../common/footer/Footer"
import Header from "../common/header/Header"
import "./Home.css"
const Home = () => {
  return (
    <>
    <div className="Home">
      <Header/>
      <Hero />
      <AboutCard />
      <HAbout />
      <Footer/>
      </div>
    </>
  )
}

export default Home
