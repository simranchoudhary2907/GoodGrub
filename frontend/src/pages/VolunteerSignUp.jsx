import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function VolunteerSignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    skills: [],
    availability: [],
    preferredAreas: [],
    emergencyContact: {
      name: '',
      relationship: '',
      phone: ''
    },
    experience: '',
    motivation: '',
    agreeToTerms: false
  });

  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const skillsOptions = [
    'Food Preparation', 'Food Safety', 'Logistics', 'Driving', 
    'Customer Service', 'Administration', 'Event Planning', 
    'Fundraising', 'Social Media', 'Translation', 'Medical/Health',
    'Teaching/Training', 'Other'
  ];

  const availabilityOptions = [
    'Weekdays (Morning)', 'Weekdays (Afternoon)', 'Weekdays (Evening)',
    'Weekends (Morning)', 'Weekends (Afternoon)', 'Weekends (Evening)',
    'Holidays', 'Emergency Response', 'Flexible'
  ];

  const preferredAreasOptions = [
    'Food Distribution', 'Kitchen/Cooking', 'Transportation', 
    'Event Support', 'Administrative', 'Fundraising', 
    'Community Outreach', 'Youth Programs', 'Senior Programs',
    'Any Area'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else if (type === 'checkbox') {
      if (name === 'agreeToTerms') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer sign up submitted:', formData);
    // In real app, this would submit to backend
    alert('Thank you for signing up as a volunteer! We will contact you soon.');
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {[1, 2, 3, 4].map((stepNumber) => (
          <div key={stepNumber} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              stepNumber <= step 
                ? 'bg-orange-600 text-white' 
                : 'bg-gray-200 text-gray-600'
            }`}>
              {stepNumber}
            </div>
            {stepNumber < 4 && (
              <div className={`w-16 h-1 mx-2 ${
                stepNumber < step ? 'bg-orange-600' : 'bg-gray-200'
              }`}></div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Step {step} of {totalSteps}
        </p>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date of Birth *
        </label>
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Address *
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City *
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State *
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ZIP Code *
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills & Availability</h3>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What skills do you have? (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillsOptions.map((skill) => (
            <label key={skill} className="flex items-center">
              <input
                type="checkbox"
                name="skills"
                value={skill}
                checked={formData.skills.includes(skill)}
                onChange={handleChange}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          When are you available to volunteer? (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {availabilityOptions.map((option) => (
            <label key={option} className="flex items-center">
              <input
                type="checkbox"
                name="availability"
                value={option}
                checked={formData.availability.includes(option)}
                onChange={handleChange}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Preferred volunteer areas (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {preferredAreasOptions.map((area) => (
            <label key={area} className="flex items-center">
              <input
                type="checkbox"
                name="preferredAreas"
                value={area}
                checked={formData.preferredAreas.includes(area)}
                onChange={handleChange}
                className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-700">{area}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Contact & Experience</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-medium text-gray-800 mb-4">Emergency Contact</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="emergencyContact.name"
              value={formData.emergencyContact.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relationship *
            </label>
            <input
              type="text"
              name="emergencyContact.relationship"
              value={formData.emergencyContact.relationship}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="emergencyContact.phone"
              value={formData.emergencyContact.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Previous volunteer experience (if any)
        </label>
        <textarea
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows={4}
          placeholder="Describe any previous volunteer experience..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Why do you want to volunteer with us? *
        </label>
        <textarea
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          required
          rows={4}
          placeholder="Tell us about your motivation to volunteer..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Review & Submit</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h4 className="text-lg font-medium text-gray-800 mb-4">Application Summary</h4>
        <div className="space-y-3 text-sm">
          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Location:</strong> {formData.city}, {formData.state}</p>
          <p><strong>Skills:</strong> {formData.skills.join(', ') || 'None selected'}</p>
          <p><strong>Availability:</strong> {formData.availability.join(', ') || 'None selected'}</p>
          <p><strong>Preferred Areas:</strong> {formData.preferredAreas.join(', ') || 'None selected'}</p>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h4 className="text-lg font-medium text-blue-800 mb-2">What happens next?</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• We'll review your application within 2-3 business days</li>
          <li>• You'll receive an email with next steps and orientation details</li>
          <li>• We'll schedule a brief phone interview to discuss opportunities</li>
          <li>• After approval, you'll be invited to our volunteer orientation</li>
        </ul>
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          name="agreeToTerms"
          checked={formData.agreeToTerms}
          onChange={handleChange}
          required
          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded mt-1"
        />
        <label className="ml-2 text-sm text-gray-700">
          I agree to the volunteer terms and conditions, and I understand that this is a commitment to serve our community. *
        </label>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (step) {
      case 1: return renderStep1();
      case 2: return renderStep2();
      case 3: return renderStep3();
      case 4: return renderStep4();
      default: return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Volunteer Sign Up</h1>
          <p className="text-lg text-gray-600">
            Join our community of volunteers and help make a difference in people's lives
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          {renderStepIndicator()}
          
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Previous
                </button>
              )}
              
              <div className="ml-auto">
                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.agreeToTerms}
                    className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
