import React from "react";
import { MDBListGroupItem } from "mdb-react-ui-kit";
const SingleUserComment = () => {
  return (
    <MDBListGroupItem>
      {" "}
      <div class="ms-2 me-auto">
        <div class="fw-bold">
          <img
            src="https://mdbootstrap.com/img/new/avatars/2.jpg"
            class="rounded-circle mx-1"
            height="25"
            alt=""
            loading="lazy"
          />
          john Deow(4 starts)---(12.23.2020)
        </div>
        <hr />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        culpa quas quis, numquam ratione dicta!
      </div>
    </MDBListGroupItem>
  );
};

export default SingleUserComment;
