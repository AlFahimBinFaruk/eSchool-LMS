import React from "react";
import { MDBListGroup } from "mdb-react-ui-kit";
import SingleUserComment from "../../../../SingleUser_components/SingleUserComment";
const AllQuestions = () => {
  return (
    <MDBListGroup>
      <h6>Others Questions.</h6>
      <SingleUserComment />
      <SingleUserComment />
    </MDBListGroup>
  );
};

export default AllQuestions;
