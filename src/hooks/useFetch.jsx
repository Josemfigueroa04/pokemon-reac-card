import { useState, useEffect, useCallback } from "react";
export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getData = useCallback(async () => {
        setLoading(true);
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setData(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        getData();
    }, [ getData]);

    return { data, loading, error };

    }