
import React, { useState } from 'react';
import { X, Edit, Trash2, Package, DollarSign, Eye, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductDetailProps {
  product: any;
  onClose: () => void;
  onEdit: (product: any) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose, onEdit }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const reviews = [
    {
      id: 1,
      customer: 'John Smith',
      rating: 5,
      comment: 'Excellent product! Highly recommended.',
      date: '2024-01-10'
    },
    {
      id: 2,
      customer: 'Sarah Wilson',
      rating: 4,
      comment: 'Good quality, fast delivery.',
      date: '2024-01-08'
    },
    {
      id: 3,
      customer: 'Mike Johnson',
      rating: 5,
      comment: 'Perfect as described. Very satisfied.',
      date: '2024-01-05'
    }
  ];

  const inventory = [
    { size: 'Small', quantity: 15, reserved: 2 },
    { size: 'Medium', quantity: 23, reserved: 1 },
    { size: 'Large', quantity: 18, reserved: 3 },
    { size: 'Extra Large', quantity: 12, reserved: 0 }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
              <p className="text-gray-600">Product ID: #{product.id}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onEdit(product)}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Edit className="w-5 h-5 text-gray-600" />
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
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-medium">{product.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{product.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Price:</span>
                        <span className="font-medium text-lg">{product.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stock:</span>
                        <span className={`font-medium ${product.stock < 10 ? 'text-red-600' : 'text-green-600'}`}>
                          {product.stock} units
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          product.status === 'Active' ? 'bg-green-100 text-green-800' :
                          product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">Description</h4>
                    <p className="text-gray-700 leading-relaxed">
                      This is a high-quality product that meets all customer expectations. 
                      Designed with premium materials and attention to detail, it offers 
                      excellent value for money and long-lasting durability.
                    </p>
                  </div>
                </div>

                {/* Statistics */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <Eye className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">Views</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">1,234</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <Package className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">Sold</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">89</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">Revenue</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">$2,845</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">Rating</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900 mt-2">4.8</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Inventory Management</h3>
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Variant</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Available</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Reserved</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {inventory.map((item, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.size}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {item.quantity}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                            {item.reserved}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.quantity + item.reserved}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">{review.customer}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Product Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Conversion Rate</h4>
                    <p className="text-3xl font-bold text-gray-900">7.2%</p>
                    <p className="text-sm text-green-600 mt-1">↑ 2.1% from last month</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Page Views</h4>
                    <p className="text-3xl font-bold text-gray-900">1,234</p>
                    <p className="text-sm text-green-600 mt-1">↑ 15.3% from last month</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">Add to Cart</h4>
                    <p className="text-3xl font-bold text-gray-900">89</p>
                    <p className="text-sm text-red-600 mt-1">↓ 3.2% from last month</p>
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

export default ProductDetail;
