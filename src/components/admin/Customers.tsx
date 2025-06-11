
import React, { useState } from 'react';
import { Search, Filter, Plus, Eye, Edit, MoreHorizontal, Mail, Phone } from 'lucide-react';
import CustomerDetail from './CustomerDetail';

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [viewingCustomer, setViewingCustomer] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const customers = [
    {
      id: 'CUS-001',
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '+1 (555) 123-4567',
      orders: 12,
      totalSpent: '$1,247.50',
      status: 'Active',
      joinDate: '2023-06-15',
      lastOrder: '2024-01-15'
    },
    {
      id: 'CUS-002',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      phone: '+1 (555) 987-6543',
      orders: 8,
      totalSpent: '$892.30',
      status: 'Active',
      joinDate: '2023-08-22',
      lastOrder: '2024-01-10'
    },
    {
      id: 'CUS-003',
      name: 'Mike Johnson',
      email: 'mike.johnson@email.com',
      phone: '+1 (555) 456-7890',
      orders: 15,
      totalSpent: '$2,156.80',
      status: 'Active',
      joinDate: '2023-04-10',
      lastOrder: '2024-01-12'
    },
    {
      id: 'CUS-004',
      name: 'Emily Brown',
      email: 'emily.brown@email.com',
      phone: '+1 (555) 321-0987',
      orders: 3,
      totalSpent: '$245.60',
      status: 'Inactive',
      joinDate: '2023-11-05',
      lastOrder: '2023-12-20'
    }
  ];

  const CustomerModal = ({ customer, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              {customer ? 'Edit Customer' : 'Add New Customer'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors p-1"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                defaultValue={customer?.name || ''}
                placeholder="Enter full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                defaultValue={customer?.email || ''}
                placeholder="Enter email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                defaultValue={customer?.phone || ''}
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border-t border-gray-200 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
          >
            Cancel
          </button>
          <button className="w-full sm:w-auto px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors transform hover:scale-105 text-sm sm:text-base">
            {customer ? 'Update Customer' : 'Add Customer'}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in p-2 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Customers</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage your customer base and their information</p>
        </div>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 lg:space-x-4">
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search customers..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
              />
            </div>
            <button className="flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            <Plus className="w-4 h-4" />
            <span>Add Customer</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Total Customers</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">1,247</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Active Customers</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">1,156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-purple-100 rounded-lg">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">New This Month</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">89</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-orange-100 rounded-lg">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Average Orders</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">8.5</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customers Grid - Mobile Cards */}
      <div className="block sm:hidden space-y-4">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-medium">{customer.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 truncate">{customer.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">ID: {customer.id}</p>
                    <p className="text-xs text-gray-600 mt-1 truncate">{customer.email}</p>
                    <p className="text-xs text-gray-600 truncate">{customer.phone}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {customer.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 text-xs">
                  <div>
                    <span className="text-gray-500">Orders: </span>
                    <span className="font-medium">{customer.orders}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Spent: </span>
                    <span className="font-medium">{customer.totalSpent}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <button 
                    onClick={() => setViewingCustomer(customer)}
                    className="flex-1 px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                  >
                    View
                  </button>
                  <button 
                    onClick={() => setSelectedCustomer(customer)}
                    className="flex-1 px-3 py-1 text-xs bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Customers Table - Desktop */}
      <div className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Order
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customers.map((customer) => (
                <tr key={customer.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs lg:text-sm font-medium">{customer.name.charAt(0)}</span>
                      </div>
                      <div className="ml-3 lg:ml-4">
                        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
                        <div className="text-xs lg:text-sm text-gray-500">ID: {customer.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <div className="text-xs lg:text-sm text-gray-900">{customer.email}</div>
                    <div className="text-xs lg:text-sm text-gray-500">{customer.phone}</div>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {customer.orders}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {customer.totalSpent}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {customer.lastOrder}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setViewingCustomer(customer)}
                        className="p-1 rounded hover:bg-gray-100 transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setSelectedCustomer(customer)}
                        className="p-1 rounded hover:bg-gray-100 transition-colors"
                        title="Edit Customer"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1 rounded hover:bg-gray-100 transition-colors" title="More Options">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Detail Modal */}
      {viewingCustomer && (
        <CustomerDetail 
          customer={viewingCustomer} 
          onClose={() => setViewingCustomer(null)}
          onEdit={(customer) => {
            setViewingCustomer(null);
            setSelectedCustomer(customer);
          }}
        />
      )}

      {/* Add/Edit Modals */}
      {showAddModal && (
        <CustomerModal 
          customer={null} 
          onClose={() => setShowAddModal(false)} 
        />
      )}
      
      {selectedCustomer && (
        <CustomerModal 
          customer={selectedCustomer} 
          onClose={() => setSelectedCustomer(null)} 
        />
      )}
    </div>
  );
};

export default Customers;
