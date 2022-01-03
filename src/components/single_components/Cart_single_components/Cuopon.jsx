import React from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdb-react-ui-kit";
const Cuopon = () => {
  return (
    <MDBCard className="shadow my-3">
      <MDBCardBody className="d-flex cuopon_card">
        <MDBInput
          label="Enter Your Cuopon"
          id="formControlLg"
          type="text"
          size="lg"
          style={{ width: "33rem" }}
        />
        <MDBBtn className="mx-2" color="dark">
          Apply Cuopon
        </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Cuopon;
