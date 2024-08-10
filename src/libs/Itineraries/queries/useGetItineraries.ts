import { REACT_QUERY_CACHE_KEYS } from "@/shared/constants/cacheKeys";
import { useQuery, UseQueryOptions } from "react-query";
import { GetItinerariesResponse } from "../types";

const fetchItineraries = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/zamrood/itinerary?highlight=true`
  );
  const data = await response.json();
  return data as GetItinerariesResponse;
};

const useGetItineraries = (
  options?: Omit<
    UseQueryOptions<
      GetItinerariesResponse,
      unknown,
      GetItinerariesResponse,
      string
    >,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: REACT_QUERY_CACHE_KEYS.getItineraries,
    queryFn: () => fetchItineraries(),
    retry: (failureCount) => {
      return failureCount < 3;
    },
    ...options,
  });
};

export default useGetItineraries;
