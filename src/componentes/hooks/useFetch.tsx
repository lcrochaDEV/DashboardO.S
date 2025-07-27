import { useQueries } from "@tanstack/react-query";
import { RequestOptions, FetchQueryOptions } from "../interfaces/data-internet";


const fetchData = async (url: string, dataheader?: any) => {
    const headersData: RequestOptions = {
        method: 'POST',
        headers: new Headers({
            "Authorization": "",
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify(dataheader),            
    };
    const response = await fetch(url, headersData)    
    return response.json()
};

export const useFetchData = <T = unknown>(queries: FetchQueryOptions<T>[]) => {
  const query = useQueries({
        queries: queries.map(query => ({
        queryKey: query.queryKey,
        enabled: query.enabled,
        queryFn: async () => fetchData(query.url, query.dataheader),
        ...query.options,
    })),
  });
    return query
};
