import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
  MDBCheckbox,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import Alert from "../common_components/Alert";
import { useGlobalContext } from "../../contexts/AlertContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  let { errorMsg, setErrorMsg } = useGlobalContext();
  const [spin, setSpin] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = () => {
    if (email && password) {
      setIsError(true);
      setSpin(true);
      let registerTimeout = setTimeout(() => {
        if (isError) {
          setErrorMsg({ color: "danger", msg: "This Account Dont't Exits" });
        } else {
          navigate("/");
        }
        setSpin(false);
      }, 1500);
      return () => clearTimeout(registerTimeout);
    } else {
      setIsError(true);
    }
  };

  useEffect(() => {
    if (isError) {
      let errorTimeout = setTimeout(() => {
        setIsError(false);
      }, 3000);
      return () => clearTimeout(errorTimeout);
    }
  }, [isError]);
  return (
    <MDBContainer className="my-5">
      {errorMsg && <Alert data={{ errorMsg, setErrorMsg }} />}
      <MDBCol size="md" className="col-md-4 m-auto shadow">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle className="text-center">Login</MDBCardTitle>
            <hr />
            <MDBCardText className="text-center">
              <p>Sign up with:</p>
              <>
                <MDBBtn floating>
                  <MDBIcon fab icon="facebook-f" />
                </MDBBtn>
                <MDBBtn floating className="mx-2">
                  <MDBIcon fab icon="google" />
                </MDBBtn>
              </>
              <p className="my-3">or:</p>
            </MDBCardText>

            <MDBCardText className={`${isError && !email && "mb-5"} my-3`}>
              <MDBInput
                label="Email"
                className={`${isError && !email && "is-invalid"}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                validation="Please provide a valid email."
                invalid
              />
            </MDBCardText>

            <MDBCardText className={`${isError && !password && "mb-5"} my-3`}>
              <MDBInput
                label="Password"
                className={`${isError && !password && "is-invalid"}`}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                validation="Please provide a valid password."
                invalid
              />
            </MDBCardText>

            <MDBCardText className="my-3 d-flex justify-content-between">
              <MDBCheckbox label="Remember Me" id="invalidCheck" />
              <Link to="/forgetpassword" className="text-primary">
                Forget Password?
              </Link>
            </MDBCardText>

            <MDBCardText>
              <MDBBtn
                className={`btn-block ${
                  spin && "d-flex justify-content-between"
                }`}
                onClick={handleSubmit}
              >
                <span>Login</span>
                {spin && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
              </MDBBtn>
            </MDBCardText>

            <MDBCardText className="text-center">
              New Member?
              <Link to="/register" className="text-primary">
                Register
              </Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default Login;
