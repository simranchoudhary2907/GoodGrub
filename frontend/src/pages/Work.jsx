import { Bell, HandHeart, CheckCircle, Users, Clock, Shield } from "lucide-react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Work() {
  const steps = [
    {
      step: "Step 1",
      icon: <Bell className="w-8 h-8 text-orange-600 mx-auto" />,
      title: "Notify Surplus Food",
      description:
        "Businesses, restaurants, and individuals list their excess food easily on our platform.",
    },
    {
      step: "Step 2",
      icon: <HandHeart className="w-8 h-8 text-orange-600 mx-auto" />,
      title: "Volunteers Collect",
      description:
        "Dedicated volunteers pick up food directly from donors, ensuring safe and timely transport.",
    },
    {
      step: "Step 3",
      icon: <CheckCircle className="w-8 h-8 text-orange-600 mx-auto" />,
      title: "Distribute to Needs",
      description:
        "Rescued food reaches local shelters, charities, and community centers, feeding those in need.",
    },
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Community Driven",
      description: "Built by volunteers, for volunteers. Every action counts towards reducing food waste."
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      title: "Real-time Updates",
      description: "Instant notifications and live tracking ensure food reaches its destination quickly."
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-600" />,
      title: "Safe & Secure",
      description: "Verified users and secure transactions protect both donors and recipients."
    }
  ];

  return (
    <div>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-red-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Food Rescue Connect Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform connects food donors with volunteers and recipients through a simple, 
            efficient process that maximizes food rescue impact.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            The Process in Three Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
              >
                <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                  {item.step}
                </span>
                <div className="mb-6 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-lg font-semibold ml-3 text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Join thousands of volunteers and donors who are already helping reduce food waste 
            and feed communities in need.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
