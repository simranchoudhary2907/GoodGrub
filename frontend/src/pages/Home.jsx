import Navbar from '../components/Navbar'
import BackgroundSlideshow from '../components/Background'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Volunteer from '../components/Volunteer'
import Impact from '../components/Impact'
import Work from '../components/Work'
import Footer from '../components/Footer'

import { useEffect } from "react";

export default function Home() {
  
   useEffect(() => {
    fetch("http://127.0.0.1:5000/api/test")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <div>
      <Navbar />
      <BackgroundSlideshow />
      <Hero />
      <Mission />
      <Volunteer />
      <Impact />
      <Work />
      <Footer />
      {/* <h2 className="mt-4 text-xl font-bold">Welcome to Save My Food!</h2> */}
      {/* Add home page content here */}
    </div>
  )
}