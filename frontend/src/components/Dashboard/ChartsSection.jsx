import React from "react";
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

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Food Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">
          Monthly Food Saved
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={foodData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="food" fill="#F97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* CO2 Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm">
        <h3 className="text-lg font-semibold mb-4">
          Monthly CO₂ Saved
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={co2Data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="co2" stroke="#22C55E" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}