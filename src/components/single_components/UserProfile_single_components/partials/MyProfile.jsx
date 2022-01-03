import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React,{useState} from "react";

const MyProfile = () => {
 const [name, setName] = useState('');
 const [oldpassword, setOldpassword] = useState('');
 const [newpassword, setNewpassword] = useState('')
  return (
    <MDBRow>
      <MDBCol size="md" className="col-lg-3 col-md-3">
        <img
          src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
          className="userProfilePic rounded-circle"
          alt="#"
        />
        <MDBBtn rounded className="btn-block my-2" color="secondary">
          Upload Pic
        </MDBBtn>
      </MDBCol>
      <MDBCol className="col-lg-8 col-md-8">
        <span>
          <MDBCol size="sm" sm="12" className="my-2">
            <label class="form-label" for="form1Example1">
              Full Name
            </label>
            <input
              type="text"
              id="form1Example1"
              class="form-control"
              placeholder="John Doe"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </MDBCol>
          <MDBCol size="sm" sm="12" className="my-2">
            <label class="form-label" for="form1Example2">
              Email address (Email Can't be changed.)
            </label>
            <input
              type="email"
              id="form1Example2"
              class="form-control"
              value={"johnDoe@gmail.com"}
              disabled
            />
          </MDBCol>

          <MDBBtn className="float-right" disabled={!name} color="secondary">
            Save Changes
          </MDBBtn>
        </span>
        <br />
        <hr />
        <span>
          <MDBCol size="sm" sm="12" className="my-2">
            <label class="form-label" for="form1Example3">
              Old Password
            </label>
            <input type="password" value={oldpassword} onChange={(e)=>setOldpassword(e.target.value)} id="form1Example3" class="form-control" />
          </MDBCol>
          <MDBCol size="sm" sm="12" className="my-2">
            <label class="form-label" for="form1Example4">
              New Password
            </label>
            <input type="password" value={newpassword} onChange={(e)=>setNewpassword(e.target.value)} id="form1Example4" class="form-control" />
          </MDBCol>

          <MDBBtn className="float-right" disabled={!newpassword} color="warning">
            Change Password
          </MDBBtn>
        </span>
      </MDBCol>
    </MDBRow>
  );
};

export default MyProfile;
