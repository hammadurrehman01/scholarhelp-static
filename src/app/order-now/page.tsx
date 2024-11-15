import React from 'react'
import Order from './Order'
import { TopicProvider } from '../TopicContext'
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Order Now | Taking My Classes Online',
  description: `Taking my classes online order form with complete details. So, hire professionals to take my class online. ⭐⭐⭐⭐⭐`,
  alternates: {
    canonical: "https://www.takingmyclassesonline.com/order-now",
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
      <TopicProvider>
        <Order/>
      </TopicProvider>
 
    </div>
  )
}

export default Page