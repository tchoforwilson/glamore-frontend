import React from "react";

/**
 * @breif Display a single notification item
 * @param {String} title Notification title
 * @param {Boolean} isRead Is notification item read
 * @returns {JSX}
 */
const NotificationItem = ({ notification }) => {
  return (
    <div className="notification__item">
      <span
        className={`notification__status ${
          !notification.isRead ? "inactive" : ""
        }`}
      ></span>
      <img
        src={notification.image}
        className="notification__img"
        alt={notification.name}
      />
      <div className="notification__details">
        <p className="notification__title">{notification.title}</p>
        <span className="notification__time">{notification.time}</span>
      </div>
    </div>
  );
};

export default NotificationItem;
