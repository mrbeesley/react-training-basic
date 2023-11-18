
import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abort = new AbortController();
        
        const fetchData = async () => {
            try {
                const res = await fetch(url, { signal: abort.signal });
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                const data = await res.json();
                setData(data);
                setIsPending(false);
                setError(null);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setIsPending(false);
                    setError(err.message);
                }
            }
        };

        fetchData();
        return () => abort.abort();
    }, [url]);

    return { data, isPending, error }
};

export default useFetch;
