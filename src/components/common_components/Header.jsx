import React, { useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const Header = () => {
  const [smallCardContent, setSmallCardContent] = useState([
    "Web Dev",
    "SEO",
    "Digital Marketing",
  ]);
  return (
    <MDBCard className="my-4 shadow">
      <MDBCardBody>
        <MDBRow>
          {/* left side */}
          <MDBCol size="md" className="lh-0 col-md-6 col-lg-6">
            <h3>
              Learn <span className="text-danger">Web Devlopment</span> Like
              Never Before.
            </h3>
            <h6>
              Choose from{" "}
              <span className="text-danger">1830 online video courses</span>{" "}
              with new additions published every month.
            </h6>
            {/* smallcards */}
            <div className="my-3">
              <MDBRow>
                {smallCardContent.map((i) => {
                  return (
                    <MDBCol>
                      <MDBCard className="bg-image hover-overlay shadow mb-1">
                        {window.screen.width >= 500 && (
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
                            position="top"
                            alt="Fissure in Sandstone"
                          />
                        )}
                        <MDBCardBody>
                          <small>
                            <b>{i}</b>
                          </small>
                        </MDBCardBody>
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.2)",
                          }}
                        ></div>
                      </MDBCard>
                    </MDBCol>
                  );
                })}
              </MDBRow>
            </div>
            {/* smallcards */}
          </MDBCol>
          {/* left side */}

          {/* right side */}
          <MDBCol size="md" className="text-center col-md-6 col-lg-6">
            <img
              className={`${
                window.screen.width > 500 ? "w-75" : "w-100"
              } rounded`}
              src="/assets/images/bannerImg.jpg"
              alt=""
              srcset=""
            />
          </MDBCol>
          {/* right side */}
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Header;
