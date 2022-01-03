import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";
const CourseStudentsFeedback = () => {
  const [ratingList, setRatingList] = useState([
    { star: "5", barW: 79, p: "25%" },
    { star: "4", barW: 68, p: "30%" },
    { star: "3", barW: 29, p: "12%" },
    { star: "2", barW: 1, p: "1%" },
  ]);
  return (
    <MDBCard className="shadow my-3">
      <MDBCardBody>
        <MDBCardTitle>Overall Ratings</MDBCardTitle>

        <MDBListGroup>
          {ratingList.map((i) => {
            return (
              <MDBListGroupItem className="d-flex justify-content-between align-items-center">
                {i.star} starts
                <MDBProgress className="feedbackProgressBar">
                  <MDBProgressBar width={i.barW} valuemin={0} valuemax={100} />
                </MDBProgress>
                <MDBBadge pill>{i.p}</MDBBadge>
              </MDBListGroupItem>
            );
          })}
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CourseStudentsFeedback;
