import React from 'react';
import GedSampleContent from './GedSampleContent';
import GedStudyGuide from './GedStudyGuide';
import GedFaq from './GedFaq';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Free GED Sample Paper - Boost Your Learning Experience',
  description: `Ace your exam with our premium GED sample papers. Practice essential topics, strengthen your skills, and gain the confidence to pass with flying colors`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/ged-sample-papers",
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
              "url": "https://takingmyclassesonline.com/ged-sample-papers",
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
              "url": "https://takingmyclassesonline.com/ged-sample-papers",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.takingmyclassesonline.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
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
              "description": "Ace your exam with our premium GED sample papers. Practice essential topics, strengthen your skills, and gain the confidence to pass with flying colors",
              "brand": {
                "@type": "Brand",
                "name": "Taking My Classes Online"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "36"
              }
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
                  "name": "What kind of questions have been asked in the GED Exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The standard multiple-choice, drag-and-drop, fill-in-the-blank, hot spot, and drop-down questions are included in Parts 1 and 3 of the test. The written essay in part two has a 45-minute time limit. There are no interruptions in the Social Studies test because it consists of a single section"
                  }
                },
                {
                  "@type": "Question",
                  "name": "How hard is the GED exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on the individual's preparation for the exams and how he tackles the exam. The GED exam evaluates students to write down the two opposing arguments and compose an essay that evaluates both of the processes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I use the calculator?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can use the simple calculator. However, any kind of smart gadget is not allowed in the examination centre."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the easiest subject in the GED exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Many students begin with the reasoning subtest in language arts and move on to mathematics as their final subtest."
                  }
                }
              ]
            }),
          }}
        />

        <GedSampleContent />
        <GedStudyGuide />
        <GedFaq />
      </div>
  );
}

export default Page;