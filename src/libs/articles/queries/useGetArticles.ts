import { REACT_QUERY_CACHE_KEYS } from "@/shared/constants/cacheKeys";
import { useQuery, UseQueryOptions } from "react-query";
import { GetArticlesReponse } from "../types";

const fetchArticles = async () => {
  const response = await fetch("https://pandooin.com/api/zamrood/article");
  const data = await response.json();
  return data as GetArticlesReponse;
};

const useGetArticles = (
  options?: Omit<
    UseQueryOptions<GetArticlesReponse, unknown, GetArticlesReponse, string>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: REACT_QUERY_CACHE_KEYS.getArticles,
    queryFn: () => fetchArticles(),
    retry: (failureCount) => {
      return failureCount < 3;
    },
    ...options,
  });
};

export default useGetArticles;
