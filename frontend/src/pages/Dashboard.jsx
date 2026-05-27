// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'

// export default function Dashboard() {
//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           {/* Dashboard Header */}
//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Impact: Dashboard Preview</h1>
//             <p className="text-gray-600 text-lg">Track your community's food rescue achievements</p>
//           </div>
          
//           {/* Dashboard Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
//             {/* Monthly Food Saved (kg) - Top Left */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Food Saved (kg)</h2>
//               <div className="h-64 flex items-end justify-between space-x-2">
//                 {/* Bar Chart */}
//                 <div className="flex-1 flex flex-col items-center">
//                   <div className="w-full bg-red-500 rounded-t" style={{height: '45%'}}></div>
//                   <span className="text-xs text-gray-600 mt-1">Jan</span>
//                   <span className="text-xs text-gray-500">~1100</span>
//                 </div>
//                 <div className="flex-1 flex flex-col items-center">
//                   <div className="w-full bg-red-500 rounded-t" style={{height: '64%'}}></div>
//                   <span className="text-xs text-gray-600 mt-1">Feb</span>
//                   <span className="text-xs text-gray-500">~1400</span>
//                 </div>
//                 <div className="flex-1 flex flex-col items-center">
//                   <div className="w-full bg-red-500 rounded-t" style={{height: '55%'}}></div>
//                   <span className="text-xs text-gray-600 mt-1">Mar</span>
//                   <span className="text-xs text-gray-500">~1200</span>
//                 </div>
//                 <div className="flex-1 flex flex-col items-center">
//                   <div className="w-full bg-red-500 rounded-t" style={{height: '77%'}}></div>
//                   <span className="text-xs text-gray-600 mt-1">Apr</span>
//                   <span className="text-xs text-gray-500">~1700</span>
//                 </div>
//                 <div className="flex-1 flex flex-col items-center">
//                   <div className="w-full bg-red-500 rounded-t" style={{height: '95%'}}></div>
//                   <span className="text-xs text-gray-600 mt-1">May</span>
//                   <span className="text-xs text-gray-500">~2100</span>
//                 </div>
//                 <div className="flex-1 flex flex-col items-center">
//                   <div className="w-full bg-red-500 rounded-t" style={{height: '86%'}}></div>
//                   <span className="text-xs text-gray-600 mt-1">Jun</span>
//                   <span className="text-xs text-gray-500">~1900</span>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-600 text-center mt-2">Progress over the last six months</p>
//             </div>

//             {/* Top Volunteers - Top Right */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Volunteers</h2>
//               <p className="text-sm text-gray-600 mb-4">Meet our most active community heroes.</p>
              
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
//                       <span className="text-orange-600 font-bold text-sm">1</span>
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Alice Green</p>
//                       <p className="text-sm text-gray-600">2,200 kg food</p>
//                     </div>
//                   </div>
//                   <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs font-medium rounded-full">Food Hero</span>
//                 </div>
                
//                 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
//                       <span className="text-orange-600 font-bold text-sm">2</span>
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Bob White</p>
//                       <p className="text-sm text-gray-600">1,850 kg food</p>
//                     </div>
//                   </div>
//                   <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs font-medium rounded-full">Waste Warrior</span>
//                 </div>
                
//                 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
//                       <span className="text-orange-600 font-bold text-sm">3</span>
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Charlie Brown</p>
//                       <p className="text-sm text-gray-600">1,500 kg food</p>
//                     </div>
//                   </div>
//                   <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs font-medium rounded-full">Community Champion</span>
//                 </div>
                
//                 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
//                       <span className="text-orange-600 font-bold text-sm">4</span>
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900">Diana King</p>
//                       <p className="text-sm text-gray-600">1,300 kg food</p>
//                     </div>
//                   </div>
//                   <span className="px-3 py-1 bg-orange-200 text-orange-800 text-xs font-medium rounded-full">Rescue Star</span>
//                 </div>
//               </div>
              
//               <button className="w-full mt-4 text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center justify-center">
//                 View All Leaderboards
//                 <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>

//             {/* Monthly CO2 Saved - Bottom Left */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly CO2 Saved</h2>
//               <div className="h-64 relative">
//                 {/* Line Chart */}
//                 <div className="absolute inset-0 flex items-end">
//                   <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                     <polyline
//                       fill="none"
//                       stroke="#6B7280"
//                       strokeWidth="2"
//                       points="10,75 30,50 50,25 70,8 90,0"
//                     />
//                   </svg>
//                 </div>
                
