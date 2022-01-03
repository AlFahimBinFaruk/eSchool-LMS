import { MDBContainer} from "mdb-react-ui-kit";
import "../../styles/UserProfile.css";
import React from "react";
import UserProfileCard from "../single_components/UserProfile_single_components/UserProfileCard";

const UserProfile = () => {
  return (
    <>
      <MDBContainer>
        <UserProfileCard />
      </MDBContainer>
    </>
  );
};

export default UserProfile;
