import React from 'react'
import ContactBanner from './ContactBanner'
import ContactForm from './ContactForm'
import { Metadata } from 'next';




export const metadata: Metadata = {
  title: 'Contact Us Now | Taking My Classes Online',
  description: `Hire now us for the taking my classes online with details project, give us all your requirement and filled up form.`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/contact-us",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const Page = () => {


  return (
    <div  >
        <ContactBanner/>
        <ContactForm/>
    </div>
  )
}

export default Page