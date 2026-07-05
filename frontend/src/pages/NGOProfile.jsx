import defaultNGOs from "../Data/ngoData";
// import React, { useState } from "react";
import React, { useState} from "react";
// import { useParams } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

import {
  FaBell,
  // FaQuestionCircle,
  FaUserCircle,
  FaEdit,
  FaPhone,
  FaEnvelope,
  FaCommentDots,
  FaMapMarkerAlt,
  FaGlobe,
  FaIdCard,
  FaUsers,
  FaHandsHelping,
  FaBoxOpen,
  FaCalendarAlt,
} from "react-icons/fa";

const NGOProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const safeValue = (val) => (val ? val : "0");

  // Get NGOs from localStorage
  const storedNGOs =
    JSON.parse(localStorage.getItem("ngoData")) || defaultNGOs;

  // Find current NGO
  const ngo = storedNGOs.find(
    (item) => item.id === Number(id)
  );

  // notes
const [notes, setNotes] = useState(() => {
  const saved = localStorage.getItem(`notes_${id}`);

  return (
    saved ||
    `• Follow up on volunteer training schedule
• Coordinate delivery routes for next week
• Check volunteer availability for weekend events
• Update contact information in database
• Schedule monthly review meeting`
  );

});

// Save Notes
  const handleSaveNotes = () => {
  localStorage.setItem(`notes_${id}`, notes);
  alert("Notes saved successfully!");
};

