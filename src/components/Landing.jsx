import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export default function Landing() {
    
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-60 px-20 '>
            {["WE CREATE","EYE-OPENING","PRESENTATIONS"].map((item,index)=>{
                return <div className="masker mr-[1vw]">
                <div className='w-fit flex items-end '>
                    {index === 1 && (
                    <motion.div 
                    initial={{width: 0}} 
                    animate={{width: "7.5vw"}} 
                    transition={{ease: [0.76,0,0.24,1],
                    duration: 1}}
                    className='w-[7.5vw] h-[3.8vw] mr-[1vw]  relative bg-cover'>
                        <img src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'></img>
                    </motion.div>)}
                    <h1 className="-mb-[1vw] text-[6vw] font-['GOST_Common'] tracking-tighter leading-[5.7vw] font-semibold"> {item}</h1>
                </div>
                </div>  
            })}
        </div>
        <div className='border-t-[1px] border-zinc-700 mt-32 flex item-center justify-between py-7 px-12'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                    <p className="text-lg font-light tracking-tighter leading-none "> {item}</p>
                ))}
            
            <div className='start flex item-center '>
            <div className='px-4 py-2 border-[1px] border-zinc-700 rounded-full font-light text-lg'>start the project</div>
            <div className='icon pt-2 px-3'><FaArrowUpRightFromSquare /></div>
            </div>
        </div>
        
        
    </div>
  );
}
