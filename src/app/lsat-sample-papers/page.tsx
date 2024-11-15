import React from 'react';
import LsatSampleContent from './LsatSampleContent';
import LsatStudyGuide from './LsatStudyGuide';
import LsatFaq from './LsatFaq';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Free LSAT Sample Paper for your practice',
  description: `Practice for the LSAT with expert-developed LSAT sample papers. Improve your reasoning skills and be well-prepared for a successful law school admission journey!`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/lsat-sample-papers",
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

      {/* Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Taking My Classes Online",
            "alternateName": "Takingmyclassesonline",
            "url": "https://takingmyclassesonline.com/lsat-sample-papers",
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

      {/* WebSite JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Taking My Classes Online",
            "alternateName": "Takingmyclassesonline",
            "url": "https://takingmyclassesonline.com/lsat-sample-papers",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.takingmyclassesonline.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />

      {/* Product JSON-LD */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "takingmyclassesonline",
            "image": "https://takingmyclassesonline.com/assets/weblogo.png",
            "description": "Practice for the LSAT with expert-developed LSAT sample papers. Improve your reasoning skills and be well-prepared for a successful law school admission journey!",
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

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How hard is the LSAT exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Because it places a strong focus on thinking and analytical abilities, the LSAT is regarded as one of the most difficult standardized examinations."
                }
              },
              {
                "@type": "Question",
                "name": "What is the most difficult exam, LSAT or MCAT?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The MCAT is easy to understand; it necessitates a thorough understanding of intricate medical and scientific concepts, which makes it more challenging than the LSAT exam."
                }
              },
              {
                "@type": "Question",
                "name": "How good are the 170 marks in the LSAT exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A score of 170 on the LSAT is nearly universally regarded as a respectable score. It places you in the 2-3% of test takers who achieve this level. It won't, however, ensure that you get into a prestigious law school."
                }
              },
              {
                "@type": "Question",
                "name": "How much do I need to get admission to Harvard?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The typical LSAT score for new students at Harvard is 174, whereas the lower 25th percent is 170 and the upper 75th percent is 176."
                }
              }
            ]
          }),
        }}
      />
      <LsatSampleContent />
      <LsatStudyGuide />
      <LsatFaq />
    </div>
  );
}

export default Page;
