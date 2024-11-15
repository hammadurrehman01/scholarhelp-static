import React from 'react';
import PteBanner from './PteBanner';
import PteLongContent from './PteLongContent';
import PteFlow from './PteFlow';
import PtePoints from './PtePoints';
import PteFormContent from './PteFormContent';
import PteCoreFeatures from './PteCoreFeatures';
import PteLongContent2 from './PteLongContent2';
import PteFaq from './PteFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PTE Academic English Test Online | Guaranteed Best Score',
  description: `Get the complete guide to the PTE Academic Test online from the industry professionals for the USA. Helping to pass with 100% A+ Score guaranteed results.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/pte-academic-online",
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
            "url": "https://takingmyclassesonline.com/pte-academic-online",
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
            "url": "https://www.takingmyclassesonline.com/pte-academic-online",
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
            "description": "Get the complete guide to the PTE Academic Test online from the industry professionals for the USA. Helping to pass with 100% A+ Score guaranteed results.",
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
            "mainEntity": [{
              "@type": "Question",
              "name": "Is 50% deposit required for the PTE exam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, A 50% deposit is initially required to preserve your registration for the PTE exams. However, policies may differ from location to location."
              }
            },{
              "@type": "Question",
              "name": "Do I have an option to score into the public?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Certainly, The official PTE platform doesn't automatically make scores public. However, You can choose to share your score with specific organizations."
              }
            },{
              "@type": "Question",
              "name": "Do you offer online study materials for the PTE Exam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! Our experts provide resources to our students to not only pass in the PTE exam but also help them to achieve higher scores."
              }
            },{
              "@type": "Question",
              "name": "Do you offer tutors for PTE exam preparation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! takingmyclassesonline.com has been offering its service for over a decade to support the student community in their academic stress and help them to score big in every exam format."
              }
            },{
              "@type": "Question",
              "name": "Is the PTE exam tough for the student?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Certainly, it depends on the student's preparation as to how he prepared for the exams and how strong their concepts are."
              }
            },{
              "@type": "Question",
              "name": "Any installment for the preparation of the PTE test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our aim is to provide high-quality services to our student community at reasonable pricing, ensuring that every student has access to the greatest assistance at a low cost."
              }
            }]
          })
        }}
      />
      <PteBanner />
      <PteLongContent />
      <PteFlow />
      <PtePoints />
      <PteFormContent />
      <PteCoreFeatures />
      <PteLongContent2 />
      <PteFaq />
    </div>
  );
}

export default Page;
