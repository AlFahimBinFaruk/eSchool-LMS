import { MDBContainer } from "mdb-react-ui-kit";
import "../../styles/InstructorProfile.css";
import React from "react";
import InstructorCourseList from "../single_components/InstructorProfile_single_components/InstructorCourseList";
import InstructorDetails from "../single_components/InstructorProfile_single_components/InstructorDetails";

const InstructorProfile = () => {
  return (
    <>
      <MDBContainer>
        <InstructorDetails instructorPage />
        <InstructorCourseList />
      </MDBContainer>
    </>
  );
};

export default InstructorProfile;
