import React from "react";

import {
  MDBIcon,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
// size="md" className="col-sm-4 col-md-10 my-2"
const SingleCourseCard = ({ wishlistProduct = false, title }) => {
  return (
    <MDBCol size="md" className="col-sm-4 my-2 col-md-3">
      <MDBCard className="shadow">
        <Link to="/productdetails">
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"
            position="top"
            alt="..."
          />
        </Link>
        {wishlistProduct && (
          <span
            class="
            btn btn-icon btn-danger
            position-absolute
            top-0
            end-0
            right-28
            py-1
            px-2
            m-2"
          >
            <i class="far fa-trash-alt"></i>
          </span>
        )}
        <span
          class="
            btn btn-icon btn-success
            position-absolute
            top-0
            left-0
            py-1
            px-2
            m-2"
        >
          Best Seller
        </span>

        <MDBCardBody>
          <Link to="/productdetails">
            <h6>{title}</h6>
          </Link>
          <span className="authorName">Brad Traversy.</span>
          <MDBCardText>
            <span className="text-warning mr-04">4.6</span>
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star" />
            <MDBIcon fas icon="star-half-alt" />
            <span>(546)</span>
          </MDBCardText>

          <MDBCardText>
            Price: <b>$1223</b> <s>$5000</s>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default SingleCourseCard;
