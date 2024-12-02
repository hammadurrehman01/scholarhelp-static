"use client";
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page({ params }: PageProps) {
  const urlPath = "/" + (params?.page?.join("/") || "");

  const [heroContent, workflowContent] = await Promise.all([
    builder
      .get("hero", {
        userAttributes: { urlPath },
        cache: false,
        cachebust: true,
        staleCacheSeconds: 0,
      })
      .toPromise(),
    builder
      .get("workflow", {
        userAttributes: { urlPath },
        cache: false,
        cachebust: true,
        staleCacheSeconds: 0,
      })
      .toPromise(),
  ]);

  return (
    <>
      {heroContent && (
        <RenderBuilderContent content={heroContent} model="hero" />
      )}

      {workflowContent && (
        <RenderBuilderContent
          content={workflowContent}
          model="workflow"
          options={{ cachebust: true }}
        />
      )}
    </>
  );
}
