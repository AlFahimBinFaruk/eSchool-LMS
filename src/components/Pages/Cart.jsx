import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "../../styles/Cart.css";
import CartList from "../single_components/Cart_single_components/CartList";
import Summary from "../single_components/Cart_single_components/Summary";
import EmptyPageNotif from "../common_components/EmptyPageNotif";
const Cart = () => {
  let cart = true;
  return (
    <>
      <MDBContainer className="my-4">
        <MDBCol className="col-lg-12 col-md-12">
          {cart ? (
            <MDBRow>
              <CartList />
              <Summary />
            </MDBRow>
          ) : (
            <EmptyPageNotif msg={"your cart is empty"} />
          )}
        </MDBCol>
      </MDBContainer>
    </>
  );
};

export default Cart;
