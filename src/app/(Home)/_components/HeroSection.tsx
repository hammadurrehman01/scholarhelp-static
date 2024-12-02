"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import BannerForm from "./BannerForm";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";
import { BuilderComponent, builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface HeroSectionProps {
  MainHeading?: string;
  SubHeading?: string;
  Bullet1?: string;
  Bullet2?: string;
  Bullet3?: string;
  Ordernowbtn?: string;
  Chatonwhatsappbtn?: string;
  Formtopbar?: string;
  Formheading?: string;
  Inputone?: string;
  Inputtwo?: string;
  Inputthree?: string;
  Formbutton?: string;
  Metatitle?: string;
  Metadescription?: string;
  Canonical?: string;
}

export const HeroSection = ({
  MainHeading,
  SubHeading,
  Bullet1,
  Bullet2,
  Bullet3,
  Ordernowbtn,
  Chatonwhatsappbtn,
  Formtopbar,
  Formheading,
  Inputone,
  Inputtwo,
  Inputthree,
  Formbutton,
  Metatitle,
  Metadescription,
  Canonical,
}: HeroSectionProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const heroData = {
    MainHeading,
    SubHeading,
    Bullet1,
    Bullet2,
    Bullet3,
    Ordernowbtn,
    Chatonwhatsappbtn,
    Formtopbar,
    Formheading,
    Inputone,
    Inputtwo,
    Inputthree,
    Formbutton,
    Metatitle,
    Metadescription,
    Canonical,
  };

  console.log("heroData ==>", heroData);

  useEffect(() => {
    Aos.init({
      duration: 800,
      disable: "mobile",
      offset: 100,
    });
  }, [inView]);
  2;
  return (
    <div
      ref={ref}
      className="m-h-[500px] border-b-2 border-indigo-200 -z-10 h-full w-full bg-gradient-to-t from-sky-200 via-purple-200 to-zinc-100 dark:-z-10 dark:m-h-[500px] dark:w-full dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    >
      <head>
        <meta title="title" content="Take My Online Class for me" />
      </head>
      <div className="grid lg:grid-cols-2 grid-cols-1 mx-auto max-w-screen-xl py-10 ">
        <div className="py-20 px-5 ">
          <h1 className=" text-center py-2 lg:text-left dark:text-zinc-100 text-zinc-900 text-lg sm:text-4xl font-extrabold ">
            {MainHeading}
          </h1>
          <h2 className="text-center mt-2 lg:text-left dark:text-zinc-100 text-zinc-900  sm:text-2xl font-medium">
            {SubHeading}
          </h2>
          <div className="flex flex-col lg:flex-row items-center xl:w-[50vw] gap-4 sm:mt-2 mt-6">
            <div className="flex items-center gap-4">
              <Image
                src={"/imgs/instructor.png"}
                width={64}
                height={64}
                alt="instructor"
              ></Image>
              <h3 className="text-center dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
                {Bullet1}
              </h3>
              <div className="hidden lg:block w-[2px] h-20 bg-muted-foreground "></div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={"/imgs/record.png"}
                width={64}
                height={64}
                alt="record"
              ></Image>
              <h3 className="text-left dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
                {Bullet2}
              </h3>
              <div className="hidden lg:block w-[2px] h-20 bg-muted-foreground "></div>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={"/imgs/affordable.png"}
                width={64}
                height={64}
                alt="phd"
              ></Image>
              <h3 className="ml-1 dark:text-zinc-100 text-zinc-900 text-sm md:text-base font-medium">
                {Bullet3}
              </h3>
              <div className="hidden lg:block w-[2px] h-16 bg-muted-foreground/0 "></div>
            </div>
          </div>
          <CtaButtons
            Ordernowbtn={Ordernowbtn}
            Chatonwhatsappbtn={Chatonwhatsappbtn}
          />
        </div>

        <div className="pb-5 px-5 md:pt-12">
          <BannerForm
            Formtopbar={Formtopbar}
            Formheading={Formheading}
            Inputone={Inputone}
            Inputtwo={Inputtwo}
            Inputthree={Inputthree}
            Formbutton={Formbutton}
          />
        </div>
      </div>
    </div>
  );
};

export function HeroSectionFromBuilder() {
  return <BuilderComponent model="hero" />;
}

interface ButtonProps {
  Ordernowbtn?: string;
  Chatonwhatsappbtn?: string;
}

export function CtaButtons({ Ordernowbtn, Chatonwhatsappbtn }: ButtonProps) {
  return (
    <div className="flex flex-col md:flex-row lg:justify-start justify-center items-center mt-5 scale-90 md:scale-100">
      <Link href={"/order-now"}>
        <div
          className="flex justify-center items-center border-[2px] border-zinc-400 bg-zinc-100
    transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl m-2"
        >
          <Image src={"/imgs/order.png"} width={35} height={35} alt="order" />
          <button className="font-medium ml-2 text-zinc-800 md:text-base text-sm ">
            {Ordernowbtn}
          </button>
        </div>
      </Link>

      <Link
        href={
          "https://wa.me/19179331132?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className="flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800
transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2"
        >
          <Image
            src={"/imgs/whatsapp.png"}
            width={25}
            height={25}
            alt="whatsapp"
          />
          <button className="font-medium ml-2 text-background md:text-base text-sm">
            {Chatonwhatsappbtn}
          </button>
        </div>
      </Link>
    </div>
  );
}

export function CtaChat() {
  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center mt-5 scale-90 md:scale-100">
      <div
        className="flex justify-center items-center border-[2px] border-zinc-400 bg-indigo-500 transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-2 px-4 rounded-xl m-2 cursor-pointer"
        onClick={openChat}
      >
        <Image src="/imgs/chat.png" width={32} height={32} alt="chat" />
        <button className="font-medium ml-2 text-zinc-100 md:text-base text-sm">
          Chat Now
        </button>
      </div>

      <Link
        href="https://wa.me/19179331132?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-center items-center border-[2px] dark:bg-zinc-100 bg-zinc-800 transition ease-in duration-200 delay-200 hover:scale-105 hover:shadow-lg py-3 px-4 rounded-xl m-2">
          <Image
            src="/imgs/whatsapp.png"
            width={25}
            height={25}
            alt="whatsapp"
          />
          <button className="font-medium ml-2 text-background md:text-base text-sm">
            Chat On Whatsapp
          </button>
        </div>
      </Link>
    </div>
  );
}
