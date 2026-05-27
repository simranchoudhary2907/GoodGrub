import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function BeneficiaryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  const [newNote, setNewNote] = useState('');

  const beneficiary = {
    id: id,
    name: 'Aisha Khan',
    organization: 'Sunrise Community Center',
    tagline: 'Providing vital resources and support to underserved families and individuals in the local area.',
    email: 'info@sunrisecommunity.org',
    phone: '+1 (999) 123 4567',
    address: '123 Community Way, Metropolis, CA 90210',
    status: 'Urgent Food Need',
    recentActivities: [
      {
        date: '2023-07-28',
        type: 'Support received',
        description: 'Received 150 bags of groceries from Local Food Bank.',
        status: 'Completed'
      },
      {
        date: '2023-07-25',
        type: 'Engagement',
        description: 'Hosted free health screening event for 140 participants.',
        status: 'Completed'
      },
      {
        date: '2023-07-20',
        type: 'Milestone',
        description: 'Launched new adult literacy program with 20 initial students.',
        status: 'Completed'
      },
      {
        date: '2023-07-15',
        type: 'Support received',
        description: 'Funding secured for new computer lab equipment.',
        status: 'Completed'
      },
      {
        date: '2023-07-10',
        type: 'Engagement',
        description: 'Community outreach for upcoming job fair.',
        status: 'In Progress'
      }
    ],
    coordinationNotes: [
      {
        id: 1,
        author: 'Sarah Chen',
        date: '2023-07-29',
        content: 'Follow-up with potential corporate sponsors for the annual fundraiser. Send updated proposal. Awaiting response by end of week.'
      },
      {
        id: 2,
        author: 'David Lee',
        date: '2023-07-27',
        content: 'Meeting scheduled with facility management next Tuesday to discuss expansion plans for the education wing. Need to finalize budget projections.'
      },
      {
        id: 3,
        author: 'Maria Rodriguez',
        date: '2023-07-26',
        content: 'Volunteers enrolled for weekend food distribution drive. Minimum 15 volunteers required. Shared sign-up sheet via email to usual contacts.'
      }
    ]
  };

  const filteredActivities = activeTab === 'all' 
    ? beneficiary.recentActivities 
    : beneficiary.recentActivities.filter(activity => activity.status === 'Completed');

  const handleAddNote = () => {
    if (newNote.trim()) {
      console.log('Adding note:', newNote);
      setNewNote('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="flex items-center mb-4 lg:mb-0">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{beneficiary.organization}</h1>
                <p className="text-gray-600 mt-1">{beneficiary.tagline}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Beneficiary
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Provide Support
              </button>
            </div>
          </div>
        </div>

        {/* Information Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${beneficiary.email}`} className="text-blue-600 hover:text-blue-800">
                  {beneficiary.email}
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-700">{beneficiary.phone}</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Location</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">{beneficiary.address}</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 h-32 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">Map View</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support Opportunities */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Support Opportunities</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-800">Financial Aid</h4>
                  <p className="text-sm text-gray-600">Funds for operational costs and program expansion.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-red-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-800">Volunteer Support</h4>
                  <p className="text-sm text-gray-600">Volunteers for event coordination and tutoring.</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <div>
                  <h4 className="font-medium text-gray-800">Material Resources</h4>
                  <p className="text-sm text-gray-600">Donations of non-perishable food and school supplies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
          
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'all' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All Activity
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeTab === 'completed' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Completed Support
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredActivities.map((activity, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{activity.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{activity.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{activity.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        activity.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {activity.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coordination Notes Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Coordination Notes</h3>
          <p className="text-sm text-gray-600 mb-4">Internal notes for team coordination and beneficiary management.</p>
          
          <div className="space-y-4 mb-6">
            {beneficiary.coordinationNotes.map((note) => (
              <div key={note.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-800">{note.author}</span>
                    <span className="text-sm text-gray-500 ml-2">({note.date})</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-red-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-gray-700">{note.content}</p>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <textarea
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Type your note here..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="3"
            />
            <button
              onClick={handleAddNote}
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Note
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
