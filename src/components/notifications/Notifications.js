import React from "react";
import NotificationItem from "./NotificationItem";

const NotificationModal = ({ notifications, active }) => {
  return (
    <div className={`notification ${active ? "active" : ""}`}>
      <div className="notification__header">
        <h3 className="notification__header-main">Notifications</h3>
        <span className="notification__header-number">120</span>
      </div>
      <div className="notification__content">
        {notifications.map((notification) => (
          <NotificationItem key={notification.id} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationModal;
