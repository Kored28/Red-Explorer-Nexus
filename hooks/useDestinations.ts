"use client";

import useSWR from "swr";
import fetcher from "@/libs/fetcher";


const useDestinations = () => {
  const { data, error, isLoading, mutate } = useSWR(`/api/destinations`, fetcher)

  return { data, error, isLoading, mutate }
}

export default useDestinations
