"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Star, StarHalf } from 'lucide-react';


const reviews = [
  {
    name: 'Alfred FRASER',
    text: `Joining their services was the best decision of mine. The tutor really helped me to improve my learning skills and learning credibility which benefits me with every subject.`,
    rating: 4.5,
    image: '/homepage-reviews/Alfred FRASER.webp'
  },
  {
    name: 'Charles MOORE',
    text: `Thank You, You’re the best service I have ever used. The expert tutors, their support, and the exam resources for the LSAT exam are just truly amazing.`,
    rating: 5,
    image: '/homepage-reviews/Charles MOORE.webp'
  },
  {
    name: 'Henry MACKENZIE',
    text: `Taking My Classes Online is the best tutor service I have ever found on the web. Their work and potential to support me in the GRE exam is just phenomenal. Highly recommended.`,
    rating: 5,
     image: '/homepage-reviews/Henry MACKENZIE.webp'
  },
  {
    name: 'Elsie BELL',
    text: `I have used their service for my GED exam. They have highly professional and knowledgeable tutors who support me 24/7, answer all the queries, and help to clear my concept. Truly inspiring and an amazing experience`,
    rating: 4.5,
     image: '/homepage-reviews/Elsie BELL.webp'
  },
  {
    name: 'Scarlett GORDON',
    text: `Words can’t express my emotions for them. I really struggled with the preparation for the HESI exam, then I took their service to figure out if it would be helpful or not. Their support shocked me. They really help me to improve my learning skills and lead me towards academic success.`,
    rating: 4.5,
     image: '/homepage-reviews/Scarlett GORDON.webp'
  },
  {
    name: 'Ethan WRIGHT ',
    text: `Such an amazing assistant in clearing up my concept. Highly qualified teachers that help me in my academic learning. I really appreciate their efforts that they’d put in to provide me some success in my learning.`,
    rating: 5,
     image: '/homepage-reviews/Ethan WRIGHT.webp'
  },

];

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} fill="currentColor" />);
  }
  if (hasHalfStar) {
    stars.push(<StarHalf key="half" fill="currentColor" />);
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<Star key={`empty-${i}`} />);
  }

  return stars;
};


const ReviewCard = ({name,text,rating,image}:{name:string,text:string,rating:number,image:string}) => (
  <div className='group'>
    <div className='w-full bg-muted/50  rounded-xl border-[2px] scale-95 group-hover:scale-100 group-hover:shadow-xl transition ease-in duration-200 delay-200 '>
      <div className="flex items-center p-2 mt-3">
        <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
          <Image className="object-cover  " src={image} alt="rating" width={48} height={64} />
        </div>
        <div className='flex-col ml-4'>
          <div className='text-[16px] font-bold'>{name}</div>
          <div className='flex items-center mt-1 text-yellow-500 fill-amber-400'>{renderStars(rating)}</div>
        </div>
      </div>
      <div className='p-2 font-medium text-sm'>{text}</div>
      <div className='border-b-2 border-muted translate-y-2 w-full'></div>
      <div className="flex items-center p-2 mt-3">
        <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
          <Image className="object-cover" src={'/assets/weblogo.png'} alt="rating" width={44} height={64} />
        </div>
        <div className='flex-col ml-4'>
          <div className='text-[16px] font-bold'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</div>
          <Link href={'/'}>
          <div className='text-gray-500 font-medium text-sm hover:underline hover:text-blue-500'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}.com</div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const TrustReview = () => {
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
    <div ref={ref} className='mx-auto max-w-screen-xl p-4 md:p-0 mt-10'  data-aos="zoom-in">
      <h2 className='font-extrabold text-xl md:text-4xl dark:text-zinc-100 text-indigo-950 text-center'>
      What Our Satisfied Customers Say About Us
      </h2>


      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5'>
        {reviews.map((review, index) => (
          <ReviewCard key={index} name={review.name} image={review.image}  text={review.text}  rating={review.rating} />
        ))}
      </div>

      <div className='flex justify-center items-center'>
         <div className='py-3 px-5 bg-gradient-to-r from-violet-600 to bg-indigo-600 text-zinc-100 hover:scale-105 transition ease-in duration-200 delay-200 rounded-lg shadow-xl'><Link href='/reviews'>More Reviews </Link>
         </div>
      </div>

    </div>
  );
}

export default TrustReview;
