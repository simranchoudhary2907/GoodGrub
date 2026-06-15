import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const NGOProfile = () => {
  const { id } = useParams();

  const ngoData = {
  1: {
  name: "Community Harvest Hub",
  description:
    "Dedicated to combating food insecurity by distributing fresh, nutritious food to underserved communities and empowering youth through educational programs.",

  contact: "Maria Rodriguez",
  email: "maria.r@chhub.org",
  phone: "+1-234-567-8901",
  address: "123 Green Valley Lane, Eco City, 54321",

  familiesServed: 450,
  volunteers: 120,
  foodDistributed: "2.4 Tons",
  eventsHosted: 18,
},

  2: {
  name: "Nourish Neighbors Collective",
  description:
    "Supporting homeless communities through food distribution and community gardening initiatives.",

  contact: "David Chen",
  email: "david.ch@nnc.org",
  phone: "+1-234-567-8902",
  address: "456 Hope Street, River Town, 67890",

  familiesServed: 320,
  volunteers: 90,
  foodDistributed: "1.8 Tons",
  eventsHosted: 12,
},

3: {
  name: "GreenPlate Initiative",
  description:
    "Reducing food waste through education programs and sustainable food recovery practices.",

  contact: "Sophia Lee",
  email: "sophia.le@gpi.org",
  phone: "+1-234-567-8903",
  address: "789 Green Avenue, Sustainability City, 11111",

  familiesServed: 280,
  volunteers: 75,
  foodDistributed: "1.2 Tons",
  eventsHosted: 10,
},

4: {
  name: "Helping Hands Alliance",
  description:
    "Providing emergency food relief and support services to families in need.",

  contact: "John Smith",
  email: "john.sm@hha.org",
  phone: "+1-234-567-8904",
  address: "321 Unity Road, Helping Town, 22222",

  familiesServed: 600,
  volunteers: 150,
  foodDistributed: "3.5 Tons",
  eventsHosted: 25,
},

5: {
  name: "Food For Thought",
  description:
    "Delivering nutritious meals and companionship to elderly community members.",

  contact: "Emily White",
  email: "emily.wh@fft.org",
  phone: "+1-234-567-8905",
  address: "654 Care Lane, Senior City, 33333",

  familiesServed: 200,
  volunteers: 60,
  foodDistributed: "900 Kg",
  eventsHosted: 8,
},

};

const ngo = ngoData[id];

  console.log(id);
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
          {/* <h1 className="text-2xl font-bold text-gray-800">NGO Profile: Community Harvest Hub</h1> */}

          <h1 className="text-2xl font-bold text-gray-800">
              NGO Profile: {ngo?.name}
            </h1>
          
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


          {/* NGO Statistics Cards */}

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-5 rounded-xl shadow border">
              <p className="text-gray-500 text-sm">Families Served</p>
              {/* <h3 className="text-2xl font-bold text-orange-600">450</h3> */}

              <h3 className="text-2xl font-bold text-orange-600">
              {ngo?.familiesServed}
            </h3>

            </div>

            <div className="bg-white p-5 rounded-xl shadow border">
              <p className="text-gray-500 text-sm">Volunteers</p>
              {/* <h3 className="text-2xl font-bold text-orange-600">120</h3> */}

              <h3 className="text-2xl font-bold text-orange-600">
                {ngo?.volunteers}
              </h3>
              
            </div>

            <div className="bg-white p-5 rounded-xl shadow border">
              <p className="text-gray-500 text-sm">Food Distributed</p>
              {/* <h3 className="text-2xl font-bold text-orange-600">2.4 Tons</h3> */}
              <h3 className="text-2xl font-bold text-orange-600">
                {ngo?.foodDistributed}
              </h3>
            </div>

            <div className="bg-white p-5 rounded-xl shadow border">
              <p className="text-gray-500 text-sm">Events Hosted</p>
              <h3 className="text-2xl font-bold text-orange-600">
                {ngo?.eventsHosted}
              </h3>
            </div>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* NGO Info Card */}
            {/* <div className="bg-green-50 rounded-lg p-6 border border-green-200"> */}

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">

            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold">
                {ngo?.name?.charAt(0)}
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {ngo?.name}
                </h2>

                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                  ✓ Verified NGO
                </span>
              </div>
            </div>

              {/* <h2 className="text-xl font-bold text-gray-800 mb-3">Community Harvest Hub</h2> */}
              

              {/* <p className="text-gray-600 mb-6">
                Dedicated to combating food insecurity by distributing fresh, nutritious food to underserved communities and empowering youth through educational programs.
              </p> */}

              <p className="text-gray-600 mb-6">
                {ngo?.description}
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
                    <span className="text-gray-800">{ngo?.contact}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">✉️</span>
                    <span className="text-gray-800">{ngo?.email}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">📞</span>
                    <span className="text-gray-800">{ngo?.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3">📍</span>
                    <span className="text-gray-800">{ngo?.address}</span>
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
