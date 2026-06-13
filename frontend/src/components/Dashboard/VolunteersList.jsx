// import React from "react";

// const volunteers = [
//   { name: "Alice Green", impact: "2,200 kg food", badge: "Food Hero" },
//   { name: "Bob White", impact: "1,850 kg food", badge: "Waste Warrior" },
//   { name: "Charlie Brown", impact: "1,500 kg food", badge: "Champion" },
//   { name: "Diana King", impact: "1,300 kg food", badge: "Rescue Star" },
// ];

// export default function VolunteersList() {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-sm">
//       <h3 className="text-lg font-semibold mb-4">Top Volunteers</h3>

//       <div className="space-y-3">
//         {volunteers.map((v, i) => (
//           <div
//             key={i}
//             className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50"
//           >
//             <div>
//               <p className="font-medium">{i + 1}. {v.name}</p>
//               <p className="text-sm text-gray-500">{v.impact}</p>
//             </div>

//             <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
//               {v.badge}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React from "react";

// const volunteers = [
//   {
//     name: "Alice Green",
//     impact: "2,200 kg food",
//     badge: "Food Hero",
//     level: "gold",
//   },
//   {
//     name: "Bob White",
//     impact: "1,850 kg food",
//     badge: "Waste Warrior",
//     level: "silver",
//   },
//   {
//     name: "Charlie Brown",
//     impact: "1,500 kg food",
//     badge: "Community Champion",
//     level: "bronze",
//   },
//   {
//     name: "Diana King",
//     impact: "1,300 kg food",
//     badge: "Rescue Star",
//     level: "gold",
//   },
// ];

const volunteers = [
  { name: "Alice Green", impact: 2200, badge: "Food Hero", icon: "🏆", level: "gold" },
  { name: "Bob White", impact: 1850, badge: "Waste Warrior", icon: "♻️", level: "silver" },
  { name: "Charlie Brown", impact: 1500, badge: "Community Champion", icon: "🌱", level: "bronze" },
  { name: "Diana King", impact: 1300, badge: "Community Champion", icon: "🌱", level: "bronze" },
];

// helper for badge colors
// const badgeStyle = (level) => {
//   switch (level) {
//     case "gold":
//       return "bg-yellow-100 text-yellow-700 border-yellow-300";
//     case "silver":
//       return "bg-gray-200 text-gray-700 border-gray-300";
//     case "bronze":
//       return "bg-orange-100 text-orange-700 border-orange-300";
//     default:
//       return "bg-orange-100 text-orange-600";
//   }
// };

const rankedVolunteers = [...volunteers]
  .sort((a, b) => b.impact - a.impact)
  .map((v, index) => {
    let medal = "";

    if (index === 0) medal = "🥇 Gold";
    else if (index === 1) medal = "🥈 Silver";
    else if (index === 2) medal = "🥉 Bronze";
    else medal = "⭐ Participant";

    return { ...v, medal };
  });

// export default function VolunteersList() {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-sm">
      
//       <h3 className="text-lg font-semibold mb-4">
//         🧑‍🤝‍🧑 Top Volunteers
//       </h3>

//       <div className="space-y-3">
//         {volunteers.map((v, i) => (
//           <div
//             key={i}
//             className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition"
//           >
            
//             {/* LEFT SIDE */}
//             <div>
//               <p className="font-medium">
//                 {i + 1}. {v.name}
//               </p>
//               <p className="text-sm text-gray-500">
//                 {v.impact}
//               </p>
//             </div>

//             {/* BADGE */}
//             <span
//               className={`text-xs px-3 py-1 rounded-full border font-medium ${badgeStyle(
//                 v.level
//               )}`}
//             >
//               🏆 {v.badge}
//             </span>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


export default function VolunteersList() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">🧑‍🤝‍🧑 Top Volunteers</h3>

      <div className="space-y-3">
        {rankedVolunteers.map((v, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50"
          >
            <div>
              <p className="font-medium">
                {i + 1}. {v.name}
              </p>
              <p className="text-sm text-gray-500">
                {v.impact} kg food saved
              </p>
            </div>

            <span
                className={`
                    text-xs px-3 py-1 rounded-full font-medium
                    ${v.level === "gold" ? "bg-yellow-100 text-yellow-700" : ""}
                    ${v.level === "silver" ? "bg-gray-200 text-gray-700" : ""}
                    ${v.level === "bronze" ? "bg-orange-100 text-orange-700" : ""}
                `}
                >
                {v.icon} {v.badge}
                </span>
          </div>
        ))}
      </div>
    </div>
  );
}