import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCourseCard from "../single_components/Courses_components/SingleCourseCard";
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";

const MultipleCourseSlider = ({ title }) => {
  const [ismobile, setIsmobile] = useState(3);
  const [productCount, setproductCount] = useState([
    "NodeJS Full Course",
    "HTML Crash Course",
    "Laravel Course",
    "Bootstrap 5 Full Course",
    "Django Full Course",
    "CSS3 Full Course",
    "Express Js Crash Course",
  ]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: ismobile,
    slidesToScroll: 1,
  };

  const handleResize = () => {
    if (window.innerWidth <= 420) {
      setIsmobile(1);
    } else {
      setIsmobile(4);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return function cleanupListener() {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <MDBCard className="shadow p-2 my-3">
      <MDBCardBody>
        <h4 className="mb-3 text-capitalize">{title}</h4>
        <hr />

        <Slider {...settings}>
          {productCount.map((p) => {
            return (
              <div>
                <SingleCourseCard title={p} corousalItem />
              </div>
            );
          })}
        </Slider>
      </MDBCardBody>
    </MDBCard>
  );
};

export default MultipleCourseSlider;
