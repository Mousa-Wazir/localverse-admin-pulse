
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Dashboard from './Dashboard';
import Products from './Products';
import Orders from './Orders';
import Customers from './Customers';
import Settings from './Settings';

interface AdminPanelProps {
  onLogout?: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <Products />;
      case 'orders':
        return <Orders />;
      case 'customers':
        return <Customers />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={toggleSidebar}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onLogout={handleLogout}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          onMenuToggle={toggleSidebar}
          title={currentPage}
          onLogout={handleLogout}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
