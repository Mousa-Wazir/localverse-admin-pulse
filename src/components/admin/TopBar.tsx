
import React, { useState } from 'react';
import { Menu, Bell, Search, LogOut } from 'lucide-react';

interface TopBarProps {
  onMenuToggle: () => void;
  title: string;
  onLogout?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onMenuToggle, title, onLogout }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications] = useState([
    {
      id: 1,
      title: 'New Order Received',
      message: 'Order #ORD-005 from John Doe',
      time: '2 minutes ago',
      unread: true
    },
    {
      id: 2,
      title: 'Low Stock Alert',
      message: 'Silk Scarf is out of stock',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      title: 'New Customer Registration',
      message: 'Jane Smith joined the platform',
      time: '3 hours ago',
      unread: false
    },
    {
      id: 4,
      title: 'Report Submitted',
      message: 'New violation report submitted',
      time: '5 hours ago',
      unread: false
    }
  ]);

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const markAsRead = (id: number) => {
    // In a real app, this would update the notification status
    console.log('Marking notification as read:', id);
  };

  const markAllAsRead = () => {
    // In a real app, this would update all notifications
    console.log('Marking all notifications as read');
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-lg sm:text-2xl font-bold text-gray-900 capitalize truncate">{title}</h1>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Search */}
          <div className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-sm text-gray-700 w-32 lg:w-48"
            />
          </div>

          {/* Mobile Search Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Search className="w-5 h-5 text-gray-600" />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              {unreadCount > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-medium">{unreadCount}</span>
                </div>
              )}
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 md:w-96 bg-white rounded-lg border border-gray-200 shadow-lg z-50 max-h-80 sm:max-h-96 overflow-hidden">
                {/* Header */}
                <div className="p-3 sm:p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Mark all read
                      </button>
                    )}
                  </div>
                  {unreadCount > 0 && (
                    <p className="text-xs sm:text-sm text-gray-500 mt-1">{unreadCount} unread notifications</p>
                  )}
                </div>

                {/* Notifications List */}
                <div className="max-h-60 sm:max-h-72 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      onClick={() => markAsRead(notification.id)}
                      className={`p-3 sm:p-4 hover:bg-gray-50 transition-colors cursor-pointer border-b border-gray-100 last:border-b-0 ${
                        notification.unread ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          notification.unread ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {notification.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-3 sm:p-4 border-t border-gray-200 bg-gray-50">
                  <button className="w-full text-center text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors py-1">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="hidden sm:flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <span className="hidden md:block text-sm font-medium text-gray-700">Admin</span>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Overlay to close notifications when clicking outside */}
      {showNotifications && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowNotifications(false)}
        ></div>
      )}
    </div>
  );
};

export default TopBar;
