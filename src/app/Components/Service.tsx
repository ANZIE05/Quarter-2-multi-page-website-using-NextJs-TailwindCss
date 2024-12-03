import React from 'react'
import { MdBookOnline } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";


const Service = () => {
  return (
    <div className='bg-slate-200 backdrop-blur-3xl w-full pt-4'>
    <div className='container '>
          {/* heading section */}
          <div className='text-center'>
                <h1 className='text-4xl font-semibold text-red-600'> Our Services</h1>
                </div><br/>

                {/* icons section */}
                <div className='grid grid-cols-1 gap-4 mt-6'>
                    <div className='flex justify-center items-center gap-3'>
                    <MdBookOnline className='text-3xl'/>
                        <p className='text-xl font-semibold'>Online Booking</p>
                    </div>

                    <div className='flex justify-center items-center gap-3'>
                    <TbTruckDelivery  className='text-3xl'/>
                        <p className='text-xl font-semibold'>Delivery</p>
                    </div>

                </div>

      
    </div>
    </div>
  )
}

export default Service
