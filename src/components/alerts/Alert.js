import React from "react";

/**
 * @breif display and alert message
 * @param {String} message Alert message
 * @param {String} type Alert type [danger, infor, warning, success]
 * @returns
 */
const Alert = ({ message, type }) => {
  return (
    <div class={`alert alert--${type}`}>
      <span
        class="alert__close-btn"
        onclick="this.parentElement.style.display='none';"
      >
        &times;
      </span>
      <p className="alert__message">{message}</p>
    </div>
  );
};

export default Alert;
