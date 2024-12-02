// // components/builder.tsx
// "use client";
// import { ComponentProps } from "react";
// import { builder } from "@builder.io/sdk";
// import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

// // Replace with your Public API Key 
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

// type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// export function RenderBuilderContent(props: BuilderPageProps) {
//   // Call the useIsPreviewing hook to determine if
//   // the page is being previewed in Builder
//   const isPreviewing = useIsPreviewing();
//   // If "content" has a value or the section is being previewed in Builder,
//   // render the BuilderComponent with the specified content and model props.
//   if (props.content || isPreviewing) {
//     return <BuilderComponent {...props} />;
//   }

//   return null;
// }





















"use client";

import { ComponentProps } from "react";
import { builder } from "@builder.io/sdk";
import { BuilderComponent, useIsPreviewing } from "@builder.io/react";

// Initialize Builder.io with the Public API Key
builder.init("214dd31d17da4f0a8bc564282ec2e868");

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

export function RenderBuilderContent({ content, model, ...rest }: BuilderPageProps) {
  // Check if the page is in preview mode
  const isPreviewing = useIsPreviewing();
  

  if (content || isPreviewing) {
    return (
      <BuilderComponent
        content={content}
        model={model}
        {...rest} // Pass additional props if necessary
      />
    );
  }

  // Optional: Add a fallback UI for missing content
  return <div>No content available for the model "{model}".</div>;
}
