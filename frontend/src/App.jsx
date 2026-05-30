import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
// import VerifyResetOtp from "./pages/VerifyResetOtp";
import ForgotPasswordOtp from "./pages/ForgotPasswordOtp";
import Home from './pages/Home'
import ActiveDonation from './pages/ActiveDonation'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Work from './pages/Work'
import ProtectedRoute from './components/ProtectedRoute'
import AddLocation from './pages/AddLocation'
import FoodPost from './pages/FoodPost'
import Profile from './pages/Profile'
import ClaimFood from './pages/ClaimFood'
import DonateFood from './pages/DonateFood'
import NGOs from './pages/NGOs'
import NGOProfile from './pages/NGOProfile'
import CampusReminder from './pages/CampusReminder'
import Beneficiary from './pages/Beneficiary'
import BeneficiaryDetail from './pages/BeneficiaryDetail'
import ProvideSupport from './pages/ProvideSupport'
import ActivityLog from './pages/ActivityLog'
import ContactUs from './pages/ContactUs'
import VolunteerSignUp from './pages/VolunteerSignUp'
import VolunteerFAQs from './pages/VolunteerFAQs'


// import BackendTest from './pages/BackendTest'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/verify-reset-otp" element={<VerifyResetOtp />} /> */}
        <Route path="/verify-reset-otp" element={<ForgotPasswordOtp />} />
        <Route path="/active-donation" element={
          <ProtectedRoute>
            <ActiveDonation />
          </ProtectedRoute>
        } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        } />
        <Route path="/work" element={
          <ProtectedRoute>
            <Work />
          </ProtectedRoute>
        } />
        <Route path="/add-location" element={
          <ProtectedRoute>
            <AddLocation />
          </ProtectedRoute>
        } />
        <Route path="/food-post" element={
          <ProtectedRoute>
            <FoodPost />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="/claim-food" element={<ClaimFood />} />
        <Route path="/donate-food" element={<DonateFood />} />
        <Route path="/ngos" element={<NGOs />} />
        <Route path="/ngo-profile" element={<NGOProfile />} />
        <Route path="/campus-reminder" element={<CampusReminder />} />
        <Route path="/beneficiary" element={<Beneficiary />} />
        <Route path="/beneficiary/:id" element={<BeneficiaryDetail />} />
        <Route path="/provide-support" element={<ProvideSupport />} />
        <Route path="/activity-log" element={<ActivityLog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/volunteer-signup" element={<VolunteerSignUp />} />
        <Route path="/volunteer-faqs" element={<VolunteerFAQs />} />
        <Route path="/test" element={<div className="p-8 text-center"><h1 className="text-2xl">Test Page Works!</h1></div>} />
       
        {/* <Route path="/test" element={<BackendTest />} /> */}
      
      </Routes>
    </>
  )
}

export default App