import React from 'react';
import Head from 'next/head';
import ToeflBanner from './ToeflBanner';
import ToeflLongContent from './ToeflLongContent';
import ToeflFlow from './ToeflFlow';
import ToeflPoints from './ToeflPoints';
import ToeflFormContent from './ToeflFormContent';
import ToeflLongContent2 from './ToeflLongContent2';
import ToeFlFAQ from './ToeFlFAQ';
import ToeflCoreFeature from './ToeflCoreFeature';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Take My TOEFL Exam Online Service | Hire Expert TOEFL Tutor',
  description: 'Hire the expert to take your TOEFL exam online, whether it’s iBT, Essentials, ITP, Junior or a primary. Get success on your TOEFL exams and get 100% results.',
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/toefl-exam-online",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Taking My Classes Online",
              "alternateName": "Takingmyclassesonline",
              "url": "https://takingmyclassesonline.com/toefl-exam-online",
              "logo": "https://takingmyclassesonline.com/assets/weblogo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1 9179331132",
                "contactType": "customer service",
              },
              "sameAs": [
                "https://www.instagram.com/takingmyclassesonline/",
                "https://www.facebook.com/takingmyclassesonline/",
                "https://www.pinterest.com/takingmyclassesonline/",
                "https://x.com/takemyclas19231/",
                "https://www.linkedin.com/company/takingmyclassesonline/",
                "https://www.youtube.com/@takingmyclassesonline"
              ],
            }),
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
              "url": "https://takingmyclassesonline.com/toefl-exam-online",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.takingmyclassesonline.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "takingmyclassesonline",
              "image": "https://takingmyclassesonline.com/assets/weblogo.png",
              "description": "Hire the expert to take your TOEFL exam online, whether it’s iBT, Essentials, ITP, Junior or a primary. Get success on your TOEFL exams and get 100% results.",
              "brand": {
                "@type": "Brand",
                "name": "Taking My Classes Online",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "36",
              },
            }),
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
                  "name": "Is it Possible to take a TOEFL test online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There are two editions of TOEFL exam, One based on physical appearance while TOEFL iBT Home provides you to take the exam at home in the presence of a human proctor. Use wisely before submitting the form. You can take the TOEFL exam at home, allowing for a comfortable and familiar testing environment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is the TOEFL test completely online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, You can also take the exam in the test centers. While submitting the form make sure to choose the flexible time and date that meets your needs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the Fee Structure of TOEFL exam",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The TOEFl examination fee can vary from location to location. Generally ranging from $100 - $120, you can vary it from the official TOEFL website. Also, there are various payment methods to allow you to pay the examination fee in order to reserve your examination seat."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How many times can you take the TOEFL exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With TOEFL, there is no cap as such that the student can take multiple attempts on the exams because he wants to. But rest assured, you will pass in your first attempt itself. If not, we give you a money refund, and you wouldn't be losing your money for it."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide any assistance for the TOEFL exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We are known for our commitment and for our services. Our past performance records reflect the outcomes we promise. So join us now and get the best assistance for your academic success."
                  }
                }
              ]
            }),
          }}
        />
     
        <ToeflBanner />
        <ToeflLongContent />
        <ToeflFlow />
        <ToeflPoints />
        <ToeflFormContent />
        <ToeflCoreFeature />
        <ToeflLongContent2 />
        <ToeFlFAQ />
      </div>
    
  );
};

export default Page;