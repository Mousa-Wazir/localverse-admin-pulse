
import React, { useState } from 'react';
import { Search, Filter, Download, Eye, MoreHorizontal } from 'lucide-react';

const Orders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: '#ORD-001',
      customer: 'John Smith',
      date: '2024-01-15',
      amount: '$125.00',
      status: 'Delivered',
      items: 3,
      paymentMethod: 'Credit Card',
      shippingAddress: '123 Main St, City, State 12345'
    },
    {
      id: '#ORD-002',
      customer: 'Sarah Wilson',
      date: '2024-01-14',
      amount: '$89.50',
      status: 'Processing',
      items: 2,
      paymentMethod: 'PayPal',
      shippingAddress: '456 Oak Ave, City, State 67890'
    },
    {
      id: '#ORD-003',
      customer: 'Mike Johnson',
      date: '2024-01-13',
      amount: '$247.25',
      status: 'Shipped',
      items: 5,
      paymentMethod: 'Credit Card',
      shippingAddress: '789 Pine Rd, City, State 54321'
    },
    {
      id: '#ORD-004',
      customer: 'Emily Brown',
      date: '2024-01-12',
      amount: '$156.75',
      status: 'Pending',
      items: 1,
      paymentMethod: 'Bank Transfer',
      shippingAddress: '321 Elm St, City, State 98765'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-purple-100 text-purple-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const OrderDetailModal = ({ order, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              Order Details - {order.id}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors p-1"
            >
              ×
            </button>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Order Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-900">Order Information</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm text-gray-600">Order ID:</span>
                  <span className="font-medium text-sm sm:text-base">{order.id}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm text-gray-600">Date:</span>
                  <span className="font-medium text-sm sm:text-base">{order.date}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)} self-start sm:self-auto`}>
                    {order.status}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm text-gray-600">Total Amount:</span>
                  <span className="font-medium text-base sm:text-lg">{order.amount}</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-medium text-gray-900">Customer Information</h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm text-gray-600">Name:</span>
                  <span className="font-medium text-sm sm:text-base">{order.customer}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm text-gray-600">Payment:</span>
                  <span className="font-medium text-sm sm:text-base">{order.paymentMethod}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Shipping Address:</span>
                  <p className="font-medium mt-1 text-sm sm:text-base">{order.shippingAddress}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status Update */}
          <div className="border-t pt-4 sm:pt-6">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Update Status</h3>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <select className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base">
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <button className="w-full sm:w-auto px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors transform hover:scale-105 text-sm sm:text-base">
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const exportToCSV = () => {
    const csvContent = [
      ['Order ID', 'Customer', 'Date', 'Amount', 'Status', 'Items'],
      ...orders.map(order => [order.id, order.customer, order.date, order.amount, order.status, order.items])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orders.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in p-2 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage customer orders and fulfillment</p>
        </div>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 lg:space-x-4">
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search orders..."
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
              />
            </div>
            <button className="flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
          
          <button
            onClick={exportToCSV}
            className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 text-sm sm:text-base"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Orders Grid - Mobile Cards */}
      <div className="block sm:hidden space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{order.id}</h3>
                <p className="text-xs text-gray-500 mt-1">{order.customer}</p>
              </div>
              <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date:</span>
                <span className="text-gray-900">{order.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Amount:</span>
                <span className="font-semibold text-gray-900">{order.amount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Items:</span>
                <span className="text-gray-900">{order.items}</span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedOrder(order)}
              className="w-full mt-3 px-3 py-2 text-xs bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Orders Table - Desktop */}
      <div className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {order.customer}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {order.date}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {order.amount}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {order.items}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setSelectedOrder(order)}
                        className="p-1 rounded hover:bg-gray-100 transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
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

      {/* Order Detail Modal */}
      {selectedOrder && (
        <OrderDetailModal 
          order={selectedOrder} 
          onClose={() => setSelectedOrder(null)} 
        />
      )}
    </div>
  );
};

export default Orders;
