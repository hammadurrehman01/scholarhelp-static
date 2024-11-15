import React from 'react';
import TGmatBanner from './TGmatBanner';
import TGMATLongContent from './TGMATLongContent';
import TGmatFlow from './TGmatFlow';
import TGmatPoints from './TGmatPoints';
import TGmatFormContent from './TGmatFormContent';
import TGmatCf from './TGmatCf';
import TGmatLC2 from './TGmatLC2';
import TGmatFAQ from './TGmatFAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hire an Expert to Take My GMAT Exam for Me | Surety A+ Result',
  description: 'Takingmyclassesonline.com offers take my GMAT exam for me with Installment fees option, Location must be mentioned of your area for taking the online exam.',
  alternates: {
    canonical: 'https://www.takingmyclassesonline.com/take-gmat-online-exam',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Taking My Classes Online',
            alternateName: 'Takingmyclassesonline',
            url: 'https://takingmyclassesonline.com/take-gmat-online-exam',
            logo: 'https://takingmyclassesonline.com/assets/weblogo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1 9179331132',
              contactType: 'customer service',
            },
            sameAs: [
              'https://www.instagram.com/takingmyclassesonline/',
              'https://www.facebook.com/takingmyclassesonline/',
              'https://www.pinterest.com/takingmyclassesonline/',
              'https://x.com/takemyclas19231/',
              'https://www.linkedin.com/company/takingmyclassesonline/',
              'https://www.youtube.com/@takingmyclassesonline',
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'WebSite',
            name: 'Taking My Classes Online',
            alternateName: 'Takingmyclassesonline',
            url: 'https://www.takingmyclassesonline.com/take-gmat-online-exam',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.takingmyclassesonline.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Product',
            name: 'Taking My Classes Online',
            image: 'https://takingmyclassesonline.com/assets/weblogo.png',
            description: 'Takingmyclassesonline.com offers take my GMAT exam for me with Installment fees option, Location must be mentioned of your area for taking the online exam.',
            brand: {
              '@type': 'Brand',
              name: 'Taking My Classes Online',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '36',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: "Check out How you 'take my GMAT exam' works?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'takingmyclassesonline.com provides comprehensive guidance for GMAT exam preparation and support.',
                },
              },
              {
                '@type': 'Question',
                name: "Can You 'Take My GMAT Exam' Online and Support My Learning Journey?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our experienced instructors provide essential support for excelling in GMAT exams and achieving academic goals.',
                },
              },
              {
                '@type': 'Question',
                name: 'What Kind of Strategies Can Help Me Succeed In A GMAT Exam?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our experts offer remote lectures, allowing you to attend online sessions, clarify doubts, and maximize GMAT success.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is there an option to pay in installments for my GMAT exam?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, takingmyclassesonline.com offers flexible payment options, including installments, ensuring accessibility for all students.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I know I can trust you with my GMAT exam?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Our track record and positive reviews reflect the successful support we provide. Our experts are committed to your academic success.',
                },
              },
              {
                '@type': 'Question',
                name: 'How Can I Request You to "Take My GMAT Exam"?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simply follow our easy steps to hire a GMAT expert, and get access to our tailored support for your exam preparation.',
                },
              },
            ],
          }),
        }}
      />
      {/* Page Components */}
      <TGmatBanner />
      <TGMATLongContent />
      <TGmatFlow />
      <TGmatPoints />
      <TGmatFormContent />
      <TGmatCf />
      <TGmatLC2 />
      <TGmatFAQ />
    </div>
  );
};

export default Page;