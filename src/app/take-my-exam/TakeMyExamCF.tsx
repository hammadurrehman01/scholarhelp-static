"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';

function TakeMyExamCF() {
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
    <div ref={ref} data-aos='zoom-in' className='mx-auto max-w-screen-xl mt-10'>
    <h2  className='text-center font-extrabold text-xl md:text-[33px]  '>Fundamental Traits</h2>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 py-5'>
        <div data-aos='flip-right' className='group'>
            <div className='h-[300px] border-[4px] border-muted-foreground rounded-tl-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tr-[50px] group-hover:rounded-bl-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-br-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Student Focused Instruction</h3>
                <p className='py-4 px-2 text-center font-medium  text-sm md:text-base '>Lessons are designed to make students focused on their subject and on to their weakness. Generating ideas, polishing skills and sharing experience to assure them with the best services. Their lessons are adequate according to the work subject scheme.</p>
            </div>
        </div>


        <div data-aos='flip-left' className='group'>
            <div className='h-[300px] border-[4px] border-muted-foreground rounded-tr-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tl-[50px] group-hover:rounded-br-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-bl-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>24/7 Help Support</h3>
                <p className='py-4 px-2 text-center font-medium text-sm md:text-base  '>Our Online exam takers are highly certified which not only helps you in your relevant field but can be proficient in other subjects too. We assure you of 24/7 service so that you can clear your doubts anytime you want. Our services can step in to do my test for me, ensuring you achieve the grades you desire while reducing your academic stress.</p>
            </div>
        </div>


        <div data-aos='flip-right' className='group'>
            <div className='h-[300px] border-[4px] border-muted-foreground rounded-tl-[50px] scale-90 group-hover:scale-95 lg:scale-95 lg:group-hover:scale-100 group-hover:rounded-tr-[50px] group-hover:rounded-bl-[50px] group-hover:rounded group-hover:shadow-2xl transition ease-in duration-200 delay-200  rounded-br-[50px] bg-gradient-to-t from-violet-500 via-purple-200 to-zinc-100 dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] '>
                <h3 className='pt-10 text-center font-bold text-lg md:text-2xl'>Dynamic Curriculum</h3>
                <p className='py-4 text-center font-medium px-2 text-sm md:text-base  '>In today’s fast-paced world, staying updated with the latest education is essential.Our aim is to provide the most advanced knowledge while making use of modern technology, allowing you to take full benefit from our experts.</p>
            </div>
        </div>

    </div>
</div>
  )
}

export default TakeMyExamCF