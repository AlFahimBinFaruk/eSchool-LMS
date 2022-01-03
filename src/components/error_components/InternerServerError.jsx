import React from "react";
import "../../styles/Error.css";

const InternerServerError = () => {
  return (
    <>
      {/* <!-- container --> */}
      <div class="container my-4">
        {/* <!-- 404 --> */}
        <div class="row justify-content-center pt-lg-4 text-center">
          <div class="col-lg-5 col-md-7 col-sm-9">
            <h1 class="internalErrorText">500</h1>
            <h1 class="h5 mb-4">
              Sorry,there has been an internal server error.
            </h1>
          </div>
        </div>
        {/* <!-- 404 --> */}

        {/* <!-- error navigation --> */}
        <div class="row justify-content-center">
          <div class="col-xl-8 col-lg-10">
            <div class="row">
              <div class="col-sm-4 mb-3">
                <a class="card h-100 border-0 shadow-sm" href="/home.html">
                  <div class="card-body shadow">
                    <div class="d-flex align-items-center">
                      <i class="fas fa-home text-primary mb-0"></i>
                      <div class="ps-3">
                        <h6 class="fs-sm mb-0">Homepage</h6>
                        <span class="text-muted fs-ms">Return to homepage</span>
                      </div>
                    </div>
                  </div>
                </a>
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
                <a
                  class="card h-100 border-0 shadow-sm"
                  href="help-topics.html"
                >
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
      {/* <!-- container -->  */}
    </>
  );
};

export default InternerServerError;
