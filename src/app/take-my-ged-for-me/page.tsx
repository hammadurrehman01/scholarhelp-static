import React from 'react';
import GedBanner from './GedBanner';
import GedLongContent from './GedLongContent';
import GedFlow from './GedFlow';
import GedPoints from './GedPoints';
import GedFormContent from './GedFormContent';
import GedCoreFeatures from './GedCoreFeatures';
import GedLongContent2 from './GedLongContent2';
import GedFaq from './GedFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire GED Test Help Online, Take My GED Exam | Get A+ Score',
  description: `We can make it possible by providing you take the GED test online in many areas covered. GED exam has been going to online administration, get the best tutor.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/take-my-ged-for-me",
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
            "url": "https://takingmyclassesonline.com/take-my-ged-for-me",
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
            "url": "https://www.takingmyclassesonline.com/take-my-ged-for-me",
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
            "description": "We can make it possible by providing you take the GED test online in many areas covered. GED exam has been going to online administration, get the best tutor.",
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
                "name": "Can you help me to take my GED Test Online?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Taking my classes online.com is an amazing service to the students' community. We are not only here to help you take your GED test online but also assist you in various kinds of examinations."
                }
              },
              {
                "@type": "Question",
                "name": "Are you guaranteed to get passing marks on my GED Exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We will support each student during his academic life. In addition, we have a money-back guarantee in case we do not achieve the expected marks; this protects you from any loss."
                }
              },
              {
                "@type": "Question",
                "name": "Do you have any idea that the GED test is harder than high school?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard high school exam is often seen to be more difficult than the GED. However, This depends on your preparation and how well you understand the concept."
                }
              },
              {
                "@type": "Question",
                "name": "Why should I choose you for my GED test preparation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Choosing us for your GED test preparation will expertly coach and guide you through mock tests and quality study materials to enable you to prepare and do best in your exams."
                }
              },
              {
                "@type": "Question",
                "name": "How do I Register For The GED Test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "First, Create your GED account. Fill out the form and select your preferred subject, time and date according to your availability. By submitting the examination fee you will be eligible to attend the GED test."
                }
              },
              {
                "@type": "Question",
                "name": "What things should I take in the examination hall or is the calculator allowed in the test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You’re allowed to bring pens, pencils and a simple calculator. However, Scientific calculator, Digital gadgets are not permitted at the examination center."
                }
              }
            ]
          })
        }}
      />
      
      <GedBanner />
      <GedLongContent />
      <GedFlow />
      <GedPoints />
      <GedFormContent />
      <GedCoreFeatures />
      <GedLongContent2 />
      <GedFaq />
    </div>
  );
};

export default Page;
