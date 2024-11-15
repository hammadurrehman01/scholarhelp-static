"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos';
import 'aos/dist/aos.css';

function BlogBanner() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
    
      useEffect(() => {
        Aos.init({
          duration: 800,
          disable: "mobile",
          offset: 100,
        });
      }, [inView]);
  return (
    <div ref={ref} className='m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
    <div className='mx-auto max-w-screen-xl'>
        <div className='py-20 px-5 md:py-44'>
    <h2 className='text-center font-extrabold text-2xl md:text-5xl'>Blog</h2>
    <p className='text-center pt-4 font-medium md:text-lg text-base max-w-screen-md mx-auto'>Welcome to our blog – your go-to source for fresh insights, helpful tips, and inspiration across a range of topics! Dive in to explore articles crafted to spark ideas, keep you informed, and make every day a little brighter. Let’s explore new horizons together!</p>
    </div>
    </div>
</div>
  )
}

export default BlogBanner