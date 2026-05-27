import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ProvideSupport() {
  const navigate = useNavigate();
  const [supportType, setSupportType] = useState('financial');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [description, setDescription] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Support request submitted:', {
      supportType,
      amount,
      purpose,
      description,
      preferredDate,
      preferredTime
    });
    // In real app, this would submit to backend
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(file => {
      const isValidType = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
      return isValidType && isValidSize;
    });

    const newFiles = validFiles.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Provide Support</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Offer New Support Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Offer New Support</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Support Type Selection */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Select Support Type</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="supportType"
                        value="financial"
                        checked={supportType === 'financial'}
                        onChange={(e) => setSupportType(e.target.value)}
                        className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-gray-700">Financial Aid</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="supportType"
                        value="volunteer"
                        checked={supportType === 'volunteer'}
                        onChange={(e) => setSupportType(e.target.value)}
                        className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-gray-700">Volunteer Time</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="supportType"
                        value="material"
                        checked={supportType === 'material'}
                        onChange={(e) => setSupportType(e.target.value)}
                        className="w-4 h-4 text-orange-600 border-gray-300 focus:ring-orange-500"
                      />
                      <span className="ml-3 text-gray-700">Material Donation</span>
                    </label>
                  </div>
                </div>

                {/* Support Details */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Support Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amount (USD)
                      </label>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="e.g., 100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Purpose
                      </label>
                      <select
                        value={purpose}
                        onChange={(e) => setPurpose(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      >
                        <option value="">Select purpose</option>
                        <option value="food">Food Supplies</option>
                        <option value="education">Education</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specific Needs Description
                    </label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Provide additional details about your offer, specific items, or conditions."
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Scheduling & Logistics */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Scheduling & Logistics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                        <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time Slot
                      </label>
                      <input
                        type="text"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        placeholder="e.g., 9:00 AM - 12:00 PM"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Attachments */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Attachments</h3>
                  <p className="text-sm text-gray-600 mb-3">Upload Relevant Documents/Images (Optional)</p>
                  
                  {/* File Upload Button */}
                  <div className="mb-4">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileUpload}
                      multiple
                      accept=".jpg,.jpeg,.png,.pdf"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Upload Files
                    </button>
                    <p className="text-xs text-gray-500 mt-2">Max file size: 5MB. Supported formats: JPG, PNG, PDF.</p>
                  </div>

                  {/* Uploaded Files List */}
                  {uploadedFiles.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
                      {uploadedFiles.map((file) => (
                        <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              {file.type.includes('image') ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              )}
                            </svg>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{file.name}</p>
                              <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(file.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <button
                    type="submit"
                    className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Submit Support Request
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-white text-gray-700 px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Current Support Status */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Current Support Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Type:</span>
                  <span className="text-sm font-medium text-gray-800">Financial Aid</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Offered for:</span>
                  <span className="text-sm font-medium text-gray-800">Green Valley Farm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Planned Date:</span>
                  <span className="text-sm font-medium text-gray-800">2023-09-30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Status:</span>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                    Pending Approval
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Overall Progress</span>
                  <span>40% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              
              <a href="#" className="text-orange-600 hover:text-orange-800 text-sm font-medium mt-3 inline-block">
                View All Pending Supports
              </a>
            </div>

            {/* Past Support History */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Past Support History</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Support Type</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beneficiary</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Provided</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-3 py-2 text-sm text-gray-900">Material Donation</td>
                      <td className="px-3 py-2 text-sm text-gray-900">Aurora Orphanage</td>
                      <td className="px-3 py-2 text-sm text-gray-900">2023-10-30</td>
                      <td className="px-3 py-2 text-sm">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Delivered
                        </span>
                      </td>
                      <td className="px-3 py-2 text-sm">
                        <a href="#" className="text-orange-600 hover:text-orange-800">View Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-sm text-gray-900">Financial Aid</td>
                      <td className="px-3 py-2 text-sm text-gray-900">Havens Homeless Shelter</td>
                      <td className="px-3 py-2 text-sm text-gray-900">2023-09-15</td>
                      <td className="px-3 py-2 text-sm">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Delivered
                        </span>
                      </td>
                      <td className="px-3 py-2 text-sm">
                        <a href="#" className="text-orange-600 hover:text-orange-800">View Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-sm text-gray-900">Volunteer Time</td>
                      <td className="px-3 py-2 text-sm text-gray-900">Community Food Bank</td>
                      <td className="px-3 py-2 text-sm text-gray-900">2023-09-01</td>
                      <td className="px-3 py-2 text-sm">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Completed
                        </span>
                      </td>
                      <td className="px-3 py-2 text-sm">
                        <a href="#" className="text-orange-600 hover:text-orange-800">View Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-sm text-gray-900">Financial Aid</td>
                      <td className="px-3 py-2 text-sm text-gray-900">Urban Youth Center</td>
                      <td className="px-3 py-2 text-sm text-gray-900">2023-07-26</td>
                      <td className="px-3 py-2 text-sm">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                          Delivered
                        </span>
                      </td>
                      <td className="px-3 py-2 text-sm">
                        <a href="#" className="text-orange-600 hover:text-orange-800">View Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-sm text-gray-900">Material Donation</td>
                      <td className="px-3 py-2 text-sm text-gray-900">Elderly Care Home</td>
                      <td className="px-3 py-2 text-sm text-gray-900">2023-06-30</td>
                      <td className="px-3 py-2 text-sm">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-800">
                          Pending
                        </span>
                      </td>
                      <td className="px-3 py-2 text-sm">
                        <a href="#" className="text-orange-600 hover:text-orange-800">View Details</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
