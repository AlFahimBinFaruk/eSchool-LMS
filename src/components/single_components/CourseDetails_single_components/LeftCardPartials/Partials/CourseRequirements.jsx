import React, { useState } from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
const CourseRequirements = () => {
  const [count, setCount] = useState([1, 2, 3]);
  return (
    <MDBAccordionItem collapseId="flush-collapse1" headerTitle="Requirements">
      <MDBListGroup className="borderNoneListGroup">
        <MDBRow>
          {count.map((i) => {
            return (
              <MDBListGroupItem className="col-lg-5 col-md-5">
                <p className="small-p">
                  <MDBIcon far icon="dot-circle" />
                  <span className="mx-1">
                    Basic Knowledge of HTML, CSS, JS (ES6) is Required.
                  </span>
                </p>
              </MDBListGroupItem>
            );
          })}
        </MDBRow>
      </MDBListGroup>
    </MDBAccordionItem>
  );
};

export default CourseRequirements;
