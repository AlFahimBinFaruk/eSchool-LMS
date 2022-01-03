import React, { useState } from "react";
import "../../../../styles/OrderHistory.css";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";
import EmptyPageNotif from "../../../common_components/EmptyPageNotif";
const OrderHistory = () => {
  let orderlist = true;
  const [orderCount, setOrderCount] = useState([1, 2, 3, 4]);
  return (
    <>
      {orderlist ? (
        <div className="orderliststablewr">
          <MDBTable striped>
            <MDBTableHead>
              <tr>
                <th scope="col">Course</th>
                <th scope="col">Price</th>
                <th scope="col">Payment Status</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Date</th>
                <th scope="col">Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {orderCount.map((count) => {
                return (
                  <tr>
                    <th scope="row">
                      HTML5 - From Basics to Advanced level (2021)
                    </th>
                    <td>
                      <b>$1236</b>
                    </td>
                    <td>
                      <MDBBadge>Success</MDBBadge>
                    </td>
                    <td>Paypal</td>
                    <td>May 21,2021</td>
                    <td>
                      <MDBBtn color="warning">Invoice Download</MDBBtn>
                    </td>
                  </tr>
                );
              })}
            </MDBTableBody>
          </MDBTable>
        </div>
      ) : (
        <EmptyPageNotif msg={"no previous order history"} />
      )}
    </>
  );
};

export default OrderHistory;
