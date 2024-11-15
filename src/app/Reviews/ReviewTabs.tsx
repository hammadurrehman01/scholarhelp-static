import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './FormTab'
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';
import Link from 'next/link';

function ReviewTabs() {
  const reviews = [
    {
      name: 'Rebecca Steve',
      text: `Exams are one of the toughest and can change the course of one’s education journey. I was struggling to grasp the concepts but then I came across these tutors. They made the whole learning journey fun and exciting. I didn't just manage to clear my exam but I did so with flying colours. `,
      rating: 4.5,
      image: '/take-my-exam-reviews/Rebecca Steve.webp'
    },
    {
      name: 'Robert Harry',
      text: `I usually study late at night as I have a day job. The problem for me is that I couldn't clear my queries late at night so I needed someone who would be there 24/7. This website solved my problems as their tutors are available round the clock. Now, with my concepts clear, I am ready for my exams.`,
      rating: 4.5,
      image: '/take-my-exam-reviews/Robert Harry.webp'
    },
    {
      name: 'Noah Solomon',
      text: `Not only are they efficient, they are affordable too. I prepared for my exams within a tight budget and there was no compromise on quality at all. Highly recommended`,
      rating: 4.5,
      image: '/take-my-exam-reviews/Noah Solomon.webp'
    },
    {
      name: 'Sarah Gough',
      text: `I passed my exams with exceptional grades. This was not a possibility before but when I availed the services of this website, I knew I was in safe hands. Thanks a ton!`,
      rating: 4,
      image: '/take-my-exam-reviews/Sarah Gough.webp'
    },
    {
      name: 'Darren Mitchell',
      text: `If I was to give this website a nickname, it would be exam-busters! Superduper expertise over nearly all subjects. I say this out loud that if you want to prepare for your exams then contact these guys!`,
      rating: 5,
      image: '/take-my-exam-reviews/Darren Mitchell.webp'
    },
    {
      name: 'Maria Warren',
      text: `No need to take physical classes. These folks help you with your exam online. Comfort and excellence at their finest.`,
      rating: 4.5,
      image: '/take-my-exam-reviews/Maria Warren.webp'
    },

  
  ];

  const reviews2 = [
    {
      name: 'Emily Johnson',
      text: `I had an excellent GRE prep experience online, with live classes, recorded lectures, and interactive quizzes. The instructors simplified complex topics, and tools like vocab flashcards and tailored practice plans kept me on track. The realistic practice exams made test day much less intimidating—I highly recommend this service!`,
      rating: 4.5,
      image: '/gre-reviews/Emily Johnson.webp'
    },
    {
      name: 'Noah Davis',
      text: `The GRE prep at Taking My Classes Online was exactly what I needed! My personal coach’s custom study plan kept me organized, while adaptive questions focused on my weak areas, helping me improve fast. With practice exams, essay grading, and ongoing feedback, I boosted my score by over 10 points in just two months—highly recommended! `,
      rating: 4.5,
      image: '/gre-reviews/Noah Davis.webp'
    },
    {
      name: 'Amelia Moore',
      text: `Taking My Classes Online had everything I needed for GRE success—live, interactive classes, strategy sessions, and daily practice questions kept me progressing steadily. The initial diagnostic test targeted my weak areas, and weekly tracking kept me motivated. With a handy app for studying on the go, this course made all the difference!`,
      rating: 4.5,
      image: '/gre-reviews/Amelia Moore.webp'
    },
    {
      name: 'Michael Anderson',
      text: `With my busy work schedule, TakingMyClassesOnline.com was perfect—they offered flexible evening and weekend classes, plus self-paced videos. Adaptive practice targeted my weak areas, and test-taking strategy sessions helped with time management. The on-demand Q&A with tutors was a huge help, and I significantly raised my score!`,
      rating: 4.5,
      image: '/gre-reviews/Michael Anderson.webp'
    },
    {
      name: 'Scarlett Harris',
      text: `I was nervous about the GRE, especially verbal, but Taking My Classes Online was a game-changer. Expert-led classes, flashcards, and realistic test simulators helped me feel confident on exam day, and personalized coaching boosted my score by 12 points. Highly recommended for anyone aiming for a top score!`,
      rating: 4.5,
      image: '/gre-reviews/Scarlett Harris.webp'
    },
    {
      name: 'Joseph Clark',
      text: `Taking My Classes Online was fantastic! The instructors simplified tough topics, and the practice exams and flashcards made me feel fully prepared. I went into test day confident and scored higher than expected—highly recommended! `,
      rating: 5,
      image: '/gre-reviews/Joseph Clark.webp'
    },
  
  ];

  const reviews3 = [
    {
      name: 'Lyla peter',
      text: `I was feeling very nervous and anxious because my LSAT test was looming. However, somehow, I landed on their website and ordered their LSAT services. Trust me, They exceeded my expectations. They handled my exam well and completed it on time, making me very happy.`,
      rating: 5,
      image: '/lsat-reviews/Lyla peter.webp'
    },
    {
      name: 'Jemma Maizie',
      text: `This is the first time that I have had online LSAT exam help. I didn't have much faith in online services before, but these guys completed my LSAT exam and organized the online exam very well. They completed the task ahead of schedule. I would suggest you all try their services too. `,
      rating: 4.5,
      image: '/lsat-reviews/Jemma Maizie.webp'
    },
    {
      name: 'Harper Jack',
      text: `I had an online logical reasoning test, which was quite difficult; I understood some things, and Takingmyclassesonline.com helped everything else. My experience is amazing; their LSAT exam service is very good.`,
      rating: 5,
      image: '/lsat-reviews/Harper Jack.webp'
    },
    {
      name: 'Jaxon Parker',
      text: `Their support is truly amazing. They listened to me carefully, understood all my requirements in detail and implemented them. They finished my LSAT exam 10 minutes before the scheduled time. If you are a student and want to get into a good school, I would recommend that you take their LSAT exam help services. Their team is very professional, and because of them, I have got good marks.`,
      rating: 4.5,
      image: '/lsat-reviews/Jaxon Parker.webp'
    },
    {
      name: 'Cooper Easton',
      text: `I wanted to get admission to law school but wasn’t Prepared for the LSAT test. When I found out about Takingmyclassesonline.com. I immediately placed an order. Their LSAT exam helper gave me a lot of confidence that I would pass the test, and indeed, I did. With their help, I got excellent grades on the LSAT test.`,
      rating: 4.5,
      image: '/lsat-reviews/Cooper Easton.webp'
    },
    {
      name: 'Hailee Jenny',
      text: ` I was not sure I would ever pass the LSAT exam. I was very worried, but when I ordered their LSAT test help service and got full marks, I was very satisfied with their excellent service. Their team is truly amazing, and I would recommend that everyone hire them. `,
      rating: 4.5,
      image: '/lsat-reviews/Hailee Jenny.webp'
    },
  
  ];

  const reviews4 = [
    {
      name: 'Scott Ryan',
      text: `I used Takingmyclassesonline.com for the GED Test. I had taken all 4 courses which were covered on the test. Intensively for 14 days and I finished the course by the help of Taking my classes online and I got a successful score on my GED test.`,
      rating: 4.5,
      image:'/take-my-ged-reviews/Scott Ryan.webp'
    },
    {
      name: 'Walton Carle',
      text: `We greatly appreciate the preparation of the GED exam, such high-quality professionals available in Taking My Classes Online, All staff members have shown a strong sense of responsibilites.`,
      rating: 4.5,
      image:'/take-my-ged-reviews/Walton Carle.webp'
    },
    {
      name: 'Nick Alvin',
      text: `Awesome experience and very supportive representatives of Taking My Classes Online. Made a stressful situation much easier for GED test preparation.`,
      rating: 5,
      image:'/take-my-ged-reviews/Nick Alvin.webp'
    },
    {
      name: 'Clara Oliver',
      text: `I wanted to say many thanks to Taking My Classes Online for the preparation of the GED Exam and Finally, I succeeded in the GED exam. Followed every course which was offered, Truly recommend it for the future perspective.`,
      rating: 4.5,
      image:'/take-my-ged-reviews/Clara Oliver.webp'
    },
    {
      name: 'Josh McMillan',
      text: `I was stuck on my GED exam, I tried 5 times and looked for the best GED exam helper website. Unfortunately, I found Taking My Classes Online which looked best among all of the websites in Google. Right now I have got 4.7 CPGA in my GED exam, all thanks to Taking My Classes Online.`,
      rating: 5,
      image:'/take-my-ged-reviews/Josh McMillan.webp'
    },
    {
      name: 'Zane Alex',
      text: `I used to feel that preparing for the GED while working a job really pushed my limits. I had to look for online GED prep that would allow me to balance my work and prepare as well. Fortunately, my aspirations were realistic because Takingclassonline has everything I wished for – I could increase my GED score quickly using all of the materials provided, and the tutors helped me with any questions I had. What was great was that I could do it whenever I had the time. I’m happy to have gotten the MBA score needed for my application.`,
      rating: 5,
      image:'/take-my-ged-reviews/Zane Alex.webp'
    },
  
  
  ];

  const reviews5 = [
    {
      name: 'Amelia Clarke',
      text: `I am impressed by the thought of GMAT exam preparation. It was impossible to find time to focus on studying. My close friend suggested me. Can’t thank my friend enough because she suggested takemyclassonline.com. Their GMAT study plan allowed me to study. whenever I had a short period of free time. I found them exactly what I needed. Whenever I ask a question, I get an immediate response. Thanks to them, I felt prepared on exam day, and my results were beyond what I hoped for!`,
      rating: 4.5,
      image: '/gmat-reviews/Amelia Clarke.webp'
    },
    {
      name: 'Oliver Shaw',
      text: `I didn’t start my GMAT prep until the last month before my exam. And I am honestly not a planner. I was really worried when I realized how little time I had left, and Luckily, I placed an order for their service GMAT Exam help. Their team is professionals, and last-minute GMAT prep solutions were a game-changer. The crash courses and practice tests were incredibly affordable and very supportive. They worked with my busy schedule. The best part is I walked into the exam way more confident than I expected!`,
      rating: 5,
      image: '/gmat-reviews/Oliver Shaw.webp'
    },
    {
      name: 'Sophie Bennett',
      text: `My biggest source of stress has always been standardized tests, including the GMAT. Fortunately, I was fortunate to get taking class online tips on taking the GMAT without stress, and just the knowledge that other people felt the same way turned out to be a pressure relief. Their resources allowed me to feel comfortable using actual exam test settings and focusing on simple study principles. The tutors were also great. They were very soothing and were always there to cheer me on. They seemed to want me to succeed.`,
      rating: 5,
      image: '/gmat-reviews/Sophie Bennett.webp'
    },
    {
      name: 'James Foster',
      text: `With a part-time job and undergrad studies, I found it difficult to study for GMAT. I had crazy schedules so I needed a means of getting proper preparation for the GMAT exam. Their customized GMAT prep for busy students made all the difference, especially when they broke it into manageable chunks. The price of the course was also fairly cheap for the purposes of the quality offered. I have received the results and they are to my greatest satisfaction!`,
      rating: 4.5,
      image: '/gmat-reviews/James Foster.webp'
    },
    {
      name: 'Isla Robinson',
      text: `Online GMAT prep seemed impossible to me until I took class online and then my view changed. They had the most efficient strategies for GMAT exam ranging from effective analytical writing and problem solving which I could have never imagined. I never thought that I would be able to complete the GMAT exam online and do so well. For those who reside in the UK like me, well it is of great help. They do not make it difficult to prepare even if you have various other tasks at hand.`,
      rating: 4.5,
      image: '/gmat-reviews/Isla Robinson.webp'
    },
    {
      name: 'Ethan Walls',
      text: `I used to feel that preparing for the GMAT while working a job really pushed my limits. I had to look for online GMAT prep that would allow me to balance my work and prepare as well. Fortunately, my aspirations were realistic because Takingclassonline.com has everything I wished for – I could increase my GMAT score quickly using all of the materials provided, and the tutors helped me with any questions I had. What was great was that I could do it whenever I had the time. I’m happy to have gotten the MBA score needed for my application.`,
      rating: 5,
      image: '/gmat-reviews/Ethan Walls.webp'
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

  const ReviewCard = ({ name, text,rating,image }:{name:string,text:string,rating:number,image:string}) => (
    <div className='group'>
      <div className='w-full  bg-muted/50  rounded-xl border-[2px] scale-95 group-hover:scale-100 group-hover:shadow-xl transition ease-in duration-200 delay-200 '>
        <div className="flex items-center p-2 mt-3">
          <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
            <Image className="object-cover " src={image} alt="rating" width={48} height={64} />
          </div>
          <div className='flex-col ml-4'>
            <p className='text-[16px] font-bold'>{name}</p>
            <div className='flex items-center mt-1 text-yellow-500 fill-amber-400'>{renderStars(rating)}</div>
          </div>
        </div>
        <p className=' p-2 font-medium  text-sm'>{text}</p>
        <div className='border-b-2 border-muted translate-y-2 w-full'></div>
        <div className="flex items-center p-2 mt-3">
          <div className="flex items-center bg-white rounded-full w-12 h-12 overflow-hidden">
            <Image className="object-cover" src={'/assets/weblogo.png'} alt="rating" width={44} height={64} />
          </div>
          <div className='flex-col ml-4'>
            <div className='text-[16px] font-bold'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}</div>
            <Link href={'/'}>
            <div className='text-gray-500 font-medium text-sm hover:text-blue-500 hover:underline'>{process.env.NEXT_PUBLIC_WEBSITE_NAME}.com</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className='py-10 max-w-screen-xl mx-auto'>
        <h2 className='text-center text-3xl font-extrabold my-4 '>Our Client’s Review</h2>
        <div>
          <Tabs defaultValue='1'>
            <TabsList className='flex flex-col md:flex-row'>
              <TabsTrigger value="1">Take My Exam</TabsTrigger>
              <TabsTrigger value="2">Take My GRE Exam</TabsTrigger>
              <TabsTrigger value="3">Take LSAT Exam Online</TabsTrigger>
              <TabsTrigger value="4">Take GED Exam Online</TabsTrigger>
              <TabsTrigger value="5">Take GMAT Exam Online</TabsTrigger>
            </TabsList>
            <TabsContent value='1'>
              <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5 '>
              {reviews.map((review, index) => (
          <ReviewCard key={index} name={review.name} image={review.image} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
            <TabsContent value='2'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5 '>
              {reviews2.map((review, index) => (
          <ReviewCard key={index} name={review.name} image={review.image} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
            <TabsContent value='3'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5'>
              {reviews3.map((review, index) => (
          <ReviewCard key={index} name={review.name} image={review.image} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
            <TabsContent value='4'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5'>
              {reviews4.map((review, index) => (
          <ReviewCard key={index} name={review.name} image={review.image} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>

            <TabsContent value='5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 p-5'>
              {reviews5.map((review, index) => (
          <ReviewCard key={index} name={review.name} image={review.image} text={review.text} rating={review.rating} />
        ))}
              </div>

            </TabsContent>
          </Tabs>

        </div>
    </div>
  )
}

export default ReviewTabs

