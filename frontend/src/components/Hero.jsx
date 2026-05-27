// Heart logo removed per request
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-white/25 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 to-amber-100/10"></div>
      
      {/* Background Image Placeholder - In a real app, you'd use an actual image */}
      {/* Remove the solid background placeholder so the slideshow is visible */}
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Main Headline */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="block text-black">Feed People.</span>
              <span className="block bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                Fight Waste.
              </span>
            </h1>
            <div className="mt-4 h-1 w-28 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full"></div>
          </div>
          
          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Turning extra meals into hope and smiles, instantly connecting kitchens with those in need.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => navigate('/claim-food')} className="btn-primary text-lg px-8 py-4">
              Find Food
            </button>
            <button onClick={() => navigate('/donate-food')} className="btn-secondary text-lg px-8 py-4">
              Donate Food 
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-transparent rounded-full blur-2xl"></div>
    </section>
  )
}

export default Hero
