
// // // src/pages/Dashboard.jsx
// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import Navbar from "../components/Navbar";


// // import {
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   ResponsiveContainer,
// //   LineChart,
// //   Line,
// // } from "recharts";

// // const foodData = [
// //   { month: "Jan", food: 1200 },
// //   { month: "Feb", food: 1500 },
// //   { month: "Mar", food: 1300 },
// //   { month: "Apr", food: 1700 },
// //   { month: "May", food: 2100 },
// //   { month: "Jun", food: 1900 },
// // ];

// // const co2Data = [
// //   { month: "Jan", co2: 50 },
// //   { month: "Feb", co2: 100 },
// //   { month: "Mar", co2: 150 },
// //   { month: "Apr", co2: 200 },
// //   { month: "May", co2: 300 },
// // ];

// // const volunteers = [
// //   { name: "Alice Green", impact: "2,200 kg food", badge: "Food Hero" },
// //   { name: "Bob White", impact: "1,850 kg food", badge: "Waste Warrior" },
// //   { name: "Charlie Brown", impact: "1,500 kg food", badge: "Community Champion" },
// //   { name: "Diana King", impact: "1,300 kg food", badge: "Rescue Star" },
// // ];

// // const donors = [
// //   { name: "Dr. Elena Petrova", impact: "150kg Food" },
// //   { name: "Prof. David Chen", impact: "120kg Food" },
// //   { name: "Campus Eatery", impact: "100kg Food" },
// //   { name: "Green Thumb Club", impact: "80kg Food" },
// //   { name: "Bio Sciences Dept.", impact: "75kg Food" },
// // ];

// // export default function Dashboard() {
// //    const navigate = useNavigate();

// //   const user = JSON.parse(localStorage.getItem("user"));

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="p-8">
// //         <h2 className="text-2xl font-bold text-center mb-8">
// //           Our Impact: Dashboard Preview
// //         </h2>

// //         {/* Top Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //         {/* Food Saved */}
// //         <div className="bg-white p-6 rounded-2xl shadow">
// //           <h3 className="text-lg font-semibold mb-4">
// //             Monthly Food Saved (kg)
// //           </h3>
// //           <p className="text-gray-500 mb-4">
// //             Progress over the last six months.
// //           </p>
// //           <ResponsiveContainer width="100%" height={250}>
// //             <BarChart data={foodData}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="month" />
// //               <YAxis />
// //               <Tooltip />
// //               <Bar dataKey="food" fill="#F97316" />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </div>

// //         {/* Top Volunteers */}
// //         <div className="bg-white p-6 rounded-2xl shadow">
// //           <h3 className="text-lg font-semibold mb-4">Top Volunteers</h3>
// //           <p className="text-gray-500 mb-4">
// //             Meet our most active community heroes.
// //           </p>
// //           <ul className="space-y-3">
// //             {volunteers.map((vol, index) => (
// //               <li
// //                 key={index}
// //                 className="flex items-center justify-between border-b pb-2"
// //               >
// //                 <div>
// //                   <span className="font-medium">{index + 1}. {vol.name}</span>
// //                   <p className="text-sm text-gray-500">{vol.impact}</p>
// //                 </div>
// //                 <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-full">
// //                   {vol.badge}
// //                 </span>
// //               </li>
// //             ))}
// //           </ul>
// //           <button className="text-orange-600 font-medium mt-4">
// //             View All Leaderboards →
// //           </button>
// //         </div>
// //         </div>

// //         {/* Bottom Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {/* CO2 Saved */}
// //         <div className="bg-white p-6 rounded-2xl shadow">
// //           <h3 className="text-lg font-semibold mb-4">Monthly CO2 Saved</h3>
// //           <ResponsiveContainer width="100%" height={250}>
// //             <LineChart data={co2Data}>
// //               <CartesianGrid strokeDasharray="3 3" />
// //               <XAxis dataKey="month" />
// //               <YAxis />
// //               <Tooltip />
// //               <Line
// //                 type="monotone"
// //                 dataKey="co2"
// //                 stroke="#4CAF50"
// //                 strokeWidth={2}
// //               />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </div>

