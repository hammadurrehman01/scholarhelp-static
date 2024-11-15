import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./(Home)/_components/Footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar2 from "./(Home)/_components/Navbar2";
import Tawkto from "@/lib/Tawto";
import ScrollToTop from "./ScrollToTop";
import Head from "next/head";
import TopBar from "./(Home)/TopBar";


const inter = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Export metadata including the static canonical URL
export const metadata: Metadata = {
  title: {
    template: "%s",
    default: "A+ Grade Guaranteed: Taking My Classes Online For Me in USA",
  },
  description: "Pay Someone to Taking My Classes Online for Me in USA! Having a dedicated team who can assist you in every single step for online class takers and A+ Grade Guaranteed!",
  alternates: {
  },
  openGraph: {
    type: "article",
    siteName: "Taking My Classes Online",
    images: [
      {
        url: "",
      },
    ],
    locale: "en",
  },
  twitter: {
    card: "summary",
    title: "A+ Grade Guaranteed: Take My Online Class For Me in USA",
    description: "Pay Someone to Take My Online Class for Me in USA! Having a dedicated team who can assist you in every single step for online class takers and A+ Grade Guaranteed!",
    images: ["https://www.takingmyclassesonline.com/images/og_TMCO.jpg?v=1"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="JSoGrXYc6cuAT5yG11GFtwN763nYU2uwlFBMya7pI98" />
        <meta property="og:site" content="https://takingmyclassesonline.com/" />
        <meta name="author" content="https://takingmyclassesonline.com/" />
        <meta name="language" content="English" />
        <meta name="copyright" content="Copyright 2024 @ Taking My Classes Online" />
        <meta property="og:image" content="https://takingmyclassesonline.com/assets/weblogo.png"/>
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.takingmyclassesonline.com/" />
        <meta property="article:publisher" content="https://www.facebook.com/takingmyclassesonline/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="Concerned about your online classes? Get online class assistance from our professionals. Our lectures, quizzes, tests, midterms, and final examinations." />
        <meta name="twitter:image" content="https://www.takingmyclassesonline.com/images/og_TMCO.jpg?v=1" />
        <meta name="twitter:title" content="A+ Grade Guaranteed: Take My Online Class For Me in USA" />
        <meta name="twitter:site" content="@takemyclas19231" />
        <meta name="twitter:creator" content="@takemyclas19231"/>
        <meta name="expires" http-equiv="Expires" content="" />
        <meta property="og:image" content=""/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="msvalidate.01" content="D56CF647A902FCA3278A894778A65D88" />
        <meta name="theme-color" content="#4947ea" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Taking My Classes Online" />
        <link rel="alternate" hrefLang="x-default" href="https://www.takingmyclassesonline.com/" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-CN4F3PYZJW"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CN4F3PYZJW');
            `,
          }}
        />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Organization",
              "name": "Academic Writing Services For Students By Professionals",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "12"
              },
              "brand": {
                "@type": "EducationalOrganization",
                "name": "Taking My Classes Online"
              },
              "url": "https://takingmyclassesonline.com/",
              "logo": ""
            }),
          }}
        /> */}
 
      </head>
  
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Tawkto />
          <ScrollToTop />
          <TopBar/>
          <Navbar2 />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}