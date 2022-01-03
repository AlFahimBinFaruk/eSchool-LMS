import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
} from "mdb-react-ui-kit";
import SingleUserComment from "../../SingleUser_components/SingleUserComment";
const CourseReviews = () => {
  return (
    <MDBCard className="shadow my-3">
      <MDBCardBody>
        <MDBCardTitle>Latest Reviews</MDBCardTitle>
        <hr />
        <MDBListGroup>
          {/* SingleReviewItem */}
          <SingleUserComment />
          <SingleUserComment />
          {/* SingleReviewItem */}
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CourseReviews;
