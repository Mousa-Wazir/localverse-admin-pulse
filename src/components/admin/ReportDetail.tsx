
import React, { useState } from 'react';
import { X, AlertTriangle, User, Calendar, FileText, Image, Download, Ban, MessageSquare, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ReportDetailProps {
  report: any;
  onClose: () => void;
}

const ReportDetail: React.FC<ReportDetailProps> = ({ report, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');

  const timeline = [
    {
      id: 1,
      action: 'Report Submitted',
      user: report.reporter,
      date: report.date,
      time: '10:30 AM',
      description: 'Initial report submitted by customer'
    },
    {
      id: 2,
      action: 'Under Review',
      user: 'Admin Team',
      date: report.date,
      time: '2:15 PM',
      description: 'Report assigned to investigation team'
    },
    {
      id: 3,
      action: 'Evidence Collected',
      user: 'Investigation Team',
      date: report.date,
      time: '4:45 PM',
      description: 'Additional evidence and documentation collected'
    }
  ];

  const handleStatusChange = (newStatus: string) => {
    console.log(`Changing status to: ${newStatus}`);
    // Here you would implement the actual status change logic
  };

  const handleActionTaken = (action: string) => {
    console.log(`Taking action: ${action}`);
    // Here you would implement the actual action logic
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Report {report.id}</h2>
              <p className="text-gray-600">{report.type} - {report.reason}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="evidence">Evidence</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="actions">Actions</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Report Information */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Report ID:</span>
                        <span className="font-medium">{report.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Type:</span>
                        <span className="font-medium">{report.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Category:</span>
                        <span className="font-medium">{report.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Priority:</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          report.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                          report.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                          report.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {report.priority}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                          report.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                          report.status === 'Under Review' ? 'bg-blue-100 text-blue-800' :
                          report.status === 'Investigating' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date Reported:</span>
                        <span className="font-medium">{report.date}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">Description</h4>
                    <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
                      {report.description}
                    </p>
                  </div>
                </div>

                {/* Parties Involved */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Parties Involved</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <User className="w-5 h-5 text-gray-600" />
                          <h4 className="font-medium text-gray-900">Reporter</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{report.reporter}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Customer ID:</span>
                            <span className="font-medium">#CUS-001</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Email:</span>
                            <span className="font-medium">customer@email.com</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-3">
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                          <h4 className="font-medium text-gray-900">Reported Party</h4>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Name:</span>
                            <span className="font-medium">{report.reported}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Seller ID:</span>
                            <span className="font-medium">#SEL-001</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Store Rating:</span>
                            <span className="font-medium">4.2/5</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="evidence" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Evidence & Documentation</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {report.evidence.map((file, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-center space-x-3">
                        {file.includes('.jpg') || file.includes('.png') ? (
                          <Image className="w-8 h-8 text-blue-600" />
                        ) : (
                          <FileText className="w-8 h-8 text-gray-600" />
                        )}
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 truncate">{file}</p>
                          <p className="text-sm text-gray-600">Uploaded {report.date}</p>
                        </div>
                        <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                          <Download className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload additional evidence</p>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Choose Files
                  </button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="timeline" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Investigation Timeline</h3>
                
                <div className="space-y-4">
                  {timeline.map((event, index) => (
                    <div key={event.id} className="flex space-x-4 animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-medium">{event.id}</span>
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-12 bg-gray-300 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-medium text-gray-900">{event.action}</h4>
                          <span className="text-sm text-gray-500">by {event.user}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date} at {event.time}</span>
                        </div>
                        <p className="text-gray-700">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="actions" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Take Action</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Status Update */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Update Status</h4>
                    <div className="space-y-4">
                      <select 
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                        defaultValue={report.status}
                        onChange={(e) => handleStatusChange(e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Investigating">Investigating</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Dismissed">Dismissed</option>
                      </select>
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Update Status
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-4">Actions</h4>
                    <div className="space-y-3">
                      <button 
                        onClick={() => handleActionTaken('warn')}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Issue Warning</span>
                      </button>
                      <button 
                        onClick={() => handleActionTaken('suspend')}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                      >
                        <Ban className="w-4 h-4" />
                        <span>Suspend Account</span>
                      </button>
                      <button 
                        onClick={() => handleActionTaken('ban')}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <Ban className="w-4 h-4" />
                        <span>Ban Account</span>
                      </button>
                      <button 
                        onClick={() => handleActionTaken('dismiss')}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Dismiss Report</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Add Note */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-medium text-gray-900 mb-4">Add Investigation Note</h4>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                    placeholder="Add notes about your investigation or actions taken..."
                  />
                  <button className="mt-3 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Add Note
                  </button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ReportDetail;
