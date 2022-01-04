import React from 'react'
import ReactPlayer from "react-player";
const CourseVideo = () => {
    return (
        <div className="VideoPlayerCont shadow my-3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=PWXkYBmlbB4"
          controls
          width="100%"
        />
      </div>
    )
}

export default CourseVideo
