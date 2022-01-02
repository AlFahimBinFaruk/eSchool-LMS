import { MDBContainer, MDBRow, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import React, { useState } from "react";
import Pagination from "../common_components/Pagination";
import SingleCourseCard from "../single_components/CourseCard_components/SingleCourseCard";
import CourseFilter from "../single_components/Courses_components/CourseFilter";
import CourseNotFound from "../single_components/Courses_components/CourseNotFound";
import { useParams } from "react-router-dom";
const Courses = () => {
  let { category } = useParams();
  let courseFound = true;
  const [courseContent, setCourseContent] = useState([
    "Web Desing",
    "Google Adsence",
    "Python Programming",
    "Database Desing",
    "Think In JavaScript",
    "Think In React",
    "Think In Angular",
  ]);
  return (
    <MDBContainer>
      <MDBContainer className="my-5">
        <MDBCard className="shadow">
          <MDBCardBody>
            <CourseFilter srcterm={category} />
            <hr />
            {courseFound ? (
              <>
                <MDBRow>
                  {courseContent.map((i) => {
                    return <SingleCourseCard title={i} />;
                  })}
                </MDBRow>
                <Pagination />
              </>
            ) : (
              <CourseNotFound srcterm={category} />
            )}
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </MDBContainer>
  );
};

export default Courses;
