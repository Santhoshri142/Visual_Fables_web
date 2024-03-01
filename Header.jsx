import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import Searchbar from "./Searchbar"
const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Explore</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            
            <li>
              <Link to='/Admin'>Admin</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className="search">
            <Searchbar/>
          </div>
         
          <div className='start'>
            <div className='button'>DASHBOARD</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
