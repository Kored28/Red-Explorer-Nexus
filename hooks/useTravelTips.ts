"use client";

import useSWR from "swr";
import fetcher from "@/libs/fetcher";


const useTravelTips = () => {
  const { data, error, isLoading, mutate } = useSWR(`/api/travel-tips`, fetcher)

  return { data, error, isLoading, mutate }
}

export default useTravelTips;
