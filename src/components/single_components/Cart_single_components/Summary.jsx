import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

const Summary = ({ checkoutPage = false }) => {
  return (
    <MDBCol className="col-lg-4 col-md-4">
      <MDBCard className="shadow">
        <MDBCardBody>
          <MDBCardTitle>Summary</MDBCardTitle>
          <hr />
          {/* product count */}
          <MDBListGroup>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              Dell Inspiron 14
              <MDBBadge>
                <b>$1265</b> X 1
              </MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              Dell Inspiron 14
              <MDBBadge>
                <b>$1265</b> X 1
              </MDBBadge>
            </MDBListGroupItem>
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              Dell Inspiron 14
              <MDBBadge>
                <b>$1265</b> X 1
              </MDBBadge>
            </MDBListGroupItem>
            {/* product count */}
            <hr />

            {/* Total */}
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              Total
              <MDBBadge color="warning">
                <b>$12685</b>
              </MDBBadge>
            </MDBListGroupItem>

            {/* Shipping */}
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              Shipping
              <MDBBadge color="info">
                <b>$10</b>
              </MDBBadge>
            </MDBListGroupItem>

            {/* Cuopon */}
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              Cuopon
              <MDBBadge color="dark">
                <b>$0</b>
              </MDBBadge>
            </MDBListGroupItem>
            <hr />

            {/* subtotal */}
            <MDBListGroupItem className="d-flex justify-content-between align-items-center">
              Subtotal
              <MDBBadge color="secondary">
                <b>$12685</b>
              </MDBBadge>
            </MDBListGroupItem>

            {!checkoutPage ? (
              <Link to="/checkout">
                <MDBBtn color="success" className="my-2 btn-block">
                  Proceed to Checkout
                </MDBBtn>
              </Link>
            ) : (
              <MDBBtn color="success" className="my-2 btn-block" disabled>
                Complete Payment
              </MDBBtn>
            )}
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default Summary;
