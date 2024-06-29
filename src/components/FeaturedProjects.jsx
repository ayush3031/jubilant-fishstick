import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react'
import { FaCircle } from "react-icons/fa";
import { Power4 } from 'gsap';

export default function FeaturedProjects() {
   const cards = [useAnimation(),useAnimation(),useAnimation(),useAnimation()];

   const handleHover = (index)=>{
    cards[index].start({y:"0"})
   }

   const handleHoverEnd = (index)=>{
    cards[index].start({y:"100%"})
   }
  return (
    <div data-scroll data-scroll-section className='relative w-full py-20 bg-zinc-700'>
      <div className='w-full px-20 border-b-[1px] pb-20 border-zinc-600'>
        <h1 className='text-6xl font-["Neue_Montreal_Regular"] tracking-tight font-light'>Featured Projects</h1>
      </div>
      <div className='cards w-full flex gap-10 mt-10 px-10'>

          <div className='card w-1/2'>

            <div className='text flex gap-3 items-center font-[200]'>
            <h1> <FaCircle /></h1>
            <h1>FYDE</h1>     
            </div>
            <motion.div 
            onHoverStart = {()=> handleHover(0)}
            onHoverEnd = {()=> handleHoverEnd(0)}

              className='card container relative w-full h-[70vh] '>
              
              <h1 className='absolute flex items-center right-0 translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter text-[#CDEA68] overflow-hidden z-[3]'>
              {"FYDE".split('').map((item,index)=>
              <motion.span
               initial={{y:"100%"}} 
               animate={cards[0]} 
               transition={{ease:[0.22,1,0.36,1], delay: index*0.03}}
               className='inline-block'>{item}</motion.span>
               )}
              </h1>
              

              <div className='cardr w-full h-[70vh] rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"></img>
              </div>
            </motion.div>
            <div className='fields flex gap-3 mt-4 px-6'>
              {["AUDIT","COPYRIGHT","SALES DECK","SLIDES DESIGN"].map((item,index)=><div className='border-[.5px] border-zinc-100 p-2 rounded-[17px] bg-zinc-500 text-lg font-light tracking-light leading-none'>{item}</div>)}
            </div>
          </div>

          <div className='card w-1/2'>
            <div className='text flex gap-3 items-center font-[200]'>
            <h1><FaCircle /></h1>
             <h1> VISE</h1> 
            </div>


            <motion.div 
            onHoverStart = {()=> handleHover(1)}
            onHoverEnd = {()=> handleHoverEnd(1)}
              className='card container relative w-full h-[70vh] '>
              
              <h1 className='absolute flex items-center left-0 -translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter text-[#CDEA68] overflow-hidden z-[3]'>
              {"VISE".split('').map((item,index)=>
              <motion.span
               initial={{y:"100%"}} 
               animate={cards[1]} 
               transition={{ease:[0.22,1,0.36,1], delay: index*0.03}}
               className='inline-block'>{item}</motion.span>
               )}
              </h1>

              <div className='cardr w-full h-[70vh] rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"></img>
              </div>
            </motion.div>
            <div className='fields flex gap-3 mt-4 px-6'>
              {["AGENCY","COMPANY PRESENTATION"].map((item,index)=><div className='border-[1px] border-zinc-100 p-2 rounded-[17px] bg-zinc-500 text-lg font-light tracking-light leading-none'>{item}</div>)}
            </div>
          </div>


        </div>


        <div className='cards w-full flex gap-10 mt-10 px-10'>

          <div className='card w-1/2'>

            <div className='text flex gap-3 items-center font-[200]'>
            <h1 > <FaCircle /></h1>
            <h1>TRAWA</h1>     
            </div>
            <motion.div 
            onHoverStart = {()=> handleHover(2)}
            onHoverEnd = {()=> handleHoverEnd(2)}

              className='card container relative w-full h-[70vh] '>
              
              <h1 className='absolute flex items-center right-0 translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter text-[#CDEA68] overflow-hidden z-[3]'>
              {"TRAWA".split('').map((item,index)=>
              <motion.span
               initial={{y:"100%"}} 
               animate={cards[2]} 
               transition={{ease:[0.22,1,0.36,1], delay: index*0.03}}
               className='inline-block'>{item}</motion.span>
               )}
              </h1>

              <div className='cardr w-full h-[70vh] rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"></img>
              </div>
            </motion.div>
            <div className='fields flex gap-3 mt-4 px-6'>
              {["BRAND IDENTITY","DESIGN RESEARCH","INVESTOR DECK"].map((item,index)=><div className='border-[.5px] border-zinc-100 p-2 rounded-[17px] bg-zinc-500 text-lg font-light tracking-light leading-none'>{item}</div>)}
            </div>
          </div>

          <div className='card w-1/2'>
            <div className='text flex gap-3 items-center font-[200]'>
            <h1><FaCircle /></h1>
             <h1> PREMIUM BLEND</h1> 
            </div>
            <motion.div 
            onHoverStart = {()=> handleHover(3)}
            onHoverEnd = {()=> handleHoverEnd(3)}

              className='card container relative w-full h-[70vh] '>
              
              <h1 className='absolute flex items-center left-0 -translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter text-[#CDEA68] overflow-hidden z-[3]'>
              {"PREMIUM BLEND".split('').map((item,index)=>
              <motion.span
               initial={{y:"100%"}} 
               animate={cards[3]} 
               transition={{ease:[0.22,1,0.36,1], delay: index*0.03}}
               className='inline-block'>{item}</motion.span>
               )}
              </h1>
              <div className='cardr w-full h-[70vh] rounded-xl overflow-hidden'>
                <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"></img>
              </div>
            </motion.div>
            <div className='fields flex gap-3 mt-4 px-6'>
              {["BRANDED TEMPLATE"].map((item,index)=><div className='border-[1px] border-zinc-100 p-2 rounded-[17px] bg-zinc-500 text-lg font-light tracking-light leading-none'>{item}</div>)}
            </div>
          </div>


        </div>
    </div>
  )
}
