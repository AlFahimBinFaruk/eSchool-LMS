import React, { useState } from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  } from "mdb-react-ui-kit";
const RightCardCourseIncludes = () => {
    const [courseIncludes, setCourseIncludes] = useState([
        { icon: "video", title: "31.5 hours on-demand videog" },
        { icon: "copy", title: "4 articles" },
        { icon: "infinity", title: "Full lifetime access" },
        { icon: "mobile-alt", title: "Access on mobile and TV" },
        { icon: "certificate", title: "Certificate of completion" }
      ]);
    return (
        <>
        <h6>This course Includes</h6>
        <MDBListGroup className="borderNoneListGroup">
                {courseIncludes.map((i) => {
                  return (
                    <span className="m-1 small-p">
                      <MDBIcon fas icon={i.icon} />
                      <span className="mx-1">{i.title}</span>
                    </span>
                  );
                })}
              </MDBListGroup>
        </>
    )
}

export default RightCardCourseIncludes
