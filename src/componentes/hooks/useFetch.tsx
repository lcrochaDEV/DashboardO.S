import { useQuery } from "@tanstack/react-query";
import { RequestOptions, FetchQueryOptions, headersDataBudy } from "../interfaces/data-internet";


const fetchData = async <T = unknown>(url: string, headersDataBudy: headersDataBudy): Promise<T> => {
    const headersData: RequestOptions = {
        method: 'POST',
        headers: new Headers({
            "Authorization": "",
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify(headersDataBudy.dataheader),            
    };
    const response = await fetch(url, headersData)
    return response.json()
};

export const useFetchData = <T = unknown>(url: string, headersDataBudy: headersDataBudy, queries: FetchQueryOptions) => {
    const query = useQuery<T, Error>({
        queryKey: queries?.queryKey,
        queryFn: async () => fetchData<T>(url, headersDataBudy),
        enabled: queries?.enabled,
    })
    return{
        ...query,
        data: query.data,
    } 
}
