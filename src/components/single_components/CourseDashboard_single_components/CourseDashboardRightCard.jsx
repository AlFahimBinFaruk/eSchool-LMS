import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import CourseContent from "../Courses_components/CourseContent";
import CourseProgress from "./partials/RightCardPartials/CourseProgress";

const CourseDashboardRightCard = () => {
  return (
    <MDBCol className="col-lg-4 col-md-4 my-2">
      <CourseProgress />
      <CourseContent unlocked />
    </MDBCol>
  );
};

export default CourseDashboardRightCard;
