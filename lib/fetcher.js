/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";

const baseURL = "http://localhost:3000/";

const res = (...args) => fetch(...args).then((res) => res.json());

export default function fetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, res);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
