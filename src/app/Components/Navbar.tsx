"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import pic from "../../app/assets/logo1.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className='py-1 bg-slate-300 w-full'>
      <div className="h-10vh flex justify-between gap-10 z-50 font-semibold lg:py-5 px-5 py-4 flex-1">

        {/* Mobile Menu Button */}
        <button className='block sm:hidden transition text-2xl font-bold' onClick={handleClick}>
          {click ? <FaTimes /> : <IoMenu />}
        </button>

        {/* Logo Section */}
        <div className='flex items-center flex-1 font-semibold text-lg lg:text-2xl lg:pl-10'> KITCHEN <span className='text-red-500'> GADGETS</span></div>

        {/* Desktop Menu */}
        <div className='lg:flex md:flex flex-1 items-center justify-start font-semibold hidden'>
          <ul className='flex gap-8 mr-16 text-[18px]'>
            <Link href="/"><li className='transition hover:border-b-2 border-red-500 uppercase cursor-pointer'>Home</li></Link>
            <Link href="/products"><li className='transition hover:border-b-2 border-red-500 uppercase cursor-pointer'>Products</li></Link>
            <Link href="/about"><li className='transition hover:border-b-2 border-red-500 uppercase cursor-pointer'>About</li></Link>
          </ul>
        </div>

        {/* Login Section */}
        <div className='flex gap-2 items-center'>
          <Image src={pic} alt='logo' className='w-10 rounded-full' />
          <Link href=""><IoIosArrowDown /></Link>
        </div>

        {/* Mobile Menu */}
        {click && (
          <div className='lg:hidden block absolute top-16 w-full left-0 bg-slate-300 transition-transform duration-300 z-50'>
            <ul className='text-center text-xl py-8'>
              <Link href="/"><li className='my-4 py-4 hover:border-b-2 border-red-500 uppercase'>Home</li></Link>
              <Link href="/products"><li className='my-4 py-4 hover:border-b-2 border-red-500 uppercase'>Products</li></Link>
              <Link href="/about"><li className='my-4 py-4 hover:border-b-2 border-red-500 uppercase'>About</li></Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
