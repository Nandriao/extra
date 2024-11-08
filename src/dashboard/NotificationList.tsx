import React from "react";

interface NotificationListProps {
  notifications: string[];
  isVisible: boolean;
}

const NotificationList: React.FC<NotificationListProps> = ({ notifications, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md p-4 w-64">
      <h3 className="text-lg font-bold mb-2">Notificações</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="border-b border-gray-200 py-2">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList; 