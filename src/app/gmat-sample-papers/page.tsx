import React from 'react'
import GmatSampleContent from './GmatSampleContent'
import GmatStudyGuide from './GmatStudyGuide'
import GmatFaq from './GmatFaq'
import { Metadata } from 'next'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'GMAT Sample Paper and Practice questions for you',
  description: `Get ready for the GMAT exam with high-quality GMAT sample papers that covers all the essential topics. Start practicing today and enhance your GMAT performance with focused preparation!`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/gmat-sample-papers",
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
}

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
              "url": "https://takingmyclassesonline.com/gmat-sample-papers",
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
              "url": "https://takingmyclassesonline.com/gmat-sample-papers",
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
              "name": "takingmyclassesonline",
              "image": "https://takingmyclassesonline.com/assets/weblogo.png",
              "description": "Get ready for the GMAT exam with high-quality GMAT sample papers that covers all the essential topics. Start practicing today and enhance your GMAT performance with focused preparation!",
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
                  "name": "Is the GMAT examination hard?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The Graduate Management Admission Test, or GMAT, is often regarded as a difficult test. The average GMAT score is between the 52nd and 55th percentile, at 574.51 out of 800, or 71.8% which is quite a challenging task to achieve."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is considered good marks in the GMAT exams?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Averaging more than 70% is considered to be a good mark, which can be earned after effective preparation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the syllabus of the GMAT?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Arithmetic, algebra, geometry, reading comprehension, critical thinking, and sentence correction are all covered in the GMAT curriculum"
                  }
                }
              ]
            })
          }}
        />
 
        <GmatSampleContent />
        <GmatStudyGuide />
        <GmatFaq />
      </div>
 
  )
}

export default Page
