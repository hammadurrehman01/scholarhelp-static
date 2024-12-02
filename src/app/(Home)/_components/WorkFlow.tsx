"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CtaButtons } from "./HeroSection";
import { useInView } from "react-intersection-observer";
import Aos from "aos";
import "aos/dist/aos.css";
import { BuilderComponent } from "@builder.io/react";

interface WorkflowProps {
  MainHeading?: string;
  SubHeading?: string;
  Tabheadingone?: string;
  Tabparaone?: string;
  Tabheadingtwo?: string;
  Tabparatwo?: string;
  Tabheadingthree?: string;
  Tabparathree?: string;
}

function WorkFlow({
  MainHeading,
  SubHeading,
  Tabheadingone,
  Tabparaone,
  Tabheadingtwo,
  Tabparatwo,
  Tabheadingthree,
  Tabparathree,
}: WorkflowProps) {
  const [activeTab, setActiveTab] = useState("1");

  const data = {
    MainHeading,
    SubHeading,
    Tabheadingone,
    Tabparaone,
    Tabheadingtwo,
    Tabparatwo,
    Tabheadingthree,
    Tabparathree,
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prevTab) => {
        const nextTab: any = {
          "1": "2",
          "2": "3",
          "3": "1",
        };
        return nextTab[prevTab];
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    Aos.init({
      duration: 800,
      disable: "mobile",
      offset: 100,
    });
  }, [inView]);

  return (
    <div ref={ref} data-aos="zoom-in" className="mx-auto max-w-screen-xl mt-10">
      <h2 className="text-center text-xl md:text-4xl font-extrabold dark:text-zinc-100 text-violet-950 px-4">
        {" "}
        {MainHeading}
      </h2>
      <h3 className="text-center text-lg md:text-2xl mt-2 px-4 font-extrabold dark:text-zinc-100 text-violet-950">
        {SubHeading}
      </h3>

      <div className="mt-8">
        <Tabs
          defaultValue={activeTab}
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList>
            <TabsTrigger value="1">1</TabsTrigger>
            <TabsTrigger value="2">2</TabsTrigger>
            <TabsTrigger value="3">3</TabsTrigger>
          </TabsList>

          <TabsContent value="1">
            <div className="grid lg:grid-cols-2 grid-cols-1 p-5">
              <div className="">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/imgs/workflow.webp"}
                    loading="eager"
                    width={600}
                    height={400}
                    alt="workflow"
                  ></Image>
                </div>
              </div>
              <div className="">
                <div className="flex justify-start items-center mt-5 lg:mt-20">
                  <h4 className="text-lg md:text-2xl font-bold dark:text-zinc-100 text-indigo-900 ">
                    {Tabheadingone}
                  </h4>
                </div>
                <p className="mt-2 md:mt-4 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900">
                  {" "}
                  {Tabparaone}
                </p>
                <CtaButtons />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="2">
            <div className="grid lg:grid-cols-2 grid-cols-1 p-5">
              <div className="">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/imgs/workflow_2.webp"}
                    loading="eager"
                    width={600}
                    height={400}
                    alt="workflow"
                  ></Image>
                </div>
              </div>
              <div className="">
                <div className="flex justify-start items-center mt-5 lg:mt-20">
                  <h4 className="text-lg md:text-2xl font-bold dark:text-zinc-100 text-indigo-900 ">
                    {Tabheadingtwo}
                  </h4>
                </div>
                <p className="mt-2 md:mt-4 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900">
                  {Tabparatwo}
                </p>
                <CtaButtons />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="3">
            <div className="grid lg:grid-cols-2 grid-cols-1 p-5">
              <div className="">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/imgs/workflow_4.webp"}
                    loading="eager"
                    width={600}
                    height={400}
                    alt="workflow"
                  ></Image>
                </div>
              </div>
              <div className="">
                <div className="flex justify-start items-center mt-5 lg:mt-20">
                  <h4 className="text-lg md:text-2xl font-bold dark:text-zinc-100 text-indigo-900 ">
                    {Tabheadingthree}
                  </h4>
                </div>
                <p className="mt-2 md:mt-4 md:text-xl text-sm font-medium dark:text-zinc-100 text-indigo-900">
                  {Tabparathree}
                </p>
                <CtaButtons />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export function WorkflowFromBuilder() {
  return <BuilderComponent model="workflow" />;
}

export default WorkFlow;
