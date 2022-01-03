import React from "react";
import { MDBCard, MDBCardBody, MDBAccordion } from "mdb-react-ui-kit";
import CourseRequirements from "./Partials/CourseRequirements";
import CourseDescription from "./Partials/CourseDescription";
const CourseRequirementsAndDescription = () => {
  return (
    <MDBCard className="my-3">
      <MDBCardBody className="shadow">
        <MDBAccordion flush>
          <CourseRequirements />
          <CourseDescription />
        </MDBAccordion>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CourseRequirementsAndDescription;
