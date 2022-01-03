import React from 'react'
import { MDBCard, MDBCardBody} from "mdb-react-ui-kit";
const EmptyPageNotif = ({msg}) => {
    return (
        <MDBCard className="shadow my-4 col-md-4 col-lg-4 m-auto">
           <MDBCardBody>
           <h5 className="text-center text-capitalize text-danger">{msg}!</h5>
           </MDBCardBody>
         </MDBCard>
    )
}

export default EmptyPageNotif