// //         {/* Top Donors */}
// //         <div className="bg-white p-6 rounded-2xl shadow">
// //           <h3 className="text-lg font-semibold mb-4">Top Donors</h3>
// //           <table className="w-full text-left">
// //             <thead>
// //               <tr className="text-gray-600">
// //                 <th className="pb-2">Name</th>
// //                 <th className="pb-2">Impact</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {donors.map((donor, index) => (
// //                 <tr key={index} className="border-t">
// //                   <td className="py-2">{donor.name}</td>
// //                   <td className="py-2">{donor.impact}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from "recharts";

// const foodData = [
//   { month: "Jan", food: 1200 },
//   { month: "Feb", food: 1500 },
//   { month: "Mar", food: 1300 },
//   { month: "Apr", food: 1700 },
//   { month: "May", food: 2100 },
//   { month: "Jun", food: 1900 },
// ];

// const co2Data = [
//   { month: "Jan", co2: 50 },
//   { month: "Feb", co2: 100 },
//   { month: "Mar", co2: 150 },
//   { month: "Apr", co2: 200 },
//   { month: "May", co2: 300 },
// ];

// const volunteers = [
//   { name: "Alice Green", impact: "2,200 kg food", badge: "Food Hero" },
//   { name: "Bob White", impact: "1,850 kg food", badge: "Waste Warrior" },
//   { name: "Charlie Brown", impact: "1,500 kg food", badge: "Community Champion" },
//   { name: "Diana King", impact: "1,300 kg food", badge: "Rescue Star" },
// ];

// const donors = [
//   { name: "Dr. Elena Petrova", impact: "150kg Food" },
//   { name: "Prof. David Chen", impact: "120kg Food" },
//   { name: "Campus Eatery", impact: "100kg Food" },
//   { name: "Green Thumb Club", impact: "80kg Food" },
//   { name: "Bio Sciences Dept.", impact: "75kg Food" },
// ];

// export default function Dashboard() {
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     // <div className="min-h-screen bg-orange-50">
//      <div className="min-h-screen bg-[#FFF8F3]"> 
//       <Navbar />

//       <div className="max-w-7xl mx-auto p-6">

//         {/* Welcome Section */}
//         <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-8 mb-8 shadow-lg">
//         {/* <div className="bg-gradient-to-r from-orange-500 to-orange-800"> */}
//           <h1 className="text-4xl font-bold">
//             Welcome back, {user?.username?.split(" ")[0]} 👋
//           </h1>

//           <p className="mt-3 text-orange-100 text-lg">
//             Together we're reducing food waste and helping communities.
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

//           <div className="bg-white rounded-2xl p-6 shadow">
//             <p className="text-gray-500">Food Saved</p>
//             <h2 className="text-3xl font-bold text-orange-600 mt-2">
//               2,100kg
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow">
//             <p className="text-gray-500">Meals Served</p>
//             <h2 className="text-3xl font-bold text-green-600 mt-2">
//               5,240
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow">
//             <p className="text-gray-500">CO₂ Saved</p>
//             <h2 className="text-3xl font-bold text-blue-600 mt-2">
//               300kg
//             </h2>
//           </div>

//           <div className="bg-white rounded-2xl p-6 shadow">
//             <p className="text-gray-500">Volunteers</p>
//             <h2 className="text-3xl font-bold text-purple-600 mt-2">
//               128
//             </h2>
//           </div>

//         </div>

//         {/* Quick Actions */}
//         <div className="bg-white rounded-2xl p-6 shadow mb-8">
//           <h2 className="text-xl font-semibold mb-4">
//             Quick Actions
//           </h2>

//           <div className="flex flex-wrap gap-4">

//             <button
//               onClick={() => navigate("/ngos")}
//               className="bg-orange-500 text-white px-5 py-3 rounded-xl hover:opacity-90"
//             >
//               NGOs
//             </button>

//             <button
//               onClick={() => navigate("/beneficiary")}
//               className="bg-green-500 text-white px-5 py-3 rounded-xl hover:opacity-90"
//             >
//               Beneficiaries
//             </button>

//             <button
//               onClick={() => navigate("/campus-reminder")}
//               className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:opacity-90"
//             >
//               Events
//             </button>

