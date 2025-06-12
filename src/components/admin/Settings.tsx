import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Shield, Bell, Settings as SettingsIcon, Upload, Camera } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [avatar, setAvatar] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop');
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  // Notification settings state
  const [emailNotifications, setEmailNotifications] = useState({
    orderUpdates: true,
    newCustomers: false,
    productAlerts: true,
    systemUpdates: false,
    marketingEmails: false,
    securityAlerts: true
  });

  const [pushNotifications, setPushNotifications] = useState({
    orderUpdates: true,
    newCustomers: true,
    productAlerts: false,
    systemUpdates: true,
    marketingEmails: false,
    securityAlerts: true
  });

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file",
          variant: "destructive",
        });
        return;
      }

      setIsUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target?.result as string);
        setIsUploading(false);
        toast({
          title: "Avatar updated",
          description: "Your profile picture has been updated successfully",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmailNotificationChange = (key: string) => {
    setEmailNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const handlePushNotificationChange = (key: string) => {
    setPushNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in p-2 sm:p-4 lg:p-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">Manage your account settings and preferences</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto">
          <TabsTrigger value="profile" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm p-2 sm:p-3">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger value="general" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm p-2 sm:p-3">
            <SettingsIcon className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm p-2 sm:p-3">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm p-2 sm:p-3">
            <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Profile Information</h2>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Avatar Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200"
                  />
                  {isUploading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-medium text-gray-900">Profile Picture</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
                    JPG, GIF or PNG. Max size 5MB.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="hidden"
                        disabled={isUploading}
                      />
                      <span className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-lg text-xs sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                        <Camera className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Change Avatar
                      </span>
                    </label>
                    <button 
                      className="px-3 py-2 text-xs sm:text-sm text-red-600 hover:text-red-700 transition-colors"
                      disabled={isUploading}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                    defaultValue="Admin"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                    defaultValue="User"
                    placeholder="Enter last name"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                    defaultValue="admin@localverse.com"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                    defaultValue="+1 (555) 123-4567"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Bio
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Tell us about yourself..."
                  defaultValue="LocalVerse platform administrator"
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-gray-200">
                <button className="w-full sm:w-auto px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  Cancel
                </button>
                <button className="w-full sm:w-auto px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="general" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">General Settings</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Site Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                    defaultValue="LocalVerse"
                    placeholder="Enter site title"
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Default Language
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Timezone
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base">
                    <option value="UTC">UTC</option>
                    <option value="America/Los_Angeles">America/Los_Angeles</option>
                    <option value="America/New_York">America/New_York</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Currency
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Description
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Enter site description..."
                  defaultValue="LocalVerse is a platform for handcrafted goods."
                />
              </div>

              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-gray-200">
                <button className="w-full sm:w-auto px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  Cancel
                </button>
                <button className="w-full sm:w-auto px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Security Settings</h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Change Password
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                  placeholder="Enter current password"
                />
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base mt-3"
                  placeholder="Enter new password"
                />
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base mt-3"
                  placeholder="Confirm new password"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Two-Factor Authentication
                </label>
                <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900">Enable Two-Factor Authentication</h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <div className="flex items-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-gray-200">
                <button className="w-full sm:w-auto px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  Cancel
                </button>
                <button className="w-full sm:w-auto px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Notification Preferences</h2>
            
            <div className="space-y-6 sm:space-y-8">
              {/* Email Notifications */}
              <div>
                <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4">Email Notifications</h3>
                <div className="space-y-3 sm:space-y-4">
                  {Object.entries(emailNotifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 p-3 sm:p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {key === 'orderUpdates' && 'Get notified when orders are updated'}
                          {key === 'newCustomers' && 'Get notified when new customers register'}
                          {key === 'productAlerts' && 'Get notified about product-related alerts'}
                          {key === 'systemUpdates' && 'Get notified about system maintenance and updates'}
                          {key === 'marketingEmails' && 'Receive marketing and promotional emails'}
                          {key === 'securityAlerts' && 'Get notified about security-related events'}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={() => handleEmailNotificationChange(key)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Push Notifications */}
              <div>
                <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4">Push Notifications</h3>
                <div className="space-y-3 sm:space-y-4">
                  {Object.entries(pushNotifications).map(([key, value]) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 p-3 sm:p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-medium text-gray-900 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {key === 'orderUpdates' && 'Get push notifications for order updates'}
                          {key === 'newCustomers' && 'Get push notifications for new customer registrations'}
                          {key === 'productAlerts' && 'Get push notifications for product alerts'}
                          {key === 'systemUpdates' && 'Get push notifications for system updates'}
                          {key === 'marketingEmails' && 'Receive marketing push notifications'}
                          {key === 'securityAlerts' && 'Get push notifications for security alerts'}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={() => handlePushNotificationChange(key)}
                            className="sr-only peer"
                          />
                          <div className="w-9 h-5 sm:w-11 sm:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-gray-900"></div>
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 sm:pt-6 border-t border-gray-200">
                <button className="w-full sm:w-auto px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
                  Reset to Default
                </button>
                <button className="w-full sm:w-auto px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
