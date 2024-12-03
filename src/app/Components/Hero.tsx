import React from 'react';
import Image from 'next/image';
import pic from "../../app/assets/pic1.png";

const Hero = () => {
  return (
    <div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 ">
            
          {/* text section */}
          <div className='flex flex-col justify-center gap-5 text-center md:text-left pt-24 md:p-0 pb-10'>
            <h1 className='text-3xl font-semibold'>Beautiful Kitchen Gadgets for every Sweet Home.</h1>
            <p className=''>
            Elegant kitchen gadgets add charm and attraction. Makes every sweet home complete with style, convenience, and a touch of beauty.
            </p>
            <div className='flex gap-4 items-center md:justify-start justify-center'>
                <button className='bg-red-600 text-white font-bold px-4 py-2 rounded-full hover:bg-slate-600'>Clich Here</button>
            </div>

          </div>
          

        {/* image section */}
        <div className='flex flex-col justify-center'>
            <Image src={pic} alt='HeroPic' className='mx-auto md:mx-0'/>

        </div>

        </div>
    </div>
  )
}

export default Hero

