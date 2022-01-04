import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

const YourQuestion = () => {
  return (
    <div className="comment d-flex align-items-center">
      <img
        src="https://mdbootstrap.com/img/new/avatars/2.jpg"
        class="rounded-circle mx-1"
        height="35"
        alt=""
        loading="lazy"
      />
      <MDBInput
        label="Press Enter To Ask Question!"
        id="formControlLg"
        type="text"
        size="lg"
        width="100%"
        className="shadow"
      />
    </div>
  );
};

export default YourQuestion;