//             <button
//               onClick={() => navigate("/provide-support")}
//               className="bg-purple-500 text-white px-5 py-3 rounded-xl hover:opacity-90"
//             >
//               Support
//             </button>

//           </div>
//         </div>

//         {/* Charts */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

//           <div className="bg-white p-6 rounded-2xl shadow">
//             <h3 className="text-lg font-semibold mb-2">
//               Monthly Food Saved
//             </h3>

//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={foodData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="food" fill="#F97316" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow">
//             <h3 className="text-lg font-semibold mb-2">
//               Monthly CO₂ Saved
//             </h3>

//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={co2Data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line
//                   type="monotone"
//                   dataKey="co2"
//                   stroke="#22C55E"
//                   strokeWidth={3}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//         </div>

//         {/* Bottom Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           <div className="bg-white p-6 rounded-2xl shadow">
//             <h3 className="text-lg font-semibold mb-4">
//               Top Volunteers
//             </h3>

//             {volunteers.map((vol, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center border-b py-3"
//               >
//                 <div>
//                   <p className="font-medium">
//                     {index + 1}. {vol.name}
//                   </p>
//                   <p className="text-sm text-gray-500">
//                     {vol.impact}
//                   </p>
//                 </div>

//                 <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
//                   {vol.badge}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow">
//             <h3 className="text-lg font-semibold mb-4">
//               Top Donors
//             </h3>

//             {donors.map((donor, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between border-b py-3"
//               >
//                 <span>{donor.name}</span>
//                 <span className="text-gray-500">
//                   {donor.impact}
//                 </span>
//               </div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";

// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from "recharts";

// const foodData = [
//   { month: "Jan", food: 1200 },
//   { month: "Feb", food: 1500 },
//   { month: "Mar", food: 1300 },
//   { month: "Apr", food: 1700 },
//   { month: "May", food: 2100 },
//   { month: "Jun", food: 1900 },
// ];

// const co2Data = [
//   { month: "Jan", co2: 50 },
//   { month: "Feb", co2: 100 },
//   { month: "Mar", co2: 150 },
//   { month: "Apr", co2: 200 },
//   { month: "May", co2: 300 },
// ];

// const volunteers = [
//   { name: "Alice Green", impact: "2,200 kg food", badge: "Food Hero" },
//   { name: "Bob White", impact: "1,850 kg food", badge: "Waste Warrior" },
//   { name: "Charlie Brown", impact: "1,500 kg food", badge: "Champion" },
//   { name: "Diana King", impact: "1,300 kg food", badge: "Rescue Star" },
// ];

// const donors = [
//   { name: "Dr. Elena Petrova", impact: "150kg Food" },
//   { name: "Prof. David Chen", impact: "120kg Food" },
//   { name: "Campus Eatery", impact: "100kg Food" },
//   { name: "Green Thumb Club", impact: "80kg Food" },
// ];

// export default function Dashboard() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <div className="min-h-screen bg-[#F6F7FB]">

//       <Navbar />

//       <div className="max-w-7xl mx-auto px-6 py-6">

//         {/* ===== WELCOME SECTION ===== */}
//         <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-8 mb-8 shadow-lg">
//           <h1 className="text-4xl font-bold">
//             Welcome back, {user?.username?.split(" ")[0]} 👋
//           </h1>
//           <p className="mt-3 text-orange-100 text-lg">
//             Together we’re reducing food waste and helping communities.
//           </p>
//         </div>

//         {/* ===== STATS ===== */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

//           {[
//             { label: "Food Saved", value: "2,100 kg", color: "text-orange-600" },
//             { label: "Meals Served", value: "5,240", color: "text-green-600" },
//             { label: "CO₂ Saved", value: "300 kg", color: "text-blue-600" },
//             { label: "Volunteers", value: "128", color: "text-purple-600" },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
//             >
//               <p className="text-gray-500">{item.label}</p>
//               <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
//                 {item.value}
//               </h2>
//             </div>
//           ))}
//         </div>

//         {/* ===== QUICK ACTIONS ===== */}
//         <div className="bg-white rounded-2xl p-6 shadow-sm mb-10">
//           <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

