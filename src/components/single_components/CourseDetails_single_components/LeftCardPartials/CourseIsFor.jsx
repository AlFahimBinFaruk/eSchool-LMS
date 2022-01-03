import {
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
} from "mdb-react-ui-kit";
import React, { useState } from "react";

const CourseIsFor = () => {
  const [couseForTitle, setCouseForTitle] = useState([
    "Who Fulfill Asked Requirements",
    "Everyone who wants to learn Node, Express and MongoDB",
  ]);
  return (
    <MDBCard>
      <MDBCardBody className="shadow">
        <MDBCardTitle>Who this course is for</MDBCardTitle>
        <hr />
        <MDBListGroup className="borderNoneListGroup">
          <MDBRow>
            {couseForTitle.map((title) => {
              return (
                <MDBListGroupItem className="col-lg-5 col-md-5">
                  <p className="small-p">
                    <MDBIcon fas icon="check" />{" "}
                    <span className="mx-1">{title}</span>
                  </p>
                </MDBListGroupItem>
              );
            })}
          </MDBRow>
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CourseIsFor;
