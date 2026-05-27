import { Utensils, Bell, HandHeart, BarChart3 } from "lucide-react";

export default function ImpactSection() {
  const features = [
    {
      icon: <Utensils className="w-10 h-10 text-[#E6784F] mx-auto" />,
      title: "Surplus Food Listing",
      description:
        "Businesses can easily list their excess food, specifying type, quantity, and pickup details, connecting directly with those who can use it.",
    },
    {
      icon: <Bell className="w-10 h-10 text-[#E6784F] mx-auto" />,
      title: "Real-time Notifications",
      description:
        "Get instant alerts when surplus food is available nearby or when a volunteer opportunity matches your preferences.",
    },
    {
      icon: <HandHeart className="w-10 h-10 text-[#E6784F] mx-auto" />,
      title: "Volunteer Opportunities",
      description:
        "Find and sign up for local opportunities to pick up food, distribute meals, or support community events.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#E6784F] mx-auto" />,
      title: "Impact Dashboard",
      description:
        "Track your personal and collective impact with detailed metrics on meals rescued, waste diverted, and carbon footprint reduced.",
    },
  ];

  return (
    <section id="impact"  className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          How We Make an Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md transform-gpu transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
