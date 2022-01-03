import React, { useState } from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import SingleEnrolledCourseListCard from "./SingleEnrolledCourseListCard";

const EnrolledCoursesList = () => {
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
      <h4 className="text-center">My Courses</h4>
      <hr />
      <MDBRow>
        {productCount.map((i) => (
          <SingleEnrolledCourseListCard title={i} />
        ))}
      </MDBRow>
    </MDBContainer>
  );
};

export default EnrolledCoursesList;
