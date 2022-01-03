import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBTable,
  MDBTableBody,
} from "mdb-react-ui-kit";
import React from "react";
import CartItemList from "./CartItemList";
import Cuopon from "./Cuopon";

const CartList = () => {
  return (
    <MDBCol className="col-lg-8 col-md-8">
      <MDBCard className="shadow">
        <MDBCardBody>
          <MDBTable className="cart_table-striped" striped>
            <MDBTableBody className="cart_tbody">
              {/* cartitems */}
              <CartItemList />
              <CartItemList />
              {/* cartitems */}
            </MDBTableBody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>

      {/* cuopon */}
      <Cuopon />
      {/* cuopon */}
    </MDBCol>
  );
};

export default CartList;
