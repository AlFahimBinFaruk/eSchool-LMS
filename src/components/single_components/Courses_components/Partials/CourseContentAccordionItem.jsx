import React, { useState } from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
import { useGlobalContext } from "../../../../contexts/CourseDashboardContext";
const CourseContentAccordionItem = ({ title, unlocked = false }) => {
  let { setVideoLink } = useGlobalContext();
  const [courseContentVideos, setCourseContentVideos] = useState([
    "https://www.youtube.com/watch?v=cdv4kM8MwsY",
    "https://www.youtube.com/watch?v=1PjVAoUxKfI",
    "https://www.youtube.com/watch?v=zTS7ZmsPiE8",
    "https://www.youtube.com/watch?v=txxAqdOVJAM",
    "https://www.youtube.com/watch?v=oe21Nlq8GS4",
  ]);
  return (
    <MDBAccordionItem
      collapseId={`accordionCollapse${title}`}
      headerTitle={title}
    >
      {/* itemscontent */}
      <MDBListGroup className="borderNoneListGroup">
        {courseContentVideos.map((i) => {
          return (
            <MDBListGroupItem
              className="d-flex justify-content-between align-items-baseline hover"
              onClick={() => {
                setVideoLink(i);
                console.log(i);
              }}
            >
              <span className="d-flex align-items-baseline">
                <MDBIcon fas icon="play-circle" />
                <p className="mx-2">What is Nodejs??</p>
              </span>
              <span>
                <span>2:22</span>
                {!unlocked &&
                  (i === 1 ? (
                    <MDBIcon fas icon="unlock" className="mx-2" />
                  ) : (
                    <MDBIcon fas icon="lock" className="mx-2" />
                  ))}
              </span>
            </MDBListGroupItem>
          );
        })}
      </MDBListGroup>
      {/* itemscontent */}
    </MDBAccordionItem>
  );
};

export default CourseContentAccordionItem;
