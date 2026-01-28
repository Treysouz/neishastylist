import { Suspense } from "react";
import { SectionWrapper, SectionHeader } from "..";
import { Content } from "./components";
import { Fallback } from "@/components";

export default function WorkSection() {
  return (
    <SectionWrapper
      id="work"
      className="px-2 sm:px-6 xl:px-14 py-8 space-y-8 xl:py-16 xl:space-y-16"
    >
      <SectionHeader>Our Work</SectionHeader>
      <Suspense fallback={<Fallback />}>
        <Content />
      </Suspense>
    </SectionWrapper>
  );
}
