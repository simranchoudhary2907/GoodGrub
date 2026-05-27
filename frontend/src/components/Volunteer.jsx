import { UserPlus, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VolunteerHub() {
  const navigate = useNavigate();

  return (
    <section className="bg-orange-500 py-16 group">
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white inline-block transform-gpu transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
          Join Our Volunteer Hub
        </h2>

        {/* Description */}
        <p className="mt-4 text-white/90 transition-all duration-500 ease-out group-hover:translate-y-1">
          Be a part of the solution! Volunteer your time to help us rescue food
          and deliver it to those in need. Flexible schedules and real impact.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          {/* Primary Button */}
          <button
            onClick={() => navigate("/volunteer-signup")}
            className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-green-700 transform-gpu transition-transform duration-300 ease-out group-hover:scale-[1.03] cursor-pointer"
          >
            <UserPlus className="w-5 h-5" />
            Sign Up to Volunteer
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => navigate("/volunteer-faqs")}
            className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold py-3 px-6 rounded-md border border-green-600 shadow hover:bg-green-50 transform-gpu transition-transform duration-300 ease-out group-hover:scale-[1.03] cursor-pointer"
          >
            <HelpCircle className="w-5 h-5" />
            View Volunteer FAQs
          </button>
        </div>
      </div>
    </section>
  );
}
