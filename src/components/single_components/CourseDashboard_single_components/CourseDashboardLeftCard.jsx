import { MDBCol } from 'mdb-react-ui-kit'
import React from 'react'
import CourseVideo from './partials/CourseVideo'
import LeftCardBottomNavigation from './partials/LeftCardBottomNavigation'

const CourseDashboardLeftCard = () => {
    return (
        <MDBCol className='col-lg-8 col-md-8 my-2'>
           <CourseVideo/>
           <LeftCardBottomNavigation/>
        </MDBCol>
        
    )
}

export default CourseDashboardLeftCard
