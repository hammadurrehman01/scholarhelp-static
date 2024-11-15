import React from 'react'
import RefundPolicy from './RefundPolicy'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Refund Policy - Taking My Classes Online',
    description: `Terms and Conditions, A client sheall be eligible for refund under the following cases: In case all the requirements are shared by the client initially, which are not met even after 5 revisions. In case a deadline is missed deviating from the original agreed upon commitment. It is mandatory to share a detailed comprehensively.`,
    alternates: {
      canonical: "https://www.takingmyclassesonline.com/refund-policy",
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

function page() {
  return (
    <div>
        <RefundPolicy/>
    </div>
  )
}

export default page