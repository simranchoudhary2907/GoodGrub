import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function VolunteerFAQs() {
  const navigate = useNavigate();
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      id: 'general',
      title: 'General Questions',
      icon: '📋',
      questions: [
        {
          id: 'general-1',
          question: 'How do I become a volunteer?',
          answer: 'To become a volunteer, simply fill out our volunteer application form. You can find it by clicking "Volunteer Sign Up" on our website. The process includes filling out a form, attending an orientation session, and completing any necessary training for your specific role.'
        },
        {
          id: 'general-2',
          question: 'What is the minimum age requirement to volunteer?',
          answer: 'You must be at least 16 years old to volunteer independently. Volunteers aged 14-15 can participate with parental consent and supervision. Some roles may have additional age requirements based on the nature of the work.'
        },
        {
          id: 'general-3',
          question: 'Do I need any special skills or experience?',
          answer: 'No special skills are required for most volunteer positions. We provide training for all roles. However, if you have specific skills like cooking, driving, or administrative experience, we can match you with roles that utilize those skills.'
        },
        {
          id: 'general-4',
          question: 'How much time do I need to commit?',
          answer: 'We offer flexible volunteering opportunities. You can volunteer for as little as 2 hours per month or as much as several days per week. We work with your schedule to find the best fit for both you and our organization.'
        }
      ]
    },
    {
      id: 'roles',
      title: 'Volunteer Roles & Responsibilities',
      icon: '👥',
      questions: [
        {
          id: 'roles-1',
          question: 'What types of volunteer roles are available?',
          answer: 'We offer various roles including food preparation and cooking, food distribution, transportation and delivery, administrative support, event coordination, fundraising, community outreach, and special project assistance. We can also create custom roles based on your interests and skills.'
        },
        {
          id: 'roles-2',
          question: 'Will I receive training for my role?',
          answer: 'Yes, all volunteers receive comprehensive training for their specific role. This includes safety protocols, food handling procedures (if applicable), and organizational policies. Training is provided both online and in-person.'
        },
        {
          id: 'roles-3',
          question: 'Can I change my volunteer role if it\'s not a good fit?',
          answer: 'Absolutely! We want you to have a positive and fulfilling volunteer experience. If your current role isn\'t working out, we\'re happy to discuss other opportunities that might be a better match for your interests and skills.'
        },
        {
          id: 'roles-4',
          question: 'Do I need to bring any equipment or supplies?',
          answer: 'We provide all necessary equipment and supplies for volunteer activities. However, if you have specific items you\'d like to use (like comfortable work shoes or gloves), you\'re welcome to bring them. We\'ll let you know what\'s needed for your specific role.'
        }
      ]
    },
    {
      id: 'scheduling',
      title: 'Scheduling & Time Commitment',
      icon: '📅',
      questions: [
        {
          id: 'scheduling-1',
          question: 'How do I schedule my volunteer shifts?',
          answer: 'Once you\'re approved as a volunteer, you\'ll receive access to our scheduling system. You can view available shifts and sign up for times that work with your schedule. We also send regular updates about upcoming opportunities.'
        },
        {
          id: 'scheduling-2',
          question: 'What if I need to cancel or reschedule?',
          answer: 'We understand that life happens! Please notify us at least 24 hours in advance if you need to cancel or reschedule. For emergencies, contact us as soon as possible. We\'re flexible and will work with you to find alternative arrangements.'
        },
        {
          id: 'scheduling-3',
          question: 'Are there opportunities for weekend and evening volunteering?',
          answer: 'Yes! We offer volunteer opportunities throughout the week, including weekends and evenings. Our food distribution and special events often take place during these times to accommodate the schedules of those we serve.'
        },
        {
          id: 'scheduling-4',
          question: 'Can I volunteer on holidays?',
          answer: 'Yes, we have special volunteer opportunities during holidays when the need is often greatest. These shifts are popular, so we recommend signing up early. We also have regular opportunities throughout the year.'
        }
      ]
    },
    {
      id: 'benefits',
      title: 'Benefits & Recognition',
      icon: '🏆',
      questions: [
        {
          id: 'benefits-1',
          question: 'What benefits do volunteers receive?',
          answer: 'Volunteers receive training, experience in their chosen field, networking opportunities, and the satisfaction of helping their community. We also provide letters of recommendation, volunteer certificates, and recognition events. Some roles may offer additional benefits like meals during shifts.'
        },
        {
          id: 'benefits-2',
          question: 'Do you provide volunteer certificates or letters of recommendation?',
          answer: 'Yes! We\'re happy to provide volunteer certificates and letters of recommendation for volunteers who have completed a minimum number of hours. These can be useful for school requirements, job applications, or other purposes.'
        },
        {
          id: 'benefits-3',
          question: 'How do you recognize volunteers?',
          answer: 'We recognize volunteers through our annual appreciation event, monthly newsletters featuring volunteer spotlights, social media recognition, and milestone celebrations. We believe in celebrating the amazing work our volunteers do!'
        },
        {
          id: 'benefits-4',
          question: 'Can volunteering lead to paid employment opportunities?',
          answer: 'While volunteering doesn\'t guarantee paid employment, it can provide valuable experience and networking opportunities. Many of our staff members started as volunteers, and we often consider volunteers first when paid positions become available.'
        }
      ]
    },
    {
      id: 'safety',
      title: 'Safety & Policies',
      icon: '🛡️',
      questions: [
        {
          id: 'safety-1',
          question: 'What safety measures are in place for volunteers?',
          answer: 'We prioritize volunteer safety with comprehensive training, safety equipment, clear protocols, and supervision. All volunteers receive safety orientation, and we maintain strict health and safety standards, especially for food handling roles.'
        },
        {
          id: 'safety-2',
          question: 'Do I need to undergo a background check?',
          answer: 'Background checks are required for certain roles, particularly those involving direct contact with vulnerable populations or handling sensitive information. We\'ll inform you during the application process if this applies to your role.'
        },
        {
          id: 'safety-3',
          question: 'What should I do if I\'m injured while volunteering?',
          answer: 'If you\'re injured while volunteering, immediately notify your supervisor or staff member. We have incident reporting procedures and will provide appropriate medical attention. Your safety is our top priority.'
        },
        {
          id: 'safety-4',
          question: 'Are there any health requirements for volunteering?',
          answer: 'For food handling roles, we require volunteers to be in good health and follow food safety protocols. We may ask about recent illnesses or health conditions that could affect food safety. Other roles have minimal health requirements.'
        }
      ]
    },
    {
      id: 'contact',
      title: 'Contact & Support',
      icon: '📞',
      questions: [
        {
          id: 'contact-1',
          question: 'Who should I contact if I have questions about volunteering?',
          answer: 'You can contact our volunteer coordinator at volunteer@goodgrub.org or call us at (555) 123-4567. We\'re here to help with any questions about volunteering, scheduling, or your volunteer experience.'
        },
        {
          id: 'contact-2',
          question: 'What if I have a complaint or concern?',
          answer: 'We take all concerns seriously. You can speak directly with your supervisor, contact the volunteer coordinator, or use our anonymous feedback form. We\'re committed to ensuring a positive volunteer experience for everyone.'
        },
        {
          id: 'contact-3',
          question: 'How can I provide feedback about my volunteer experience?',
          answer: 'We welcome feedback! You can provide feedback through our online form, speak with staff directly, or participate in our volunteer surveys. Your input helps us improve our programs and volunteer experience.'
        },
        {
          id: 'contact-4',
          question: 'Can I volunteer with a group or organization?',
          answer: 'Yes! We welcome group volunteering opportunities. Whether it\'s a corporate team, school group, or community organization, we can accommodate groups of various sizes. Contact us to discuss group volunteering options.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Volunteer FAQs</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about volunteering with GoodGrub
          </p>
        </div>

        <div className="space-y-8">
          {faqCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-orange-50 px-6 py-4 border-b border-orange-100">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <span className="mr-3">{category.icon}</span>
                  {category.title}
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {category.questions.map((item) => (
                  <div key={item.id} className="px-6 py-4">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left flex justify-between items-start focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg p-2 -m-2"
                    >
                      <h3 className="text-lg font-medium text-gray-800 pr-4">
                        {item.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 flex-shrink-0 mt-1 transform transition-transform ${
                          openItems[item.id] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    
                    {openItems[item.id] && (
                      <div className="mt-4 pl-2">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? We're here to help!
            </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button
                 onClick={() => navigate("/contact")}
                 className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
               >
                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 Contact Us
               </button>
               <button
                 onClick={() => navigate("/volunteer-signup")}
                 className="inline-flex items-center px-6 py-3 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
               >
                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
                 Sign Up to Volunteer
               </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
