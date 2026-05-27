import React, { useState } from "react";
import Navbar from "../components/Navbar";

const NGOProfile = () => {
  const [notes, setNotes] = useState(`• Follow up on volunteer training schedule
• Coordinate delivery routes for next week
• Check volunteer availability for weekend events
• Update contact information in database
• Schedule monthly review meeting`);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">NGO Profile: Community Harvest Hub</h1>
          
          <div className="flex items-center space-x-4">
            {/* Top Right Icons */}
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <span className="w-5 h-5">🔔</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <span className="w-5 h-5">❓</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <span className="w-5 h-5">👤</span>
            </button>
            
            {/* Edit Profile Button */}
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
              <span className="mr-2">✏️</span>
              Edit Profile
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* NGO Info Card */}
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Community Harvest Hub</h2>
              <p className="text-gray-600 mb-6">
                Dedicated to combating food insecurity by distributing fresh, nutritious food to underserved communities and empowering youth through educational programs.
              </p>
              <div className="flex space-x-3">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
                  <span className="mr-2">📞</span>
                  Call NGO
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
                  <span className="mr-2">✉️</span>
                  Email NGO
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center">
                  <span className="mr-2">💬</span>
                  Message NGO
                </button>
              </div>
            </div>

            {/* Contact & Focus Areas Card */}
            <div className="bg-white rounded-lg p-6 shadow border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact & Focus Areas</h3>
              
              {/* Focus Areas */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Food Distribution
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Youth Support
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Community Development
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Contact Information</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="mr-3">👤</span>
                    <span className="text-gray-800">Maria Rodriguez</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">✉️</span>
                    <span className="text-gray-800">maria.r@chhub.org</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">📞</span>
                    <span className="text-gray-800">+1-234-567-8901</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">📍</span>
                    <span className="text-gray-800">123 Green Valley Lane, Eco City, 54321</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Volunteering Opportunities Card */}
            <div className="bg-white rounded-lg p-6 shadow border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Volunteering Opportunities</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-800">Food Sorting & Packing</h4>
                  <p className="text-sm text-gray-600">Help organize and package donated food for distribution.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-800">Delivery Driver</h4>
                  <p className="text-sm text-gray-600">Transport food packages to distribution points and community centers.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-medium text-gray-800">Youth Program Mentor</h4>
                  <p className="text-sm text-gray-600">Support educational workshops and activities for local youth.</p>
                </div>
              </div>
              <button className="text-green-600 hover:text-green-800 mt-4 font-medium">
                View All Opportunities →
              </button>
            </div>

            {/* Coordination Notes Card */}
            <div className="bg-white rounded-lg p-6 shadow border">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Coordination Notes</h3>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                placeholder="Add coordination notes..."
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors mt-3">
                Save Notes
              </button>
            </div>
          </div>

          {/* Recent Activities Card */}
          <div className="bg-white rounded-lg shadow border">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Recent Activities</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Activity Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-07-15</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Food Drive
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">Collected 500 lbs of produce from local farms.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-07-10</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Workshop
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">Hosted 'Healthy Eating' session for 30 children.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-07-01</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                        Distribution
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">Provided food packages to 150 families.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-06-25</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                        Volunteer Training
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">Onboarded 10 new volunteers for summer programs.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">2024-06-19</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                        Community Event
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">Participated in Eco-City Green Fair, raising awareness.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t">
              <button className="text-green-600 hover:text-green-800 font-medium">
                View All Activities →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGOProfile;
