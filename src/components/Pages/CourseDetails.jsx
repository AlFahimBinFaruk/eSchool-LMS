import React from "react";
import "../../styles/CourseDetails.css";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CourseDetailsHeader from "../single_components/CourseDetails_single_components/CourseDetailsHeader";
import CourseDetailsLeftCard from "../single_components/CourseDetails_single_components/CourseDetailsLeftCard";
import CourseDetailsRightCard from "../single_components/CourseDetails_single_components/CourseDetailsRightCard";
import { AppProvider } from "../../contexts/CourseDashboardContext";
const CourseDetails = () => {
  return (
    <>
      <MDBContainer>
        <CourseDetailsHeader />
        <MDBRow className="productDetailsRow">
          <AppProvider>
            <CourseDetailsLeftCard />
            <CourseDetailsRightCard />
          </AppProvider>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default CourseDetails;
