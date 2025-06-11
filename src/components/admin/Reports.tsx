
import React, { useState } from 'react';
import { Search, Filter, Eye, AlertTriangle, Ban, MessageSquare, Clock } from 'lucide-react';
import ReportDetail from './ReportDetail';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const reports = [
    {
      id: 'RPT-001',
      type: 'Product Violation',
      reporter: 'John Smith',
      reported: 'TechStore Inc.',
      reason: 'Counterfeit Product',
      status: 'Under Review',
      priority: 'High',
      date: '2024-01-15',
      description: 'Customer reports receiving counterfeit electronics instead of genuine products.',
      evidence: ['product-image.jpg', 'receipt.pdf'],
      category: 'Product Quality'
    },
    {
      id: 'RPT-002',
      type: 'Seller Misconduct',
      reporter: 'Sarah Wilson',
      reported: 'Fashion Hub',
      reason: 'Delayed Shipping',
      status: 'Resolved',
      priority: 'Medium',
      date: '2024-01-14',
      description: 'Multiple complaints about extremely delayed shipping times without communication.',
      evidence: ['chat-screenshot.png'],
      category: 'Service Quality'
    },
    {
      id: 'RPT-003',
      type: 'Review Manipulation',
      reporter: 'Admin System',
      reported: 'HomeDecor Plus',
      reason: 'Fake Reviews',
      status: 'Investigating',
      priority: 'High',
      date: '2024-01-13',
      description: 'Automated system detected suspicious review patterns indicating fake reviews.',
      evidence: ['review-analysis.pdf', 'ip-logs.txt'],
      category: 'Platform Integrity'
    },
    {
      id: 'RPT-004',
      type: 'Payment Issue',
      reporter: 'Mike Johnson',
      reported: 'ElectroWorld',
      reason: 'Unauthorized Charges',
      status: 'Pending',
      priority: 'Critical',
      date: '2024-01-12',
      description: 'Customer charged multiple times for single purchase without authorization.',
      evidence: ['bank-statement.pdf', 'order-history.png'],
      category: 'Financial'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Under Review': return 'bg-blue-100 text-blue-800';
      case 'Investigating': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-fade-in p-2 sm:p-4 lg:p-6">
      {/* Header */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Reports & Violations</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Manage customer reports and platform violations</p>
        </div>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 lg:space-x-4">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>
          <button className="flex items-center justify-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Total Reports</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">156</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-yellow-100 rounded-lg">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Pending</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">23</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-blue-100 rounded-lg">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Under Review</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">45</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-6">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-1 sm:p-2 bg-green-100 rounded-lg">
              <Ban className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Resolved</p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900">88</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Grid - Mobile Cards */}
      <div className="block sm:hidden space-y-4">
        {reports.map((report, index) => (
          <div key={report.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow" style={{animationDelay: `${index * 100}ms`}}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">{report.id}</h3>
                <p className="text-xs text-gray-500 mt-1">{report.type}</p>
              </div>
              <div className="flex flex-col space-y-1">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                  {report.status}
                </span>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(report.priority)}`}>
                  {report.priority}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reporter:</span>
                <span className="text-gray-900 truncate ml-2">{report.reporter}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reported:</span>
                <span className="text-gray-900 truncate ml-2">{report.reported}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Date:</span>
                <span className="text-gray-900">{report.date}</span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedReport(report)}
              className="w-full mt-3 px-3 py-2 text-xs bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Reports Table - Desktop */}
      <div className="hidden sm:block bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Report ID
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reporter
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reported
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reports.map((report, index) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors" style={{animationDelay: `${index * 100}ms`}}>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {report.id}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {report.type}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {report.reporter}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {report.reported}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(report.priority)}`}>
                      {report.priority}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {report.date}
                  </td>
                  <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button 
                      onClick={() => setSelectedReport(report)}
                      className="p-1 rounded hover:bg-gray-100 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Report Detail Modal */}
      {selectedReport && (
        <ReportDetail 
          report={selectedReport} 
          onClose={() => setSelectedReport(null)} 
        />
      )}
    </div>
  );
};

export default Reports;
