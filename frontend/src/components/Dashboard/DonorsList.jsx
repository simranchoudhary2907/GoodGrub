
import React from "react";

const donors = [
  { name: "Dr. Elena Petrova", impact: 150, badge: "Gold Donor", icon: "🥇", level: "gold" },
  { name: "Prof. David Chen", impact: 120, badge: "Premium Supporter", icon: "💎", level: "silver" },
  { name: "Campus Eatery", impact: 100, badge: "Community Donor", icon: "🤝", level: "bronze" },
  { name: "Green Thumb Club", impact: 80, badge: "Community Donor", icon: "🤝", level: "bronze" },
];

const rankedDonors = [...donors]
  .sort((a, b) => b.impact - a.impact)
  .map((d, index) => {
    let medal = "";

    if (index === 0) medal = "🥇 Gold Donor";
    else if (index === 1) medal = "🥈 Silver Donor";
    else if (index === 2) medal = "🥉 Bronze Donor";
    else medal = "⭐ Supporter";

    return { ...d, medal };
  });

export default function DonorsList() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h3 className="text-lg font-semibold mb-4">🍱 Top Donors</h3>

      <div className="space-y-3">
        {rankedDonors.map((d, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50"
          >
            <div>
              <p className="font-medium">
                {i + 1}. {d.name}
              </p>
              <p className="text-sm text-gray-500">
                {d.impact} kg food donated
              </p>
            </div>

            {/* <span
              className={`
                text-xs px-3 py-1 rounded-full font-medium
                ${i === 0 ? "bg-yellow-100 text-yellow-700" : ""}
                ${i === 1 ? "bg-gray-200 text-gray-700" : ""}
                ${i === 2 ? "bg-orange-100 text-orange-700" : ""}
                ${i > 2 ? "bg-blue-100 text-blue-700" : ""}
              `}
            >
              {d.medal} */}
            {/* </span> */}

                <span
                className={`
                    text-xs px-3 py-1 rounded-full font-medium
                    ${d.level === "gold" ? "bg-yellow-100 text-yellow-700" : ""}
                    ${d.level === "silver" ? "bg-blue-100 text-blue-700" : ""}
                    ${d.level === "bronze" ? "bg-green-100 text-green-700" : ""}
                `}
                >
                {d.icon} {d.badge}
                </span>

          </div>
        ))}
      </div>
    </div>
  );
}