import React from "react";
import { useParams } from "react-router-dom"; // Import useParams from React Router
import { FablesCard } from "../../dummydata";
import CoursesCard from "../allcourses/FablesCard";

const FablesListPage = () => {
  const { theme } = useParams(); // Get the theme parameter from the URL

  // Filter FablesCard based on the selected theme
  const filteredFables = FablesCard.filter((val) => val.theme === theme);

  return (
    <>
      <h1>Similar Courses for Theme: {theme}</h1>
      <CoursesCard fables={filteredFables} />
    </>
  );
};

export default FablesListPage;
