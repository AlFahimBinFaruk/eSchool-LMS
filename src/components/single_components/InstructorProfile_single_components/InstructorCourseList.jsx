import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import SingleCourseCard from "../Courses_components/SingleCourseCard";
import Pagination from "../../common_components/Pagination";
const InstructorCourseList = () => {
  const [productCount, setproductCount] = useState([
    "NodeJS Full Course",
    "HTML Crash Course",
    "Laravel Course",
    "Bootstrap 5 Full Course",
    "Django Full Course",
    "CSS3 Full Course",
    "Express Js Crash Course",
  ]);
  return (
    <MDBContainer className="my-3">
      <MDBCard className="shadow pb-3">
        <MDBCardBody>
          <MDBCardTitle>My Courses(21).</MDBCardTitle>
          <hr />
          <MDBRow>
            {productCount.map((i) => (
              <SingleCourseCard title={i}/>
            ))}
          </MDBRow>
        </MDBCardBody>
        <Pagination />
      </MDBCard>
    </MDBContainer>
  );
};

export default InstructorCourseList;
