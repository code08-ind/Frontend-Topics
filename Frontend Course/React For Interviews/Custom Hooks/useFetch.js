// Build a custom hook to fetch data from a given URL and handle loading and error states as well.

import React, { useEffect, useState } from "react";

const useFetch = (url, options = { method: "GET" }) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url, {...options});

                if (!response.ok) {
                    setData(null);
                    setError("Network response was not ok");
                }

                const data = await response.json();
                setData(data);
                setError(null);
            } catch (err) {
                setData(null);
                setError(err);
            }
            finally {
                setIsLoading(false);
            }
        }

        if (url) {
            fetchData();
        }
    }, [url]);

    return { data, isLoading, error };
};

export default useFetch;