//                 {/* Y-axis labels */}
//                 <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
//                   <span>300</span>
//                   <span>225</span>
//                   <span>150</span>
//                   <span>75</span>
//                   <span>0</span>
//                 </div>
                
//                 {/* X-axis labels */}
//                 <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500">
//                   <span>Jan</span>
//                   <span>Feb</span>
//                   <span>Mar</span>
//                   <span>Apr</span>
//                   <span>May</span>
//                 </div>
//               </div>
//             </div>

//             {/* Top Donors - Bottom Right */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">Top Donors</h2>
              
//               <div className="space-y-3">
//                 <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900">Dr. Elena Petrova</p>
//                     <p className="text-sm text-gray-600">150kg Food</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                   <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900">Prof. David Chen</p>
//                     <p className="text-sm text-gray-600">120kg Food</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                   <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M19 4H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM3 6a2 2 0 012-2h12a2 2 0 012 2v2H3V6z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900">Campus Eatery</p>
//                     <p className="text-sm text-gray-600">100kg Food</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                   <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900">Green Thumb Club</p>
//                     <p className="text-sm text-gray-600">80kg Food</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
//                   <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
//                     <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div className="flex-1">
//                     <p className="font-medium text-gray-900">Bio Sciences Dept.</p>
//                     <p className="text-sm text-gray-600">75kg Food</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }


// // import React from "react";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
// // import { Avatar } from "@/components/ui/avatar";

// // // Sample Data
// // const foodData = [
// //   { month: "Jan", food: 1200 },
// //   { month: "Feb", food: 1400 },
// //   { month: "Mar", food: 1300 },
// //   { month: "Apr", food: 1700 },
// //   { month: "May", food: 2100 },
// //   { month: "Jun", food: 1900 },
// // ];

// // const co2Data = [
// //   { month: "Jan", co2: 60 },
// //   { month: "Feb", co2: 120 },
// //   { month: "Mar", co2: 180 },
// //   { month: "Apr", co2: 240 },
// //   { month: "May", co2: 300 },
// // ];

// // const volunteers = [
// //   { name: "Alice Green", food: "2200 kg", badge: "Food Hero" },
// //   { name: "Bob White", food: "1850 kg", badge: "Waste Warrior" },
// //   { name: "Charlie Brown", food: "1500 kg", badge: "Community Champion" },
// //   { name: "Diana King", food: "1300 kg", badge: "Rescue Star" },
// // ];

// // const donors = [
// //   { name: "Dr. Elena Petrova", impact: "150kg Food" },
// //   { name: "Prof. David Chen", impact: "120kg Food" },
// //   { name: "Campus Eatery", impact: "100kg Food" },
// //   { name: "Green Thumb Club", impact: "80kg Food" },
// //   { name: "Bio Sciences Dept.", impact: "75kg Food" },
// // ];

// // export default function ImpactDashboard() {
// //   return (
// //     <div className="p-6 space-y-8">
// //       <h2 className="text-2xl font-bold text-center">Our Impact: Dashboard Preview</h2>

// //       {/* Top Row */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {/* Food Saved Chart */}
// //         <Card className="shadow-md">
// //           <CardContent className="p-4">
// //             <h3 className="text-lg font-semibold mb-2">Monthly Food Saved (kg)</h3>
// //             <p className="text-sm text-gray-500 mb-4">Progress over the last six months.</p>
// //             <ResponsiveContainer width="100%" height={250}>
// //               <BarChart data={foodData}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="month" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Bar dataKey="food" fill="#e85d3d" radius={[6, 6, 0, 0]} />
// //               </BarChart>
// //             </ResponsiveContainer>
// //           </CardContent>
// //         </Card>

