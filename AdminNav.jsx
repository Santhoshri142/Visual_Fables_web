import React, { useState } from "react"
import { Link } from "react-router-dom"
const AdminNav = () => {
    const [click, setClick] = useState(false)
    return (
      <>
        <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
         
            <li>
              <Link to='/Charts'>Data Chart</Link>
            </li>
            <li>
              <Link to='/AddFables'>Add Fables</Link>
            </li>
            <li>
              <Link to='/UserDetails'>User Details</Link>
            </li>
            <li>
              <Link to='/FeedbackReply'>Feedback Reply</Link>
            </li>
            
           
            
          </ul>
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
export default AdminNav