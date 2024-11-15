import React from 'react';
import Head from 'next/head';
import TmtBanner from './TmtBanner';
import TmtLongContent from './TmtLongContent';
import TmtFlow from './TmtFlow';
import TmtPoints from './TmtPoints';
import TmtFormContent from './TmtFormContent';
import TmtCoreFeatures from './TmtCoreFeatures';
import TmtLongContent2 from './TmtLongContent2';
import TmtFaq from './TmtFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire to Take My TEAS Test for Me | 100% Great Results Surety',
  description: `Are you still struggling on your Teas exams? don't you worry because we offer take my TEAS exams online. Get a free quote at takingmyclassesonline.com!`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/take-my-teas-exam-for-me",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Taking My Classes Online",
          "alternateName": "Takingmyclassesonline",
          "url": "https://takingmyclassesonline.com/take-my-teas-exam-for-me",
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
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "name": "Taking My Classes Online",
          "alternateName": "Takingmyclassesonline",
          "url": "https://takingmyclassesonline.com/take-my-teas-exam-for-me",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.takingmyclassesonline.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org/", 
          "@type": "Product", 
          "name": "takingmyclassesonline",
          "image": "https://takingmyclassesonline.com/assets/weblogo.png",
          "description": "Are you still struggling on your Teas exams? Don't worry because we offer take my TEAS exams online. Get a free quote at takingmyclassesonline.com!",
          "brand": {
            "@type": "Brand",
            "name": "Taking My Classes Online"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "36"
          }
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is a passing TEAS test score?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "There is no such passing criteria for TEAS as each nursing school's requirements are different. However, competitive marks are from 70% - 75% on an expert level of preparedness."
              }
            },
            {
              "@type": "Question",
              "name": "What Happened after I failed the TEAS test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can attempt the TEAS test 3 times in a year, allowing you to gain excessive marks to make a difference in your exam test. However, Your intended healthcare program or nursing school has the last word on how many tries you can make."
              }
            },
            {
              "@type": "Question",
              "name": "Is the English TEAS test difficult?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It depends on how prepared you are for your TEAS exams. However, If you’re a non-native english speaker then you’d probably find some issues with it. Don’t worry! Our online podium is the best search to help you in your exam."
              }
            },
            {
              "@type": "Question",
              "name": "Is the Nursing teas exam easy or difficult?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The TEAS test won't be the easiest exam you've ever taken. Generally depending upon your exam preparation and how strong your concepts are. Get our expert assistance and ace this exam."
              }
            },
            {
              "@type": "Question",
              "name": "What is the cost of appearing in the TEAS test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The examination fees vary from location to location. However, Generally the price of the TEAS exams are ranging from 100$ - 120$."
              }
            },
            {
              "@type": "Question",
              "name": "How am I sure of the progress of my course online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Firstly, you need to identify your strengths and weaknesses. Secondly, monitor your improvement over time. Thirdly, stay motivated and focused. Furthermore, adjust your study plan and strategies. Through these minor steps, you can evaluate your online course progress."
              }
            }
          ]
        })}} />


      
        <TmtBanner />
        <TmtLongContent />
        <TmtFlow />
        <TmtPoints />
        <TmtFormContent />
        <TmtCoreFeatures />
        <TmtLongContent2 />
        <TmtFaq />
      </div>

  );
};

export default Page;