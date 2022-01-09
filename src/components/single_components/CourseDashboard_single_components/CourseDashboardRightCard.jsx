import { MDBCol } from "mdb-react-ui-kit";
import React from "react";
import CourseContent from "../Courses_components/CourseContent";
import CourseProgress from "./partials/RightCardPartials/CourseProgress";

const CourseDashboardRightCard = () => {
  return (
    <MDBCol className="col-lg-4 col-md-4 my-2">
      <CourseProgress />
      <div className="courserContentWr my-3 shadow">
      <CourseContent unlocked />
      </div>
    </MDBCol>
  );
};

export default CourseDashboardRightCard;