// //         {/* Volunteers */}
// //         <Card className="shadow-md">
// //           <CardContent className="p-4">
// //             <h3 className="text-lg font-semibold mb-2">Top Volunteers</h3>
// //             <p className="text-sm text-gray-500 mb-4">Meet our most active community heroes.</p>
// //             <ul className="space-y-3">
// //               {volunteers.map((v, i) => (
// //                 <li key={i} className="flex justify-between items-center">
// //                   <span>
// //                     <span className="font-bold mr-2">{i + 1}.</span> {v.name}
// //                   </span>
// //                   <div className="flex items-center space-x-2">
// //                     <span className="text-gray-600 text-sm">{v.food}</span>
// //                     <span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded-full">{v.badge}</span>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>
// //             <p className="text-red-600 text-sm mt-4 cursor-pointer">View All Leaderboards →</p>
// //           </CardContent>
// //         </Card>
// //       </div>

// //       {/* Bottom Row */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {/* CO2 Saved Chart */}
// //         <Card className="shadow-md">
// //           <CardContent className="p-4">
// //             <h3 className="text-lg font-semibold mb-2">Monthly CO2 Saved</h3>
// //             <ResponsiveContainer width="100%" height={250}>
// //               <LineChart data={co2Data}>
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="month" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Line type="monotone" dataKey="co2" stroke="#82ca9d" strokeWidth={2} />
// //               </LineChart>
// //             </ResponsiveContainer>
// //           </CardContent>
// //         </Card>

// //         {/* Donors */}
// //         <Card className="shadow-md">
// //           <CardContent className="p-4">
// //             <h3 className="text-lg font-semibold mb-4">Top Donors</h3>
// //             <ul className="space-y-3">
// //               {donors.map((d, i) => (
// //                 <li key={i} className="flex justify-between items-center">
// //                   <div className="flex items-center space-x-2">
// //                     <Avatar className="h-8 w-8 bg-gray-200" />
// //                     <span>{d.name}</span>
// //                   </div>
// //                   <span className="text-gray-600 text-sm">{d.impact}</span>
// //                 </li>
// //               ))}
// //             </ul>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // }


// src/pages/Dashboard.jsx
import React from "react";
import Navbar from "../components/Navbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const foodData = [
  { month: "Jan", food: 1200 },
  { month: "Feb", food: 1500 },
  { month: "Mar", food: 1300 },
  { month: "Apr", food: 1700 },
  { month: "May", food: 2100 },
  { month: "Jun", food: 1900 },
];

const co2Data = [
  { month: "Jan", co2: 50 },
  { month: "Feb", co2: 100 },
  { month: "Mar", co2: 150 },
  { month: "Apr", co2: 200 },
  { month: "May", co2: 300 },
];

const volunteers = [
  { name: "Alice Green", impact: "2,200 kg food", badge: "Food Hero" },
  { name: "Bob White", impact: "1,850 kg food", badge: "Waste Warrior" },
  { name: "Charlie Brown", impact: "1,500 kg food", badge: "Community Champion" },
  { name: "Diana King", impact: "1,300 kg food", badge: "Rescue Star" },
];

const donors = [
  { name: "Dr. Elena Petrova", impact: "150kg Food" },
  { name: "Prof. David Chen", impact: "120kg Food" },
  { name: "Campus Eatery", impact: "100kg Food" },
  { name: "Green Thumb Club", impact: "80kg Food" },
  { name: "Bio Sciences Dept.", impact: "75kg Food" },
];

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-8">
          Our Impact: Dashboard Preview
        </h2>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Food Saved */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">
            Monthly Food Saved (kg)
          </h3>
          <p className="text-gray-500 mb-4">
            Progress over the last six months.
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={foodData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="food" fill="#F97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Volunteers */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Top Volunteers</h3>
          <p className="text-gray-500 mb-4">
            Meet our most active community heroes.
          </p>
          <ul className="space-y-3">
            {volunteers.map((vol, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <span className="font-medium">{index + 1}. {vol.name}</span>
                  <p className="text-sm text-gray-500">{vol.impact}</p>
                </div>
                <span className="bg-orange-100 text-orange-600 text-xs font-medium px-2 py-1 rounded-full">
                  {vol.badge}
                </span>
              </li>
            ))}
          </ul>
          <button className="text-orange-600 font-medium mt-4">
            View All Leaderboards →
          </button>
        </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CO2 Saved */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Monthly CO2 Saved</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={co2Data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="co2"
                stroke="#4CAF50"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Donors */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-lg font-semibold mb-4">Top Donors</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-600">
                <th className="pb-2">Name</th>
                <th className="pb-2">Impact</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2">{donor.name}</td>
                  <td className="py-2">{donor.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}
