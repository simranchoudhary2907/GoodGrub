import { Bell, HandHeart, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "Step 1",
      icon: <Bell className="w-8 h-8 text-[#E6784F] mx-auto" />,
      title: "Notify Surplus Food",
      description:
        "Businesses, restaurants, and individuals list their excess food easily on our platform.",
    },
    {
      step: "Step 2",
      icon: <HandHeart className="w-8 h-8 text-[#E6784F] mx-auto" />,
      title: "Volunteers Collect",
      description:
        "Dedicated volunteers pick up food directly from donors, ensuring safe and timely transport.",
    },
    {
      step: "Step 3",
      icon: <CheckCircle className="w-8 h-8 text-[#E6784F] mx-auto" />,
      title: "Distribute to Needs",
      description:
        "Rescued food reaches local shelters, charities, and community centers, feeding those in need.",
    },
  ];

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          How Food Rescue Connect Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md text-center transform-gpu transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl"
            >
              <span className="inline-block bg-[#fff2ec] text-[#bb5733] text-sm font-semibold px-4 py-1 rounded-full mb-4">
                {item.step}
              </span>
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
