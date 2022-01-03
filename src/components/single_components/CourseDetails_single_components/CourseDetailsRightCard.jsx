import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import React from "react";
import RightCardBtns from "./RightCardPartials/RightCardBtns";
import RightCardCourseIncludes from "./RightCardPartials/RightCardCourseIncludes";

const CourseDetailsRightCard = () => {
  return (
    <MDBCol className="col-lg-4 col-md-4 my-2">
      <div className="stickyCard">
        <MDBCard className="shadow">
          <MDBCardBody>
            <MDBCardTitle className="d-flex align-items-baseline">
              <h3>$13.99</h3>
              <s className="mx-2 text-danger">$19.99</s>
              <h6>30% off</h6>
            </MDBCardTitle>
            <hr />
            <MDBListGroup className="borderNoneListGroup">
              <RightCardBtns />
              <MDBListGroupItem>
                <p className="small-p text-center">
                  30-Day Money-Back Guarantee
                </p>
              </MDBListGroupItem>
              <MDBListGroupItem>
                <hr />
                <RightCardCourseIncludes />
              </MDBListGroupItem>
            </MDBListGroup>
          </MDBCardBody>
        </MDBCard>
      </div>
    </MDBCol>
  );
};

export default CourseDetailsRightCard;
