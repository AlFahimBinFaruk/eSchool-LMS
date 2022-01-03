import React from "react";
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
} from "mdb-react-ui-kit";
const CourseDetailsHeader = () => {
  return (
    <MDBContainer className="navbar navbar-expand-lg navbar-light bg-light my-4 p-3 shadow">
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <MDBListGroup className="borderNoneListGroup">
            <MDBListGroupItem>
              <h3>NodeJS Tutorial and Projects Course</h3>
            </MDBListGroupItem>
            <MDBListGroupItem>
              <h5>NodeJS Tutorial and Projects Course</h5>
            </MDBListGroupItem>
            <MDBListGroupItem>
              <span className="text-warning mr-04">4.6</span>
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star" />
              <MDBIcon fas icon="star-half-alt" />
              <span>(546)</span>
              <span className="mx-2">
                <b>2,554 </b>students
              </span>
            </MDBListGroupItem>
            <MDBListGroupItem>
              Created by <span className="text-secondary">John Doe</span>
            </MDBListGroupItem>
            <MDBListGroupItem className="productDetailsHeaderFlex">
              <span className="mr-1">
                <MDBIcon fas icon="exclamation-circle" />
                <span className="mx-1">Last updated 10/2021</span>
              </span>
              <span className="mr-1">
                <MDBIcon fas icon="globe-europe" />
                <span className="mx-1">English</span>
              </span>
              <span className="mr-1">
                <MDBIcon far icon="closed-captioning" />
                <span className="mx-1">English [Auto]</span>
              </span>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </MDBContainer>
  );
};

export default CourseDetailsHeader;
