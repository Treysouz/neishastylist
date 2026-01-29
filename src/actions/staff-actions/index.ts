"use cache";

import { cacheLife } from "next/cache";

interface MockUser {
  id: number;
  firstName: string;
  lastName: string;
  company: {
    title: string;
  };
}

export const getMockStaff = async (): Promise<
  { users: MockUser[] } | undefined
> => {
  cacheLife("days");
  try {
    const response = await fetch("https://dummyjson.com/users");

    return response.json();
  } catch (error) {
    console.error(error);
  }
};
