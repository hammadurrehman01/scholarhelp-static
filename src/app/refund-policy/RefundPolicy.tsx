"use client"
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

function RefundPolicy() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
      });
    
      useEffect(() => {
        Aos.init({
          duration: 800,
          offset: 100,
        });
      }, [inView]);
  return (
    <div className='mx-auto max-w-screen-xl p-5' ref={ref} >

  <h2 className='pt-14 font-bold md:text-2xl text-sm'data-aos='flip-down' >A client shall be eligible for refund under the following circumstances:</h2>
  
  <ul className='font-medium space-y-3 pt-4 ' data-aos='flip-down'>
    <li> 1.	In case all the requirements are shared by the client initially, which are not met even after 5 revisions.</li>
    <li> 2.	In case a deadline is missed deviating from the original agreed upon commitment.</li>

    <li> 3.	It is mandatory to share a detailed, comprehensive & legit feedback report to be eligible for a refund. This report will be audited by our independent audit team to confirm the eligibility of refund.</li>
  </ul>

  <h2 className='pt-5 font-bold md:text-2xl text-sm'data-aos='flip-down' >A client shall NOT be eligible for refund under the following circumstances:</h2>
  
  <ul className='font-medium space-y-3 pt-4 ' data-aos='flip-down'>
    <li> 1.	Incomplete/Incorrect requirements shared by the client initially leading to customer dissatisfaction</li>
    <li>2.	In case the client does not use our work</li>

    <li>3.	In case the client makes changes to the work shared by us.</li>
    <li>4.	In case the feedback includes changes in the requirement/initial scope after the work is done. For additional/change in requirement, additional cost will be incurred and we will not be responsible for the outcome in case the additional payment is not made for the redo.</li>
    <li>5.	In case the client is non-responsive to queries/concerns which result in a delay.</li>
    <li>6.	In case the client changes his mind after a few hours of placing the order.</li>
  </ul>

  <h2 className='pt-5 font-bold md:text-2xl text-sm'data-aos='flip-down' >Contact Us</h2>
  <p className='font-medium space-y-3 pt-3'>If you have any questions about these Terms and Conditions, You can contact us:</p>

  <h3 className='pt-5 font-semibold md:text-xl text-sm'data-aos='flip-down' >Email us:</h3>
  <Link href={'mailto:support@takingmyclassesonline.com'} target="_blank" rel="noopener noreferrer" className='font-medium space-y-3 pt-3 hover:text-blue-500 hover:underline'>support@takingmyclassesonline.com</Link>

  <h3 className='pt-5 font-semibold md:text-xl text-sm'data-aos='flip-down' >Phone Number:</h3>
  <Link href={'https://wa.me/19179331132?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank" rel="noopener noreferrer" className='font-medium space-y-3 pt-3 hover:text-blue-500 hover:underline'>+1 (917) 933-1132</Link>
 
</div>
  )
}

export default RefundPolicy