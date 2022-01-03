import React from "react";
import { MDBInput, MDBRow, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
const CreditCardForm = () => {
  return (
    <MDBCard className="my-4 shadow">
      <MDBCardBody>
        <MDBRow>
          <div className="col-sm-12">
            <MDBInput
              label="Name On Card"
              id="formControlLg"
              className="my-2"
              type="text"
            />
          </div>

          <div className="col-sm-12">
            <MDBInput
              label="Card Number"
              id="formControlLg"
              className="my-2"
              type="email"
            />
          </div>

          <div className="col-sm-6">
            <MDBInput
              label="MM/YY"
              id="formControlLg"
              className="my-2"
              type="text"
            />
          </div>

          <div className="col-sm-6">
            <MDBInput
              label="Security Code"
              id="formControlLg"
              className="my-2"
              type="text"
            />
          </div>

          <div className="col-sm-6">
            <MDBInput
              label="Zip/Postal Code"
              id="formControlLg"
              className="my-2"
              type="text"
            />
          </div>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default CreditCardForm;
