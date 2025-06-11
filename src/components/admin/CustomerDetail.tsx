
import React, { useState } from 'react';
import { X, User, Package, CreditCard, MessageSquare, MapPin, Calendar, Mail, Phone } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface CustomerDetailProps {
  customer: any;
  onClose: () => void;
  onEdit: (customer: any) => void;
}

const CustomerDetail: React.FC<CustomerDetailProps> = ({ customer, onClose, onEdit }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const orderHistory = [
    {
      id: '#ORD-001',
      date: '2024-01-15',
      amount: '$125.00',
      status: 'Delivered',
      items: ['Wireless Headphones', 'Phone Case']
    },
    {
      id: '#ORD-002',
      date: '2024-01-10',
      amount: '$89.50',
      status: 'Delivered',
      items: ['Coffee Mug', 'Notebook']
    },
    {
      id: '#ORD-003',
      date: '2024-01-05',
      amount: '$247.25',
      status: 'Cancelled',
      items: ['Laptop Stand', 'Keyboard', 'Mouse']
    }
  ];

  const addresses = [
    {
      id: 1,
      type: 'Home',
      address: '123 Main Street, Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      address: '456 Business Ave, Suite 200',
      city: 'New York',
      state: 'NY',
      zip: '10002',
      country: 'USA',
      isDefault: false
    }
  ];

  const supportTickets = [
    {
      id: 'TKT-001',
      subject: 'Order delivery issue',
      status: 'Resolved',
      date: '2024-01-14',
      priority: 'Medium'
    },
    {
      id: 'TKT-002',
      subject: 'Payment not processed',
      status: 'Open',
      date: '2024-01-12',
      priority: 'High'
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-medium">{customer.name.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{customer.name}</h2>
              <p className="text-gray-600">Customer ID: #{customer.id}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onEdit(customer)}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Edit Customer
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <User className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Full Name</p>
                          <p className="font-medium">{customer.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-medium">{customer.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-medium">{customer.phone || '+1 (555) 123-4567'}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-600">Member Since</p>
                          <p className="font-medium">{customer.joinDate}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">Account Status</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {customer.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Verification:</span>
                        <span className="text-green-600 font-medium">Verified</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Last Login:</span>
                        <span className="font-medium">2024-01-15</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <Package className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">Total Orders</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">{customer.orders}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <CreditCard className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">Total Spent</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">{customer.totalSpent}</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">Support Tickets</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">3</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <User className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">Loyalty Points</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">1,250</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Order History</h3>
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Items</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orderHistory.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">{order.date}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            {order.items.join(', ')}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">{order.amount}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="addresses" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Saved Addresses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-gray-600" />
                          <span className="font-medium text-gray-900">{address.type}</span>
                        </div>
                        {address.isDefault && (
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">Default</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-700">
                        <p>{address.address}</p>
                        <p>{address.city}, {address.state} {address.zip}</p>
                        <p>{address.country}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Support History</h3>
                <div className="space-y-4">
                  {supportTickets.map((ticket) => (
                    <div key={ticket.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{ticket.subject}</h4>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          ticket.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                          ticket.status === 'Open' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {ticket.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>Ticket ID: {ticket.id}</span>
                        <span>Date: {ticket.date}</span>
                        <span>Priority: {ticket.priority}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Customer Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Average Order Value</h4>
                    <p className="text-3xl font-bold text-gray-900">$153.92</p>
                    <p className="text-sm text-green-600 mt-1">↑ 12.5% from last month</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Order Frequency</h4>
                    <p className="text-3xl font-bold text-gray-900">2.3/month</p>
                    <p className="text-sm text-green-600 mt-1">↑ 8.7% from last month</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Favorite Category</h4>
                    <p className="text-3xl font-bold text-gray-900">Electronics</p>
                    <p className="text-sm text-gray-600 mt-1">65% of orders</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
