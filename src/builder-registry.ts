"use client";
import { builder, Builder } from "@builder.io/react";
import { HeroSection } from "./app/(Home)/_components/HeroSection";
import WorkFlow from "./app/(Home)/_components/WorkFlow";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
  inputs: [
    {
      name: "Bullet1",
      type: "string",
    },
    {
      name: "Bullet2",
      type: "string",
    },
    {
      name: "Bullet3",
      type: "string",
    },
    {
      name: "MainHeading",
      type: "string",
    },
    {
      name: "SubHeading",
      type: "string",
    },
    {
      name: "Ordernowbtn",
      type: "string",
    },
    {
      name: "Chatonwhatsappbtn",
      type: "string",
    },
    {
      name: "Formtopbar",
      type: "string",
    },
    {
      name: "Formheading",
      type: "string",
    },
    {
      name: "Inputone",
      type: "string",
    },
    {
      name: "Inputtwo",
      type: "string",
    },
    {
      name: "Inputthree",
      type: "string",
    },
    {
      name: "Formbutton",
      type: "string",
    },
    {
      name: "Metatitle",
      type: "string",
    },
    {
      name: "Metadescription",
      type: "string",
    },
    {
      name: "Canonical",
      type: "string",
    },
  ],
});

Builder.registerComponent(WorkFlow, {
  name: "WorkFlow",
  inputs: [
    {
      name: "Mainheading",
      type: "string",
    },
    {
      name: "Subheading",
      type: "string",
    },
    {
      name: "Tabheadingone",
      type: "string",
    },
    {
      name: "Tabparaone",
      type: "string",
    },
    {
      name: "Tabheadingtwo",
      type: "string",
    },
    {
      name: "Tabparatwo",
      type: "string",
    },
    {
      name: "Tabheadingthree",
      type: "string",
    },
    {
      name: "Tabparathree",
      type: "string",
    },
  ],
});
