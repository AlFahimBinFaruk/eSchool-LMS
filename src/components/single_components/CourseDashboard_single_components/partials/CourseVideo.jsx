import React from 'react'
import ReactPlayer from "react-player";
import { useGlobalContext } from '../../../../contexts/CourseDashboardContext'
const CourseVideo = () => {
  let {videoLink}=useGlobalContext()
    return (
        <div className="VideoPlayerCont shadow my-3">
        <ReactPlayer
          url={videoLink}
          controls
          width="100%"
        />
      </div>
    )
}

export default CourseVideo
