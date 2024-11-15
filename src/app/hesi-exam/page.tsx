import React from 'react';
import HesiBanner from './HesiBanner';
import HesiExamLC from './HesiExamLC';
import HesiFlow from './HesiFlow';
import HesiPoints from './HesiPoints';
import HesiFormContent from './HesiFormContent';
import HesiCoreFeatures from './HesiCoreFeatures';
import HesiLC2 from './HesiLC2';
import HesiFaq from './HesiFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire Expert for HESI A2 Exam | Take My HESI Test for Me Online',
  description: `Are you seeking a reliable and trustworthy way to take my HESI exam OR A2 online! From takingmyclassesonline.com with experts and tailored study plans.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/hesi-exam",
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
      {/* JSON-LD Schema Markup for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Taking My Classes Online",
            "alternateName": "Takingmyclassesonline",
            "url": "https://takingmyclassesonline.com/hesi-exam",
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
      
      {/* JSON-LD Schema Markup for Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Taking My Classes Online",
            "alternateName": "Takingmyclassesonline",
            "url": "https://www.takingmyclassesonline.com/hesi-exam",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.takingmyclassesonline.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      {/* JSON-LD Schema Markup for Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "Taking My Classes Online",
            "image": "https://takingmyclassesonline.com/assets/weblogo.png",
            "description": "Are you seeking a reliable and trustworthy way to take my HESI exam OR A2 online? From takingmyclassesonline.com with experts and tailored study plans.",
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

      {/* JSON-LD Schema Markup for FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Do you have any experts who can give me preparation for the HESI A2 exam?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Takingmyclassesonline.com provides its prime service to every student seeking advice from experts and better marks in their HESI exams."
              }
            },{
              "@type": "Question",
              "name": "Is 10 days enough time to prepare for the HESI test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In general, exam preparation depends on your understanding of the subject. A minimum of 1 week is recommended for general subjects."
              }
            },{
              "@type": "Question",
              "name": "How many attempts are allowed for the HESI test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can attempt the HESI exams up to two times in a period of two years. Some institutions allow up to three attempts."
              }
            },{
              "@type": "Question",
              "name": "Is the HESI exam tough for nurses?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "It depends on your knowledge and learning skills. It can be challenging as it tests critical thinking and nursing concepts."
              }
            },{
              "@type": "Question",
              "name": "Do you have any kind of refund policy?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "If you are not satisfied, you are eligible for a refund under certain conditions, such as incomplete course outlines or unfulfilled learning expectations."
              }
            },{
              "@type": "Question",
              "name": "Is Calculator Allowed in HESI Test?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you can use a calculator, but scientific calculators are prohibited during the HESI exam."
              }
            },{
              "@type": "Question",
              "name": "Will my identity be confidential while taking online classes?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We prioritize customer privacy and confidentiality, ensuring your information remains secure while using our services."
              }
            },{
              "@type": "Question",
              "name": "Do you receive scratch paper for the HESI?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you are allowed one pencil, scratch paper, and a basic calculator during the HESI exam."
              }
            }]
          })
        }}
      />
      
      {/* Page Content */}
      <HesiBanner />
      <HesiExamLC />
      <HesiFlow />
      <HesiPoints />
      <HesiFormContent />
      <HesiCoreFeatures />
      <HesiLC2 />
      <HesiFaq />
    </div>
  );
}

export default Page;
