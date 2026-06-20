import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaBell,
  FaComments,
  FaFilter,
  FaSortAmountDown,
  FaEllipsisV,
} from "react-icons/fa";

// import Navbar from "../components/Navbar";

// Temporarily comment out react-icons to test if that's the issue
// import { FaSearch, FaBell, FaComments, FaGrid, FaShieldAlt, FaUsers, FaChartBar, FaCog, FaFilter, FaSort } from "react-icons/fa";

const NGOs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ngos");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  // const [showNotifications, setShowNotifications] = useState(true);
  const [showMessages, setShowMessages] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const notificationRef = useRef(null);
  const messageRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const ngoData = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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

  // const filteredNGOs = ngoData.filter((ngo) => {
  // const matchesSearch =
  //   ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //   ngo.contact.name.toLowerCase().includes(searchTerm.toLowerCase());

  const filteredNGOs = ngoData.filter((ngo) => {
  const matchesSearch =
    ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.contact.name.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesFilter =
    selectedFilter === "All" ||
    ngo.focusAreas.includes(selectedFilter);

  return matchesSearch && matchesFilter;
});

//   const matchesFilter =
//     selectedFilter === "All" ||
//     ngo.focusAreas.includes(selectedFilter);

//   return matchesSearch && matchesFilter;
// });

  const notifications = [
  {
    title: "New NGO Registered",
    time: "2 mins ago"
  },
  {
    title: "Volunteer Assigned",
    time: "10 mins ago"
  },
  {
    title: "Food Donation Claimed",
    time: "1 hour ago"
  },
  {
    title: "Pickup Scheduled",
    time: "3 hours ago"
  },
  {
    title: "New Partner NGO Added",
    time: "Yesterday"
  }
];

const messages = [
  {
    sender: "Maria Rodriguez",
    text: "Need food pickup assistance"
  },
  {
    sender: "David Chen",
    text: "Volunteer assigned"
  },
  {
    sender: "Emily White",
    text: "Food delivered successfully"
  }
];

