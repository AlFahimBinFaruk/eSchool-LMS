import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import CourseContent from "./LeftCardPartials/CourseContent";
import CourseIsFor from "./LeftCardPartials/CourseIsFor";
import CourseRequirementsAndDescription from "./LeftCardPartials/CourseRequirementsAndDescription";
import CourseInstructorDetails from "../InstructorProfile_single_components/InstructorDetails";
import CourseStudentsFeedback from "./LeftCardPartials/CourseStudentsFeedback";
import MoreCourseFromInstructor from "../../common_components/MultipleCourseSlider";
import WhatYouWillLearn from "./LeftCardPartials/WhatYouWillLearn";
import CourseIntroVideo from "./LeftCardPartials/CourseIntroVideo";
import CourseReviews from "./LeftCardPartials/CourseReviews";
const CourseDetailsLeftCard = () => {
  return (
    <MDBCol className="col-lg-8 col-md-8 my-2">
      <CourseIntroVideo />
      <WhatYouWillLearn />
      <CourseContent />
      <CourseRequirementsAndDescription />
      <CourseIsFor />
      <CourseInstructorDetails />
      <CourseStudentsFeedback />
      <CourseReviews />
      <MoreCourseFromInstructor title={"you might also like"} />
    </MDBCol>
  );
};

export default CourseDetailsLeftCard;
