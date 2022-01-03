import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <div class="container my-4">
        {/* <!-- 404 --> */}
        <div class="row justify-content-center pt-lg-4 text-center">
          <div class="col-lg-5 col-md-7 col-sm-9">
            <img
              class="d-block mx-auto mb-5 img404"
              src="/assets/images/error/404.png"
              width="340"
              alt="404 Error"
            />
            <h1 class="h3">404 error</h1>
            <h3 class="h5 fw-normal mb-4">
              We can't seem to find the page you are looking for.
            </h3>
          </div>
        </div>
        {/* <!-- 404 --> */}

        {/* <!-- error navigation --> */}
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div class="row">
              <div class="col-sm-4 mb-3">
                <Link class="card h-100 border-0 shadow-sm" to="/">
                  <div class="card-body shadow">
                    <div class="d-flex align-items-center">
                      <i class="fas fa-home text-primary mb-0"></i>
                      <div class="ps-3">
                        <h6 class="fs-sm mb-0">Homepage</h6>
                        <span class="text-muted fs-ms">Return to homepage</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="col-sm-4 mb-3">
                <a class="card h-100 border-0 shadow-sm" href="#">
                  <div class="card-body shadow">
                    <div class="d-flex align-items-center">
                      <i class="fas fa-search text-success mb-0"></i>
                      <div class="ps-3">
                        <h6 class="fs-sm mb-0">Search</h6>
                        <span class="text-muted fs-ms">
                          Find in advanced search
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-sm-4 mb-3">
                <a class="card h-100 border-0 shadow-sm" href="#">
                  <div class="card-body shadow">
                    <div class="d-flex align-items-center">
                      <i class="far fa-question-circle text-info h4 mb-0"></i>
                      <div class="ps-3">
                        <h6 class="fs-sm mb-0">Help &amp; Support</h6>
                        <span class="text-muted fs-ms">
                          Visit our help center
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- error navigation --> */}
      </div>
      {/* <!-- container --> */}
    </>
  );
};

export default PageNotFound;
