import type { FC } from "react";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

const queryCache = new QueryCache();

const queryClient = new QueryClient({
  queryCache: queryCache,
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type QueryProviderProps = {
  children: React.ReactNode;
};

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
