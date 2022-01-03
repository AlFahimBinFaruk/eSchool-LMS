import React, { useState } from "react";
import { MDBRow } from "mdb-react-ui-kit";
import SingleCourseCard from "../../Courses_components/SingleCourseCard";
import Pagination from "../../../common_components/Pagination";
import EmptyPageNotif from "../../../common_components/EmptyPageNotif";
const UserWishlist = () => {
  let Wishlist = true;
  const [productCount, setproductCount] = useState([
    "NodeJS Full Course",
    "HTML Crash Course",
    "Laravel Course",
    "Bootstrap 5 Full Course",
    "Django Full Course",
    "CSS3 Full Course",
    "Express Js Crash Course",
  ]);
  return (
    <>
      <h5>Your Wishlist</h5>
      <hr />
      {Wishlist ? (
        <>
          <MDBRow>
            {productCount.map((i) => (
              <SingleCourseCard wishlistProduct title={i} />
            ))}
          </MDBRow>
          <Pagination />
        </>
      ) : (
        <EmptyPageNotif msg={"wishlist is empty"} />
      )}
    </>
  );
};

export default UserWishlist;
