"use client";
import { HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

import { gql } from "@apollo/client";
import { ReactNode } from "react";

const makeClient = () => {
  const httpLink = new HttpLink({
    uri: "https://us-west-2.cdn.hygraph.com/content/cmkxlqulm021h07uolbomenpq/master",
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
};

export const GET_PORTFOLIO_QUERY = gql`
  query MyQuery {
    assets(where: { isPortfolio: true }) {
      url
    }
  }
`;

export const GET_SERVICES_QUERY = gql`
  query MyQuery {
    services {
      name
      type
    }
  }
`;

export default function ApolloProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
