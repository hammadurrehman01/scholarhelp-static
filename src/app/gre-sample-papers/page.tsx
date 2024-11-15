import React from 'react';
import Head from 'next/head';
import GreSampleContent from './GreSampleContent';
import StudyGuide from './StudyGuide';
import GreFaq from './GreFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GRE Sample Paper with Proper Guide',
  description: `Prepare with our GRE sample papers designed for effective practice and score improvement. Access high-quality questions and boost your confidence before test day.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/gre-sample-papers",
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

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Taking My Classes Online",
              "alternateName": "Takingmyclassesonline",
              "url": "https://takingmyclassesonline.com/gre-sample-papers",
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

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              "name": "Taking My Classes Online",
              "alternateName": "Takingmyclassesonline",
              "url": "https://takingmyclassesonline.com/gre-sample-papers",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.takingmyclassesonline.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": "takingmyclassesonline",
              "image": "https://takingmyclassesonline.com/assets/weblogo.png",
              "description": metadata.description,
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

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How hard is the GRE exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Every exam has its significant value. It all depends on the preparation of a student and how well they prepared for it. One of the sections might be challenging while the other may be easy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What numbers are considered to be good in the GRE?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Collectively more than 75% or higher is considered a good score, compiling 158+ for quantitative, 159+ for verbal, and 4.5 for writing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How costly is the GRE exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The fee varies from location to location, ranging from 150$ to 210$. This fee is required to register yourself for the examination."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the consequences of failing the GRE exam?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "There is no such thing as failure in the GRE exam. You’re always eligible to take a re-test in order to achieve better results."
                  }
                }
              ]
            })
          }}
        />
 
      
      <GreSampleContent />
      <StudyGuide />
      <GreFaq />
    </div>
  );
};

export default Page;
