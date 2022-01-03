import React, { useState } from "react";
import { MDBAccordionItem, MDBCheckbox } from "mdb-react-ui-kit";
import CreditCardForm from "./CreditCardForm";
import PaymentMethodFrom from "./PaymentMethodFrom";
const PaymentDetails = () => {
  const [checkboxValue, setCheckboxValue] = useState("");
  const options = [
    { label: "Credit Card", value: "creditcard" },
    { label: "Cash on delivery", value: "cod" },
    { label: "Pay Now", value: "paynow" },
  ];
  return (
    <>
      <MDBAccordionItem
        collapseId="accordionCollapse2"
        headerTitle="Payment Details"
      >
        <>
          {options.map((i) => {
            return (
              <MDBCheckbox
                name="inlineCheck1"
                id="inlineCheckbox1"
                value={i.value}
                label={i.label}
                onChange={(e) => setCheckboxValue(e.target.value)}
                checked={i.value === checkboxValue}
                inline
              />
            );
          })}
        </>
      </MDBAccordionItem>
      {checkboxValue === "creditcard" && <CreditCardForm />}
      {checkboxValue === "paynow" && <PaymentMethodFrom />}
    </>
  );
};

export default PaymentDetails;
