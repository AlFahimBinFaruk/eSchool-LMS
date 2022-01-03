import React from "react";
import EmptyPageNotif from "../../../common_components/EmptyPageNotif";
import Pagination from "../../../common_components/Pagination";
import EnrolledCoursesList from "../../UserCourses_single_componets/EnrolledCoursesList";

const UserCourses = () => {
  let courses = true;
  return (
    <>
      {courses ? (
        <>
          <EnrolledCoursesList />
          <Pagination />
        </>
      ) : (
        <EmptyPageNotif msg={"please buy a course to continue"} />
      )}
    </>
  );
};

export default UserCourses;
