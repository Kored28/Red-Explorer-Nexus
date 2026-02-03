"use client";

import useSWR from "swr";
import fetcher from "@/libs/fetcher";


const useCountry = () => {
  const { data, error, isLoading, mutate } = useSWR(`/api/countries`, fetcher)

  return { data, error, isLoading, mutate }
}

export default useCountry
