import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import Header from "../common_components/Header";
import SingleCourseCard from "../single_components/Courses_components/SingleCourseCard";
import OurFeatures from "../single_components/OurFeatures_components/OurFeatures";

const Home = () => {
  const [courseContent, setCourseContent] = useState([
    "Web Desing",
    "Google Adsence",
    "Python Programming",
    "Database Desing",
    "Think In JavaScript",
  ]);
  return (
    <>
      <MDBContainer>
        <Header />

        <div className="my-5">
          <h4 className="text-center">Most Popular Courses</h4>
          <MDBRow>
            {courseContent.map((i) => {
              return <SingleCourseCard title={i} />;
            })}
          </MDBRow>
        </div>

        <div className="my-5">
          <OurFeatures />
        </div>
      </MDBContainer>
    </>
  );
};

export default Home;
