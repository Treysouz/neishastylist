"use client";

import { ErrorBoundary, Carousel } from "@/components";
import { GET_PORTFOLIO_QUERY } from "@/apollo";
import { useSuspenseQuery } from "@apollo/client/react";
import { HygraphAsset } from "@/types/hygraph.types";

export default function Content() {
  const { data, error } = useSuspenseQuery<{ assets: HygraphAsset[] }>(
    GET_PORTFOLIO_QUERY,
    {
      errorPolicy: "all",
    }
  );
  if (error) {
    return <ErrorBoundary svg="x-mark" header={error.message} />;
  }
  return <Carousel imageUrls={data?.assets || []} />;
}
