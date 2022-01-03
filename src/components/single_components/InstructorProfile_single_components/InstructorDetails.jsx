import React, { useState } from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const InstructorDetails = ({ instructorPage = false }) => {
  const [instructorCourseHistory, setinstructorCourseHistory] = useState([
    { icon: "star", title: "4.7 Instructor Rating" },
    { icon: "certificate", title: "11,761 Reviews" },
    { icon: "users", title: "71,665 Students" },
    { icon: "play-circle", title: "8 Courses" },
  ]);
  return (
    <MDBCard className="my-3">
      <MDBCardBody className="shadow">
        <MDBCardTitle>
          Instructor <MDBIcon far icon="hand-point-right" />{" "}
         <Link to="/instructorprofile/12"className="text-success">John Doe</Link>
        </MDBCardTitle>
        <hr />
        <MDBListGroup className="borderNoneListGroup">
          <MDBRow>
            <MDBListGroupItem className="col-lg-3 col-md-3">
              <img
                src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
                className="courseInstructorPic rounded-circle"
                alt="#"
              />
            </MDBListGroupItem>
            <MDBListGroupItem className="col-lg-7 col-md-7">
              <MDBListGroup className="borderNoneListGroup">
                {instructorCourseHistory.map((i) => {
                  return (
                    <span className={`m-1 ${!instructorPage && "small-p"}`}>
                      <MDBIcon fas icon={i.icon} />
                      <span className="mx-1">{i.title}</span>
                    </span>
                  );
                })}
              </MDBListGroup>
              {instructorPage && (
                <span className="instructorSocialBtn d-flex my-2">
                  <MDBBtn outline color="success">
                    <MDBIcon fas icon="globe-americas" />{" "}
                    <span className="mx-1">My Website</span>
                  </MDBBtn>
                  <MDBBtn className="mx-1" outline>
                    <MDBIcon fab icon="twitter" />
                    <span className="mx-1">My Twitter</span>
                  </MDBBtn>
                  <MDBBtn className="mx-1" outline color="danger">
                    <MDBIcon fab icon="youtube" />
                    <span className="mx-1">My YouTube</span>
                  </MDBBtn>
                </span>
              )}
            </MDBListGroupItem>
          </MDBRow>
          <MDBListGroupItem>
            {instructorPage && (
              <>
                {" "}
                <h3>About me</h3>
                <hr />
              </>
            )}
            <h6>
              Hello, I am John Doe and I am a web developer. I live and work in
              Dc. I spend most of my day, experimenting with HTML, CSS and
              Javascript (and it's endless list of frameworks). I enjoy coding
              and the challenge of learning something new everyday. You can also
              find me at youtube channel XyZ.
            </h6>
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBCardBody>
    </MDBCard>
  );
};

export default InstructorDetails;
