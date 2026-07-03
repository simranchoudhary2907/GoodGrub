import defaultNGOs from "../Data/ngoData";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { FaEllipsisV, FaEdit, FaTrash } from "react-icons/fa";

import {
  FaSearch,
  FaBell,
  FaComments,
  FaFilter,
  FaSortAmountDown,
} from "react-icons/fa";

const NGOs = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ngos");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  // const [showNotifications, setShowNotifications] = useState(true);
  const [showMessages, setShowMessages] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);
  const [showAddNGO, setShowAddNGO] = useState(false);
  const notificationRef = useRef(null);
  const messageRef = useRef(null);
  const filterRef = useRef(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sortType, setSortType] = useState("A-Z");
  const [openMenu, setOpenMenu] = useState(null);
// const [ngoData, setNgoData] = useState(defaultNGOs);

const [ngoData, setNgoData] = useState(() => {
  const saved = localStorage.getItem("ngoData");

  return saved ? JSON.parse(saved) : defaultNGOs;
});

useEffect(() => {
  localStorage.setItem("ngoData", JSON.stringify(ngoData));
}, [ngoData]);


const initialNGO = {
  name: "",
  registration: "",
  contactPerson: "",
  email: "",
  phone: "",
  website: "",
  city: "",
  state: "",
  description: "",
  focusAreas: [],
  logo: null,
  opportunities: "",
};

const [newNGO, setNewNGO] = useState(initialNGO);

