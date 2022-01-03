import React, { useState } from "react";
import {
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCol,
} from "mdb-react-ui-kit";
const PaymentMethodFrom = () => {
  const [paymentMethodsName, setPaymentMethodsName] = useState([
    "cc-paypal",
    "amazon-pay",
    "cc-stripe",
  ]);
  return (
    <MDBCard className="my-4 shadow">
      <MDBCardBody>
      <h6 className="text-capitalize">select a payment method.</h6>
      <hr />
        <MDBRow>
          {paymentMethodsName.map((i) => {
            return (
              <MDBCol size="md" className="col-md-1 col-lg-1 col-2">
                <MDBIcon fab icon={i} className="paynowMethodIcons hover" />
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default PaymentMethodFrom;
