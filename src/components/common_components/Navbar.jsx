import React, { useState } from "react";
import "../../styles/Navbar.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link,useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate=useNavigate();
  let login = true;
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        {/* left */}
        <MDBNavbarBrand className="brandLogo">
          <Link to="/">eSchool</Link>
        </MDBNavbarBrand>
        {/* left */}
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          {/* middle */}
          <MDBNavbarNav className="justifyCenter mr-auto mb-2 mb-lg-0">
            <div
              className={`${
                window.screen.width >= 500
                  ? "btn-group"
                  : "d-flex flex-column navbarBtnWrMobileStyle"
              }`}
            >
              <MDBBtn color="warning" onClick={()=>navigate('/courses/web-dev')}>
                <MDBIcon fas icon="laptop-code" />{" "}
                <span className="mx-2">Wev Development</span>
              </MDBBtn>
              <MDBBtn color="secondary" onClick={()=>navigate('/courses/seo')}>
                <MDBIcon fab icon="searchengin" />
                <span className="mx-2">SEO</span>
              </MDBBtn>
              <MDBBtn color="dark" onClick={()=>navigate('/courses/digital-marketing')}>
                <MDBIcon fas icon="user-tie" />
                <span className="mx-2">Digital Marketing</span>
              </MDBBtn>
            </div>
          </MDBNavbarNav>
          {/* middle */}

          {/* right */}
          <form className="d-flex align-items-center input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
            />
            <MDBBtn color="light">
              <MDBIcon fas icon="search" />
            </MDBBtn>
            {login ? (
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  <MDBIcon fas icon="user-cog" />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>
                      <Link to="/login">Login</Link>
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Another action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Something else here</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            ) : (
              <MDBBtn className="btn-success">Login</MDBBtn>
            )}
          </form>
          {/* right */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