// const [showOpportunities, setShowOpportunities] = useState(false);

  // NGO Not Found
  if (!ngo) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <div className="flex justify-center items-center h-[80vh]">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-red-500">
              NGO Not Found
            </h2>

            <p className="text-gray-500 mt-3">
              This NGO does not exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Default values if old NGO data doesn't contain these fields
  const familiesServed = safeValue(ngo.familiesServed);
  const volunteers = safeValue(ngo.volunteers);
  const foodDistributed = safeValue(ngo.foodDistributed);
  const eventsHosted = safeValue(ngo.eventsHosted);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col">

        {/* Top Bar */}

        <div className="bg-white border-b px-6 py-4 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-gray-800">
            NGO Profile: {ngo.name}
          </h1>

          <div className="flex items-center space-x-4">

            <button className="p-2 text-gray-400 hover:text-gray-600 transition">
              <FaBell size={18} />
            </button>

            <button className="p-2 text-gray-400 hover:text-gray-600 transition">
              <FaUserCircle size={20} />
            </button>

            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition flex items-center">
              <FaEdit className="mr-2" />
              Edit Profile
            </button>

          </div>

        </div>

        {/* Page Content */}

        <div className="p-6">

       {/* NGO Statistics Cards */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl shadow border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <FaUsers className="text-orange-500 text-xl mb-3" />
          <p className="text-gray-500 text-sm">Families Served</p>
          <h3 className="text-2xl font-bold text-orange-600">
            {safeValue(ngo.familiesServed)}
          </h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <FaHandsHelping className="text-orange-500 text-xl mb-3" />
          <p className="text-gray-500 text-sm">Volunteers</p>
          <h3 className="text-2xl font-bold text-orange-600">
            {safeValue(ngo.volunteers)}
          </h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <FaBoxOpen className="text-orange-500 text-xl mb-3" />
          <p className="text-gray-500 text-sm">Food Distributed</p>
          <h3 className="text-2xl font-bold text-orange-600">
            {safeValue(ngo.foodDistributed)}
          </h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
          <FaCalendarAlt className="text-orange-500 text-xl mb-3" />
          <p className="text-gray-500 text-sm">Events Hosted</p>
          <h3 className="text-2xl font-bold text-orange-600">
            {safeValue(ngo.eventsHosted)}
          </h3>
        </div>

      </div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

  {/* NGO INFO */}

  <div className="bg-green-50 rounded-lg p-6 border border-green-200">

    <div className="flex items-center gap-4 mb-5">

      <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold">

        {ngo.logo ? (

          <img
            src={
              typeof ngo.logo === "string"
                ? ngo.logo
                : URL.createObjectURL(ngo.logo)
            }
            alt={ngo.name}
            className="w-full h-full rounded-full object-cover"
          />

        ) : (

          ngo.name.charAt(0)

        )}

      </div>

      <div>

        <h2 className="text-xl font-bold text-gray-800">

          {ngo.name}

        </h2>

        <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">

          ✓ Verified NGO

        </span>

      </div>

    </div>

    <p className="text-gray-600 mb-6">

      {ngo.description || "No description available."}

    </p>

    <div className="flex flex-wrap gap-3">

      {/* <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center">

        <FaPhone className="mr-2" />

        Call NGO

      </button> */}

      <button
      onClick={() => window.location.href = `tel:${ngo.contact?.phone}`}
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center"
    >
      <FaPhone className="mr-2" />
      Call NGO
    </button>

      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center">

        <FaEnvelope className="mr-2" />

        Email NGO

      </button>

      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center">

        <FaCommentDots className="mr-2" />

        Message NGO

      </button>

    </div>

  </div>

  {/* CONTACT */}

  <div className="bg-white rounded-lg p-6 shadow border">

    <h3 className="text-lg font-semibold text-gray-800 mb-4">

      Contact & Focus Areas

    </h3>

    {/* Focus */}

    <div className="mb-6">

      <h4 className="text-sm font-medium text-gray-700 mb-2">

        Focus Areas

      </h4>

      <div className="flex flex-wrap gap-2">

        {ngo.focusAreas?.length ? (

          ngo.focusAreas.map((area, index) => (

            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >

              {area}

            </span>

          ))

        ) : (

          <span className="text-gray-500">

            No focus areas

          </span>

        )}

      </div>

    </div>

    {/* Contact */}

    <div className="space-y-3">

      <div className="flex items-center">

        <FaUserCircle className="mr-3 text-green-600" />

        <span>

          {ngo.contact?.name}

        </span>

      </div>

      <div className="flex items-center">

        <FaEnvelope className="mr-3 text-green-600" />

        <span>

          {ngo.contact?.email}

        </span>

      </div>

      <div className="flex items-center">

        <FaPhone className="mr-3 text-green-600" />

        <span>

          {ngo.contact?.phone}

        </span>

      </div>

      <div className="flex items-center">

        <FaIdCard className="mr-3 text-green-600" />

        <span>

          {ngo.registration || "Not Available"}

        </span>

      </div>

      <div className="flex items-center">

        <FaGlobe className="mr-3 text-green-600" />

        <span>

          {ngo.website || "Not Available"}

        </span>

      </div>

      <div className="flex items-center">

        <FaMapMarkerAlt className="mr-3 text-green-600" />

        <span>

          {ngo.city || "City"}, {ngo.state || "State"}

        </span>

      </div>

    </div>

  </div>

</div>

{/* Volunteering Opportunities */}

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

  <div className="bg-white rounded-lg p-6 shadow border">

    <h3 className="text-lg font-semibold text-gray-800 mb-4">

      Volunteer With This NGO

    </h3>

    <div className="space-y-4">

      {ngo.opportunities?.length ? (

        ngo.opportunities.map((item, index) => (

          <div
            key={index}
            className="border-l-4 border-green-500 pl-4"
          >

            <h4 className="font-medium text-gray-800">

              {item}

            </h4>

            <p className="text-sm text-gray-600">

              Volunteer opportunity available for this NGO.

            </p>

          </div>

        ))

      ) : (

        <p className="text-gray-500">

          No opportunities available.

        </p>

      )}

    </div>

   <div className="flex gap-4 mt-5">

  <button
    onClick={() => navigate("/volunteer-signup")}
    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition"
  >
    Become a Volunteer
  </button>

  <button
    onClick={() => navigate("/volunteer-faqs")}
    className="border border-green-500 text-green-600 hover:bg-green-50 px-5 py-2 rounded-lg transition"
  >
    Volunteer FAQs
  </button>

</div>

  </div>

  {/* Coordination Notes Card */}

<div className="bg-white rounded-lg p-6 shadow border">

  <h3 className="text-lg font-semibold text-gray-800 mb-4">
    Coordination Notes
  </h3>

  <textarea
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    className="w-full h-[250px] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
    placeholder="Add coordination notes..."
  />

<button
  onClick={handleSaveNotes}
  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mt-3"
>
  Save Notes
</button>

</div>

</div>

{/* Recent Activities Card */}

<div className="bg-white rounded-lg shadow border">

  <div className="p-6 border-b">

    <h3 className="text-lg font-semibold text-gray-800">
      Recent Activities
    </h3>

  </div>

  <div className="overflow-x-auto">

    <table className="w-full">

      <thead className="bg-gray-50">

        <tr>

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Date
          </th>

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Activity Type
          </th>

          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Description
          </th>

        </tr>

      </thead>

<tbody>

  {ngo.activities?.length ? (

    ngo.activities.map((activity, index) => (

      <tr key={index} className="border-t hover:bg-gray-50">

        <td className="px-6 py-4">
          {activity.date}
        </td>

        <td className="px-6 py-4">
          {activity.type}
        </td>

        <td className="px-6 py-4">
          {activity.description}
        </td>

      </tr>

    ))

  ) : (

    <tr>

      <td
        colSpan="3"
        className="text-center py-6 text-gray-500"
      >
        No recent activities available.
      </td>

    </tr>

  )}

</tbody>

    </table>

  </div>

</div>

{/* Popup starts here */}

{/* {showOpportunities && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white w-[500px] rounded-xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        All Volunteering Opportunities
      </h2>

<div className="space-y-3">

  {ngo.opportunities?.length ? (

    ngo.opportunities.map((item, index) => (

      <div
        key={index}
        className="flex items-center border rounded-lg p-3"
      >
        <span className="text-green-600 mr-3">✔</span>

        <span>{item}</span>

      </div>

    ))

  ) : (

    <p className="text-gray-500">
      No opportunities available.
    </p>

  )}

</div>

      <div className="flex justify-end mt-6">

        <button
          onClick={() => setShowOpportunities(false)}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600"
        >
          Close
        </button>

      </div>

    </div>
  </div>
)} */}

</div>

</div>

</div>

);
};

export default NGOProfile;