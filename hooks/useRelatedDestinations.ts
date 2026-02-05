"use client";

import useSWR from "swr";
import fetcher from "@/libs/fetcher";


const useRelatedDestinations = () => {
  const { data, error, isLoading, mutate } = useSWR(`/api/destinations/recent`, fetcher)

  return { main: data?.main, related: data?.related, error, isLoading, mutate }
}

export default useRelatedDestinations
