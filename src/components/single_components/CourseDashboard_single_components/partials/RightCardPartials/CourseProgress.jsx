import React from "react";
import { MDBProgress, MDBProgressBar } from "mdb-react-ui-kit";

const CourseProgress = () => {
  return (
    <>
      <h6 className="text-capitalize">course content completation</h6>
      <MDBProgress height="15" className="rounded">
        <MDBProgressBar
          bgColor="success"
          width="25"
          valuemin={0}
          valuemax={100}
        >
          25%
        </MDBProgressBar>
      </MDBProgress>
    </>
  );
};

export default CourseProgress;
