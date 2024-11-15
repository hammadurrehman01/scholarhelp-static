import React from 'react';
import TmGreExamBanner from './TmGreExamBanner';
import TmGreExamLC from './TmGreExamLC';
import TmGreExamFlow from './TmGreExamFlow';
import TmGreExamPoints from './TmGreExamPoints';
import TmGreExamFc from './TmGreExamFc';
import TmGreExamLC2 from './TmGreExamLC2';
import TmGreExamFAQ from './TmGreExamFAQ';
import TmGreCf from './TmGreCf';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get the Best GRE Exam Online Exam | A+ Score Guaranteed',
  description: 'Secure and accurate GRE Exam at home, by preparation of takingmyclassesonline.com with their mock test, sample papers, and proper guidance to the students.',
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/take-my-gre-exam",
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
            "url": "https://takingmyclassesonline.com/take-my-gre-exam",
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
            "url": "https://www.takingmyclassesonline.com/take-my-gre-exam",
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
            "description": "Secure and accurate GRE Exam at home, by preparation of takingmyclassesonline.com with their mock test, sample papers, and proper guidance to the students.",
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
                "name": "Can I take the GRE test online? Do you have any assistance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! You can take the GRE online from home. Takemyclassesonline can be one of the finest websites to help you with their services. The instructors are highly certified and professional which helps students to assist them in their exams and throughout their educational journey."
                }
              },
              {
                "@type": "Question",
                "name": "What is the procedure to take the GRE Exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The following steps are involved to register for the GRE Exam. Create an account, select time and date, enter your personal information and pay the examination fee to enroll in the exam. By following these easy steps you’re allowed to take the GRE test as per your required date and time."
                }
              },
              {
                "@type": "Question",
                "name": "Should I take the GRE Test from home?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Taking the GRE Test from home will be beneficial, as it will save your traveling time and also help you to assist in your exams. Getting exam takers for hire will benefit you to get higher marks."
                }
              },
              {
                "@type": "Question",
                "name": "How much does it cost to register for the GRE Test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The cost may vary by subject, averaging around $150 to $220. You can check it on the GRE website. By availing of our services, you’ll be able to get GRE exam test help and additional assistance to earn good grades."
                }
              },
              {
                "@type": "Question",
                "name": "Are there any disability accommodations in the GRE Exam?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Candidates can choose between a refreshable braille device or JAWS in order to take the GRE General Test. The test centers of the US and other countries provide this assistance for such candidates on their websites as well."
                }
              },
              {
                "@type": "Question",
                "name": "Is there any chance of retaking the GRE General Test?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can retake if you don't like your scores! ETS permits retaking the test every 21 days, up to five times a year. This provides you an excellent opportunity to improve your scores, so ensure you’re fully prepared for each retake."
                }
              }
            ]
          })
        }}
      />

      {/* Page Components */}
      <TmGreExamBanner />
      <TmGreExamLC />
      <TmGreExamFlow />
      <TmGreExamPoints />
      <TmGreExamFc />
      <TmGreCf />
      <TmGreExamLC2 />
      <TmGreExamFAQ />
    </div>
  );
};

export default Page;