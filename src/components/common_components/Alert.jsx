import React, { useEffect } from "react";

const Alert = ({ ...props }) => {
  let { msg, color } = props.data.errorMsg;
  let { setErrorMsg } = props.data;
  useEffect(() => {
    let AlertTimeOut = setTimeout(() => {
      setErrorMsg(null);
    }, 3000);
    return () => {
      clearTimeout(AlertTimeOut);
    };
  }, [msg]);
  return (
    <div
      className={`alert alert-${color} alert-dismissible fade show col-lg-4 col-md-4 m-auto mb-3 shadow`}
      role="alert"
    >
      <strong>{msg}</strong>
      <button
        type="button"
        class="btn-close"
        onClick={() => setErrorMsg(null)}
      ></button>
    </div>
  );
};

export default Alert;
