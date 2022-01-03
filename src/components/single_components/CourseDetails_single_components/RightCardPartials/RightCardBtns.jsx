import React from "react";
import { MDBListGroupItem, MDBIcon, MDBRow, MDBBtn } from "mdb-react-ui-kit";
const RightCardBtns = () => {
  return (
    <>
      <MDBListGroupItem>
        <MDBRow>
          <MDBBtn className="col-lg-7 col-md-7 mr-04" color="secondary">
            Add to cart
          </MDBBtn>
          <MDBBtn className="col-lg-4 col-md-4 wishlistBtn" color="info">
            <MDBIcon far icon="heart" />
          </MDBBtn>
        </MDBRow>
      </MDBListGroupItem>
      <MDBListGroupItem>
        <MDBRow>
          <MDBBtn className="btn-block" color="success">
            Buy Now
          </MDBBtn>
        </MDBRow>
      </MDBListGroupItem>
    </>
  );
};

export default RightCardBtns;
