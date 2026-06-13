import React from "react";
import { useNavigate } from "react-router-dom";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    { name: "NGOs", color: "bg-orange-500", route: "/ngos" },
    { name: "Beneficiaries", color: "bg-green-500", route: "/beneficiary" },
    { name: "Events", color: "bg-blue-500", route: "/campus-reminder" },
    { name: "Support", color: "bg-purple-500", route: "/provide-support" },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((a, i) => (
          <button
            key={i}
            onClick={() => navigate(a.route)}
            className={`${a.color} text-white py-3 rounded-xl hover:scale-105 transition`}
          >
            {a.name}
          </button>
        ))}
      </div>
    </div>
  );
}