import React from "react";
import NotificationItem from "./NotificationItem";

/**
 * @breif Display a list of user notifications
 * @param {Array} notifications Array list of notifications
 * @returns {JSX}
 */
const NotificationList = ({ notifications = [] }) => {
  return (
    <div className="notification-list">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} title={notification.title} />
      ))}
    </div>
  );
};

export default NotificationList;
