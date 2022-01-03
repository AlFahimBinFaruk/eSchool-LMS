import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";
import UserProfileRightCard from "./UserProfileRightCard";
import UserProfileLeftCard from "./UserProfileLeftCard";

const UserProfileCard = () => {
  const [basicActive, setBasicActive] = useState("my_profile");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };
  return (
    <MDBRow>
      {/* profilenav LeftCard */}
      <UserProfileLeftCard
        basicActive={basicActive}
        handleBasicClick={handleBasicClick}
      />
      {/* profilenav LeftCard */}

      {/* right card */}
      <UserProfileRightCard basicActive={basicActive} />
      {/* right card */}
    </MDBRow>
  );
};

export default UserProfileCard;