//             <button
//               onClick={() => navigate("/ngos")}
//               className="bg-orange-500 text-white py-3 rounded-xl hover:scale-105 transition"
//             >
//               NGOs
//             </button>

//             <button
//               onClick={() => navigate("/beneficiary")}
//               className="bg-green-500 text-white py-3 rounded-xl hover:scale-105 transition"
//             >
//               Beneficiaries
//             </button>

//             <button
//               onClick={() => navigate("/campus-reminder")}
//               className="bg-blue-500 text-white py-3 rounded-xl hover:scale-105 transition"
//             >
//               Events
//             </button>

//             <button
//               onClick={() => navigate("/provide-support")}
//               className="bg-purple-500 text-white py-3 rounded-xl hover:scale-105 transition"
//             >
//               Support
//             </button>

//           </div>
//         </div>

//         {/* ===== CHARTS ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

//           <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
//             <h3 className="text-lg font-semibold mb-4">Monthly Food Saved</h3>

//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={foodData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="food" fill="#F97316" />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition">
//             <h3 className="text-lg font-semibold mb-4">Monthly CO₂ Saved</h3>

//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart data={co2Data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="co2" stroke="#22C55E" strokeWidth={3} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//         </div>

//         {/* ===== BOTTOM GRID ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

//           {/* VOLUNTEERS */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm">
//             <h3 className="text-lg font-semibold mb-4">Top Volunteers</h3>

//             <div className="space-y-3">
//               {volunteers.map((vol, i) => (
//                 <div
//                   key={i}
//                   className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50"
//                 >
//                   <div>
//                     <p className="font-medium">
//                       {i + 1}. {vol.name}
//                     </p>
//                     <p className="text-sm text-gray-500">{vol.impact}</p>
//                   </div>

//                   <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
//                     {vol.badge}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* DONORS */}
//           <div className="bg-white p-6 rounded-2xl shadow-sm">
//             <h3 className="text-lg font-semibold mb-4">Top Donors</h3>

//             <div className="space-y-3">
//               {donors.map((donor, i) => (
//                 <div
//                   key={i}
//                   className="flex justify-between p-3 rounded-xl hover:bg-gray-50"
//                 >
//                   <span className="font-medium">{donor.name}</span>
//                   <span className="text-gray-500">{donor.impact}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }



import React from "react";
import Navbar from "../components/Navbar";

import StatsCards from "../components/dashboard/StatsCards";
import QuickActions from "../components/dashboard/QuickActions";
import ChartsSection from "../components/dashboard/ChartsSection";
import VolunteersList from "../components/dashboard/VolunteersList";
import DonorsList from "../components/dashboard/DonorsList";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

 return (
  <div className="min-h-screen bg-[#F6F7FB]">
    <Navbar />

    <div className="max-w-7xl mx-auto px-6 py-6">

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-8 mb-8 shadow-lg">
        <h1 className="text-4xl font-bold">
          Welcome back, {user?.username?.split(" ")[0]} 👋
        </h1>
        <p className="mt-3 text-orange-100 text-lg">
          Together we’re reducing food waste and helping communities.
        </p>
      </div>

      {/* Components */}
      <StatsCards />
      <QuickActions />
      <ChartsSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <VolunteersList />
        <DonorsList />
      </div>

      {/* 👇 PASTE SCROLLABLE SECTION HERE (IMPORTANT) */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">
          🔄 Recent Activity
        </h3>

        <div className="flex gap-4 overflow-x-auto pb-2">

          {[
            { text: "🍱 Hostel A donated 20 meals", color: "bg-orange-100" },
            { text: "🚚 Pickup completed at Mess B", color: "bg-green-100" },
            { text: "👥 5 volunteers joined today", color: "bg-blue-100" },
            { text: "♻️ Waste reduced by 15kg", color: "bg-purple-100" },
            { text: "📦 New food listing added", color: "bg-yellow-100" },
          ].map((item, i) => (
            <div
              key={i}
              className={`${item.color} min-w-[250px] p-4 rounded-xl shadow-sm flex-shrink-0`}
            >
              <p className="text-sm font-medium">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>

    </div>
  </div>
);
}