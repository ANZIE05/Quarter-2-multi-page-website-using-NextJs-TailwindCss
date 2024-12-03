
import React from 'react';
import Image from 'next/image';

const Products = () => {
  return (
    <div className=' bg-slate-200 backdrop-blur-3xl w-screen'>
    <div className='container py-14'>
    {/* heading section */}
    <div className='text-center'>
        <h1 className='text-4xl font-semibold text-red-600'> Our Products</h1>
    </div><br/>

    {/* card section */}
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/01.jpg"   alt="picture"    width={300}    height={300}/>
           <p className='px-28'>$10.99</p>
           <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/02.jpg"   alt="picture"    width={270}    height={260}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/06.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/04.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/07.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/03.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/05.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/08.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/09.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/10.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/11.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

        <div>
        <Image  className='rounded-md hover:bg-red-600 text-white p-2 transition-colors duration-500 bg-slate-600'
            src="/12.jpg"   alt="picture"    width={300}    height={300}/>
            <p className='px-28'>$10.99</p>
            <p className='px-20'>Product Name</p>
        </div>

    </div>

    </div>
    </div>
  )
}

export default Products;


