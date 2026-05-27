// Previous version (Food posts by city) kept for reference per request.
// import { useState } from "react";
// import API from "../api";
// import Navbar from '../components/Navbar'
// import { useLocation } from 'react-router-dom'
// export default function FoodList() { /* ...old logic... */ }

import { useState } from "react";
import { Package, ThermometerSnowflake, ShieldCheck, CheckCircle } from "lucide-react";

export default function DonateFood() {
  const [form, setForm] = useState({
    type: "",
    quantity: "",
    freshness: "",
    tagging: "",
    location: "",
    pickupTime: "",
    email: "",
    notes: "",
  });

  const recent = [
    { food: "Fresh Fruits", qty: "5 lbs", time: "Today, 2:00 PM", status: "Picked Up" },
    { food: "Prepared Meals", qty: "10 servings", time: "Tomorrow, 10:00 AM", status: "Pending" },
    { food: "Canned Goods", qty: "20 items", time: "Yesterday, 4:00 PM", status: "Picked Up" },
    { food: "Dairy Products", qty: "3 gallons", time: "Today, 5:00 PM", status: "Pending" },
    { food: "Baked Goods", qty: "1 dozen", time: "Today, 11:30 AM", status: "Picked Up" },
    { food: "Grains & Pasta", qty: "15 lbs", time: "Yesterday, 9:00 AM", status: "Picked Up" },
  ];

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate API submission
    alert("Donation submitted! Thank you for contributing.");
  };

  return (
    <section className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        {/* Left: Form + Recent */}
        <div className="space-y-6">
          {/* Donate Form */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6">
            <h2 className="text-lg font-semibold mb-2">Donate Food Items</h2>
            <p className="text-sm text-gray-500 mb-4">Fill out the form below to share your surplus food with the campus community.</p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Food Type</label>
                  <select name="type" value={form.type} onChange={onChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="">Select food type</option>
                    <option>Fresh Produce</option>
                    <option>Prepared Meals</option>
                    <option>Baked Goods</option>
                    <option>Dairy</option>
                    <option>Canned Goods</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Quantity</label>
                  <input name="quantity" value={form.quantity} onChange={onChange} placeholder="e.g., 5 lbs, 1 dozen, 10 servings" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Freshness Status</label>
                  <select name="freshness" value={form.freshness} onChange={onChange} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option value="">Select freshness status</option>
                    <option>Freshly Prepared</option>
                    <option>Refrigerated</option>
                    <option>Frozen</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Safety Duration Tagging</label>
                  <input name="tagging" value={form.tagging} onChange={onChange} placeholder="e.g., Use by 10/25, Best by 3 days" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Preferred Pickup Location</label>
                  <input name="location" value={form.location} onChange={onChange} placeholder="e.g., Student Union Building, Campus Dorm A Lobby" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Preferred Pickup Time</label>
                  <input name="pickupTime" value={form.pickupTime} onChange={onChange} placeholder="e.g., Today 5:30 PM" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Contact Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} placeholder="you@email.com" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Special Instructions (Optional)</label>
                  <textarea name="notes" value={form.notes} onChange={onChange} placeholder="e.g., Please use the side entrance; Food is in a cooler box" className="w-full rounded-lg border border-gray-300 px-3 py-2 min-h-[72px] focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>

              <div className="pt-2">
                <button type="submit" className="btn-primary w-full md:w-auto">Submit Donation</button>
              </div>
            </form>
          </div>

          {/* Recent Donations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6">
            <h3 className="text-base font-semibold mb-4">Recent Donations</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-gray-500 border-b">
                    <th className="text-left py-2">Food Type</th>
                    <th className="text-left py-2">Quantity</th>
                    <th className="text-left py-2">Pickup Time</th>
                    <th className="text-left py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((r, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="py-2">{r.food}</td>
                      <td className="py-2">{r.qty}</td>
                      <td className="py-2">{r.time}</td>
                      <td className="py-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${r.status === 'Picked Up' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Guidelines */}
        <aside className="space-y-4 lg:sticky lg:top-6 self-start">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold">Guidelines for Safe Donation</h4>
            </div>
            <p className="text-sm text-gray-500">Ensure food safety and effective redistribution.</p>

            <div className="mt-5 grid grid-cols-1 gap-4">
              {/* Card: Packaging & Storage */}
              <div className="rounded-xl border border-green-100 bg-green-50/40 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-4 h-4 text-green-700" />
                  <p className="font-medium text-green-800">Packaging & Storage</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />Use original, unopened packaging or clean, sealed containers.</li>
                  <li className="flex gap-2"><ThermometerSnowflake className="w-4 h-4 text-green-600 mt-0.5" />Keep perishables chilled or frozen during storage and transport.</li>
                </ul>
              </div>

              {/* Card: Quality & Safety */}
              <div className="rounded-xl border border-orange-100 bg-orange-50/50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-orange-700" />
                  <p className="font-medium text-orange-800">Quality & Safety</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />Only donate food that is safe to eat and not expired.</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />Clearly label prepared meals with ingredients and date cooked.</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />When in doubt, throw it out to protect recipients' health.</li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
