import { MDBCard, MDBCardBody, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";
import "../../../styles/OurFeatures.css";
const OurFeatures = () => {
  const [smallCardContent, setSmallCardContent] = useState([
    {
      icon: "photo-video",
      color: "primary",
      text1: "19,000",
      text2: "Video Tutorial",
    },
    {
      icon: "clipboard-list",
      color: "info",
      text1: "5,000+",
      text2: "Quizes",
    },
    {
      icon: "book",
      color: "warning",
      text1: "1,236+",
      text2: "Notes",
    },
    {
      icon: "blog",
      color: "danger",
      text1: "3,236+",
      text2: "Blogs",
    },
  ]);
  return (
    <>
      <h4 className="text-center text- text-capitalize">
        What We <span className="text-danger">Will Provide</span>
      </h4>
      <h6 className="text-center text-capitalize">
        We provide <span className="text-danger">world class features</span>,
        which will help you to learn steamlessly.In here you will get
      </h6>
      <MDBRow className="my-4">
        {/* smalcards */}
        {smallCardContent.map((i) => {
          return (
            <div className="col-md-3 col-lg-3 mb-2">
              <MDBCard className="shadow">
                <MDBCardBody>
                  <div className="d-flex align-items-center">
                    <MDBIcon
                      className={`featuresIcon mx-2 text-${i.color}`}
                      fas
                      icon={i.icon}
                    />
                    <div className="d-flex flex-column lh-0">
                      <h4>{i.text1}</h4>
                      <p>{i.text2}</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </div>
          );
        })}
        {/* smalcards */}
      </MDBRow>
      <div className="w-50 m-auto my-2">
        <img
          src="/assets/images/featuresBottomImg.webp"
          className="w-100"
          alt=""
          srcset=""
        />
      </div>
    </>
  );
};

export default OurFeatures;
