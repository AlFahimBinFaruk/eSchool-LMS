import React from "react";
import { MDBInput, MDBAccordionItem, MDBBtn, MDBRow } from "mdb-react-ui-kit";
const CheckoutUserDetails = () => {
  return (
    <MDBAccordionItem
      collapseId="accordionCollapse1"
      headerTitle="Your Personal Details"
    >
      <MDBRow>
        <div className="col-sm-12">
          <MDBInput
            label="Full Name"
            id="formControlLg"
            className="my-2"
            type="text"
          />
        </div>

        <div className="col-sm-12">
          <MDBInput
            label="Email Address"
            id="formControlLg"
            className="my-2"
            type="email"
          />
        </div>

        <div className="col-sm-12">
          <MDBInput
            label="Phone Number"
            id="formControlLg"
            className="my-2"
            type="text"
          />
        </div>

        <div className="col-sm-6">
          <MDBInput
            label="Post Code"
            id="formControlLg"
            className="my-2"
            type="text"
          />
        </div>

        <div className="col-sm-6">
          <MDBInput
            label="Country"
            id="formControlLg"
            className="my-2"
            type="text"
          />
        </div>
        <div className="col-sm-12">
          <MDBInput
            label="City"
            id="formControlLg"
            className="my-2"
            type="text"
          />
        </div>

        <div className="col-sm-12">
          <MDBInput
            label="Full Address"
            id="formControlLg"
            className="my-2"
            type="text"
          />
        </div>

        <div className="col-sm-12">
          {/* nextbtn */}
          <MDBBtn className="w-100" color="info">
            Next
          </MDBBtn>
        </div>
      </MDBRow>
    </MDBAccordionItem>
  );
};

export default CheckoutUserDetails;
