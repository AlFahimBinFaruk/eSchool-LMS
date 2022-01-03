import React, { useState } from "react";
import {
  MDBIcon,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBProgress,
  MDBProgressBar,
  MDBModal,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import CourseRatingModal from "./partials/CourseRatingModal";
const SingleEnrolledCourseListCard = ({ title }) => {
  let rated = false;
  const [basicModal, setBasicModal] = useState(false);

  const ratingModalShow = () => setBasicModal(!basicModal);
  return (
    <>
      <MDBCol size="md" className="col-sm-4 my-2 col-lg-4 col-md-4">
        <MDBCard>
          <MDBCardImage
            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"
            position="top"
            alt="..."
          />
          <MDBCardBody className="shadow">
            <MDBCardTitle> {title}</MDBCardTitle>
            <MDBCardText className="instructorDetails small-p">
              <b>Brad Treversy</b>
            </MDBCardText>
            <MDBCardText className="my-1">
              <MDBProgress
                className="feedbackProgressBar"
                style={{ width: "100%" }}
              >
                <MDBProgressBar width={20} valuemin={0} valuemax={100} />
              </MDBProgress>
              <span className="progress_rating d-flex justify-content-between my-2">
                <span className="completion small-p">20% complete</span>
                <span className="ratings d-flex flex-column">
                  {rated ? (
                    <>
                      <span className="stars small-p">
                        <span className="small-p">Rated::</span>
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star-half-alt" />
                      </span>
                      <span
                        className="ratingBtn small-p text-warning"
                        onClick={ratingModalShow}
                      >
                        Change Rating
                      </span>
                    </>
                  ) : (
                    <span
                      className="ratingBtn small-p"
                      onClick={ratingModalShow}
                    >
                      Leave a rating
                    </span>
                  )}
                </span>
              </span>

              <MDBBtn className="btn-block text-capitalize btn-success">
                Continue to course
                <MDBIcon fas icon="hand-point-right" className="mx-1" />
              </MDBBtn>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <CourseRatingModal ratingModalShow={ratingModalShow} />
      </MDBModal>
    </>
  );
};

export default SingleEnrolledCourseListCard;
