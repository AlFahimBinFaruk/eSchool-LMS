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
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [isError, setIsError] = useState(false);
  let { errorMsg, setErrorMsg } = useGlobalContext();
  const [spin, setSpin] = useState(false);
  let navigate = useNavigate();
  const handleSubmit = () => {
    if (name && email && password && cpassword) {
      if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        setIsError(false);
        if (password === cpassword) {
          setIsError(false);
          setSpin(true);
          let registerTimeout = setTimeout(() => {
            if (isError) {
              setErrorMsg({ color: "danger", msg: "some error occured" });
            } else {
              navigate("/login");
            }
            setSpin(false);
          }, 1500);
          return () => clearTimeout(registerTimeout);
        } else {
          setIsError(true);
          setCpassword("");
        }
      } else {
        setIsError(true);
        setEmail("");
      }
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
      <MDBCol size="md" className="col-md-4 m-auto">
        <MDBCard className="shadow">
          <MDBCardBody>
            <MDBCardTitle className="text-center">Register</MDBCardTitle>
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

            <MDBCardText className={`${isError && !name && "mb-5"} my-3`}>
              <MDBInput
                label="Name"
                type="text"
                className={`${isError && !name && "is-invalid"}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                validation="Please provide a valid name."
                invalid
              />
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
                type="password"
                className={`${isError && !password && "is-invalid"}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                validation="Please provide a valid password."
                invalid
              />
            </MDBCardText>

            <MDBCardText className={`${isError && !cpassword && "mb-5"} my-3`}>
              <MDBInput
                label="Confirm Password"
                type="password"
                className={`${isError && !cpassword && "is-invalid"}`}
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
                validation="Please provide a valid confirm password."
                invalid
              />
            </MDBCardText>

            <MDBCardText className="my-3">
              <MDBCheckbox
                label="Agree to terms and conditions"
                id="invalidCheck"
                validation="You must agree before submitting."
                required
              />
            </MDBCardText>

            <MDBCardText>
              <MDBBtn
                className={`btn-block ${
                  spin && "d-flex justify-content-between"
                }`}
                onClick={handleSubmit}
              >
                <span>Register</span>
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
              Already Have An Account?
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBContainer>
  );
};

export default Register;
