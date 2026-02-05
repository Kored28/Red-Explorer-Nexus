"use client";

import useSWR from "swr";
import fetcher from "@/libs/fetcher";


const useRelatedTravelTips = () => {
  const { data, error, isLoading, mutate } = useSWR(`/api/travel-tips/recent`, fetcher)

  return {main: data?.main, related: data?.related, error, isLoading, mutate }
}

export default useRelatedTravelTips
