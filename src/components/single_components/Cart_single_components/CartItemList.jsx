import React from "react";
import {
  MDBIcon
} from "mdb-react-ui-kit";
const CartItemList = () => {
  return (
    <tr>
      <th>
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.jpg"
          alt="img"
          className="cartImg"
        />
      </th>
      <td>
        <p>Dell Inspiron 15</p>
        <span className="authorName">Brad Traversy.</span>
        <p>
          <span className="text-warning mr-04">4.6</span>
          <MDBIcon fas icon="star" />
          <MDBIcon fas icon="star" />
          <MDBIcon fas icon="star" />
          <MDBIcon fas icon="star" />
          <MDBIcon fas icon="star-half-alt" />
          <span>(546)</span>
        </p>
        <p>
          Price: <b>$1223</b> <s>$5000</s>
        </p>
      </td>
      <td>
        <MDBIcon fas icon="trash-alt" className="mx-1" color="danger" />
        <MDBIcon far icon="heart" className="mx-1" color="info" />
      </td>
    </tr>
  );
};

export default CartItemList;
