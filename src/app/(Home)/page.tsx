import "aos/dist/aos.css";
import { Metadata } from "next";
import AboutContent from "./_components/AboutContent";
import Academic from "./_components/Academic";
import Faq from "./_components/Faq";
import FormContent from "./_components/FormContent";
import { HeroSectionFromBuilder } from "./_components/HeroSection";
import LongContent from "./_components/LongContent";
import Rating from "./_components/Rating";
import Sample from "./_components/Sample";
import SmallDivider from "./_components/SmallDivider";
import TrustReview from "./_components/TrustReview";
import WhyUs from "./_components/WhyUs";
import { WorkflowFromBuilder } from "./_components/WorkFlow";

export const metadata: Metadata = {
  title: "Take My Online Class for me",
  description:
    "Pay Someone to Taking My Classes Online for Me in USA! Having a dedicated team who can assist you in every single step for online class takers and A+ Grade Guaranteed!",
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/",
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

const Page = () => {
  return (
    <div>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Taking My Classes Online",
            alternateName: "Takingmyclassesonline",
            url: "https://www.takingmyclassesonline.com",
            logo: "https://takingmyclassesonline.com/assets/weblogo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 9179331132",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.instagram.com/takingmyclassesonline/",
              "https://www.facebook.com/takingmyclassesonline/",
              "https://www.pinterest.com/takingmyclassesonline/",
              "https://x.com/takemyclas19231/",
              "https://www.linkedin.com/company/takingmyclassesonline/",
              "https://www.youtube.com/@takingmyclassesonline",
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "Taking My Classes Online",
            alternateName: "Takingmyclassesonline",
            url: "https://www.takingmyclassesonline.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.takingmyclassesonline.com/search?q={search_term_string}",
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
            name: "takingmyclassesonline",
            image: "https://takingmyclassesonline.com/assets/weblogo.png",
            description:
              "Pay Someone to Taking My Classes Online for Me in USA! Having a dedicated team who can assist you in every single step for online class takers and A+ Grade Guaranteed!",
            brand: {
              "@type": "Brand",
              name: "Taking My Classes Online",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              ratingCount: "36",
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
            mainEntity: [
              {
                "@type": "Question",
                name: "What type of service is this, 'Taking My Classes Online'?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "This is an online class service, and it is designed to help students to ace their exams throughout the USA. This service innovates students’ minds and polishes their skills to secure high grades in their academic exams and lead their academic journey.",
                },
              },
              {
                "@type": "Question",
                name: "Is there any surety of a high grade?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our experience and expertise as an online instructor are the key elements for securing high scores. So, you don’t need to worry about your grades after joining our online classes.",
                },
              },
              {
                "@type": "Question",
                name: "Do you take an online class for me through the entire coursework?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Through our online platform, we offer a complete solution to our customers. We guarantee that you will cover the entire syllabus and coursework.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer any special discount?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer 40% off on your first order. As well as we also announce seasonal promotions to our customers. You can also utilize a 10% discount on every online course.",
                },
              },
              {
                "@type": "Question",
                name: "Do you have any kind of refund policy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you are not satisfied, you are eligible to claim our refund policy. You can also claim it when we didn’t cover your course outlines and couldn’t develop your learning skills.",
                },
              },
              {
                "@type": "Question",
                name: "Is 'take my class for me' a legal service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We are a legally verified, registered, and trusted online service.",
                },
              },
              {
                "@type": "Question",
                name: "Will my identity be confidential while taking online classes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We prioritize our customers' privacy and confidential information, so don’t worry about privacy while engaging with our services.",
                },
              },
              {
                "@type": "Question",
                name: "How am I sure of the progress of my course online?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Firstly, you need to identify your strengths and weaknesses. Secondly, monitor your improvement over time. Thirdly, stay motivated and focused. Furthermore, adjust your study plan and strategies. Through these minor steps, you can evaluate your online course progress.",
                },
              },
            ],
          }),
        }}
      />

      {/* Page Components */}
      {/* <HeroSection /> */}
      <HeroSectionFromBuilder />
      {/* <WorkFlow /> */}
      <WorkflowFromBuilder />
      <AboutContent />
      <FormContent />
      <LongContent />
      <WhyUs />
      <Faq />
      <SmallDivider />
      <TrustReview />
      <Rating />
      <Academic />
      <Sample />
    </div>
  );
};

export default Page;
