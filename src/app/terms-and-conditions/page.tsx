import React from 'react'
import TermBanner from './TermBanner'
import TermSection from './TermSection'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Terms and Condition for Taking My Classes Online',
  description: `Takingmyclassesonline.com Applied terms and condition for the customers, should read very carefully each and everything on this page. `,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/terms-and-conditions",
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

function Page() {
  return (
    <div>
        <TermBanner/>
        <TermSection/>
    </div>
  )
}

export default Page