import React, { useState } from "react";
import {
  MDBTypography,
  MDBCol,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBInput,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
const ForgetPassword = () => {
  const [sendMail, setSendMail] = useState(true);
  return (
    <MDBContainer className="my-5">
      <MDBCol size="md" className="col-md-4 m-auto shadow">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className="text-center">
              Password assistance
            </MDBCardTitle>
            <hr />
            {sendMail ? (
              <>
                <MDBCardText>
                  Enter the email address or mobile phone number associated with
                  your <b>TechStore</b> account.
                </MDBCardText>
                <MDBCardText className="my-3">
                  <MDBInput label="Email" id="form1" type="email" />
                </MDBCardText>

                <MDBCardText>
                  <MDBBtn className="btn-block" type="submit">
                    Send Mail
                  </MDBBtn>
                </MDBCardText>
              </>
            ) : (
              <MDBBreadcrumb
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                className="p-3"
              >
                <MDBBreadcrumbItem>
                  We Have Send You An E-Mail,follow that to continue further.
                </MDBBreadcrumbItem>
              </MDBBreadcrumb>
            )}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default ForgetPassword;
