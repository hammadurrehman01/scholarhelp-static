import React from 'react';
import Head from 'next/head';
import LSATBanner from './LSATBanner';
import LSATLongContent from './LSATLongContent';
import LSATFlow from './LSATFlow';
import LSATPoints from './LSATPoints';
import LSATFormContent from './LSATFormContent';
import LSATCoreFeature from './LSATCoreFeature';
import LSATLongContent2 from './LSATLongContent2';
import LSATFaq from './LSATFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Someone to Take My LSAT Exam for Me: High Grade Result',
  description: 'Most of the schools required applicants to take the LSAT exam, for the fall admission. We offer the preparation of the same LSAT test at affordable prices.',
  alternates: {
    canonical: 'https://www.takingmyclassesonline.com/lsat-exam-prep',
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

function Page() {
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
              "url": "https://takingmyclassesonline.com/lsat-exam-prep",
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
              ]
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
              "url": "https://takingmyclassesonline.com/lsat-exam-prep",
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
              "description": "Most of the schools required applicants to take the LSAT exam, for the fall admission. We offer preparation for the same LSAT test at affordable prices.",
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
                  "name": "How long does the LSAT take?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The standard duration of the LSAT exam is approximately 3 hours. Dividing your time between these portions might help you handle your test more efficiently.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How much does it cost to take the LSAT exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The LSAT exam costs between $200 and $250, varying by region. You can check the LSAT website for the latest fee details.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How do I apply for the LSAT exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Create your LSAT account, select the dates and location, and reserve your examination seat by paying the examination fees.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Is the bar exam more difficult than the LSAT?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Both exams are challenging, but the bar exam is considered more difficult because it covers a broader range of legal topics.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Do you have the LSAT 2025 exam date sheet or list?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "LSAT exams are offered year-round, so you can register and select dates that suit your schedule.",
                  },
                },
              ],
            }),
          }}
        />
     
      
        <LSATBanner />
        <LSATLongContent />
        <LSATFlow />
        <LSATPoints />
        <LSATFormContent />
        <LSATCoreFeature />
        <LSATLongContent2 />
        <LSATFaq />
        </div>
    
  );
};

export default Page;
