import React from 'react';
import TmeBanner from './TmeBanner';
import TmeLc from './TmeLc';
import TakeMyExamFlow from './TakeMyExamFlow';
import TakeMyExamPoints from './TakeMyExamPoints';
import TmeFormContent from './TmeFormContent';
import TakeMyExamCF from './TakeMyExamCF';
import TakeMyExamLC2 from './TakeMyExamLC2';
import TmeFaq from './TmeFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire #1 Take My Online Exam Help | Do My Online Exam Helper',
  description: 'There is a higher success rate in your academic path to hire “take my online exam for me” service who provide exams support. We have a variety of tutors available.',
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/take-my-exam",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Page: React.FC = () => {
  return (
    <div>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Taking My Classes Online",
            "alternateName": "Takingmyclassesonline",
            "url": "https://takingmyclassesonline.com/take-my-exam",
            "logo": "https://takingmyclassesonline.com/assets/weblogo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1 9179331132",
              "contactType": "customer service"
            },
            "sameAs": [
              "https://www.instagram.com/takingmyclassesonline/",
              "https://www.facebook.com/takingmyclassesonline/",
              "https://www.pinterest.com/takingmyclassesonline/",
              "https://x.com/takemyclas19231/",
              "https://www.linkedin.com/company/takingmyclassesonline/",
              "https://www.youtube.com/@takingmyclassesonline"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Taking My Classes Online",
            "alternateName": "Takingmyclassesonline",
            "url": "https://www.takingmyclassesonline.com/take-my-exam",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.takingmyclassesonline.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Taking My Classes Online",
            "image": "https://takingmyclassesonline.com/assets/weblogo.png",
            "description": "There is a higher success rate in your academic path to hire “take my online exam for me” service who provide exams support. We have a variety of tutors available.",
            "brand": {
              "@type": "Brand",
              "name": "Taking My Classes Online"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "36"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Check out How you 'take my online exam' works?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "takingmyclassesonline.com is a platform where you find ultimate guidance for your education and institutional work..."
                }
              },
              {
                "@type": "Question",
                "name": "Can You 'Take My University Exams' Online and Support My Learning Journey?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "With years of experience, our expert instructors are responsible for your academic success..."
                }
              },
              ,{
                "@type": "Question",
                "name": "What Kind of Strategies Can Help Me Succeed In An Online Exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our experts understand the value of your time and your prime commitment towards your goals. Therefore we schedule remote lectures where you can easily attend online sessions and clear your doubts with our expert guidance."
                }
              },{
                "@type": "Question",
                "name": "Is there any option where Can I pay you on an Installment basis for my online exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "takemyclassesonline.com is known for its excellence and __ towards student success. Our experts help you to attain higher grades in your exams, however we offer a money-back guarantee if we fail to give you the desired results."
                }
              },{
                "@type": "Question",
                "name": "How do I know that I can trust you with my online exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can check our reviews and feedback, and you’ll be pleased to see the incredible results we've achieved for our students. With decades of experience, we’re here to support you and ensure you feel valued throughout the process."
                }
              },{
                "@type": "Question",
                "name": `How Can I Request You to "Take My Online Exam"?`,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Follow some of the easy steps and hire your desired subject experts and within a few minutes you’ll be accessible to our services which help you throughout your education journey and help you to attain better results. So complete your prime commitment and let the burden of online exams be on us."
                }
              }
            ]
          })
        }}
      />

      {/* Page Components */}
      <TmeBanner />
      <TmeLc />
      <TakeMyExamFlow />
      <TakeMyExamPoints />
      <TmeFormContent />
      <TakeMyExamCF />
      <TakeMyExamLC2 />
      <TmeFaq />
    </div>
  );
};

export default Page;
