import {
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
  MDBCardBody,
  MDBCol,
} from "mdb-react-ui-kit";
import React from "react";
import MyProfile from "./partials/MyProfile";
import OrderHistory from "./partials/OrderHistory";
import UserCourses from "./partials/UserCourses";
import UserWishlist from "./partials/UserWishlist";

const UserProfileRightCard = ({ basicActive }) => {
  return (
    <MDBCol size="md" className="col-lg-10 col-md-10 my-3">
      <MDBCard className="shadow">
        <MDBCardBody>
          <MDBTabsContent>
            <MDBTabsPane show={basicActive === "my_profile"}>
              <MyProfile />
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "my_courses"}>
              <UserCourses />
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "order_history"}>
              <OrderHistory />
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "wishlist"}>
              <UserWishlist />
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default UserProfileRightCard;
