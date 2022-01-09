import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "../../styles/CourseDashboard.css";
import { AppProvider } from "../../contexts/CourseDashboardContext";
import React from "react";
import CourseDashboardLeftCard from "../single_components/CourseDashboard_single_components/CourseDashboardLeftCard";
import CourseDashboardRightCard from "../single_components/CourseDashboard_single_components/CourseDashboardRightCard";
const CourseDashboard = () => {
  return (
    <>
      <MDBContainer className="my-4">
        <h4 className="text-capitalize text-muted">
          complete mern stack development course
        </h4>
        <hr />
        <MDBRow>
          <AppProvider>
            <CourseDashboardLeftCard />
            <CourseDashboardRightCard />
          </AppProvider>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default CourseDashboard;
