import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
  } from "mdb-react-ui-kit";
const UserProfileLeftCard = ({handleBasicClick,basicActive}) => {
    return (
        <MDBCol className="col-lg-2 col-md-2 my-3">
        <MDBCard className="shadow">
        <MDBCardBody>
          <MDBListGroup flush className="userProfileListGroup">
            <span>
              <img
                src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
                className="userProfilePic rounded-circle"
                alt="#"
              />
              <h6 className="text-center">Jon Doe</h6>
            </span>
            <MDBListGroupItem
              onClick={() => handleBasicClick("my_profile")}
              active={basicActive === "my_profile"}
            >
              My Profile
            </MDBListGroupItem>
            <MDBListGroupItem
              onClick={() => handleBasicClick("my_courses")}
              active={basicActive === "my_courses"}
            >
              My Courses
            </MDBListGroupItem>
            <MDBListGroupItem
              onClick={() => handleBasicClick("order_history")}
              active={basicActive === "order_history"}
            >
              Order History
            </MDBListGroupItem>
            <MDBListGroupItem
              onClick={() => handleBasicClick("wishlist")}
              active={basicActive === "wishlist"}
            >
              Wishlist
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
      </MDBCol>
    )
}

export default UserProfileLeftCard
