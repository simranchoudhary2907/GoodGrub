// OLD simple claim form kept for reference
// import { useState } from "react";
// import API from "../api";
// export default function ClaimFood() {
//   const [postId, setPostId] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [msg, setMsg] = useState("");
//   const handleClaim = async (e) => { /* ...existing logic... */ };
//   return (/* ...existing JSX... */);
// }

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

const MOCK_LISTINGS = [
  { id: 1, title: "Organic Fruit Basket", qty: "5 kg", safeHours: 4, location: "Campus Cafeteria", available: "Today 6 PM", image: "/src/assets/image/1.jpg" },
  { id: 2, title: "Assorted Baked Goods", qty: "20 pieces", safeHours: 3, location: "Local Bakery", available: "Today 5 PM", image: "/src/assets/image/2.png" },
  { id: 3, title: "Ready-to-Eat Meals", qty: "15 portions", safeHours: 6, location: "Community Kitchen", available: "Today 6 PM", image: "/src/assets/image/3.jpg" },
  { id: 4, title: "Garden Fresh Vegetables", qty: "10 kg", safeHours: 8, location: "Farmers Market", available: "Today 7 PM", image: "/src/assets/image/1.jpg" },
  { id: 5, title: "Dairy Products Pack", qty: "8 items", safeHours: 2, location: "Donation Center", available: "Today 4 PM", image: "/src/assets/image/2.png" },
  { id: 6, title: "Assorted Canned Goods", qty: "25 units", safeHours: 24, location: "Local Food Bank", available: "Tomorrow 10 AM", image: "/src/assets/image/3.jpg" },
];

export default function ClaimFood() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MOCK_LISTINGS;
    return MOCK_LISTINGS.filter((l) =>
      [l.title, l.location, l.qty].some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Available Food Listings Near You</h1>

        {/* Search + filters */}
        <div className="flex items-center gap-3 max-w-2xl mx-auto mb-8">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Search food by name, type, or location..."
            />
          </div>
          <button className="px-4 py-2 rounded-lg border border-gray-200 bg-white shadow-sm text-sm transition-colors duration-200 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300">Filter</button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-transparent transform-gpu transition-transform duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:border-green-200 group"
            >
              <img
                src={item.image}
                alt="food"
                className="h-40 w-full object-cover transform-gpu transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-gray-900 leading-tight">{item.title}</h3>
                  <span className="whitespace-nowrap text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">Safe to Eat for {item.safeHours} hours</span>
                </div>
                <p className="text-xs text-green-600 font-medium mt-1">{item.qty}</p>
                <div className="mt-3 text-sm text-gray-600">
                  <div>📍 {item.location}</div>
                  <div>⏰ Available Until: {item.available}</div>
                </div>
                <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-md transition-colors">Claim Now</button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-gray-200 bg-white shadow-sm text-sm transition-colors duration-200 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300">
            View All Listings <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}