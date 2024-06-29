import React from 'react'

export default function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center gap-5 px-20'>
        <div className='card container w-1/2  h-[57vh]'>
            <div className='relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
                <button className='absolute left-[4vh] border-[1px] rounded-[5vh] px-3 py-1 bottom-[2vh]'>&copy; 2019-2022</button>
            </div>
        </div>
        <div className='card container w-1/2 h-[57vh] flex gap-5'>
            <div className='relative w-full h-full bg-[#212121]  rounded-xl flex items-center justify-center'>
                    <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
                    <button className='absolute left-[4vh] border-[1px] rounded-[5vh] px-3 py-1 bottom-[2vh]'>RATING 5.0 ON CLUTCH</button>
            </div>

            <div className='relative w-full h-full bg-[#212121]  rounded-xl flex items-center justify-center'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
                <button className='absolute left-[4vh] border-[1px] rounded-[5vh] px-3 py-1 bottom-[2vh]'>BUSINESS BOOTCAMP ALUMNI</button>
            </div>
        </div>
    </div>
  )
}
