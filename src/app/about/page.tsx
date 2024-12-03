import React from 'react';
import Image from 'next/image';
import image from "../../app/assets/pic2.png";

const About = () => {
  return (
    <div className='bg-slate-200 backdrop-blur-3xl w-full min-h-screen'>
      <div className='container mx-auto py-14 px-4 md:grid md:grid-cols-2 md:gap-8'>
        {/* Heading Section */}
        <div className='text-center mb-8 md:col-span-2'>
          <h1 className='text-4xl font-semibold text-red-600'>About Us</h1>
        </div>

        {/* Image Section */}
        <div className='flex justify-center items-center'>
          <Image 
            src={image} 
            alt='About Us Image' 
            className='rounded-lg'
            priority={true}
          />
        </div>

        {/* Text Section */}
        <div className='flex flex-col justify-center items-center md:items-start'>
          <h1 className='text-3xl font-semibold text-center md:text-left'>
            Beautiful Crockery, Happy Vibes...
          </h1>
          <p className='py-4 text-center md:text-left'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eligendi culpa quia reprehenderit? 
            Facilis necessitatibus ipsa veritatis quae quasi perspiciatis fugiat laudantium? Deleniti alias consequatur 
            eaque provident excepturi quisquam rerum?
          </p>
          <div className='flex gap-4 items-center'>
            <button className='bg-red-600 text-white font-bold px-4 py-2 rounded-full hover:bg-slate-600 transition duration-300'>
              Order Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
