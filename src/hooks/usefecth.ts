import useSWR from 'swr';

export const useFetch = (url: string) => {
    const {data, error, isValidating} = useSWR(url, async url => {
        const response = await fetch(url);
        const data = response.json();
        return data;
    })
    return { data, error, isValidating}
}