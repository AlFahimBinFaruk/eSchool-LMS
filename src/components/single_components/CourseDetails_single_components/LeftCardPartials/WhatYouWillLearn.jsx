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

const WhatYouWillLearn = () => {
  const [lenrnCount, setLenrnCount] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <MDBCard>
      <MDBCardBody className="shadow">
        <MDBCardTitle>What you will learn</MDBCardTitle>
        <hr />
        <MDBListGroup className="borderNoneListGroup">
          <MDBRow>
            {lenrnCount.map((i) => {
              return (
                <MDBListGroupItem className="col-lg-5 col-md-5">
                  <p className="small-p">
                    <MDBIcon fas icon="check" />{" "}
                    <span className="mx-1">
                      NodeJS Tutorial and Projects Course
                    </span>
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

export default WhatYouWillLearn;
