import React from "react";
import { Link } from "react-router-dom";

/**
 * @breif Display a single notification item
 * @param {String} title Notification title
 * @param {Boolean} isRead Is notification item read
 * @returns {JSX}
 */
const NotificationItem = ({ notification, isRead = false }) => {
  return (
    <Link className="notification-item" to={`/notification/${notification.id}`}>
      <span className="notification-item__title">{notification.title}</span>
      <span
        className={`notification-item__status ${
          isRead ? "active" : "inactive"
        }`}
      ></span>
    </Link>
  );
};

export default NotificationItem;
