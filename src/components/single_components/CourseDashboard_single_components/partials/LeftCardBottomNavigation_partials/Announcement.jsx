import React, { useState } from "react";
import { MDBIcon } from "mdb-react-ui-kit";
const Announcement = () => {
  const [announcements, setAnnouncements] = useState([
    {
      p: "In this video i have elaborate the importance of git and how to use them",
      link: ["www.gihub.com", "www.w3schools.com"],
    },
  ]);
  return (
    <>
      {!announcements ? (
        <div>
          <h5 className="text-center"> No announcements posted yet</h5>
          <div className="text-center">
            The instructor hasn’t added any announcements to this course yet.
            Announcements are used to inform you of updates or additions to the
            course.
          </div>
        </div>
      ) : (
        <>
          {announcements.map((i) => {
            return (
              <>
                <h5 className="text-capitalize">{i.p}</h5>
                <hr />
                {i.link && (
                  <>
                    <b className="text-capitalize">
                      To Know more{" "}
                      <span className="text-warning">
                        please visit these links
                      </span>
                      <MDBIcon fas icon="hand-point-down" className="mx-2" />
                    </b>
                    <br />
                  </>
                )}
                {i.link &&
                  i.link.map((l) => {
                    return (
                      <>
                        <a
                          href={l}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-info"
                        >
                          {l}
                        </a>
                        <br />
                      </>
                    );
                  })}
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default Announcement;
