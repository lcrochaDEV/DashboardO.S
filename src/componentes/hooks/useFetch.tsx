import { useQuery } from "@tanstack/react-query";
import { DataItensSend } from "../interfaces/data-internet";

//const URLFETCH = 'http://localhost:8000/gw/ont121w';

const fetchData = async (url: string, dataItens: DataItensSend) => {
    const headersData = {
        method: 'POST',
        headers: new Headers({
            "Authorization": "",
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }),
        body: JSON.stringify(dataItens),            
    };
    const response = await fetch(url, headersData)     
    return response.json()
} 

export const useFetchData = <T = unknown>(url: string, dataItens: DataItensSend) => {
    const query = useQuery<T>({
        queryFn: () => fetchData(url, dataItens),
        queryKey:['receivedKey']
    })
    return {
        ...query,
        data: query.data
    };
}
