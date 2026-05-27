import { Utensils, Users, Leaf } from "lucide-react";

export default function MissionImpact() {
  return (
    <section className="bg-gray-50 py-16">
      {/* Mission Section */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our Mission: Bridging the Gap Between Surplus and Need
        </h2>
        <p className="mt-6 text-gray-600 leading-relaxed">
          Millions go hungry while tons of perfectly good food go to waste.
          <span className="font-semibold"> FoodRescue Hub</span> is a passionate
          community dedicated to solving this paradox by facilitating the seamless
          redistribution of surplus food from businesses to those who need it most,
          building a sustainable future for all.
        </p>
      </div>

      {/* Impact Section */}
      <div className="mt-20 max-w-5xl mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
          Our Impact This Month
        </h3>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center transform-gpu transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl">
            <div className="mb-2 flex justify-center">
              <Utensils className="w-10 h-10 text-[#E6784F]" />
            </div>
            <p className="mt-4 text-2xl font-bold text-orange-600">2.5M+</p>
            <p className="mt-2 text-gray-700">Meals Shared</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center transform-gpu transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl">
            <div className="mb-2 flex justify-center">
              <Users className="w-10 h-10 text-[#E6784F]" />
            </div>
            <p className="mt-4 text-2xl font-bold text-orange-600">1.2K</p>
            <p className="mt-2 text-gray-700">Communities Served</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center transform-gpu transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl">
            <div className="mb-2 flex justify-center">
              <Leaf className="w-10 h-10 text-[#E6784F]" />
            </div>
            <p className="mt-4 text-2xl font-bold text-orange-600">150T</p>
            <p className="mt-2 text-gray-700">Food Waste Diverted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
