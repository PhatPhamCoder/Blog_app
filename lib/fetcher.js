import React from "react";
import useSWR from "swr";

const baseURL = "http://localhost:3000/";

const res = (url) => fetch(url).then((res) => res.json());

export default function fetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, res);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
