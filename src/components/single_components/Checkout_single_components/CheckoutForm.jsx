import React from "react";
import { MDBAccordion, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import CheckoutUserDetails from "./CheckoutUserDetails";
import PaymentDetails from "./PaymentDetails";

const CheckoutForm = () => {
  return (
    <MDBCol className="col-lg-8 col-md-8 mb-3">
      <MDBCard className="shadow">
        <MDBCardBody>
          <MDBAccordion>
            {/* personal details */}
            <CheckoutUserDetails />
            {/* personal details */}

            {/* payment Details */}
            <PaymentDetails />
            {/* payment Details */}
          </MDBAccordion>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default CheckoutForm;
