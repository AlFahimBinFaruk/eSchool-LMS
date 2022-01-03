import React from "react";
import {
  MDBInput,
  MDBBtn,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
const CourseRatingModal = ({ ratingModalShow }) => {
  return (
    <MDBModalDialog>
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle>Leave A Rating</MDBModalTitle>
          <MDBBtn
            className="btn-close"
            color="none"
            onClick={ratingModalShow}
          ></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
          <div class="ratingInput">
            <label htmlFor="select">Select A Star</label>
            <select class="form-select" aria-label="Default select example">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>

            <MDBInput
              label="Write a Review."
              className="my-2"
              id="textAreaExample"
              textarea
              rows={4}
            />

            <MDBBtn color="secondary" className="my-2">
              Submit
            </MDBBtn>
          </div>
        </MDBModalBody>
      </MDBModalContent>
    </MDBModalDialog>
  );
};

export default CourseRatingModal;
