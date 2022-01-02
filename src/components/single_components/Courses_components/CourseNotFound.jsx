import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import { useNavigate } from "react-router-dom";

const CourseNotFound = ({ srcterm }) => {
  const navigate = useNavigate();
  return (
    <div className="w-50 m-auto text-center">
      <img
        src="/assets/images/FoundNothingimg.png"
        className="w-50"
        alt=""
        srcset=""
      />
      <h5 className="text-capitalize my-3">
        sorry the product <span className="text-danger">{srcterm}</span> is not
        found
      </h5>
      <MDBBtn className="btn-block" onClick={() => navigate(-1)} color="danger">
        <MDBIcon fas icon="hand-point-left" className="mx-1" /> Go Back
      </MDBBtn>
    </div>
  );
};

export default CourseNotFound;
