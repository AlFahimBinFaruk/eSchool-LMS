import React from "react";
import ReactPlayer from "react-player";
const CourseIntroVideo = () => {
  return (
    <div className="VideoPlayerCont my-3">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=hb7Q33ysCwI"
        controls
        width="100%"
      />
    </div>
  );
};

export default CourseIntroVideo;
