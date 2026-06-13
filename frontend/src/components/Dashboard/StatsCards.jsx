import React from "react";

export default function StatsCards() {
  const stats = [
    { label: "Food Saved", value: "2,100 kg", color: "text-orange-600" },
    { label: "Meals Served", value: "5,240", color: "text-green-600" },
    { label: "CO₂ Saved", value: "300 kg", color: "text-blue-600" },
    { label: "Volunteers", value: "128", color: "text-purple-600" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
        >
          <p className="text-gray-500">{item.label}</p>
          <h2 className={`text-3xl font-bold mt-2 ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}