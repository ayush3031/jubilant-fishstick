import React, { useEffect, useState } from 'react'

export default function Eyes() {

    const [ rotate , setRotate ]= useState(0);
    useEffect(()=>{
        window.addEventListener('mousemove',(move)=>{
            let mousex = move.clientX;
            let mousey = move.clientY;

            let deltaX = mousex - window.innerWidth/2;
            let deltaY = mousey - window.innerHeight/2;
            var angle = Math.atan2(deltaY,deltaX);
            let final = angle*(180/Math.PI);
            setRotate(final-180);
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-.7" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
            <div className='absolute w-1/3  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  flex justify-between '>
                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                    <div className=' relative w-[10vw] h-[10vw] bg-zinc-900 rounded-full flex items-center '>
                        <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}}
                         className='line h-[3vw] w-[10vw]  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='w-[2vw] h-[2vw] bg-zinc-100 rounded-full'>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                   <div className='w-[10vw] h-[10vw] relative bg-zinc-900 rounded-full flex items-center justify-center'>
                        <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}}
                        className='line h-[3vw] w-full  absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='w-[2vw] h-[2vw] bg-zinc-100 rounded-full'>
                        </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
