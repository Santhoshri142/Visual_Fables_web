import React from "react"
import Back from "../common/back/Back"
import FablesCard from "./FablesCard"
import OnlineCourses from "./OnlineCourses"

const FablesHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <FablesCard />
      <OnlineCourses />
    </>
  )
}

export default FablesHome
