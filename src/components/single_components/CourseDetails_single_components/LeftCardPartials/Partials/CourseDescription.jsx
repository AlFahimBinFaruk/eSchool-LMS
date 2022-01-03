import React, { useState } from "react";
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBListGroup,
  MDBListGroupItem,
  MDBIcon,
  MDBAccordion,
  MDBAccordionItem,
} from "mdb-react-ui-kit";
const CourseDescription = () => {
  const [courseConsistTitle, setCourseConsistTitle] = useState(['Node Tutorial','Express Tutorial','Projects','Task Manager API','Store API','JWT Basics','Jobs API'])
  return (
    <MDBAccordionItem
      collapseId="flush-collapse2"
      headerTitle="Description"
      className="descAccordionItem"
    >
      <h6>Welcome to NodeJS Tutorial and Projects Course.</h6>
      <p>
        I guess let’s start by answering the most pressing question first. What
        is a NodeJS? And even though there are plenty of good answers out there
        the one that I like the most is this one - "NodeJS is an environment to
        run Javascript outside of the Browser". NodeJS was created in 2009 and
        it's built on top of Chrome's V8 Javascript Engine. As you are probably
        aware of, every browser has an engine, a tool that compiles our code
        down to machine code and Chrome uses one by the name of V8. Since the
        moment it was created, Node has evolved tremendously, and while there
        are many things to like about Node, some of the main ones are - large
        community, since that tremendously saves time on feature development, as
        well as the fact that with the help of Node, it's never been easier to
        build Full-Stack Apps, since both Front-End And Back-End are built in
        one language, and you guessed that language is our beloved Javascript.
      </p>
      <p>
        During the course we will cover following main technologies - NodeJS,
        ExpressJS, MongoDB, Mongoose, JWT and many smaller ones as well.
      </p>
      <span>
        <b>Course consists of:</b>
        <MDBListGroup className="borderNoneListGroup">
          {courseConsistTitle.map((title) => {
            return (
              <MDBListGroupItem className="col-lg-5 col-md-5">
                <p className="small-p">
                <MDBIcon fas icon="hand-point-right" />
                  <span className="mx-1">
                    {title}
                  </span>
                </p>
              </MDBListGroupItem>
            );
          })}
        </MDBListGroup>
      </span>
    </MDBAccordionItem>
  );
};

export default CourseDescription;
