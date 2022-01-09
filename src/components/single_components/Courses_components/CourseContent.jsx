import React, { useState } from "react";
import '../../../styles/CourseContent.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBAccordion,
} from "mdb-react-ui-kit";
import CourseContentAccordionItem from "./Partials/CourseContentAccordionItem";

const CourseContent = ({unlocked = false}) => {
  const [accordionTitle, setAccordionTitle] = useState([
    "Introduction(6 Lectures•6 Minutes)",
    "Install(8 Lectures•7 Minutes)",
    "Node Tutorial(34 Lectures•3 Hours)",
    "Express(6 Lectures•50 Minutes)",
    "Project Intro & Setup(6 Lectures•6 Minutes)",
    "Task Manager API(23 Lectures•2 Hours)",
    "Last Words(1 Lectures•2 Minutes)",
  ]);
  return (
    <MDBCard className="my-3">
      <MDBCardBody className={`${unlocked ? 'bg-transparent' : 'shadow'}`}>
        <MDBCardTitle>Course content</MDBCardTitle>
        <span className="contentSecDetails">
          14 sections • 336 lectures • 31h 21m total length
        </span>
        <hr />
        {/* couserContentlist */}
        <MDBAccordion
          initialActive="accordionCollapse1"
          className="courseContentAccordionItem"
        >
          {accordionTitle.map((title) => {
            return <CourseContentAccordionItem title={title} unlocked={unlocked} />;
          })}
        </MDBAccordion>
        {/* coursecontentlist */}
      </MDBCardBody>
    </MDBCard>
  );
};

export default CourseContent;
