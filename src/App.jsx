import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Eyes from './components/Eyes'
import FeaturedProjects from './components/FeaturedProjects'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

export default function App() {

  console.log(import.meta.env.VITE_HTML_PARSER);
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-screen  text-white'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <FeaturedProjects/>
      <Cards/>
      <Footer/>
    </div>
  )
}
