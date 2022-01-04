import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import AskQuestions from "./LeftCardBottomNavigation_partials/AskQuestions";
import Announcement from "./LeftCardBottomNavigation_partials/Announcement";

const LeftCardBottomNavigation = () => {
  const [basicActive, setBasicActive] = useState("Overview");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <MDBCard className="my-3">
      <MDBCardBody className="shadow">
        <MDBTabs className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("AskQuestions")}
              active={basicActive === "AskQuestions"}
            >
              Ask Questions
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("Announcements")}
              active={basicActive === "Announcements"}
            >
              Announcements
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
        <MDBTabsContent>
          <MDBTabsPane show={basicActive === "AskQuestions"}>
            <AskQuestions />
          </MDBTabsPane>
          <MDBTabsPane show={basicActive === "Announcements"}>
            <Announcement />
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBCardBody>
    </MDBCard>
  );
};

export default LeftCardBottomNavigation;
