import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import '../../styles/Checkout.css';
import React from "react";
import Summary from "../single_components/Cart_single_components/Summary";
import CheckoutForm from "../single_components/Checkout_single_components/CheckoutForm";
const Checkout = () => {
  return (
    <>
      <MDBContainer className="my-4">
        <MDBCol className="col-lg-12 col-md-12">
          <MDBRow>
            <CheckoutForm />
            <Summary checkoutPage />
          </MDBRow>
        </MDBCol>
      </MDBContainer>
    </>
  );
};

export default Checkout;
