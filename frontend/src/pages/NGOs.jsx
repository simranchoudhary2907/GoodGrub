import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// Temporarily comment out react-icons to test if that's the issue
// import { FaSearch, FaBell, FaComments, FaGrid, FaShieldAlt, FaUsers, FaChartBar, FaCog, FaFilter, FaSort } from "react-icons/fa";

const NGOs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ngos");
  const [searchTerm, setSearchTerm] = useState("");

  const ngoData = [
    {
      name: "Community Harvest Hub",
      focusAreas: ["Food Distribution", "Youth Support"],
      contact: {
        name: "Maria Rodriguez",
        email: "maria.rh@chhub.org",
        phone: "+1-234-567-8901"
      },
      opportunities: ["Food Sorting", "Delivery Driver", "Event Coordination"]
    },
    {
      name: "Nourish Neighbors Collective",
      focusAreas: ["Homeless Aid", "Community Gardens"],
      contact: {
        name: "David Chen",
        email: "david.ch@nnc.org",
        phone: "+1-234-567-8902"
      },
      opportunities: ["Garden Maintenance", "Kitchen Prep", "Outreach"]
    },
    {
      name: "GreenPlate Initiative",
      focusAreas: ["Food Waste Reduction", "Education"],
      contact: {
        name: "Sophia Lee",
        email: "sophia.le@gpi.org",
        phone: "+1-234-567-8903"
      },
      opportunities: ["Workshop Facilitator", "Collection Point Management"]
    },
    {
      name: "Helping Hands Alliance",
      focusAreas: ["Family Support", "Emergency Relief"],
      contact: {
        name: "John Smith",
        email: "john.sm@hha.org",
        phone: "+1-234-567-8904"
      },
      opportunities: ["Packing Kits", "Distribution Support"]
    },
    {
      name: "Food For Thought",
      focusAreas: ["Elderly Care", "Meal Delivery"],
      contact: {
        name: "Emily White",
        email: "emily.wh@fft.org",
        phone: "+1-234-567-8905"
      },
      opportunities: ["Meal Preparation", "Route Driver", "Companionship Visits"]
    }
  ];

  const filteredNGOs = ngoData.filter(ngo =>
    ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-col">
        {/* Top Bar */}
        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Platform Overview</h1>
          
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search NGOs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            {/* Icons */}
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <span className="w-5 h-5">🔔</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <span className="w-5 h-5">💬</span>
            </button>
            
            {/* Add New NGO Button */}
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
              Add New NGO
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6">
          {/* Tabs */}
          <div className="flex items-center space-x-6 mb-6">
            <button
              onClick={() => setActiveTab("ngos")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "ngos"
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              NGOs
            </button>
            <button
              onClick={() => setActiveTab("beneficiaries")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "beneficiaries"
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Beneficiaries
            </button>
            
            <div className="flex-1"></div>
            
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              <span className="mr-2">🔽</span>
              Filter
            </button>
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
              <span className="mr-2">↕️</span>
              Sort
            </button>
          </div>

          {/* NGO List Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">NGO List</h2>
              <p className="text-gray-600">
                Comprehensive list of Non-Governmental Organizations registered with NourishLink.
              </p>
            </div>

            {/* NGO Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      NGO Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Focus Areas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Volunteering Opportunities
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredNGOs.map((ngo, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{ngo.name}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {ngo.focusAreas.map((area, areaIndex) => (
                            <span
                              key={areaIndex}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          <div className="font-medium">{ngo.contact.name}</div>
                          <div className="text-gray-500">{ngo.contact.email}</div>
                          <div className="text-gray-500">{ngo.contact.phone}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-wrap gap-1">
                          {ngo.opportunities.map((opportunity, oppIndex) => (
                            <span
                              key={oppIndex}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                            >
                              {opportunity}
                            </span>
                          ))}
                        </div>
                      </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                         <button 
                           onClick={() => navigate("/ngo-profile")}
                           className="text-orange-600 hover:text-orange-900"
                         >
                           View Details
                         </button>
                       </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NGOs;
