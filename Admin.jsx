import React from "react"
import Footer from "../common/footer/Footer"
import "./Admin.css"
import AdminNav from "./AdminNav"
import AdminHead from "./AdminHead"

const Admin = () => {
  return (
    <>
      <div className="admin">
        <AdminHead/>
        <br></br>
        <AdminNav/>
        <br></br>
        
        <div className="admin-img">
          <img src='./images/courses/adminremovebg.png' alt='' />
          <h1>Admin Usage Site</h1>
        </div>  
         
      </div>
      <Footer/>
    </>
  )
}

export default Admin