import Navbar from '../components/Navbar'

export default function CampusReminder() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Campus Events & Reminders
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Informational Cards */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Upcoming Events Card */}
            <div className="bg-orange-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Upcoming Events
              </h3>
              <p className="text-gray-600 mb-4">
                Stay updated on campus food-related events and opportunities to contribute.
              </p>
              <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium">
                View Full Calendar
              </button>
            </div>

            {/* Post-Event Surplus Card */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Post-Event Surplus?
              </h3>
              <p className="text-gray-600 mb-4">
                If your event has leftover food, help us redistribute it. It's quick and impactful!
              </p>
              <button className="w-full bg-white text-gray-700 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium">
                List Surplus Now
              </button>
            </div>
          </div>

          {/* Right Column - Event Cards */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Campus Community Garden Harvest */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Campus Community Garden Harvest"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Campus Community Garden Harvest
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>June 15, 2024 at 10:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>University Community Garden</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join us for our monthly harvest event! We'll be collecting fresh produce and learning about sustainable gardening practices.
                  </p>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Sustainable Cooking Workshop */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Sustainable Cooking Workshop"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Sustainable Cooking Workshop
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>June 22, 2024 at 3:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Culinary Arts Building, Room 101</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Learn how to transform surplus ingredients into delicious meals while reducing food waste in your kitchen.
                  </p>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Food Waste Awareness Fair */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Food Waste Awareness Fair"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    Food Waste Awareness Fair
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>July 5, 2024 at 11:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Central Campus Green</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Explore interactive exhibits, listen to expert speakers, and discover practical ways to reduce food waste in your daily life.
                  </p>
                  <a href="#" className="text-green-600 hover:text-green-700 font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