const stateOptions = [
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
  { value: "Assam", label: "Assam" },
  { value: "Bihar", label: "Bihar" },
  { value: "Chhattisgarh", label: "Chhattisgarh" },
  { value: "Goa", label: "Goa" },
  { value: "Gujarat", label: "Gujarat" },
  { value: "Haryana", label: "Haryana" },
  { value: "Himachal Pradesh", label: "Himachal Pradesh" },
  { value: "Jharkhand", label: "Jharkhand" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Kerala", label: "Kerala" },
  { value: "Madhya Pradesh", label: "Madhya Pradesh" },
  { value: "Maharashtra", label: "Maharashtra" },
  { value: "Manipur", label: "Manipur" },
  { value: "Meghalaya", label: "Meghalaya" },
  { value: "Mizoram", label: "Mizoram" },
  { value: "Nagaland", label: "Nagaland" },
  { value: "Odisha", label: "Odisha" },
  { value: "Punjab", label: "Punjab" },
  { value: "Rajasthan", label: "Rajasthan" },
  { value: "Sikkim", label: "Sikkim" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Telangana", label: "Telangana" },
  { value: "Tripura", label: "Tripura" },
  { value: "Uttar Pradesh", label: "Uttar Pradesh" },
  { value: "Uttarakhand", label: "Uttarakhand" },
  { value: "West Bengal", label: "West Bengal" },
  { value: "Delhi", label: "Delhi" },
  { value: "Jammu & Kashmir", label: "Jammu & Kashmir" },
  { value: "Ladakh", label: "Ladakh" },
  { value: "Chandigarh", label: "Chandigarh" },
  { value: "Puducherry", label: "Puducherry" },
];

console.log("Selected Filter:", selectedFilter);

const filteredNGOs = [...ngoData]
  .filter((ngo) => {
    const matchesSearch =
      ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ngo.contact.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === "All" ||
      ngo.focusAreas.includes(selectedFilter);

    return matchesSearch && matchesFilter;
  })
  .sort((a, b) => {
    if (sortType === "A-Z")
      return a.name.localeCompare(b.name);

    if (sortType === "Z-A")
      return b.name.localeCompare(a.name);

    return 0;
  });

console.log(
  "Filtered NGOs:",
  filteredNGOs.map((ngo) => ngo.name)
);

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

const focusAreaOptions = [
  { value: "Food Distribution", label: "Food Distribution" },
  { value: "Education", label: "Education" },
  { value: "Emergency Relief", label: "Emergency Relief" },
  { value: "Youth Support", label: "Youth Support" },
  { value: "Elderly Care", label: "Elderly Care" },
  { value: "Community Gardens", label: "Community Gardens" },
  { value: "Food Waste Reduction", label: "Food Waste Reduction" },
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

//  Outside Click
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

    if (
      filterRef.current &&
      !filterRef.current.contains(event.target)
    ) {
      setShowFilter(false);
    }

    // setShowFilter(false);
    setShowSort(false);

  };
   
  document.addEventListener("mousedown", handleClickOutside);
  
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);



  // Save NGO Data
  useEffect(() => {
  localStorage.setItem("ngoData", JSON.stringify(ngoData));
}, [ngoData]);


  const handleDeleteNGO = (id) => {
  if (window.confirm("Delete this NGO?")) {
    setNgoData((prev) => prev.filter((ngo) => ngo.id !== id));
  }
};

const handleEditNGO = (id) => {
  const newName = prompt("Enter new NGO name:");

  setNgoData((prev) =>
    prev.map((ngo) =>
      ngo.id === id ? { ...ngo, name: newName } : ngo
    )
  );
};

// handleAddNGO

const handleAddNGO = () => {

  if (
 !newNGO.name ||
 !newNGO.registration ||
 !newNGO.contactPerson ||
 !newNGO.email ||
 !newNGO.phone ||
 !newNGO.website ||
newNGO.focusAreas.length === 0) {
 alert("Please fill all required fields.");
 return;
}

const NGOs = {
    id: ngoData.length + 1,
    name: newNGO.name,
    // focusAreas: ["New NGO"],
    focusAreas: newNGO.focusAreas,
    contact: {
      name: newNGO.name,
      email: newNGO.email,
      phone: newNGO.phone,
    },
    opportunities: newNGO.opportunities
    .split(",")
    .map(item => item.trim()),
  };


  setNgoData([...ngoData, NGOs]);

  setShowAddNGO(false);

  setNewNGO(initialNGO);
};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex flex-col">
            
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
            <div className="relative  w-[420px] -ml-12">
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
            {/* <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-200"> */}
            <button
            onClick={() => { setNewNGO(initialNGO); setShowAddNGO(true);}}
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 hover:shadow-lg hover:scale-105 transition-all duration-200">
              Add New NGO
            </button>
          </div>
        </div>
      </div>

        {/* Content Area */}
        <div className="flex-1 p-6">

        {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* <div className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500"> */}
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <p className="text-gray-500 text-sm">Total NGOs</p>
                <h3 className="text-3xl font-bold text-orange-600">5</h3>
              </div>

              {/* <div className="bg-white p-5 rounded-xl shadow border-l-4 border-green-500"> */}
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <p className="text-gray-500 text-sm">Volunteers</p>
                <h3 className="text-3xl font-bold text-green-600">120</h3>
              </div>

              {/* <div className="bg-white p-5 rounded-xl shadow border-l-4 border-blue-500"> */}
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <p className="text-gray-500 text-sm">Food Distributed</p>
                <h3 className="text-3xl font-bold text-blue-600">2.4 Tons</h3>
              </div>

              {/* <div className="bg-white p-5 rounded-xl shadow border-l-4 border-purple-500"> */}
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-orange-500
transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <p className="text-gray-500 text-sm">Families Served</p>
                <h3 className="text-3xl font-bold text-purple-600">450</h3>
              </div>
            </div>

          {/* Tabs */}
          {/* <div className="flex items-center space-x-6 mb-6"> */}
          <div className="flex items-center justify-end gap-3 mb-6">
            
            {/* Filter 🔽*/}

            <div className="relative" ref={filterRef}>         
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
                    console.log(option);
                    setSelectedFilter(option);
                    setShowFilter(false);
                  }}
                  // className="p-3 hover:bg-gray-100 cursor-pointer"
                  className={`p-3 cursor-pointer hover:bg-orange-100 ${
                  selectedFilter === option
                    ? "bg-orange-50 font-semibold text-orange-600"
                    : ""}
                      `}
                >
                  {option}
                </div>
              ))}

            </div>
          )}
        </div>
            
             {/* Sort */}

            <button
            onClick={() =>
              setSortType(sortType === "A-Z" ? "Z-A" : "A-Z")
            }
            className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-700 hover:bg-gray-100 hover:shadow-md"
          >
            <FaSortAmountDown className="mr-2" />
            Sort: {sortType}
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

                      <td className="px-6 py-4 whitespace-nowrap relative">
                        <div className="flex items-center gap-3">

                          <button
                            onClick={() => navigate(`/ngo-profile/${ngo.id}`)}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
                          >
                            View Profile →
                          </button>

                          {/* 3-dot button */}

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenMenu(openMenu === ngo.id ? null : ngo.id);
                            }}
                            className="text-gray-500 hover:text-black p-2"
                          >
                            <FaEllipsisV />
                          </button>

                          {openMenu === ngo.id && (
                            <div
                                className="absolute right-0 top-12 w-44 bg-white rounded-lg shadow-lg border z-50"
                                onClick={(e) => e.stopPropagation()}
                              >

                              <button
                                onClick={() => {
                                  handleEditNGO(ngo);
                                  setOpenMenu(null);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                              >
                                <FaEdit className="text-blue-500" />
                                Edit NGO
                              </button>

                              <button
                                onClick={() => {
                                  handleDeleteNGO(ngo.id);
                                  setOpenMenu(null);
                                }}
                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600"
                              >
                                <FaTrash />
                                Delete NGO
                              </button>

                            </div>
                          )}

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

      {/* Add NGO Modal */}
      {showAddNGO && (
        <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            onClick={()=>{
                setShowAddNGO(false);
                setNewNGO(initialNGO);
            }}
            >
          {/* <div className="bg-white w-[700px] rounded-2xl shadow-2xl p-6"> */}
          <div
            className="bg-white w-[900px] max-h-[85vh] overflow-y-auto rounded-2xl shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >

            <h2 className="text-2xl font-bold mb-6">
              Add New NGO
            </h2>

            <div className="grid grid-cols-2 gap-4">

              {/* NGO Name */}
              <input
                type="text"
                placeholder="NGO Name *"
                value={newNGO.name}
                onChange={(e) =>
                  setNewNGO({
                    ...newNGO,
                    name: e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

             {/* Registration */}
              <input
                type="text"
                placeholder="Registration Number *"
                value={newNGO.registration}
                onChange={(e)=>
                  setNewNGO({
                    ...newNGO,
                    registration:e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              {/* Contact Person */}

              <input
                type="text"
                placeholder="Authorized Contact Person Name *"
                value={newNGO.contactPerson}
                onChange={(e)=>
                  setNewNGO({
                    ...newNGO,
                    contactPerson:e.target.value,
                  })
                }
                className="border rounded-lg p-3"
                />

              {/* Email */}

              <input
                type="email"
                placeholder="Email *"
                value={newNGO.email}
                onChange={(e)=>
                  setNewNGO({
                    ...newNGO,
                    email:e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              {/* Phone */}

              <input
                type="text"
                placeholder="Mobile Number of Contact Person *"
                value={newNGO.phone}
                onChange={(e)=>
                  setNewNGO({
                    ...newNGO,
                    phone:e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              {/* Website */}
              <input
                type="text"
                placeholder="Website *"
                value={newNGO.website}
                onChange={(e)=>
                  setNewNGO({
                    ...newNGO,
                    website:e.target.value,
                  })
                }
                className="border rounded-lg p-3"
              />

              {/* City */}
              <input
              type="text"
              placeholder="City"
              value={newNGO.city}
              onChange={(e)=>
                setNewNGO({
                  ...newNGO,
                  city:e.target.value,
                })
              }
              className="border rounded-lg p-3"
            />

                {/* State */}
              <Select
                options={stateOptions}
                placeholder="Select or Search State *"
                value={
                  stateOptions.find(
                    (option) => option.value === newNGO.state
                  ) || null
                }
                onChange={(selected) =>
                  setNewNGO({
                    ...newNGO,
                    state: selected.value,
                  })
                }
                isSearchable
              />

            </div>

              {/* Description */}
            <textarea
              placeholder="NGO Description"
              rows={4}
              value={newNGO.description}
              onChange={(e)=>
                setNewNGO({
                  ...newNGO,
                  description:e.target.value,
                })
              }
              className="border rounded-lg p-3 w-full mt-4"
            />

                {/* Volunteering Opportunities */}
            <input
              type="text"
              placeholder="Food Sorting, Delivery Driver, Event Management"
              value={newNGO.opportunities}
              onChange={(e) =>
                setNewNGO({
                  ...newNGO,
                  opportunities: e.target.value,
                })
              }
              className="border rounded-lg p-3 w-full mt-4"
            />


            <div className="col-span-2">
            <label className="block text-sm font-semibold mb-2">
              NGO Logo
            </label>

            <label
              htmlFor="logo"
              className="border-2 border-dashed border-orange-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-orange-50 transition duration-300"
            >
              <div className="text-5xl mb-3">📁</div>

              <p className="font-semibold text-gray-700">
                Click to Upload NGO Logo
              </p>

              <p className="text-sm text-gray-500 mt-1">
                PNG, JPG or JPEG (Max 2 MB)
              </p>

              <input
                id="logo"
                type="file"
                className="hidden"
                onChange={(e) =>
                  setNewNGO({
                    ...newNGO,
                    logo: e.target.files[0],
                  })
                }
              />
            </label>

            {newNGO.logo && (
              <p className="mt-2 text-green-600 text-sm">
                ✅ {newNGO.logo.name}
              </p>
            )}
          </div>

            <div className="flex justify-end gap-4 mt-6">

             {/* Focus Areas */}
            <div className="col-span-2">
              <label className="block text-sm font-semibold mb-2">
                Focus Areas *
              </label>

              <Select
                isMulti
                options={focusAreaOptions}
                placeholder="Select Focus Areas"
                value={focusAreaOptions.filter(option =>
                  newNGO.focusAreas.includes(option.value)
                )}
                onChange={(selectedOptions) =>
                  setNewNGO({
                    ...newNGO,
                    focusAreas: selectedOptions
                      ? selectedOptions.map(option => option.value)
                      : [],
                  })
                }
              />
            </div>

              <button
                // onClick={() => setShowAddNGO(false)}
                onClick={() => {
                  setNewNGO(initialNGO);
                  setShowAddNGO(false);
              }}
                className="px-5 py-2 rounded-lg border"
              >
                Cancel
              </button>

              {/* Last button */}

              <button
              onClick={handleAddNGO}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
            >
              Add NGO
            </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default NGOs;
