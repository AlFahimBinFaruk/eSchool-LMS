import React, { useState } from "react";
import { MDBRange, MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";

const CourseFilter = ({ srcterm }) => {
  const [minPrice, setMinPrice] = useState(20);
  const [maxPrice, setMaxPrice] = useState(50);

  return (
    <MDBRow className="align-items-center">
      <MDBCol size="md" className="col-md-4 col-lg-4">
        <h5 className="text-capitalize">
          our coures of{" "}
          <span className="text-capitalize text-success">{srcterm}</span>
        </h5>
      </MDBCol>
      <MDBCol size="md" className="col-md-8 col-lg-8">
        <MDBRow className="align-items-center justify-content-right">
          <MDBCol size="md" className="col-md-3 col-lg-3">
            <MDBRange
              value={minPrice}
              id="customRange"
              label="Min Price"
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </MDBCol>
          <MDBCol size="md" className="col-md-3 col-lg-3">
            <MDBRange
              value={maxPrice}
              id="customRange"
              label="Max Price"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </MDBCol>
          <MDBCol size="md" className="col-md-3 col-lg-3">
            <MDBBtn color="warning">Apply</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
};

export default CourseFilter;
