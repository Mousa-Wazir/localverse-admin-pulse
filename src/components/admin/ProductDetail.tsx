
import React, { useState } from 'react';
import { X, Edit, Package, BarChart3, Star, Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ProductDetailProps {
  product: any;
  onClose: () => void;
  onEdit: (product: any) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose, onEdit }) => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img
                className="h-12 w-12 sm:h-16 sm:w-16 rounded-lg object-cover"
                src={product.image}
                alt={product.name}
              />
              <div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{product.name}</h2>
                <p className="text-sm sm:text-base text-gray-600">{product.category}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onEdit(product)}
                className="hidden sm:flex items-center space-x-2 px-3 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
              >
                <Edit className="w-4 h-4" />
                <span>Edit</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Mobile Edit Button */}
          <button
            onClick={() => onEdit(product)}
            className="sm:hidden w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Edit className="w-4 h-4" />
            <span>Edit Product</span>
          </button>
        </div>

        {/* Tabs */}
        <div className="p-4 sm:p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-2 mb-6">
              <TabsTrigger value="overview" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Overview</span>
                <span className="sm:hidden">Info</span>
              </TabsTrigger>
              <TabsTrigger value="inventory" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Inventory</span>
                <span className="sm:hidden">Stock</span>
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span>Reviews</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="text-xs sm:text-sm px-2 sm:px-4 py-2">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Analytics</span>
                <span className="sm:hidden">Stats</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {/* Product Information */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Product Information</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="text-sm font-medium text-gray-500">Name:</span>
                      <span className="text-sm sm:text-base font-medium text-gray-900">{product.name}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="text-sm font-medium text-gray-500">Category:</span>
                      <span className="text-sm sm:text-base text-gray-900">{product.category}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="text-sm font-medium text-gray-500">Price:</span>
                      <span className="text-sm sm:text-base font-semibold text-gray-900">{product.price}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="text-sm font-medium text-gray-500">SKU:</span>
                      <span className="text-sm sm:text-base text-gray-900">PRD-{product.id.toString().padStart(4, '0')}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="text-sm font-medium text-gray-500">Status:</span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        product.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product Description */}
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Description</h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                  <div className="mt-4 sm:mt-6">
                    <h4 className="text-sm sm:text-base font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm sm:text-base text-gray-700 space-y-1">
                      <li>• High-quality materials</li>
                      <li>• Durable construction</li>
                      <li>• Modern design</li>
                      <li>• Easy to use</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Product Images */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Product Images</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden">
                      <img
                        src={product.image}
                        alt={`Product view ${i}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm font-medium text-gray-500">Current Stock</h3>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">{product.stock}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">units available</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm font-medium text-gray-500">Reserved</h3>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">12</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">units reserved</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm font-medium text-gray-500">Reorder Level</h3>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">10</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">minimum threshold</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Stock History</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 text-xs sm:text-sm font-medium text-gray-500">Date</th>
                        <th className="text-left py-2 text-xs sm:text-sm font-medium text-gray-500">Action</th>
                        <th className="text-left py-2 text-xs sm:text-sm font-medium text-gray-500">Quantity</th>
                        <th className="text-left py-2 text-xs sm:text-sm font-medium text-gray-500">Note</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {[
                        { date: '2024-01-15', action: 'Restock', quantity: '+50', note: 'New inventory' },
                        { date: '2024-01-10', action: 'Sale', quantity: '-3', note: 'Customer order' },
                        { date: '2024-01-08', action: 'Sale', quantity: '-2', note: 'Customer order' }
                      ].map((entry, i) => (
                        <tr key={i}>
                          <td className="py-2 text-xs sm:text-sm text-gray-900">{entry.date}</td>
                          <td className="py-2 text-xs sm:text-sm text-gray-700">{entry.action}</td>
                          <td className={`py-2 text-xs sm:text-sm font-medium ${
                            entry.quantity.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {entry.quantity}
                          </td>
                          <td className="py-2 text-xs sm:text-sm text-gray-600">{entry.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">4.5</div>
                  <div className="flex justify-center mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">Average rating</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">127</div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">Total reviews</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">89%</div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">Positive feedback</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Recent Reviews</h3>
                <div className="space-y-4">
                  {[
                    { name: 'John Smith', rating: 5, comment: 'Excellent product! Highly recommend.', date: '2024-01-15' },
                    { name: 'Sarah Wilson', rating: 4, comment: 'Good quality but shipping was slow.', date: '2024-01-12' },
                    { name: 'Mike Johnson', rating: 5, comment: 'Perfect! Exactly as described.', date: '2024-01-10' }
                  ].map((review, i) => (
                    <div key={i} className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-xs sm:text-sm font-medium text-gray-700">{review.name.charAt(0)}</span>
                          </div>
                          <span className="text-sm sm:text-base font-medium text-gray-900">{review.name}</span>
                        </div>
                        <div className="flex items-center space-x-2 mt-1 sm:mt-0">
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className={`w-3 h-3 sm:w-4 sm:h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                          <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">$12,450</p>
                  <p className="text-xs sm:text-sm text-green-600 mt-1">+12.5% from last month</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm font-medium text-gray-500">Units Sold</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">342</p>
                  <p className="text-xs sm:text-sm text-green-600 mt-1">+8.2% from last month</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm font-medium text-gray-500">Page Views</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">2,847</p>
                  <p className="text-xs sm:text-sm text-blue-600 mt-1">+15.3% from last month</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
                  <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
                  <p className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">12.3%</p>
                  <p className="text-xs sm:text-sm text-green-600 mt-1">+2.1% from last month</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Sales Performance</h3>
                <div className="h-64 sm:h-80 bg-white rounded-lg border border-gray-200 flex items-center justify-center">
                  <p className="text-gray-500 text-sm sm:text-base">Sales chart would be displayed here</p>
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
