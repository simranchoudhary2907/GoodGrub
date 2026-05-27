import React from "react";
import { FaHandsHelping, FaTruck, FaUsers, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-800">
      {/* ===== Call to Action Section ===== */}
      <section className="bg-orange-500 text-white py-20 px-6 text-center group">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block transform-gpu transition-all duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-1">
          Ready to Make a Difference?
        </h2>
        <p className="max-w-2xl mx-auto mb-6 transition-all duration-500 ease-out group-hover:translate-y-1">
          Join our growing community of food sharers and receivers. Together, we can create a more sustainable and food-secure future.
        </p>
        <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transform-gpu transition-transform duration-300 ease-out group-hover:scale-[1.03]">
          Join Our Mission
        </button>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-white py-10 px-6 border-t">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <p className="text-gray-600 mb-4">
              Connecting surplus campus food with those in need, fostering sustainability and community.
            </p>
            <div className="flex space-x-4 text-gray-600 text-lg">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
              <FaInstagram />
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Platform</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Features</li>
              <li>How it Works</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Blog</li>
              <li>Case Studies</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Partnerships</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2025 GoodGrub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
