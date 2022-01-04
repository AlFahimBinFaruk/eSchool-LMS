import React, { useState } from "react";
import {
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
const CourseContentAccordionItem = ({ title, unlocked = false }) => {
  const [count, setCount] = useState([1, 2, 3, 4, 5]);
  return (
    <MDBAccordionItem
      collapseId={`accordionCollapse${title}`}
      headerTitle={title}
    >
      {/* itemscontent */}
      <MDBListGroup className="borderNoneListGroup">
        {count.map((i) => {
          return (
            <MDBListGroupItem className="d-flex justify-content-between align-items-baseline hover">
              <span className="d-flex align-items-baseline">
                <MDBIcon fas icon="play-circle" />
                <p className="mx-2">What is Nodejs?</p>
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
