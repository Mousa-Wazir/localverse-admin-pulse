
import React, { useState, useMemo } from 'react';
import { Search, Filter, Plus, Eye, Edit, MoreHorizontal, Store, Star, TrendingUp } from 'lucide-react';
import SellerDetail from './SellerDetail';

const Sellers = () => {
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [viewingSeller, setViewingSeller] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const sellers = [
    {
      id: 'SEL-001',
      name: 'TechStore Inc.',
      owner: 'David Kumar',
      email: 'david@techstore.com',
      phone: '+1 (555) 234-5678',
      products: 45,
      totalSales: '$12,847.50',
      rating: 4.8,
      status: 'Active',
      joinDate: '2023-03-15',
      lastActive: '2024-01-15',
      category: 'Electronics',
      address: '123 Tech Street, Silicon Valley, CA 94043',
      commission: '15%'
    },
    {
      id: 'SEL-002',
      name: 'Handcraft Haven',
      owner: 'Maria Rodriguez',
      email: 'maria@handcrafthaven.com',
      phone: '+1 (555) 345-6789',
      products: 78,
      totalSales: '$8,943.20',
      rating: 4.9,
      status: 'Active',
      joinDate: '2023-05-22',
      lastActive: '2024-01-14',
      category: 'Handicrafts',
      address: '456 Craft Lane, Austin, TX 78701',
      commission: '12%'
    },
    {
      id: 'SEL-003',
      name: 'Home Décor Plus',
      owner: 'Jennifer Chen',
      email: 'jennifer@homedecorplus.com',
      phone: '+1 (555) 456-7890',
      products: 92,
      totalSales: '$15,621.80',
      rating: 4.7,
      status: 'Active',
      joinDate: '2023-01-10',
      lastActive: '2024-01-13',
      category: 'Home Decor',
      address: '789 Design Ave, New York, NY 10001',
      commission: '18%'
    },
    {
      id: 'SEL-004',
      name: 'Beauty Essentials',
      owner: 'Sarah Thompson',
      email: 'sarah@beautyessentials.com',
      phone: '+1 (555) 567-8901',
      products: 34,
      totalSales: '$6,235.60',
      rating: 4.6,
      status: 'Pending',
      joinDate: '2023-12-05',
      lastActive: '2024-01-12',
      category: 'Health and Beauty',
      address: '321 Beauty Blvd, Los Angeles, CA 90210',
      commission: '20%'
    },
    {
      id: 'SEL-005',
      name: 'Fashion Forward',
      owner: 'Michael Johnson',
      email: 'michael@fashionforward.com',
      phone: '+1 (555) 678-9012',
      products: 156,
      totalSales: '$22,890.45',
      rating: 4.5,
      status: 'Suspended',
      joinDate: '2023-07-18',
      lastActive: '2023-12-28',
      category: 'Clothing Accessories',
      address: '654 Fashion Way, Miami, FL 33101',
      commission: '16%'
    }
  ];

  // Filter sellers based on search term
  const filteredSellers = useMemo(() => {
    if (!searchTerm.trim()) {
      return sellers;
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return sellers.filter(seller => 
      seller.id.toLowerCase().includes(lowerSearchTerm) ||
      seller.name.toLowerCase().includes(lowerSearchTerm) ||
      seller.owner.toLowerCase().includes(lowerSearchTerm) ||
      seller.email.toLowerCase().includes(lowerSearchTerm) ||
      seller.status.toLowerCase().includes(lowerSearchTerm) ||
      seller.category.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Suspended': return 'bg-red-100 text-red-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const SellerModal = ({ seller, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
              {seller ? 'Edit Seller' : 'Add New Seller'}
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
                Store Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                defaultValue={seller?.name || ''}
                placeholder="Enter store name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Owner Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                defaultValue={seller?.owner || ''}
                placeholder="Enter owner name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                defaultValue={seller?.email || ''}
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
                defaultValue={seller?.phone || ''}
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base">
                <option value="Furniture">Furniture</option>
                <option value="Handicrafts">Handicrafts</option>
                <option value="Home Decor">Home Decor</option>
                <option value="Health and Beauty">Health and Beauty</option>
                <option value="Clothing Accessories">Clothing Accessories</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Commission Rate
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
                defaultValue={seller?.commission || ''}
                placeholder="e.g., 15%"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Address
            </label>
            <textarea
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
              defaultValue={seller?.address || ''}
              placeholder="Enter complete address"
            />
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
            {seller ? 'Update Seller' : 'Add Seller'}
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
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Sellers</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage seller accounts and their store information</p>
        </div>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 lg:space-x-4">
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
            <div className="relative flex-1 sm:flex-none">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search sellers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
            <span>Add Seller</span>
          </button>
        </div>
      </div>

      {/* Search Results Counter */}
      {searchTerm && (
        <div className="text-sm text-gray-600">
          {filteredSellers.length} seller{filteredSellers.length !== 1 ? 's' : ''} found for "{searchTerm}"
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
              <Store className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Total Sellers</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">127</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Active Sellers</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">98</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-yellow-100 rounded-lg">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Avg Rating</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">4.7</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-purple-100 rounded-lg">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">New This Month</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sellers Grid - Mobile Cards */}
      <div className="block sm:hidden space-y-4">
        {filteredSellers.map((seller) => (
          <div key={seller.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                <Store className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900 truncate">{seller.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">ID: {seller.id}</p>
                    <p className="text-xs text-gray-600 mt-1">{seller.owner}</p>
                    <p className="text-xs text-gray-600 truncate">{seller.email}</p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(seller.status)}`}>
                    {seller.status}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-3 text-xs">
                  <div>
                    <span className="text-gray-500">Products: </span>
                    <span className="font-medium">{seller.products}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Sales: </span>
                    <span className="font-medium">{seller.totalSales}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 text-yellow-400 mr-1" />
                    <span className="font-medium">{seller.rating}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <button 
                    onClick={() => setViewingSeller(seller)}
                    className="flex-1 px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                  >
                    View
                  </button>
                  <button 
                    onClick={() => setSelectedSeller(seller)}
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

      {/* Sellers Table - Desktop */}
      <div className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Seller
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Sales
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
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
              {filteredSellers.map((seller) => (
                <tr key={seller.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center">
                        <Store className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                      <div className="ml-3 lg:ml-4">
                        <div className="text-sm font-medium text-gray-900">{seller.name}</div>
                        <div className="text-xs lg:text-sm text-gray-500">{seller.owner}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <div className="text-xs lg:text-sm text-gray-900">{seller.email}</div>
                    <div className="text-xs lg:text-sm text-gray-500">{seller.phone}</div>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {seller.products}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {seller.totalSales}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-sm text-gray-700">{seller.rating}</span>
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(seller.status)}`}>
                      {seller.status}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setViewingSeller(seller)}
                        className="p-1 rounded hover:bg-gray-100 transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setSelectedSeller(seller)}
                        className="p-1 rounded hover:bg-gray-100 transition-colors"
                        title="Edit Seller"
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

      {/* Seller Detail Modal */}
      {viewingSeller && (
        <SellerDetail 
          seller={viewingSeller} 
          onClose={() => setViewingSeller(null)}
          onEdit={(seller) => {
            setViewingSeller(null);
            setSelectedSeller(seller);
          }}
        />
      )}

      {/* Add/Edit Modals */}
      {showAddModal && (
        <SellerModal 
          seller={null} 
          onClose={() => setShowAddModal(false)} 
        />
      )}
      
      {selectedSeller && (
        <SellerModal 
          seller={selectedSeller} 
          onClose={() => setSelectedSeller(null)} 
        />
      )}
    </div>
  );
};

export default Sellers;