const filterOptions = [
  "All",
  "Food Distribution",
  "Education",
  "Emergency Relief",
  "Youth Support",
  "Elderly Care",
  "Community Gardens",
  "Food Waste Reduction",
];

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setShowNotifications(false);
    }

    if (
      messageRef.current &&
      !messageRef.current.contains(event.target)
    ) {
      setShowMessages(false);
    }

    setShowFilter(false);
    setShowSort(false);
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);




  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-col">
        {/* Top Bar */}
        {/* <div className="bg-white border-b px-6 py-4 flex items-center justify-between"> */}
          {/* <h1 className="text-2xl font-bold text-gray-800">Platform Overview</h1> */}

          {/* <h1 className="text-3xl font-bold text-gray-800">
            NGO Management Hub
          </h1>

          <p className="text-gray-500 mt-1">
            Connect NGOs with surplus food and streamline distribution.
          </p>
          
          <div className="flex items-center space-x-4"> */}

            
            <div className="bg-white border-b px-6 py-5">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              {/* LEFT SIDE */}
              <div>
                <h1 className="text-3xl font-bold text-gray-800">
                  NGO Management Hub
                </h1>
                <p className="text-gray-500 mt-1">
                  Connect NGOs with surplus food and streamline distribution.
                </p>
              </div>

              {/* RIGHT SIDE */}
              {/* <div className="flex items-center space-x-4 ml"> */}
              <div className="flex items-center space-x-4 ml-auto">

            {/* Search Bar */}
            <div className="relative  w-[550px] -ml-12">
              {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span> */}
                
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"><FaSearch /></span>

              <input
                type="text"
                placeholder="Search NGOs, focus areas, volunteers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
            </div>
            
            {/* Icons 🔔*/}

              <div className="relative" ref={notificationRef}>
              <button
                onClick={() =>{
                setShowNotifications(!showNotifications);
                setShowMessages(false);
              }}
                className="relative cursor-pointer"
              >
                <FaBell
                  size={22}
                  className="text-gray-700 hover:text-black transition-all duration-200"
                />

                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
                  {notifications.length}
                </span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-xl border z-50">
                  <div className="p-3 font-semibold border-b">
                    Notifications
                  </div>

                  {notifications.map((item, index) => (
                    <div
                      key={index}
                      className="p-3 hover:bg-gray-100 cursor-pointer border-b"
                    >
                      <p className="text-sm font-medium">
                        {item.title}
                      </p>

                      <p className="text-xs text-gray-500">
                        {item.time}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

              {/* Icons 💬*/}

           <div className="relative" ref={messageRef}>
              <button
                onClick={() => {
                  setShowMessages(!showMessages);
                  setShowNotifications(false);
                }}
                className="relative cursor-pointer">
                <FaComments
                  size={22}
                  className="text-gray-700 hover:text-black transition-all duration-200"
                />

                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
                  {messages.length}
                </span>
              </button>

              {showMessages && (
                <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-xl border z-50">
                  <div className="p-3 font-semibold border-b">
                    Messages
                  </div>

                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className="p-3 hover:bg-gray-100 cursor-pointer border-b"
                    >
                      <p className="text-sm font-medium">
                        {msg.sender}
                      </p>

                      <p className="text-xs text-gray-500">
                        {msg.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Add New NGO Button */}
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-200">
              Add New NGO
            </button>
          </div>
        </div>
      </div>

        {/* Content Area */}
        <div className="flex-1 p-6">

        {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500">
                <p className="text-gray-500 text-sm">Total NGOs</p>
                <h3 className="text-3xl font-bold text-orange-600">5</h3>
              </div>

              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-green-500">
                <p className="text-gray-500 text-sm">Volunteers</p>
                <h3 className="text-3xl font-bold text-green-600">120</h3>
              </div>

              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-500">
                <p className="text-gray-500 text-sm">Food Distributed</p>
                <h3 className="text-3xl font-bold text-blue-600">2.4 Tons</h3>
              </div>

              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-purple-500">
                <p className="text-gray-500 text-sm">Families Served</p>
                <h3 className="text-3xl font-bold text-purple-600">450</h3>
              </div>
            </div>

          {/* Tabs */}
          <div className="flex items-center space-x-6 mb-6">
            {/* <button
              onClick={() => setActiveTab("ngos")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "ngos"
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              NGOs
            </button> */}
            {/* <button
              onClick={() => setActiveTab("beneficiaries")}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === "beneficiaries"
                  ? "bg-orange-100 text-orange-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              Beneficiaries
            </button> */}
            
            <div className="flex-1"></div>
            
            {/* Filter 🔽*/}

            <div className="relative">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-700 hover:bg-gray-100 hover:shadow-md"
          >
            <FaFilter className="mr-2" />
            Filter: {selectedFilter}
          </button>

          {showFilter && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border z-50">

              {filterOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    setSelectedFilter(option);
                    setShowFilter(false);
                  }}
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                >
                  {option}
                </div>
              ))}

            </div>
          )}
        </div>
            
             {/* Sort */}

            {/* <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50"> */}
             <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-700 hover:bg-gray-100 hover:shadow-md hover:text-black transition-all duration-200 cursor-pointer">
              <FaSortAmountDown className="mr-2" />
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
                      {/* <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{ngo.name}</div>
                      </td> */}
                    
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-xl">
                          🌱
                        </div>

                        <div className="text-sm font-medium text-gray-900">
                          {ngo.name}
                        </div>

                      </div>
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
                                             {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                         <button 
                          //  onClick={() => navigate("/ngo-profile")}
                           onClick={() => navigate(`/ngo-profile/${index}`)}
                           className="text-orange-600 hover:text-orange-900"
                         >
                           View Details
                         </button>
                       </td> */}

                            {/* <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                // onClick={() => navigate("/ngo-profile")}
                                
                                onClick={() => navigate(`/ngo-profile/${ngo.id}`)}

                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-200"
                              >
                                View Profile →
                              </button>
                            </td> */}

                            <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-3">

                              <button
                                onClick={() => navigate(`/ngo-profile/${ngo.id}`)}
                                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                              >
                                View Profile →
                              </button>

                              <button className="text-gray-500 hover:text-black">
                                <FaEllipsisV />
                              </button>

                            </div>
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
