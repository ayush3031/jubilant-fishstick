import React from 'react'

export default function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full p-20 bg-[#CDEA68]'>
        <h1 className='font-["Neue_Montreal_Regular"] text-[4vw] leading-[3.5vw] tracking-tight text-zinc-900'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>

        <div className='w-full mt-20 border-t-2 border-[#a1b562] flex gap-5 py-20'>
            <div className='w-1/2 '>
                <h1 className='text-[3vw] text-zinc-900 font-[500]'>Our Approach:</h1>
                <button className='py-[1vw] px-[3vw] rounded-full bg-zinc-900 flex gap-10 items-center mt-10'>READ MORE
                <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
            </div>
            <div className='w-1/2 h-[70vh]  rounded-3xl bg-cover'>
                <img className='rounded-3xl' src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg'></img>
            </div>
        </div>
    </div>
  )
}
