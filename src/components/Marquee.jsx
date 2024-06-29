import { motion } from 'framer-motion'
import React from 'react'


export default function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='bg-zinc-900'>
      <div className='w-full pb-20 pt-[10vw] bg-[#004D43] rounded-[1.7vw]'>
        <div className='text border-t-2 border-b-2 border-zinc-400 flex  whitespace-nowrap -mb-16  overflow-hidden '>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear" , repeat: Infinity, duration: 10}} 
            className='text-[20vw] leading-none font-["GOST_Common"] font-bold tracking-tighter pr-4'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear" , repeat: Infinity, duration:10 }} 
            className='text-[20vw] leading-none font-["GOST_Common"] font-bold tracking-tighter pr-4'>WE ARE OCHI</motion.h1>
            
        </div>
      </div>
    </div>
    
  )
}
